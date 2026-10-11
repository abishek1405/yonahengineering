import { useState } from 'react';
import { Play } from 'lucide-react';
import { featuredVideo as v } from '../data/site.js';

// Poster + play button; the video (local MP4 or YouTube) only loads after the visitor presses play,
// so the page stays fast. YouTube uses the privacy-enhanced youtube-nocookie domain.
export default function VideoFeature() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-frame reveal">
      {playing ? (
        v.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
            title={v.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <video src={v.src} poster={v.poster} controls autoPlay playsInline preload="metadata">
            <track kind="captions" />
          </video>
        )
      ) : (
        <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${v.title}`}>
          <img src={v.youtubeId ? `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg` : v.poster} alt="" loading="lazy" decoding="async" />
          <span className="video-play">
            <Play size={30} fill="currentColor" />
          </span>
          <span className="video-caption">{v.title}</span>
        </button>
      )}
    </div>
  );
}
