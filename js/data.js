/**
 * DHANANJAYA PORTFOLIO DATA CONFIGURATION
 * 
 * You can easily customize or update your projects, videos, services,
 * and contact links directly in this file without editing the HTML structure.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Dhananjaya",
    email: "workshopalwis@gmail.com",
    whatsApp: [
      { number: "+960 972 5219", link: "https://wa.me/9609725219", region: "Maldives" },
      { number: "+94 70 503 2889", link: "https://wa.me/94705032889", region: "Sri Lanka" }
    ],
    title: "Motion Graphics Designer & Video Editor",
    secondaryTitle: "3D • VFX • Motion Design • Creative Content",
    statusBadge: "Available for select creative projects & collaborations",
    heroHeadline: "I TURN IDEAS\nINTO MOTION.",
    heroSubstatement: "Motion Graphics Designer • Video Editor • 3D Creative",
    heroSupportingText: "I create engaging visual experiences through motion design, video editing, 3D, visual effects and creative storytelling.",
    positioning: [
      "I don't just edit videos. I bring ideas to life.",
      "I turn ideas into motion.",
      "I create visual experiences designed to capture attention and make people remember."
    ],
    showreel: {
      heading: "MY WORK SPEAKS VISUALLY.",
      title: "MOTION DESIGN & VIDEO EDITING SHOWREEL",
      description: "A collection of my work across motion graphics, video editing, 3D animation, visual effects and creative content.",
      duration: "01:48",
      resolution: "4K UHD • 60 FPS",
      // Replace with your actual showreel video URL or YouTube / Vimeo embed URL when ready
      videoUrl: "", // e.g. "https://www.youtube.com/embed/YOUR_VIDEO_ID" or direct MP4
      fallbackCover: "assets/images/showreel-cover.svg"
    },
    about: {
      bio: [
        "I'm a creative video editor and motion graphics designer passionate about turning ideas into engaging visual experiences.",
        "My work combines video editing, motion graphics, 3D animation, visual effects and creative storytelling.",
        "I enjoy taking a simple idea and developing it into something visually powerful, memorable and meaningful.",
        "Whether it's a short-form social media video, promotional content, an advertisement, a motion graphics piece or a 3D visual, I focus on creating work that captures attention and communicates clearly.",
        "For me, editing is not simply cutting footage together.",
        "It's about understanding the story, controlling the rhythm, designing the visuals and creating an experience for the viewer."
      ],
      creativeDNA: [
        { word: "VIDEO", desc: "Pacing, cinematic rhythm, storytelling" },
        { word: "MOTION", desc: "Kinetic energy, dynamic graphic animation" },
        { word: "3D", desc: "Spatial depth, modeling, photoreal lighting" },
        { word: "VFX", desc: "Compositing, particle physics, visual treatments" },
        { word: "STORY", desc: "Emotional hooks, narrative arcs, meaning" },
        { word: "CREATIVITY", desc: "Unconventional visual solutions" }
      ]
    },
    marketingExperience: {
      text: "I also work with marketing-focused video and advertising content, creating visuals designed not only to look good but to communicate a message and capture attention.",
      note: "Specialized in high-conversion promotional storytelling, dynamic product visualizations, and platform-optimized aspect ratios."
    },
    philosophy: {
      lead: "GOOD CONTENT\nGETS ATTENTION.\n\nGREAT CONTENT\nGETS REMEMBERED.",
      subtext: [
        "Design is not decoration.",
        "Video is not just editing.",
        "Motion is not just movement.",
        "Everything should have a purpose."
      ]
    },
    achievements: {
      heading: "RESULTS THAT SPEAK",
      quote: "100% organic success proves the ability to hold viewer attention and provide genuine value.",
      // Clearly marked placeholders for Dhananjaya's verified achievements
      verifiedBadges: [
        { label: "Retention Focused", detail: "Engineered for high watch-time & viewer hook rate" },
        { label: "Original Visual Systems", detail: "Zero generic cookie-cutter templates" },
        { label: "End-to-End Workflow", detail: "From storyboard concept to 4K color grade & final render" }
      ]
    }
  },

  capabilities: [
    {
      id: "01",
      title: "VIDEO EDITING",
      description: "Cinematic editing, short-form content, promotional videos and storytelling.",
      tags: ["Pacing & Rhythm", "Sound Design", "Color Grading", "Multi-cam"],
      icon: "film"
    },
    {
      id: "02",
      title: "MOTION GRAPHICS",
      description: "Dynamic animations, visual communication, animated graphics and transitions.",
      tags: ["2D Animation", "Title Sequences", "Vector Motion", "Branded Assets"],
      icon: "activity"
    },
    {
      id: "03",
      title: "KINETIC TYPOGRAPHY",
      description: "Typography-driven storytelling and attention-grabbing text animation.",
      tags: ["Dynamic Text", "Expressive Type", "Rhythmic Sync", "Subtitles"],
      icon: "type"
    },
    {
      id: "04",
      title: "3D ANIMATION",
      description: "3D objects, environments, characters and product visuals.",
      tags: ["Product Renders", "Camera Projection", "Cloth & Physics", "Lighting"],
      icon: "box"
    },
    {
      id: "05",
      title: "VISUAL EFFECTS",
      description: "Compositing, effects, transitions, particles and creative visual treatments.",
      tags: ["Green Screen / Keying", "Screen Replacements", "Clean Plate", "Particles"],
      icon: "sparkles"
    },
    {
      id: "06",
      title: "SOCIAL MEDIA CONTENT",
      description: "Reels, short-form videos and content designed to capture attention.",
      tags: ["TikTok / Reels / Shorts", "Hook Strategy", "High Engagement", "Fast Delivery"],
      icon: "smartphone"
    },
    {
      id: "07",
      title: "ADVERTISING & PROMOTIONAL CONTENT",
      description: "Creative advertisements, product videos and promotional campaigns.",
      tags: ["Commercial Spots", "Brand Campaigns", "CTA Optimization", "A/B Creatives"],
      icon: "target"
    },
    {
      id: "08",
      title: "CREATIVE STORYTELLING",
      description: "Turning ideas and information into visual stories people can understand and remember.",
      tags: ["Concept Pitching", "Script Adaptation", "Narrative Arc", "Emotional Impact"],
      icon: "eye"
    }
  ],

  projects: [
    {
      id: "hyperion-motion",
      title: "HYPERION // KINETIC BRAND FILM",
      category: "MOTION GRAPHICS",
      categoryKey: "motion-graphics",
      shortDescription: "High-octane geometric brand identity film with reactive particle systems and custom kinetic typography.",
      tools: ["After Effects", "Illustrator", "DaVinci Resolve"],
      featured: true,
      thumbnail: "assets/images/project-1.svg",
      aspectRatio: "16:9",
      year: "2025",
      caseStudy: {
        client: "[Confidential Creative Brand — Editable Placeholder]",
        role: "Motion Design Director, Animator & Sound Designer",
        objective: "Create a 60-second high-energy visual manifesto introducing a next-generation tech ecosystem that commands instant viewer retention in the first 3 seconds.",
        creativeApproach: "Leveraged an aggressive dark-mode aesthetic with luminescent neon violet and cyan accents. Deconstructed typographic glyphs into spatial 3D planes that reassemble on downbeats.",
        process: "1. Moodboard & styleframes definition.\n2. Kinetic rhythm sync with customized 140 BPM audio bed.\n3. Procedural shape layer rigging in After Effects.\n4. Final DaVinci Resolve Fusion color pass with custom glow and chromatic aberration.",
        tools: ["Adobe After Effects", "Adobe Illustrator", "DaVinci Resolve"],
        finalResult: "Delivered a striking, cohesive visual campaign that stood out across social feeds and stage presentations.",
        beforeAfter: {
          labelBefore: "RAW FLAT VECTOR CHOP",
          labelAfter: "FINAL GRADED & COMPOSITED FRAME",
          imageBefore: "assets/images/project-1-before.svg",
          imageAfter: "assets/images/project-1.svg"
        }
      }
    },
    {
      id: "chrono-3d-commercial",
      title: "CHRONO // 3D PRODUCT COMMERCIAL",
      category: "3D",
      categoryKey: "3d",
      shortDescription: "Photorealistic 3D product visualization featuring cinematic lighting, mechanical deconstructions, and fluid macro camera sweeps.",
      tools: ["Blender", "After Effects", "DaVinci Resolve"],
      featured: true,
      thumbnail: "assets/images/project-2.svg",
      aspectRatio: "16:9",
      year: "2025",
      caseStudy: {
        client: "[Luxury Timepiece / Tech Concept — Editable Placeholder]",
        role: "3D Artist, Lighting, Compositing & Video Editor",
        objective: "Demonstrate precision engineering, titanium chassis textures, and water resistance through immersive close-up macro shots.",
        creativeApproach: "Built an atmospheric dark studio lighting setup with sharp rim lights and anamorphic lens flares to accentuate the metallic bevels.",
        process: "1. 3D geometry optimization in Blender.\n2. Procedural scratch and brushed metal material shading.\n3. Physics-based condensation and droplet simulation.\n4. Multi-pass EXR rendering and compositing in After Effects.",
        tools: ["Blender Cycles", "Adobe After Effects", "DaVinci Resolve Studio"],
        finalResult: "A broadcast-grade product showcase delivering cinematic prestige and tactile realism.",
        beforeAfter: {
          labelBefore: "UNSHADED CLAY GEOMETRY",
          labelAfter: "CYCLES VOLUMETRIC RENDER",
          imageBefore: "assets/images/project-2-before.svg",
          imageAfter: "assets/images/project-2.svg"
        }
      }
    },
    {
      id: "the-drift-documentary",
      title: "THE DRIFT // CINEMATIC PROMOTIONAL EDIT",
      category: "VIDEO EDITING",
      categoryKey: "video-editing",
      shortDescription: "Rhythmic documentary-style promotional video combining rapid J-cuts, sound design swells, and moody film emulation.",
      tools: ["DaVinci Resolve", "Premiere Pro", "Photoshop"],
      featured: true,
      thumbnail: "assets/images/project-3.svg",
      aspectRatio: "16:9",
      year: "2024",
      caseStudy: {
        client: "[Automotive / Lifestyle Brand — Editable Placeholder]",
        role: "Lead Editor, Sound Designer & Colorist",
        objective: "Transform hours of raw handheld cinema camera footage into a gripping 90-second adrenaline-fueled promotional narrative.",
        creativeApproach: "Structured around micro-crescendos: contrasting tranquil mechanical Foley with explosive engine growls and rhythmic speed ramping.",
        process: "1. Stringout and narrative beat mapping.\n2. Precise L-cut and J-cut audio-visual synchronization.\n3. Custom film grain overlay, halation, and contrast curve grading in DaVinci Resolve.\n4. Audio mastering with 32 distinct Foley layers.",
        tools: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "Fairlight Audio"],
        finalResult: "A gripping piece that holds viewer attention from the opening frame to the final brand lockup.",
        beforeAfter: {
          labelBefore: "RAW REC.709 LOG FOOTAGE",
          labelAfter: "FILM PRINT EMULATION & COLOR GRADE",
          imageBefore: "assets/images/project-3-before.svg",
          imageAfter: "assets/images/project-3.svg"
        }
      }
    },
    {
      id: "syntax-kinetic-type",
      title: "SYNTAX // KINETIC TYPOGRAPHY PIECE",
      category: "CREATIVE CONTENT",
      categoryKey: "creative-content",
      shortDescription: "Expressive typographic motion piece translating rapid spoken word philosophy into synchronized visual architecture.",
      tools: ["After Effects", "Photoshop", "Illustrator"],
      featured: true,
      thumbnail: "assets/images/project-4.svg",
      aspectRatio: "16:9",
      year: "2025",
      caseStudy: {
        client: "[Digital Creator / Podcast Identity — Editable Placeholder]",
        role: "Kinetic Typographer & Motion Designer",
        objective: "Create a viral visual quote reel with 100% viewer retention rate and instant readability on mobile feeds.",
        creativeApproach: "Used variable font weights, scale oscillation, kinetic tracking, and dimensional spatial transitions matched to phonetics.",
        process: "1. Syllable-by-syllable audio transcription & timing markers.\n2. Custom typeface manipulation with expressive kerning shifts.\n3. 3D camera sweeps through word clusters.\n4. Analog CRT monitor distortion pass.",
        tools: ["Adobe After Effects", "Adobe Illustrator"],
        finalResult: "An ultra-engaging typography reel that maximized watch time and replay loops.",
        beforeAfter: {
          labelBefore: "STATIC TEXT LAYOUT",
          labelAfter: "ANIMATED KINETIC COMPOSITION",
          imageBefore: "assets/images/project-4-before.svg",
          imageAfter: "assets/images/project-4.svg"
        }
      }
    },
    {
      id: "apex-social-reels",
      title: "APEX // HIGH-RETENTION SOCIAL CAMPAIGN",
      category: "SOCIAL MEDIA",
      categoryKey: "social-media",
      shortDescription: "Fast-paced vertical short-form campaign engineered with aggressive pattern interrupts and dynamic visual assets.",
      tools: ["Premiere Pro", "After Effects", "Photoshop"],
      featured: false,
      thumbnail: "assets/images/project-5.svg",
      aspectRatio: "9:16",
      year: "2025",
      caseStudy: {
        client: "[Social Brand / E-commerce Creator — Editable Placeholder]",
        role: "Short-Form Video Specialist & Motion Editor",
        objective: "Combat feed fatigue with high-velocity 9:16 vertical edits that seize viewer attention within the first 1.5 seconds.",
        creativeApproach: "Integrated sound effects on every visual change, punch-ins, custom animated stickers, and seamless loop design.",
        process: "1. Hook analysis and script trimming.\n2. Micro-motion overlays and graphic callouts.\n3. Subtitle styling with high-contrast accent highlights.\n4. Platform optimization for TikTok, Instagram Reels, and YouTube Shorts.",
        tools: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop"],
        finalResult: "Consistently sustained above 85% average percentage viewed with organic audience sharing.",
        beforeAfter: {
          labelBefore: "RAW VERTICAL TALKING HEAD",
          labelAfter: "DYNAMIC EDITED REEL WITH MOTION HOOKS",
          imageBefore: "assets/images/project-5-before.svg",
          imageAfter: "assets/images/project-5.svg"
        }
      }
    },
    {
      id: "anomaly-vfx-world",
      title: "ANOMALY // VFX ENVIRONMENT & COMPOSITING",
      category: "VFX",
      categoryKey: "vfx",
      shortDescription: "Complex VFX sequence featuring matte painting integration, 3D camera tracking, dynamic atmospheric haze, and particle physics.",
      tools: ["After Effects", "Blender", "DaVinci Fusion"],
      featured: false,
      thumbnail: "assets/images/project-6.svg",
      aspectRatio: "16:9",
      year: "2024",
      caseStudy: {
        client: "[Sci-Fi Short Film / Concept Project — Editable Placeholder]",
        role: "VFX Compositor & 3D Artist",
        objective: "Integrate futuristic sci-fi architecture and glowing energy monoliths into practical drone landscape footage seamlessly.",
        creativeApproach: "Matched camera focal lengths, atmospheric perspective density, and realistic sun shadow vectors to ensure complete suspension of disbelief.",
        process: "1. 3D point cloud camera match-moving.\n2. Digital set extension modeled and rendered in Blender.\n3. Fusion multi-layer compositing, edge blur, and grain matching.\n4. Light wrap and interactive surface reflections.",
        tools: ["DaVinci Resolve Fusion", "Blender", "Adobe After Effects"],
        finalResult: "A photorealistic sequence that blended CGI seamlessly into real-world camera motion.",
        beforeAfter: {
          labelBefore: "RAW DRONE PLATE WITHOUT ASSETS",
          labelAfter: "COMPLETED COMPOSITE WITH 3D EXTENSION",
          imageBefore: "assets/images/project-6-before.svg",
          imageAfter: "assets/images/project-6.svg"
        }
      }
    },
    {
      id: "velocity-commercial-spot",
      title: "VELOCITY // COMMERCIAL BRAND CAMPAIGN",
      category: "ADVERTISING",
      categoryKey: "advertising",
      shortDescription: "High-impact promotional campaign video combining product typography, dynamic macro speed-ramping, and brand anthems.",
      tools: ["DaVinci Resolve", "After Effects", "Premiere Pro"],
      featured: false,
      thumbnail: "assets/images/project-7.svg",
      aspectRatio: "16:9",
      year: "2025",
      caseStudy: {
        client: "[Sportswear / Tech Hardware Brand — Editable Placeholder]",
        role: "Creative Editor & Motion Graphics Lead",
        objective: "Deliver a compelling commercial launch spot designed for paid social acquisition and web hero placement.",
        creativeApproach: "High-contrast rhythm with deliberate pauses before explosive visual payoffs, synchronized to a modular orchestral-trap score.",
        process: "1. Storyboarding visual hooks around key selling propositions.\n2. Visual FX transitions bridging product features seamlessly.\n3. Multi-aspect ratio deliverables (16:9, 1:1, 9:16).\n4. Broadcast loudness compliance and color calibration.",
        tools: ["DaVinci Resolve", "Adobe After Effects", "Adobe Premiere Pro"],
        finalResult: "Delivered a high-conversion commercial asset ready for cross-platform distribution.",
        beforeAfter: {
          labelBefore: "ASSEMBLY CUT",
          labelAfter: "POLISHED AD CAMPAIGN WITH BRAND GRAPHICS",
          imageBefore: "assets/images/project-7-before.svg",
          imageAfter: "assets/images/project-7.svg"
        }
      }
    }
  ],

  creativeProcess: [
    {
      step: "01",
      title: "DISCOVER",
      subtitle: "Understand the idea, audience and objective.",
      description: "Every great project starts with deep clarity. I dissect the core message, analyze the target audience, study the platform dynamics, and clarify the exact emotional response we need to trigger.",
      deliverables: ["Project brief breakdown", "Creative moodboard", "Visual benchmarks"]
    },
    {
      step: "02",
      title: "PLAN",
      subtitle: "Develop the creative direction, visual style and story.",
      description: "Translating concepts into an actionable blueprint. I design styleframes, plan editorial pacing, map the narrative arc, and establish typography and color palettes before opening the editing timeline.",
      deliverables: ["Styleframes", "Storyboards / Beat sheet", "Audio selection & pacing map"]
    },
    {
      step: "03",
      title: "CREATE",
      subtitle: "Build the edit, motion graphics, animation, 3D and visual effects.",
      description: "Where vision becomes tangible reality. I sculpt the primary cut, animate custom 2D/3D assets, rig typography, build custom transitions, and compositing visual elements frame by frame.",
      deliverables: ["Assembly edit", "3D simulations & renders", "Motion graphics passes"]
    },
    {
      step: "04",
      title: "REFINE",
      subtitle: "Polish timing, transitions, sound, color and details.",
      description: "The difference between good and unforgettable lies in the details. I polish micro-timing, design immersive layered soundscapes, execute cinema-grade color grading, and balance visual rhythm.",
      deliverables: ["Precision audio mix", "Color grading & LUT matching", "Fine-tuned pacing"]
    },
    {
      step: "05",
      title: "DELIVER",
      subtitle: "Deliver a professional final product ready for its intended platform.",
      description: "Exporting pristine master files optimized for maximum fidelity across broadcast, YouTube, web heroes, and social channels with zero compression artifacting.",
      deliverables: ["High-bitrate ProRes / MP4 masters", "Multi-aspect ratio exports", "Archived project packages"]
    }
  ],

  tools: [
    {
      name: "DaVinci Resolve",
      highlight: "EDIT • COLOR • FUSION • FAIRLIGHT",
      category: "Core Post-Production Suite",
      description: "The industry standard for cinema color science, node-based compositing, and pristine sound design.",
      icon: "davinci"
    },
    {
      name: "Adobe After Effects",
      highlight: "MOTION • VFX • ANIMATION",
      category: "Kinetic Motion & Visual FX",
      description: "Dynamic shape layers, kinetic typography systems, complex green-screen keying, and camera tracking.",
      icon: "aftereffects"
    },
    {
      name: "Blender",
      highlight: "3D • MODELING • ANIMATION",
      category: "3D Digital Creation",
      description: "Procedural geometry, photoreal Cycles lighting, physics simulations, and cinematic camera choreography.",
      icon: "blender"
    },
    {
      name: "Adobe Premiere Pro",
      highlight: "NARRATIVE EDITING • PACING",
      category: "Fast Video Assembly",
      description: "Multi-camera editing, rapid timeline sculpting, speech-to-text workflows, and sequence assembly.",
      icon: "premiere"
    },
    {
      name: "Adobe Photoshop",
      highlight: "TEXTURES • MATTE PAINTING",
      category: "Raster Asset Design",
      description: "Clean plates, frame-by-frame asset prep, texture generation, and high-impact thumbnail design.",
      icon: "photoshop"
    },
    {
      name: "Adobe Illustrator",
      highlight: "VECTOR ASSETS • BRAND MARKS",
      category: "Vector Graphics",
      description: "Infinite resolution vector creation, typography customization, and geometric layout preparation for After Effects.",
      icon: "illustrator"
    }
  ],

  whyWorkWithMe: [
    {
      number: "01",
      title: "CREATIVE THINKING",
      description: "I don't simply follow templates. I develop visuals around the idea, finding fresh angles that make your brand stand apart from the noise."
    },
    {
      number: "02",
      title: "ATTENTION TO DETAIL",
      description: "Timing, typography, transitions, sound and visual consistency matter. Every single frame is inspected for rhythm and optical balance."
    },
    {
      number: "03",
      title: "STORY-DRIVEN EDITING",
      description: "Every cut should have a purpose. Technique exists to amplify meaning, guide the eye, and evoke genuine emotional resonance."
    },
    {
      number: "04",
      title: "VISUAL IMPACT",
      description: "The goal is not only to make content look good, but to make it memorable. Visuals engineered to stop scrolling and stick in mind."
    }
  ],

  services: [
    {
      id: "video-editing",
      title: "VIDEO EDITING",
      whatIProvide: "Full-pipeline narrative editing, documentary cuts, dynamic sound synchronization, and cinematic pacing.",
      idealUseCase: "Commercial brand films, YouTube long-form content, corporate identity, and narrative projects.",
      deliverable: "Pristine 4K / 1080p master cuts with comprehensive sound design and color grading."
    },
    {
      id: "motion-graphics",
      title: "MOTION GRAPHICS",
      whatIProvide: "Custom animated graphic systems, logo stings, infographic animations, and UI motion breakdowns.",
      idealUseCase: "Tech product launches, explanatory videos, broadcast packages, and digital campaigns.",
      deliverable: "Custom After Effects animation packages, transparent overlays, and motion assets."
    },
    {
      id: "3d-animation",
      title: "3D ANIMATION",
      whatIProvide: "Photorealistic 3D product visualizations, physics-based simulations, procedural models, and spatial lighting.",
      idealUseCase: "Hardware launches, luxury e-commerce showcases, and abstract brand identity loops.",
      deliverable: "Seamless 3D visual loops, exploded-view animations, and volumetric renders."
    },
    {
      id: "visual-effects",
      title: "VISUAL EFFECTS",
      whatIProvide: "Matte painting compositing, green screen removal, clean-plating, particle generation, and sky replacements.",
      idealUseCase: "Commercial spot enhancement, narrative film post-production, and music videos.",
      deliverable: "Seamless composited shot plates integrated natively into camera footage."
    },
    {
      id: "social-media-content",
      title: "SOCIAL MEDIA CONTENT",
      whatIProvide: "Fast-tempo 9:16 vertical edits, viral hooks, sound effect layering, and retention-optimized subtitles.",
      idealUseCase: "Instagram Reels, TikTok brand presence, and YouTube Shorts monetization.",
      deliverable: "Batch vertical edits with maximum hook retention within the first 3 seconds."
    },
    {
      id: "promotional-videos",
      title: "PROMOTIONAL VIDEOS",
      whatIProvide: "High-energy brand overviews, event teasers, course launch videos, and crowd-funding showcases.",
      idealUseCase: "Kickstarter campaigns, conference openings, and special edition product releases.",
      deliverable: "Dynamic multi-format promo video packages ready for cross-channel blitzes."
    },
    {
      id: "advertisement-videos",
      title: "ADVERTISEMENT VIDEOS",
      whatIProvide: "Conversion-engineered paid ad creatives designed specifically for Meta, TikTok, and YouTube Ads.",
      idealUseCase: "Direct-to-consumer e-commerce brands, mobile app installs, and B2B SaaS campaigns.",
      deliverable: "Multiple hook variations, aspect ratio crops (16:9, 1:1, 9:16), and clear CTA ending cards."
    },
    {
      id: "kinetic-typography",
      title: "KINETIC TYPOGRAPHY",
      whatIProvide: "Expressive text choreography, audio-synced dynamic lettering, typographic poster animations, and lyric videos.",
      idealUseCase: "Speech visualizations, podcast highlight clips, manifesto videos, and music releases.",
      deliverable: "Standout kinetic typography video clips with custom font styling."
    },
    {
      id: "creative-content",
      title: "CREATIVE CONTENT",
      whatIProvide: "Experimental multimedia concepts combining 2D, 3D, live footage, and glitch aesthetics.",
      idealUseCase: "Artist portfolios, experimental fashion films, and distinctive personal branding.",
      deliverable: "Bespoke artistic visual pieces crafted from raw concepts."
    }
  ],

  styleTags: [
    { label: "CINEMATIC", desc: "Atmospheric lighting, anamorphic scope, wide aspect ratios" },
    { label: "MODERN", desc: "Contemporary aesthetic, ultra-clean geometry, sophisticated minimalism" },
    { label: "DYNAMIC", desc: "High kinetic energy, rapid tempo, purposeful momentum" },
    { label: "CLEAN", desc: "Uncluttered layouts, razor-sharp typography, intentional spacing" },
    { label: "CREATIVE", desc: "Unconventional visual metaphors and innovative transitions" },
    { label: "STORY-DRIVEN", desc: "Every visual asset serves the emotional and narrative core" },
    { label: "ATTENTION-GRABBING", desc: "Engineered pattern interrupts that hold retention on modern screens" },
    { label: "PREMIUM", desc: "Luxury studio finish, immaculate color science, uncompromising polish" }
  ],

  /**
   * SOCIAL PROFILES
   * Note: As per instruction, only platforms with real URLs are shown.
   * If you have active links for these platforms, paste them below.
   * Empty string "" platforms will automatically remain hidden from the UI.
   */
  socialLinks: [
    { name: "Upwork Profile", url: "https://www.upwork.com/freelancers/~01639ba9bb14ce45a8?mp_source=share", active: true, icon: "briefcase" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dananjaya-alwis-765848185/?skipRedirect=true", active: true, icon: "linkedin" },
    { name: "YouTube (@SuccessDrive)", url: "https://www.youtube.com/@SuccessDrive-t5t", active: true, icon: "youtube" },
    { name: "Email: workshopalwis@gmail.com", url: "mailto:workshopalwis@gmail.com", active: true, icon: "mail" },
    { name: "WhatsApp (+960 972 5219)", url: "https://wa.me/9609725219", active: true, icon: "whatsapp" },
    { name: "WhatsApp (+94 70 503 2889)", url: "https://wa.me/94705032889", active: true, icon: "whatsapp" },
    { name: "Instagram", url: "", active: false, icon: "instagram" },
    { name: "TikTok", url: "", active: false, icon: "video" },
    { name: "Behance", url: "", active: false, icon: "behance" },
    { name: "Fiverr", url: "", active: false, icon: "check-circle" }
  ]
};

// Export for ES modules and standard browser script window object
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
