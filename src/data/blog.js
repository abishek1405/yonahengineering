// Blog articles. Written for facility managers and engineers; reviewed by the Yonah Engineering technical team.
export const blogAuthor = {
  name: 'Yonah Engineering Technical Team',
  role: 'MEP design, installation & testing engineers',
  bio: 'A team of engineers who design, supply, install, test and commission fire protection, HVAC, electrical & ELV, utility and PHE systems for industrial and commercial sites across Tamil Nadu. Our articles draw on that site work and on the published standards, and are written to help owners and facility teams ask the right questions.',
};

export const posts = [
  {
    slug: 'sprinkler-system-maintenance-nfpa-25-checklist',
    title: 'Sprinkler System Maintenance: A Practical NFPA 25 Checklist',
    description: 'A practical NFPA 25 sprinkler maintenance checklist for facility managers in India: weekly, quarterly, annual and five-year tasks, records and impairments.',
    excerpt: 'What to inspect, test and maintain on a fire sprinkler system, and how often, explained in plain terms for the people who run the building.',
    category: 'Fire Protection',
    serviceSlug: 'fire-protection-systems',
    image: 'sprinkler/sprinkler-3',
    date: '2026-08-20',
    readMinutes: 6,
    intro: [
      'A sprinkler system can sit untouched for years and still be expected to work perfectly in the first minutes of a fire. Whether it does depends on what happens in between. Closed valves, painted heads, blocked pipes and pumps that have not run in months are recurring causes of sprinkler systems underperforming.',
      'NFPA 25 is the most widely used reference for the inspection, testing and maintenance (ITM) of water-based fire protection systems, and many Indian facilities follow it alongside the National Building Code (NBC 2016, Part 4) and the conditions of their fire NOC. This checklist summarises the typical intervals; always refer to the current edition of NFPA 25, the manufacturer’s literature and any requirements set by your local fire service or insurer.',
    ],
    sections: [
      {
        heading: 'Set up the programme before the checklist',
        body: [
          'NFPA 25 places responsibility for ITM on the property owner or their designated representative. In practice, someone on site should own the programme: knowing where every control valve is, what the system was designed to protect, and who carries out each test.',
          'Keep the as-built drawings and hydraulic design data (usually on a data plate at the riser or in the handover file), and note the hazard and storage arrangement the system was designed for. Many later problems come from the building use changing while the sprinklers stay the same. Agree in writing which tasks your maintenance staff will do (usually the weekly and monthly visual checks) and which need a qualified fire protection contractor (flow tests, internal inspections and pump performance tests).',
        ],
      },
      {
        heading: 'Typical inspection and testing intervals',
        body: [
          'The intervals below reflect common NFPA 25 practice for wet pipe systems. Dry pipe, pre-action and deluge systems have additional tasks, and the standard is revised every few years, so check which edition your facility has adopted.',
        ],
        subsections: [
          {
            heading: 'Weekly and monthly',
            body: ['Frequent checks are mostly visual and can be done by trained in-house staff using a simple log sheet.'],
            list: [
              'Control valves: confirm each is in its normal (usually open) position, sealed, locked or electrically supervised, and accessible. Sealed valves are typically inspected weekly; locked or supervised valves monthly.',
              'Gauges: read and record system and supply pressures. Investigate any sudden drop.',
              'Fire pumps: run each pump without flow (a churn test) at the interval set for its driver, typically weekly for diesel engines and weekly or monthly for electric motors. Record suction and discharge pressures, plus diesel engine temperature, oil pressure, fuel level and battery condition.',
            ],
          },
          {
            heading: 'Quarterly',
            body: ['Quarterly tasks make sure the system will tell you when it operates or when someone interferes with it.'],
            list: [
              'Inspect water flow alarm devices, supervisory switches and valve tamper switches for physical damage.',
              'Test mechanical water motor gongs by flowing water through the inspector’s test connection or bypass. Vane-type and pressure-switch flow alarms are typically tested semi-annually.',
              'Inspect the fire service inlet connection: caps in place, threads undamaged, no leaking check valve, and clear access for a fire tender.',
            ],
          },
          {
            heading: 'Annual',
            body: ['The annual visit is the most thorough and is normally carried out by a qualified contractor.'],
            list: [
              'Main drain test at each riser: record static pressure, open the main drain fully, record residual pressure and compare with earlier results. A significant fall from the baseline can point to a partly closed valve or an obstruction in the supply.',
              'Fire pump flow test at churn, rated and peak flow, compared with the manufacturer’s certified curve and the original acceptance test.',
              'Sprinkler heads inspected from floor level for leaks, corrosion, paint, physical damage, loading (dust, lint or grease) and correct orientation. Damaged or painted heads are replaced, not cleaned.',
              'Spare sprinkler cabinet checked for the correct types and temperature ratings, plus the right sprinkler wrench.',
            ],
          },
          {
            heading: 'Five years and beyond',
            body: ['Longer-interval tasks are the easiest to forget.'],
            list: [
              'Internal inspection of piping, typically every five years, for corrosion, scale or foreign material. Findings may lead to a full obstruction investigation.',
              'Internal inspection of alarm valves, check valves and strainers.',
              'Gauges replaced or checked against a calibrated gauge, typically every five years.',
              'Sample testing of sprinklers at the ages set in the standard, for example 50 years for standard-response and 20 years for fast-response heads, with more frequent testing for heads in harsh environments.',
            ],
          },
        ],
      },
      {
        heading: 'Problems that checklists often miss',
        body: ['Two issues cause trouble even on sites with a well-kept log book.'],
        subsections: [
          {
            heading: 'Obstructions and changes in use',
            body: [
              'Sprinklers only work if water reaches the fire. In warehouses especially, racking added after handover, higher stacking, new mezzanines, ducts and light fittings can block spray patterns. NFPA 13 sets minimum clearances below sprinkler deflectors, typically 450 mm (18 in.) in most storage situations and more for some special sprinklers, and it is worth walking the floor with that in mind.',
              'What is stored matters as much as how it is stacked. Moving from cartons of metal parts to plastics or aerosols can put the hazard outside the original design. If the use has changed, ask your design engineer to review the system before the next fire NOC renewal.',
            ],
          },
          {
            heading: 'Impairments and record keeping',
            body: [
              'Whenever any part of the system is shut down, treat it as an impairment: tag the valve, inform your contractor and insurer where required, reduce hazards in the affected area, consider a fire watch, and restore and test the system as soon as the work is done.',
              'Keep signed, dated records of every inspection, test and repair, including the deficiencies found and the action taken. NFPA 25 typically requires records to be kept until at least a year after the next test of the same type, and original acceptance records for the life of the system.',
            ],
          },
        ],
      },
    ],
    takeaways: [
      'Give one person on site ownership of the sprinkler ITM programme.',
      'Most problems trace back to simple causes: closed valves, damaged heads, obstructions and pumps that are not exercised.',
      'Treat main drain and fire pump results as trends and compare them year on year.',
      'Review the system whenever storage, layout or occupancy changes.',
      'Keep signed records; they support fire NOC renewals and insurance surveys.',
    ],
    faqs: [
      [
        'Is NFPA 25 mandatory in India?',
        'NFPA 25 is an American standard, so it is not automatically law in India. It is, however, widely referenced by consultants, insurers and project specifications, and NBC 2016 expects fire protection systems to be kept in working order. Your fire NOC conditions and insurer determine what you are actually required to follow.',
      ],
      [
        'Can our own maintenance staff do the checks?',
        'Trained in-house staff can usually handle the weekly and monthly visual inspections and pump churn runs. Flow tests, internal pipe inspections, pump performance tests and repairs are best done by a qualified fire protection contractor with calibrated equipment.',
      ],
      [
        'What should we do about a painted or damaged sprinkler head?',
        'Replace it with a head of the same type, response, orifice size and temperature rating from your spare cabinet, then restock the cabinet. Do not clean off paint or try to repair a sprinkler, as this can affect how it operates.',
      ],
    ],
    references: [
      'NFPA 25 – Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems',
      'NFPA 13 – Standard for the Installation of Sprinkler Systems',
      'NFPA 20 – Standard for the Installation of Stationary Pumps for Fire Protection',
      'National Building Code of India 2016, Part 4 – Fire and Life Safety',
    ],
  },
  {
    slug: 'ht-panel-testing-before-commissioning',
    title: 'HT Panel Testing Before Commissioning: The Key Tests Explained',
    description: 'HT panel testing before commissioning explained: insulation resistance, contact resistance, breaker timing, relay injection, CT/PT and cable tests, interlocks.',
    excerpt: 'The pre-commissioning tests that prove an HT panel is safe to energise, what each one checks, and why none of them should be skipped.',
    category: 'Electrical & ELV',
    serviceSlug: 'electrical-elv-systems',
    image: 'ht-panel/ht-panel-1',
    date: '2026-09-03',
    readMinutes: 5,
    intro: [
      'An HT panel arrives on site with factory routine test reports, so it is tempting to treat site testing as a formality. It is not. Transport, handling, installation, cable termination and relay setting all happen after the panel leaves the factory, and any of them can introduce a fault that only shows itself when the panel is energised at 11 kV, 22 kV or 33 kV.',
      'Pre-commissioning tests confirm that the switchgear, protection and cabling are safe to energise and will clear a fault when they need to. This article explains the tests our engineers typically carry out and why each one matters. Test voltages, acceptance values and sequence should always follow the manufacturer’s instructions, the project specification and the relevant standards.',
    ],
    sections: [
      {
        heading: 'Tests on the switchgear itself',
        body: ['These tests check that the panel and its circuit breakers are mechanically sound and electrically healthy.'],
        subsections: [
          {
            heading: 'Visual and mechanical checks',
            body: [
              'Before any instrument is connected, the panel is checked against the drawings and nameplate data. Engineers look for transit damage, busbar alignment and tightening torques, clearances, clean and dry insulators, working shutters, and a continuous panel earth bus connected to the main earthing system. Breakers are racked in and out, springs are charged and released manually, and position indicators are verified. Many later faults start as a loose joint or missing bolt that could have been found at this stage.',
            ],
          },
          {
            heading: 'Insulation resistance and withstand tests',
            body: [
              'An insulation resistance (IR) test with a suitable tester, commonly 5 kV for 11 kV equipment, is taken phase to phase and phase to earth with the breaker both closed and open. Readings are compared between phases and with the manufacturer’s guidance; consistency between phases is often as informative as the absolute number.',
              'Where the specification calls for it, a power frequency or VLF withstand test follows at a site test voltage, usually a reduced proportion of the factory test value. Applying voltage across the open contacts of a vacuum breaker also helps confirm the interrupters have not lost vacuum. IR is normally repeated after any high-voltage test.',
            ],
          },
          {
            heading: 'Contact resistance',
            body: [
              'A micro-ohmmeter injects a DC current, typically 100 A or more, through each closed breaker pole and busbar joint and measures the resistance in micro-ohms. A high or unbalanced reading points to poor contact pressure, contamination or a loose joint: the kind of defect that runs hot under load and can fail without warning. Results are compared across phases and with factory values.',
            ],
          },
          {
            heading: 'Circuit breaker timing',
            body: [
              'A breaker analyser records closing and opening times, the spread between poles, and the operation of trip and close coils, including at reduced control voltage. A breaker that opens too slowly, or with poles out of step, may not clear a fault within the time the protection scheme assumes. Spring charging time and the anti-pumping function are usually checked at the same time.',
            ],
          },
        ],
      },
      {
        heading: 'Protection, instrument transformers and cables',
        body: ['A healthy breaker is only useful if it is told to trip at the right moment. These tests prove the chain from current or voltage signal to trip command.'],
        subsections: [
          {
            heading: 'Relay secondary injection',
            body: [
              'A secondary injection test set feeds calibrated currents and voltages into each protection relay to confirm that every function in use, such as overcurrent, earth fault, differential or under and over-voltage, picks up and trips at the approved settings. Those settings should come from a protection coordination study, so that the device nearest a fault trips first. The test should end with the relay actually tripping the breaker, not just operating a contact on the bench.',
            ],
          },
          {
            heading: 'CT and PT tests',
            body: [
              'Current transformers are checked for ratio, polarity, insulation resistance and winding resistance. For protection-class cores, a magnetisation (knee-point) test shows whether the CT will saturate during a fault. Voltage transformers are checked for ratio, polarity and insulation. A reversed CT can make a differential relay trip on healthy load or stay silent during a real fault, so polarity matters as much as ratio. Where practical, primary injection proves the whole circuit from CT to relay.',
            ],
          },
          {
            heading: 'HV cable tests',
            body: [
              'Incoming and outgoing cables are tested after termination. IR is measured before and after a withstand test, which for XLPE cables is typically very low frequency (VLF) AC, since high DC test voltages are generally discouraged for XLPE insulation. Sheath integrity, continuity and phasing are also checked, so each core connects the phase the drawings say it does.',
            ],
          },
        ],
      },
      {
        heading: 'Interlocks, documentation and approval',
        body: [
          'Interlocks protect people, so each one should be proved by trying to defeat it. Typical checks: the breaker cannot be racked in or out while closed, the earth switch cannot be closed on a live circuit, doors cannot be opened in an unsafe condition, and any key or electrical interlocks between the HT breaker, transformer and LT incomer behave as designed.',
          'Under the Central Electricity Authority safety regulations, originally notified in 2010 and since updated, HT installations generally need inspection and approval by the Electrical Inspectorate before they are energised. In Tamil Nadu this sits with the office of the Chief Electrical Inspector to Government. A complete, consistent commissioning file makes that inspection much smoother. It usually contains:',
        ],
        list: [
          'Test reports with instrument details and calibration dates',
          'Relay settings as approved and as tested',
          'As-built single-line and wiring diagrams',
          'A list of any open points and how they will be closed',
        ],
      },
    ],
    takeaways: [
      'Factory test reports do not cover transport, installation or site cabling, so test on site before energising.',
      'Contact resistance and breaker timing find defects that IR testing alone will miss.',
      'Relay settings should come from a coordination study and be proved by tripping the actual breaker.',
      'Check CT polarity, not just ratio.',
      'Prove every interlock and keep a complete, signed test file for the inspector.',
    ],
    faqs: [
      [
        'Can we skip site tests if the panel has factory test certificates?',
        'Factory tests prove the panel was built correctly, not that it survived transport and installation or that it was wired and set correctly on site. Pre-commissioning tests confirm the installed system is safe to energise, and inspectors and insurers will normally expect to see them.',
      ],
      [
        'Should HT panels be tested again after commissioning?',
        'Yes. Periodic maintenance testing, typically IR, contact resistance, breaker timing and relay checks, helps catch deterioration before it causes an outage. The interval depends on duty, environment and the manufacturer’s recommendations, and many industrial sites align it with planned shutdowns.',
      ],
      [
        'Who decides the relay settings?',
        'Settings should come from a protection coordination study that uses the utility fault level, transformer and cable data, and the downstream protection. The commissioning engineer then tests the relay against those approved settings rather than choosing them on the spot.',
      ],
    ],
    references: [
      'IEC 62271-200 – High-voltage switchgear and controlgear: AC metal-enclosed switchgear and controlgear for rated voltages above 1 kV and up to and including 52 kV',
      'IEC 62271-100 – High-voltage switchgear and controlgear: Alternating-current circuit-breakers',
      'IEEE 400.2 – Guide for Field Testing of Shielded Power Cable Systems Using Very Low Frequency (VLF)',
      'Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations',
    ],
  },
  {
    slug: 'vrf-vs-chilled-water-hvac-selection',
    title: 'VRF vs Chilled Water HVAC: Choosing the Right System',
    description: 'VRF vs chilled-water HVAC compared for Indian buildings: how each works, part-load efficiency, plant space, maintenance, expansion and the heat-load study.',
    excerpt: 'How VRF and chilled-water systems differ, where each one fits, and why the choice should start with a proper heat-load study.',
    category: 'HVAC Systems',
    serviceSlug: 'hvac-systems',
    image: 'hvac/hvac-1',
    date: '2026-09-17',
    readMinutes: 5,
    intro: [
      'Choosing between a variable refrigerant flow (VRF) system and a chilled-water system is one of the earliest HVAC decisions on a project, and one of the hardest to reverse. It affects roof and plant room space, power demand, running costs, the maintenance skills you need and how easily the building can grow.',
      'Neither option is better everywhere. Each suits a different kind of building and load profile. This guide explains how the two work, where each tends to fit, and why the decision should start with a proper heat-load study rather than a rule of thumb.',
    ],
    sections: [
      {
        heading: 'How each system works',
        body: ['Both systems move heat out of the building; the difference is what carries it through the building.'],
        subsections: [
          {
            heading: 'VRF systems',
            body: [
              'A VRF system is a direct-expansion (DX) system: refrigerant is piped from outdoor condensing units straight to indoor units in each room or zone. Inverter-driven compressors vary the refrigerant flow to match demand, and one outdoor unit can serve many indoor units of different types, such as cassettes, ducted units and wall-mounted units. Heat recovery versions can cool some zones while heating others, although in most of Tamil Nadu cooling dominates all year.',
              'Each outdoor system has manufacturer limits on connected capacity, total pipe length and height difference between units, so large buildings are served by several independent VRF systems.',
            ],
          },
          {
            heading: 'Chilled-water systems',
            body: [
              'A chilled-water system cools water in a central plant, usually air-cooled chillers or water-cooled chillers with cooling towers, and pumps it through insulated piping to air handling units (AHUs) and fan coil units (FCUs). The refrigerant stays inside the chiller; only water travels through the building.',
              'Because the plant is central, it can serve very large or widely spread loads, process cooling and round-the-clock operation. It also suits designs where outdoor air must be filtered, dehumidified and controlled in dedicated AHUs.',
            ],
          },
        ],
      },
      {
        heading: 'Comparing the two on what matters',
        body: ['The right choice depends on how the building is used, not on the equipment alone. These are the factors we typically weigh with clients.'],
        subsections: [
          {
            heading: 'Building size and load profile',
            body: [
              'VRF tends to suit small to medium buildings with many separately controlled zones and varied occupancy: offices, showrooms, administration blocks, clinics and hotels. Chilled water tends to suit large, continuous or critical loads: big commercial buildings, hospitals, data centres and production areas with process cooling. On factory campuses it is common to see both, with chilled water for production and VRF for the office block.',
            ],
          },
          {
            heading: 'Part-load efficiency',
            body: [
              'Most buildings spend most of their operating hours at part load, so full-load ratings tell only part of the story. VRF performs well at part load because inverter compressors throttle down and each zone runs only when needed. A well-designed chilled-water plant can also be very efficient at part load, using multiple chillers, variable-speed pumps and good controls, but that depends heavily on the design and on how the plant is run day to day. Compare part-load and seasonal efficiency data, such as IPLV for chillers, rather than headline figures alone.',
            ],
          },
          {
            heading: 'Space and plant room needs',
            body: [
              'VRF needs no central plant room: outdoor units sit on the roof or at ground level, with refrigerant piping running through shafts and ceilings. Chilled water needs a plant room for chillers and pumps, space for cooling towers if water-cooled, larger pipe shafts and AHU rooms. On the other hand, VRF puts refrigerant into occupied spaces, so the charge in each system must be checked against the concentration limits in the refrigerant safety standards for the smallest room it serves.',
            ],
          },
          {
            heading: 'Maintenance and expandability',
            body: [
              'Routine VRF maintenance is mainly filter and coil cleaning and periodic checks, but fault-finding and refrigerant work need manufacturer-trained technicians and parts. Chilled-water plants need more routine attention, including water treatment, cooling tower cleaning and pump and valve maintenance, and usually an operator, but their components are serviceable over a long life.',
              'VRF grows by adding another independent system. Chilled water expands easily if spare capacity and pipe sizes were planned at the start, and with difficulty if they were not.',
            ],
          },
        ],
      },
      {
        heading: 'Start with a heat-load study',
        body: [
          'Both systems disappoint when they are sized by thumb rule. A heat-load study calculates cooling demand space by space from orientation, glazing, wall and roof construction, occupancy, lighting and equipment loads, outdoor air requirements and local design weather data. Methods in the ASHRAE Handbook – Fundamentals are widely used, with ventilation rates commonly based on ASHRAE 62.1 or NBC 2016 Part 8.',
          'The study should also produce a load profile showing how demand changes across the day and year, because that, more than peak tonnage, decides which system will run efficiently. For larger commercial buildings, check early whether the Energy Conservation Building Code (ECBC) applies as adopted in your state, since it sets minimum equipment efficiencies and control requirements. Questions worth answering before you choose:',
        ],
        list: [
          'What is the peak load, and for how many hours a year will the building run near it?',
          'How many zones need independent control or different operating hours?',
          'Is there space and structural capacity for a plant room and cooling towers?',
          'Are there critical areas that need redundancy?',
          'Is the building likely to be extended?',
        ],
      },
    ],
    takeaways: [
      'Neither system is better everywhere; the building’s load profile decides.',
      'VRF suits multi-zone small and medium buildings; chilled water suits large, continuous or critical loads.',
      'Compare part-load efficiency, not just full-load ratings.',
      'Plan for space, maintenance skills and future expansion at the design stage.',
      'Base the decision on a proper heat-load study.',
    ],
    faqs: [
      [
        'Is VRF cheaper than chilled water?',
        'It depends on the size and use of the building. For smaller multi-zone buildings VRF often costs less to install because there is no central plant, while for large buildings a chilled-water plant can be more economical over its life. Compare installed and running costs for your specific load.',
      ],
      [
        'Can VRF be used in a hospital or data centre?',
        'VRF can serve offices, consulting rooms and support areas in these buildings. Operating theatres, critical care areas and data halls usually need tighter control of air quality, humidity and redundancy, which is more commonly delivered by chilled-water or dedicated precision systems designed to the relevant guidelines.',
      ],
      [
        'What information is needed for a heat-load study?',
        'Architectural drawings, wall, roof and glazing details, occupancy and operating hours, lighting and equipment loads, and any process or special-area requirements. The more accurate the inputs, the more reliable the sizing will be.',
      ],
    ],
    references: [
      'ASHRAE Handbook – Fundamentals',
      'ANSI/ASHRAE Standard 62.1 – Ventilation and Acceptable Indoor Air Quality',
      'Energy Conservation Building Code (ECBC) 2017 – Bureau of Energy Efficiency',
      'National Building Code of India 2016, Part 8 – Building Services',
    ],
  },
  {
    slug: 'earthing-system-design-is-3043-basics',
    title: 'Earthing System Design Basics: Why IS 3043 Matters for Industry',
    description: 'Earthing design basics for industrial sites in India: IS 3043, system vs equipment earthing, soil resistivity, earth pit testing and lightning protection.',
    excerpt: 'What earthing actually does, how IS 3043 approaches design, and the earthing mistakes that turn up most often on industrial sites.',
    category: 'Electrical & ELV',
    serviceSlug: 'electrical-elv-systems',
    image: 'electrical/electrical-5',
    date: '2026-09-30',
    readMinutes: 5,
    intro: [
      'Earthing is one of the least visible parts of an electrical installation and one of the most important. When it is designed and maintained well, nobody notices it. When it is not, the results range from nuisance tripping and damaged electronics to dangerous voltages on equipment that people touch every day.',
      'In India, IS 3043 – Code of Practice for Earthing is the main reference for earthing design, and the CEA safety regulations require installations to be earthed. This article explains the basics for plant engineers and facility managers: what earthing does, how IS 3043 approaches design, and the mistakes we see most often on industrial sites.',
    ],
    sections: [
      {
        heading: 'What earthing actually does',
        body: [
          'Earthing has three jobs: limiting the voltage that exposed metalwork can reach during a fault, providing a low-impedance path so protective devices operate quickly, and holding the system voltage stable relative to earth. It is usually discussed in two parts.',
        ],
        subsections: [
          {
            heading: 'System earthing',
            body: [
              'System earthing connects a point of the power system, normally the neutral of a transformer or generator, to earth. It fixes the system voltage relative to earth, helps control overvoltages and determines how much current flows during an earth fault. The earthing arrangement (such as TN-S, TN-C-S or TT) and whether a neutral is solidly earthed or earthed through a resistor are design decisions with direct consequences for protection settings.',
            ],
          },
          {
            heading: 'Equipment earthing',
            body: [
              'Equipment (protective) earthing connects the exposed metal parts of equipment, such as panel enclosures, motor frames, cable trays and structural steel, to the earthing system. If insulation fails and a live conductor touches an enclosure, fault current returns through the protective conductor and the breaker or fuse disconnects the supply. Equipotential bonding of metal services such as water pipes, gas lines and building steel keeps everything within reach at a similar potential.',
            ],
          },
        ],
      },
      {
        heading: 'Designing to IS 3043',
        body: [
          'IS 3043 covers earthing for power systems, substations, buildings and special installations. A sound design for an industrial site starts with measurements, not assumptions.',
        ],
        subsections: [
          {
            heading: 'Soil resistivity testing',
            body: [
              'Soil resistivity varies widely with soil type, moisture, temperature and depth, and the same site can give very different values a few metres apart. Measurements are usually taken with the Wenner four-electrode method at several spacings and in more than one direction, ideally in the drier months. The results show how deep and how widespread the electrode system needs to be.',
            ],
          },
          {
            heading: 'Electrodes, conductors and pits',
            body: [
              'Electrodes may be pipes, rods, plates or buried strips, used alone or as an interconnected grid. Conductor sizes are chosen for the prospective fault current and its duration, with an allowance for corrosion. Each earth pit should have an accessible inspection chamber and a test link so the electrode can be disconnected for measurement. Copper and galvanised steel both have their place, but mixing them carelessly invites galvanic corrosion. Where chemical earthing compounds are used, they should supplement a sound design, not replace one.',
            ],
          },
          {
            heading: 'Target resistance values',
            body: [
              'There is no single earth resistance figure that is right for every installation. The required value depends on the system voltage, the earthing arrangement, the prospective fault current and protection clearing times and, for HT substations, on keeping touch and step voltages within safe limits. A small LT installation, a factory substation and a lightning protection system will each have different targets. Your design engineer should set them by calculation and record them, so periodic tests have something to be compared against.',
            ],
          },
        ],
      },
      {
        heading: 'Testing, lightning protection and common mistakes',
        body: ['An earthing system is only as good as its last test and its weakest joint. Common mistakes we find on industrial sites include:'],
        subsections: [
          {
            heading: 'Periodic earth resistance testing',
            body: [
              'Earth resistance changes over time as electrodes corrode, joints loosen and soil dries out. Periodic testing, typically at least once a year and preferably in the dry season when readings are highest, shows whether the system is still performing. The fall-of-potential (three-point) method, with the electrode disconnected at its test link, remains the reference approach; clamp-on testers are convenient but only meaningful where parallel return paths exist. Record readings pit by pit and investigate any steady rise.',
            ],
          },
          {
            heading: 'Linking with lightning protection',
            body: [
              'Lightning protection designed to IS/IEC 62305 needs its own earth termination system, but the standard expects it to be bonded with the electrical earthing so the site forms a single equipotential system. Separate, unbonded earths can develop large potential differences during a strike, which can flash over to equipment or damage electronics. A risk assessment under IS/IEC 62305-2 decides what level of protection a structure needs.',
            ],
          },
        ],
        list: [
          'Isolated “clean” earths for electronics or instrumentation that are not bonded to the main earth.',
          'Earth pits buried under concrete or paving, with no access for inspection or testing.',
          'Undersized or poorly terminated earth conductors and corroded joints inside pits.',
          'Neutral and protective conductors combined or swapped where the design keeps them separate.',
          'Adding electrodes to chase a resistance number without checking the actual fault path.',
          'No baseline records, so nobody can tell whether the system has deteriorated.',
        ],
      },
    ],
    takeaways: [
      'Earthing protects people and equipment by limiting touch voltages and making protective devices operate quickly.',
      'Design starts with soil resistivity measurements, not assumptions.',
      'There is no universal ohm target; the required value comes from the design.',
      'Test periodically, preferably in the dry season, and keep records for each pit.',
      'Bond the lightning protection earth to the main earthing system.',
    ],
    faqs: [
      [
        'What earth resistance value should our site achieve?',
        'There is no single value that suits every installation. The target depends on the system voltage, earthing arrangement, fault current, protection settings and, for substations, safe touch and step voltages. Your design engineer should calculate it using the methods in IS 3043.',
      ],
      [
        'How often should earth pits be tested?',
        'Many sites test at least once a year, preferably in the dry season, and also after major alterations or a lightning strike. Your electrical inspector, insurer or internal maintenance policy may set a specific frequency.',
      ],
      [
        'Is chemical earthing better than conventional pipe or plate earthing?',
        'Chemical compounds can help lower and stabilise resistance in high-resistivity soil, but they do not replace good design. Electrode layout, conductor sizing, connections and access for testing matter just as much, whichever method is used.',
      ],
    ],
    references: [
      'IS 3043 – Code of Practice for Earthing',
      'IS/IEC 62305 – Protection Against Lightning (Parts 1 to 4)',
      'IEEE 80 – Guide for Safety in AC Substation Grounding',
      'Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations',
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
