/**
 * DHANANJAYA PORTFOLIO DATA CONFIGURATION
 * 
 * Centralized data configuration with real Vimeo project videos,
 * thumbnails, services, and verified contact links.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Dhananjaya Alwis",
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
      duration: "01:44",
      resolution: "4K UHD • 60 FPS • VIMEO MASTER",
      videoUrl: "https://player.vimeo.com/video/1218626039?h=aeeeb59037",
      vimeoPageUrl: "https://vimeo.com/1218626039",
      fallbackCover: "assets/images/thumb-introduction-video.png"
    },
    about: {
      avatar: "assets/images/dhananjaya-avatar.jpg",
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
      id: "vaunt-fashion-commercial",
      title: "VAUNT // FASHION BRAND COMMERCIAL",
      category: "ADVERTISING",
      categoryKey: "advertising",
      shortDescription: "A creative commercial promo showcasing VAUNT through modern urban visuals, engaging editing, and cinematic presentation.",
      tools: ["DaVinci Resolve", "Adobe Premiere Pro", "Adobe After Effects"],
      featured: true,
      thumbnail: "assets/images/thumb-vaunt-brand.png",
      aspectRatio: "16:9",
      year: "2026",
      videoEmbedUrl: "https://player.vimeo.com/video/1241448949?h=e09618c623",
      vimeoUrl: "https://vimeo.com/1241448949",
      duration: "00:23",
      caseStudy: {
        client: "VAUNT — Fashion & Lifestyle Brand",
        role: "Lead Video Editor & Motion Graphics Designer",
        objective: "Develop a high-impact commercial promo for VAUNT, elevating the brand's apparel line with modern rhythm, slick pattern interrupts, and cinematic pacing.",
        creativeApproach: "Cut to a rhythmic audio pulse, accentuating clothing silhouettes, fabric textures, and urban aesthetics with subtle motion graphics and clean typography overlays.",
        process: "1. Brand vision & apparel line storyboard definition.\n2. Music beat mapping & fast-tempo cut assembly.\n3. Motion graphics title cards & transition design.\n4. DaVinci Resolve color grading for rich, editorial contrast.",
        tools: ["DaVinci Resolve", "Adobe Premiere Pro", "Adobe After Effects"],
        finalResult: "A high-conversion commercial video asset ready for cross-platform advertising and brand launch campaigns.",
        beforeAfter: {
          labelBefore: "RAW FOOTAGE TIMELINE",
          labelAfter: "FINAL GRADED COMMERCIAL FRAME",
          imageBefore: "assets/images/project-7-before.svg",
          imageAfter: "assets/images/thumb-vaunt-brand.png"
        }
      }
    },
    {
      id: "agency-introduction-showcase",
      title: "AGENCY INTRODUCTION // CREATIVE SHOWCASE",
      category: "VIDEO EDITING",
      categoryKey: "video-editing",
      shortDescription: "Cinematic agency introduction highlighting how powerful design, editing, and motion graphics drive business retention.",
      tools: ["DaVinci Resolve Studio", "Adobe After Effects", "Fairlight Audio"],
      featured: true,
      thumbnail: "assets/images/thumb-introduction-video.png",
      aspectRatio: "16:9",
      year: "2026",
      videoEmbedUrl: "https://player.vimeo.com/video/1218626039?h=aeeeb59037",
      vimeoUrl: "https://vimeo.com/1218626039",
      duration: "01:44",
      caseStudy: {
        client: "Creative Agency / Digital Studio",
        role: "Creative Video Editor & Motion Graphics Specialist",
        objective: "Address the noise and low attention spans in modern digital media, positioning creative motion design and video editing as the primary lever for audience engagement.",
        creativeApproach: "Constructed an immersive narrative structure with voiceover synchronization, dynamic visual metaphors, and deliberate pacing shifts that sustain viewer intrigue.",
        process: "1. Script adaptation and voiceover pacing roadmap.\n2. Motion graphic title animations and infographic visual systems.\n3. Cinema sound design layering with 20+ Foley and whoosh elements.\n4. Studio color calibration and broadcast loudness compliance.",
        tools: ["DaVinci Resolve Studio", "Adobe After Effects", "Fairlight Audio"],
        finalResult: "A flagship agency manifesto video delivering deep credibility and emotional connection.",
        beforeAfter: {
          labelBefore: "SCRIPT & TIMELINE ROUGH CUT",
          labelAfter: "COMPLETED NARRATIVE MASTER",
          imageBefore: "assets/images/project-3-before.svg",
          imageAfter: "assets/images/thumb-introduction-video.png"
        }
      }
    },
    {
      id: "animated-motion-graphic-project",
      title: "ANIMATED MOTION GRAPHIC // BRAND PROJECT",
      category: "MOTION GRAPHICS",
      categoryKey: "motion-graphics",
      shortDescription: "Dynamic vector animation and kinetic motion graphics designed to turn ideas into memorable visual experiences.",
      tools: ["Adobe After Effects", "Adobe Illustrator"],
      featured: true,
      thumbnail: "assets/images/thumb-animated-motion-graphic.png",
      aspectRatio: "16:9",
      year: "2026",
      videoEmbedUrl: "https://player.vimeo.com/video/1224112459?h=24d188cf5b",
      vimeoUrl: "https://vimeo.com/1224112459",
      duration: "00:14",
      caseStudy: {
        client: "Creative Motion Graphics Project",
        role: "Motion Graphics Designer & Animator",
        objective: "Demonstrate technical motion design mastery: transform abstract branding elements into fluid, eye-catching visual communication.",
        creativeApproach: "Engineered expressive spatial easing, vector shape morphing, chromatic glows, and rhythm-locked typography.",
        process: "1. Vector layout and asset preparation in Adobe Illustrator.\n2. Keyframing procedural bezier speed graphs in After Effects.\n3. Glow pass and kinetic transition staging.\n4. Sound effect synchronization for tactile impact.",
        tools: ["Adobe After Effects", "Adobe Illustrator"],
        finalResult: "A dynamic motion design showcase proving the ability to seize viewer attention instantly.",
        beforeAfter: {
          labelBefore: "STATIC VECTOR ASSETS",
          labelAfter: "ANIMATED KINETIC GRAPHIC",
          imageBefore: "assets/images/project-1-before.svg",
          imageAfter: "assets/images/thumb-animated-motion-graphic.png"
        }
      }
    },
    {
      id: "dhananjaya-portfolio-video",
      title: "DHANANJAYA ALWIS // PORTFOLIO SHOWCASE",
      category: "CREATIVE CONTENT",
      categoryKey: "creative-content",
      shortDescription: "Personal portfolio video voice-over showcasing video editing, motion graphics capabilities, and visual storytelling.",
      tools: ["DaVinci Resolve", "Adobe After Effects", "Premiere Pro"],
      featured: true,
      thumbnail: "assets/images/thumb-dhananjaya-alwis.png",
      aspectRatio: "16:9",
      year: "2026",
      videoEmbedUrl: "https://player.vimeo.com/video/1241447420?h=cbba83fd29",
      vimeoUrl: "https://vimeo.com/1241447420",
      duration: "00:21",
      caseStudy: {
        client: "Personal Brand Portfolio",
        role: "Motion Graphics Designer & Video Editor",
        objective: "Communicate personal creative philosophy, video editing standards, and technical versatility directly to clients and creative teams.",
        creativeApproach: "High-contrast dark-mode presentation with bold typography badges, clean voiceover audio mastering, and rapid visual proof.",
        process: "1. Core manifesto scripting.\n2. Visual asset selection showcasing diverse disciplines.\n3. Timeline synchronization with custom audio leveling.\n4. Master 4K encoding for Vimeo.",
        tools: ["DaVinci Resolve", "Adobe After Effects", "Adobe Premiere Pro"],
        finalResult: "A compelling personal showcase introducing Dhananjaya Alwis as a premier creative professional.",
        beforeAfter: {
          labelBefore: "RAW VOICE TRACK",
          labelAfter: "POLISHED PORTFOLIO PIECE",
          imageBefore: "assets/images/project-4-before.svg",
          imageAfter: "assets/images/thumb-dhananjaya-alwis.png"
        }
      }
    },
    {
      id: "maldives-travel-cinematic",
      title: "MALDIVES // CINEMATIC TRAVEL STORYTELLING",
      category: "VIDEO EDITING",
      categoryKey: "video-editing",
      shortDescription: "Experience the beauty of the Maldives through cinematic aerial drone footage, color grading, and engaging storytelling.",
      tools: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "Color Grading"],
      featured: true,
      thumbnail: "assets/images/thumb-maldives-travel.jpg",
      aspectRatio: "16:9",
      year: "2026",
      videoEmbedUrl: "https://player.vimeo.com/video/1241718819?h=109bd5cd7b",
      vimeoUrl: "https://vimeo.com/1241718819",
      duration: "00:36",
      caseStudy: {
        client: "Travel & Hospitality / Maldives",
        role: "Cinematic Video Editor & Colorist",
        objective: "Showcase the tropical paradise of the Maldives: turquoise lagoons, vibrant coral reefs, and luxury overwater villas with breathtaking visual fidelity.",
        creativeApproach: "Deliberate cinematic pacing combining wide drone vistas with macro shoreline waves, graded with rich tropical color science in DaVinci Resolve.",
        process: "1. 4K D-Log drone footage normalization.\n2. Speed ramping and rhythmic ocean transition matching.\n3. Custom color grade balancing cyan water against warm white sand.\n4. Spatial audio mixing featuring natural sea textures.",
        tools: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "Film Print Emulation"],
        finalResult: "A visually stunning travel narrative that transports viewers into the serene beauty of the Maldives.",
        beforeAfter: {
          labelBefore: "FLAT D-LOG DRONE FOOTAGE",
          labelAfter: "CINEMATIC TROPICAL COLOR GRADE",
          imageBefore: "assets/images/project-3-before.svg",
          imageAfter: "assets/images/thumb-maldives-travel.jpg"
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
      featured: false,
      thumbnail: "assets/images/project-2.svg",
      aspectRatio: "16:9",
      year: "2025",
      caseStudy: {
        client: "Luxury Tech Concept",
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
      id: "anomaly-vfx-world",
      title: "ANOMALY // VFX ENVIRONMENT & COMPOSITING",
      category: "VFX",
      categoryKey: "vfx",
      shortDescription: "Complex VFX sequence featuring matte painting integration, 3D camera tracking, dynamic atmospheric haze, and particle physics.",
      tools: ["After Effects", "Blender", "DaVinci Fusion"],
      featured: false,
      thumbnail: "assets/images/project-6.svg",
      aspectRatio: "16:9",
      year: "2025",
      caseStudy: {
        client: "Sci-Fi Concept Project",
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
      description: "Where vision becomes tangible reality. I sculpt the primary cut, animate custom 2D/3D assets, rig typography, build custom transitions, and composite visual elements frame by frame.",
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

  socialLinks: [
    { name: "Vimeo Portfolio", url: "https://vimeo.com/user200338888?fl=pp&fe=sh", active: true, icon: "vimeo" },
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

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
