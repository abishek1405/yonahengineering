import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Products from './pages/Products.jsx';
import Industries from './pages/Industries.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Careers from './pages/Careers.jsx';
import SocialFloat from './components/Social.jsx';
import { GA4_ID, GTM_ID } from './config.js';
import { useReveal } from './components/useReveal.js';
import { QuoteProvider } from './components/Quote.jsx';
import ScrollExtras from './components/ScrollExtras.jsx';

export default function App() {
  const { pathname } = useLocation();
  useReveal(pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  // Google Analytics: the first page view is sent by the gtag snippet in the page head;
  // later in-app navigations are reported here.
  const firstView = useRef(true);
  useEffect(() => {
    if (firstView.current) {
      firstView.current = false;
      return;
    }
    if (GA4_ID && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pathname, page_location: window.location.href, page_title: document.title });
    }
    // Tag Manager: a "virtual_page_view" event to use as the trigger for page-view tags on in-app navigation
    if (GTM_ID && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'virtual_page_view', page_path: pathname, page_location: window.location.href, page_title: document.title });
    }
  }, [pathname]);

  return (
    <QuoteProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollExtras />
      <Header />
      {/* keyed by path so each page fades in on navigation */}
      <main id="main" key={pathname} className="page-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/careers" element={<Careers />} />
          {/* Keep old .html links from the previous site working */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/services.html" element={<Navigate to="/services" replace />} />
          <Route path="/projects.html" element={<Navigate to="/projects" replace />} />
          <Route path="/about.html" element={<Navigate to="/about" replace />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <SocialFloat />
    </QuoteProvider>
  );
}
