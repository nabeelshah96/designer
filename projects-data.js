// projects-data.js

const projectsData = {
  "elite-interact": {
    title: "Elite Interact",
    subtitle: "Unified PropTech ecosystem connecting residents, building management, and service providers.",
    liveUrl: "https://yourdomain.com/live-project-link",
    category: "App & Admin ERP",
    client: "Universal Community Management",
    timeline: "3 Months",
    role: "Lead UI/UX Designer & Developer",
    tools: ["Figma", "Tailwind CSS", "JavaScript", "HTML5"],
    heroImage: "img/projects/elite-interact-hero.jpg",
    overview: "Elite Interact is a comprehensive ecosystem designed to automate property operations. It features a resident mobile app for digital document verification, utility payments, access card requests, parking purchases, move-in/move-out workflows, and maintenance tickets. An admin portal handles building records and verifications, while a separate service provider portal routes maintenance tasks directly to field workers with summary payment logging.",
    problem: "Management previously relied on manual payments, phone calls, and scattered emails, leading to slow response times, poor building record tracking, and friction for residents who had to visit the management office for routine requests.",
    persona: {
      name: "Tariq Al-Maktoum",
      role: "Property Resident & Family Head",
      goals: "Handle utility payments, parking purchases, and maintenance requests straight from home without visiting the office.",
      painPoints: "Slow communication via emails/calls and lack of transparent tracking for community requests."
    },
    colors: ["#0B0F17", "#1E293B", "#3B82F6", "#10B981", "#F8FAFC"],
    typography: { primary: "Plus Jakarta Sans", secondary: "Inter" },
    screens: [
      { url: "img/projects/elite-interact-1.jpg", caption: "Resident Dashboard & Request Hub" },
      { url: "img/projects/elite-interact-2.jpg", caption: "Admin Verification & Multi-Building ERP" },
      { url: "img/projects/elite-interact-3.jpg", caption: "Service Provider Task Assignment Portal" }
    ],
    metrics: [
      { stat: "-70%", label: "Management Processing Time" },
      { stat: "100%", label: "Digital Request Tracking" },
      { stat: "3x", label: "Faster Maintenance Dispatch" }
    ],
    testimonial: {
      quote: "Elite Interact completely removed our dependency on manual emails and paperwork. Management and residents are finally in perfect synchronization.",
      author: "Community Operations Director",
      company: "Universal Community Management"
    }
  },

  "accycloud": {
    title: "AccyCloud",
    subtitle: "Cloud-based accounting and POS web application with dual operational views.",
    liveUrl: "https://yourdomain.com/live-project-link",
    category: "SaaS Web Application",
    client: "Appcom Solutions",
    timeline: "4 Months",
    role: "Full-Stack UI/UX Designer",
    tools: ["Figma", "Bootstrap", "JavaScript", "PHP"],
    heroImage: "img/accycloud.png",
    overview: "AccyCloud stores all company and store financial data securely on the cloud. It features two custom interface views: a fast POS terminal view tailored for shop owners and a detailed invoicing view for corporate offices. The system generates thorough reports covering credit, debit, and loss while supporting receipt pricing for invoices and terminal receipts for shops.",
    problem: "Store owners and corporate accountants struggled with disconnected systems, making it hard to track daily sales simultaneously from physical retail counters and the corporate headquarters.",
    persona: {
      name: "Sarah Jenkins",
      role: "Store & Corporate Accounts Manager",
      goals: "Switch seamlessly between POS terminal checkouts and detailed corporate invoicing on one cloud platform.",
      painPoints: "Fragmented software tools causing reconciliation delays between retail storefronts and head office."
    },
    colors: ["#4158FF", "#FF7A20", "#F1F1F2", "#000000", "#959595"],
    typography: { primary: "Google Sans", secondary: "Inter" },
    screens: [
      { url: "img/projects/accycloud-1.jpg", caption: "Data Listing for Generated Invoices" },
      { url: "img/projects/accycloud-2.jpg", caption: "Corporate Invoicing & Financial P&L Reports" },
      { url: "img/projects/accycloud-3.jpg", caption: "POS Terminal View for Shop Owners" },
      { url: "img/projects/accycloud-4.jpg", caption: "Mobile App Invoicing for POS & Corporate" }
    ],
    metrics: [
      { stat: "Dual Interface", caption: "Unified POS & Invoicing", label: "Multi-purpose Operational Needs" },
      { stat: "100%", label: "Cloud Data Sync Accuracy" },
      { stat: "3.5x", label: "Faster Accounts Reconciliation" }
    ],
    testimonial: {
      quote: "Being able to log accounts from the store and corporate office in one place has massively boosted our accounts team efficiency.",
      author: "Director of Retail Operations",
      company: "Appcom Solutions"
    }
  },

  "swoop-carwash": {
    title: "Swoop Carwash",
    subtitle: "On-demand doorstep car wash subscription app and washer dispatch portal.",
    liveUrl: "https://swoopcarwash.com",
    category: "Mobile Application",
    client: "Swoop Services UAE",
    timeline: "2.5 Months",
    role: "UI/UX & Mobile Flow Designer",
    tools: ["Figma", "Tailwind", "Prototyping"],
    heroImage: "img/swoopcarwash.png",
    overview: "Swoop Carwash introduces a flexible subscription module where building residents select their car types and preferred weekly wash frequency to match their budget. Users can track completed washes and upcoming schedules, while the companion Swoop Team app notifies field washers precisely when and where to service each vehicle.",
    problem: "Traditional car wash providers lacked structured subscription models, transparent wash tracking, and coordinated field dispatch workflows.",
    persona: {
      name: "Rashid K.",
      role: "Building Resident & Subscriber",
      goals: "Easily customize weekly wash plans matching my budget and track service schedules.",
      painPoints: "Unreliable scheduling and lack of visibility into past and upcoming vehicle washes."
    },
    colors: ["#FFBF30", "#4344FF", "#3CD850", "#FF7A30", "#8D8DA3"],
    typography: { primary: "GT Walsheim Pro", secondary: "SF Pro" },
    screens: [
      { url: "img/projects/swoop-1.png", caption: "Wash History & Next Due Tracker" },
      { url: "img/projects/swoop-2.png", caption: "Easy Subscription Planner" },
      { url: "img/projects/swoop-3.png", caption: "Seamless Checkout Flow" },
      { url: "img/projects/swoop-4.png", caption: "Overview of Active Plans" }
    ],
    metrics: [
      { stat: "Custom", label: "Weekly Wash Frequencies" },
      { stat: "4.9", label: "Subscriber Satisfaction Rating" },
      { stat: "Real-time", label: "Washer Dispatch Alerts" }
    ],
    testimonial: {
      quote: "Our customers love building their own wash plans, and our washing crew is perfectly coordinated through the field app.",
      author: "Founder & CEO",
      company: "Swoop Services UAE"
    }
  },

  "perfect-bulk-solutions": {
    title: "Perfect Bulk Solutions",
    subtitle: "High-performance logistics website featuring cinematic GSAP scroll choreography.",
    liveUrl: "https://pbsintlfze.com/",
    category: "Corporate Web",
    client: "Perfect Bulk Solutions International FZE",
    timeline: "2 Months",
    role: "UI/UX Designer & Frontend Developer",
    tools: ["HTML5", "Tailwind CSS", "GSAP", "Lenis Scroll"],
    heroImage: "img/pbs.png",
    overview: "A lovingly crafted corporate web platform for a global logistics provider. Inspired by leading modern design trends, the site replaces a dated, static layout with immersive scroll-based animations, dynamic scroll triggers, and crystal-clear data presentation tailored for enterprise shipping partners.",
    problem: "The client's previous website was boring and uninspiring, failing to capture prospective client attention or communicate their industrial scale effectively.",
    persona: {
      name: "Michael Vance",
      role: "Corporate Supply Chain Director",
      goals: "Quickly assess global freight capabilities through an engaging, high-performance web interface.",
      painPoints: "Dull, text-heavy logistics websites that make evaluating vendor capability difficult."
    },
    colors: ["#eb4d13", "#131134", "#EAE7E7", "#000000", "#FFFFFF"],
    typography: { primary: "Lexend", secondary: "Inter" },
    screens: [
      { url: "img/projects/pbs-1.jpg", caption: "Cinematic Hero & GSAP Scroll Trigger" },
      { url: "img/projects/pbs-2.jpg", caption: "Interactive Cargo Solutions Data Grid" },
      { url: "img/projects/pbs-3.jpg", caption: "Visual Adjustments for Mobile View" },
      { url: "img/projects/pbs-4.jpg", caption: "Scroll Based Interactive Footer" }
    ],
    metrics: [
      { stat: "+210%", label: "Client Inquiry Engagement" },
      { stat: "99/100", label: "Google Lighthouse Score" },
      { stat: "Modern", label: "GSAP Scroll Choreography" }
    ],
    testimonial: {
      quote: "Putting our heart into this design paid off. The scroll animations and fresh layout instantly elevated our brand credibility with global clients.",
      author: "Managing Director",
      company: "Perfect Bulk Solutions"
    }
  },

  "realmatch-ai": {
    title: "RealMatch AI",
    subtitle: "AI-powered real estate advisor application for hyper-targeted property matching.",
    category: "AI Mobile App",
    client: "RealMatch Technologies",
    timeline: "3 Months",
    role: "Lead UI/UX Architect",
    tools: ["Figma", "Tailwind CSS", "OpenAI API", "JavaScript"],
    heroImage: "img/realmatch.png",
    overview: "RealMatch AI revolutionizes property discovery by asking users specific lifestyle, daily routine, and budget preferences that standard portals omit. Instead of endless scrolling through massive property catalogs, the AI processes inputs to serve a select handful of exact matches.",
    problem: "Standard property finders overwhelm buyers with long, irrelevant lists of properties that fail to match their nuanced lifestyle requirements.",
    persona: {
      name: "Ayesha Noor",
      role: "Home Buyer",
      goals: "Find properties matching exact lifestyle preferences and budget without scrolling through endless listings.",
      painPoints: "Wasting hours sifting through generic, mismatched property portals."
    },
    colors: ["#0B0F17", "#1E293B", "#8B5CF6", "#06B6D4", "#F8FAFC"],
    typography: { primary: "Plus Jakarta Sans", secondary: "Inter" },
    screens: [
      { url: "img/projects/realmatch-1.jpg", caption: "Instant Property Detail & ROI Summary" },
      { url: "img/projects/realmatch-2.jpg", caption: "Immersive AI Search Animation" },
      { url: "img/projects/realmatch-3.jpg", caption: "Conversational Lifestyle Preference Quiz" },
      { url: "img/projects/realmatch-4.jpg", caption: "Curated AI Property Match Results" }
    ],
    metrics: [
      { stat: "Few", label: "Highly Accurate Curated Results" },
      { stat: "4.8x", label: "Faster Property Decision Time" },
      { stat: "95%", label: "User Match Satisfaction" }
    ],
    testimonial: {
      quote: "RealMatch AI brought our vision to life brilliantly. Users love getting precise results instantly instead of scrolling through hundreds of listings.",
      author: "Chief Product Officer",
      company: "RealMatch Technologies"
    }
  },

  "bismi-jewellery": {
    title: "Bismi Gold & Diamonds",
    subtitle: "Luxury jewelry design showcase and collection catalog mobile application.",
    liveUrl: "https://play.google.com/store/apps/details?id=com.bismi.bismijewellery",
    category: "Online Store Catalog",
    client: "Bismi Golds & Diamonds",
    timeline: "2 Months",
    role: "Lead UI/UX Designer",
    tools: ["Figma", "Figtree Font", "Design Systems"],
    heroImage: "img/bismi.png",
    overview: "An elegant, minimalist mobile showcase application celebrating high-end gold and diamond collections with high-resolution imagery and bespoke typography.",
    problem: "Existing digital catalogs failed to convey the tactile elegance and fine craftsmanship of custom gold jewelry pieces.",
    persona: {
      name: "Fatima Al-Zahra",
      role: "Luxury Jewelry Collector",
      goals: "Browse intricate jewelry collections with zoom details and save favorites to a digital wishbook.",
      painPoints: "Low-quality imagery and cluttered e-commerce layouts that dilute brand luxury."
    },
    colors: ["#7055A0", "#1C132B", "#B29ED5", "#F5F1F8", "#3C2B95"],
    typography: { primary: "Figtree", secondary: "Playfair Display" },
    screens: [
      { url: "img/projects/bismi-1.jpg", caption: "User Onboarding Process" },
      { url: "img/projects/bismi-2.jpg", caption: "Collection Gallery & Gold Swatches" },
      { url: "img/projects/bismi-3.jpg", caption: "High-Res Zoom & Craftsmanship Details" },
      { url: "img/projects/bismi-4.jpg", caption: "Admin Portal for CMS" }
    ],
    metrics: [
      { stat: "+210%", label: "Wishlist Additions" },
      { stat: "5.4m", label: "Average Session Time" },
      { stat: "96%", label: "Brand Aesthetic Approval" }
    ],
    testimonial: {
      quote: "Bismi's digital style guide and app UI captured our brand's luxury essence perfectly.",
      author: "Creative Director",
      company: "Bismi Golds & Diamonds"
    }
  }
};