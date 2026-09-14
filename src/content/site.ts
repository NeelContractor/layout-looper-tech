/**
 * ===========================================================================
 * SITE CONTENT — edit every word, link and image path from this one file.
 * ===========================================================================
 * Images live in /public/images, so a path like "/images/hero-illustration.svg"
 * can be swapped for any file you drop in that folder.
 */

export const brand = {
  name: "GrahAura",
  tagline: "Communicate. Collaborate. Create.",
  logo: "/images/logo.png",
  logoHeight: 48, // px — change to resize the header logo
};

export const nav = {
  links: [
    { label: "Home", to: "/" as const },
    // { label: "Pricing Plans", to: "/pricing-plans" as const },
    { label: "Product", to: "/product" as const },
  ],
  login: { label: "Log In", href: "#login" },
  cta: { label: "Get Started", href: "#get-started" },
};

// export const hero = {
//   title: "Your Astrology Practice Deserves\n More Than a WhatsApp Number.",
//   subtitle: "Create your own professional astrology website, showcase your services and let clients book appointments with you — starting at just ₹999.",
//   cta: { label: "Get Started", href: "#get-started" },
//   image: "/images/hero-illustration.svg",
//   imageAlt: "Team building a product together",
//   highlights: [
//     { icon: "shield", label: "Speed &\nSecurity" },
//     { icon: "layers", label: "Flexibility &\nScalability" },
//     { icon: "copy", label: "Better\nCollaboration" },
//   ],
// };
export const hero = {
  title: "Your Astrology Practice Deserves\n More Than a WhatsApp Number.",

  subtitle:
    "Create your own professional astrology website, showcase your services and let clients book appointments with you — starting at just ₹999.",

  cta: {
    label: "Get Started",
    href: "#get-started",
  },

  image: "/images/hero-illustration.svg",

  imageAlt: "Team building a product together",
};
// export const about = {
//   title: "Is Your Astrology Business Still Running Through WhatsApp, Instagram, Phone Calls?",
//   body: "Your clients shouldn't have to search through old WhatsApp messages to find your services, pricing or appointment availability.\n❌ WhatsApp messages everywhere  ",
// };
export const about = {
  title:
    "Is Your Astrology Business Still Running Through WhatsApp, Instagram, Phone Calls?",

  body: `Your clients shouldn't have to jump between WhatsApp, Instagram and phone calls just to understand your services, get your details or book an appointment..
Too many WhatsApp conversations
Repeatedly answering "What services do you provide?"
Sending photos/details manually
Explaining pricing and availability over calls
Managing appointments through messages and phone calls
No professional online presence
There's a simpler way.`,
};

export const services = {
  title: "One Professional Link. Everything You & Your Client Needs.",
  intro:
    "Instead of sending the same information across WhatsApp, Instagram and phone calls, give your clients one professional link where they can discover your practice, explore your services and book a consultation.",
  items: [
    {
      title: "Build Your Professional \nPresence",
      body: "Your profile, experience, expertise and important information — presented professionally for your clients.",
      image: "/images/service-1.jpg",
    },
    {
      title: "Present Your Services \nProfessionally",
      body: "List your astrology services, consultation options, pricing and details so clients can understand what you offer at a glance.",
      image: "/images/service-2.jpg",
    },
    {
      title: "Bookings Made\nSimpler",
      body: "Make appointment requests simpler by giving clients a dedicated place to connect and book your services.",
      image: "/images/service-3.jpg",
    },
    {
      title: "Your Own Website,\n Your Own Identity",
      body: "Start with a professionally designed template and personalize your content, images, colors and other available elements.",
      image: "/images/service-4.jpg",
    },
  ],
};

// export const creatives = {
//   title: "Built for Creatives,\nby Creatives",
//   body: "Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes your business unique and how users can benefit from choosing it.",
//   image: "/images/collaboration-illustration.svg",
//   imageAlt: "People collaborating inside an app window",
//   highlights: [
//     { icon: "grid", label: "All-In-One\nToolkit" },
//     { icon: "folder", label: "Integrated\nFile Sharing" },
//     { icon: "pencil", label: "Total Design\nFreedom" },
//   ],
// };
export const creatives = {
  title: "Everything Your Client Needs.\nIn One Place.",

  body: "Instead of sending your profile, services, pricing and availability separately, give your clients one professional link where they can find everything and take the next step.",

  image: "/images/collaboration-illustration.svg",

  imageAlt: "People collaborating inside an app window",

  highlights: [
    {
      icon: "grid",
      label: "Your Professional Profile",
      description:
        "Introduce yourself, your experience and your expertise.",
    },
    {
      icon: "folder",
      label: "Your Services & Pricing",
      description:
        "Clearly show what you offer and what each consultation includes.",
    },
    {
      icon: "pencil",
      label: "Simple Appointment Booking",
      description:
        "Let clients easily find the right service and request a consultation.",
    },
    {
      icon: "link",
      label: "One Link. Share It Everywhere.",
      description:
        "Add your website to your WhatsApp, Instagram bio, social profiles, Google profile and more.",
      highlight: true,
    },
  ],

  cta: "Explore Demo",
};

export const howItWorks = {
  title: "From Idea to Live Website in 4 Simple Steps.",

  body:
    "Getting your astrology practice online doesn't have to be complicated. Choose your plan, share your information, customize your website and you're ready to go.",

  steps: [
    {
      number: "01",
      title: "Choose Your Plan",
      description:
        "Choose the Mini Website or Custom Solution based on what your astrology practice needs.",
      background: "bg-brand-yellow",
    },

    {
      number: "02",
      title: "Add Your Information",
      description:
        "Share your profile, photo, services, pricing, contact details and other information.",
      background: "bg-brand-pink-soft",
    },

    {
      number: "03",
      title: "Customize",
      description:
        "Choose your template and personalize supported colors, content and images.",
      background: "bg-brand-lavender",
    },

    {
      number: "04",
      title: "Go Live",
      description:
        "Get your professional website link and share it everywhere — on Instagram, WhatsApp, YouTube, Google and directly with your clients.",
      background: "bg-brand-yellow-soft",
    },
  ],

  reassurance: "No coding. No technical expertise required.",
};

// export const brands = {
//   title: "Trusted Among Industry Leaders",
//   body: "Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes your business unique and how users can benefit from choosing it.",
//   logos: [
//     { src: "/images/brand-1.png", alt: "Meta Definer" },
//     { src: "/images/brand-2.png", alt: "Delta Tech" },
//     { src: "/images/brand-3.png", alt: "TechMed" },
//     { src: "/images/brand-4.png", alt: "Power Core" },
//     { src: "/images/brand-5.png", alt: "Strongest Link" },
//     { src: "/images/brand-6.png", alt: "Cog Industry" },
//     { src: "/images/brand-7.png", alt: "A.T. Motion" },
//     { src: "/images/brand-8.png", alt: "Bond" },
//   ],
// };

export const brands = {
  title: "Need Something More Than a Template?",

  body:
    "Your astrology business can have its own personalized website and software — designed around the way you work and the experience you want to give your clients.",

  logos: [
    {
      src: "/images/custom-website-desktop.png",
      alt: "Custom astrology website",
    },
    {
      src: "/images/custom-website-mobile.png",
      alt: "Custom astrology mobile website",
    },
    {
      src: "/images/custom-booking.png",
      alt: "Custom astrology booking system",
    },
    {
      src: "/images/custom-dashboard.png",
      alt: "Custom astrology dashboard",
    },
  ],
};

// export const testimonials = {
//   title: "What Our Clients Say",
//   items: [
//     {
//       quote:
//         "\u201CI'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.\u201D",
//       author: "Deena Levies,\nMission Bay",
//       plant: "/images/plant-2.svg",
//     },
//     {
//       quote:
//         "\u201CI'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.\u201D",
//       author: "Tom Smithenson,\nParkmerced",
//       plant: "/images/plant-1.svg",
//     },
//     {
//       quote:
//         "\u201CI'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.\u201D",
//       author: "Tilly Green,\nHayes Valley",
//       plant: "/images/plant-3.svg",
//     },
//   ],
// };

// export const testimonials = {
//   title: "Questions Before You Get Started",

//   items: [
//     {
//       quote:
//         "Do I need any technical or coding knowledge to create my website?\n\nHow long does it take to get my website live?\n\nWhat information do I need to provide to get started?",

//       author: "Getting Started",

//       plant: "/images/plant-2.svg",
//     },

//     {
//       quote:
//         "Can I show my astrology services, pricing and consultation details?\n\nCan clients request appointments directly through my website?\n\nCan I share my website on WhatsApp, Instagram and other platforms?",

//       author: "Website & Features",

//       plant: "/images/plant-1.svg",
//     },

//     {
//       quote:
//         "What is included in the ₹999 Mini Website?\n\nCan I get a completely custom website or software for my business?\n\nWill I be able to update or change my website later?",

//       author: "Pricing & Support",

//       plant: "/images/plant-3.svg",
//     },
//   ],
// };

export const testimonials = {
  title: "Questions Before You Get Started",

  items: [
    {
      quote: [
        {
          question: "Do I need any coding or technical knowledge?",
          answer:
            "No. You don't need coding or technical knowledge. We handle the website setup and guide you through the process.",
        },
        {
          question: "What information do I need to provide?",
          answer:
            "You can provide your profile, photo, experience, astrology services, pricing, contact details, social links and other information you want your clients to see.",
        },
        {
          question: "How long does it take to get my website?",
          answer:
            "Once we have the required information and content, we can prepare your website and share it with you for review before it goes live.",
        },
      ],
      author: "Getting Started",
    },

    {
      quote: [
        {
          question: "Can I show my astrology services and pricing?",
          answer:
            "Yes. You can clearly display your astrology services, consultation options, pricing and details so clients can understand what you offer.",
        },
        {
          question: "Can my clients book appointments through my website?",
          answer:
            "Yes. Your website can provide a dedicated booking experience where clients can choose a service and request or book a consultation.",
        },
        {
          question: "Can I add my WhatsApp, Instagram and other links?",
          answer:
            "Yes. You can connect your WhatsApp, Instagram, YouTube, Google profile and other important links so clients can easily reach you.",
        },
      ],
      author: "Website & Bookings",
    },

    {
      quote: [
        {
          question: "Where can I share my website link?",
          answer:
            "Share your professional website link on WhatsApp, Instagram, YouTube, Google, social profiles, messages and directly with your clients.",
        },
        {
          question: "Can I customize the look of my website?",
          answer:
            "Yes. You can choose from available templates and customize supported colors, content, images and other available elements.",
        },
        {
          question: "What if I need a custom website or software?",
          answer:
            "If you need more than a template, we can build a personalized website or software solution around your business, including custom booking systems, dashboards, CRM and consultation management.",
        },
      ],
      author: "Sharing & Custom Solutions",
    },
  ],
};


export const pricing = {
  title: "Pricing Plans",

  body:
    "Choose the option that fits your astrology business — start with a professional website or build a completely personalized digital solution.",

  plans: [
    {
      badge: "Popular",
      name: "Professional Website",
      currency: "₹",
      price: "999",
      period: "Monthly",

      description:
        "Everything you need to establish your professional online presence.",

      validity: "Perfect for astrologers getting started online",

      features: [
        "Personalized astrologer profile",
        "Services section",
        "Appointment / booking system",
        "Professional website template",
        "Customizable content",
        "Color customization",
        "Image / profile customization",
        "Personal website link",
        "Mobile-friendly design",
      ],

      cta: {
        label: "Create My Website",
        href: "#get-started",
      },
    },

    {
      badge: "Custom",
      name: "Custom Website + Software",
      currency: "₹",
      price: "15,000+",
      period: "Starting price -- One time",

      description:
        "A completely personalized digital platform designed around your astrology business.",

      validity: "Built specifically for your requirements",

      features: [
        "Completely personalized website",
        "Custom branding",
        "Custom UI / UX",
        "Custom features",
        "Custom workflows",
        "Booking & appointment systems",
        "Dashboard & client management",
        "Custom astrology software",
      ],

      cta: {
        label: "Explore Custom Demo",
        href: "#custom-demo",
      },
    },
  ],
};

// export const pricing = {
//   title: "Explore Our\nPricing Options",
//   body: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \u201CEdit Text\u201D or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
//   cta: { label: "See More", to: "/pricing-plans" as const },
//   plans: [
//     {
//       badge: "Best Value",
//       name: "Premium",
//       currency: "\u20AC",
//       price: "50",
//       period: "Every month",
//       description: "Use this area to describe one of your memberships.",
//       validity: "Valid for 12 months",
//       cta: { label: "Get Started", href: "#get-started" },
//     },
//   ],
// };

// export const finalCta = {
//   title: "Get Ready to Maximize Your Productivity With Our Workflow Solutions",
//   cta: { label: "Get Started", href: "#get-started" },
//   image: "/images/cta-illustration.svg",
//   imageAlt: "Team assembling a website",
// };
export const finalCta = {
  title: "Ready to Take Your Astrology Practice Online?",
  cta: {
    label: "Create My Website",
    href: "#get-started",
  },
  image: "/images/cta-illustration.svg",
  imageAlt: "Team building a professional website",
};

export const footer = {
  contact: {
    title: "Contact",
    address: "500 Terry Francine Street San\nFrancisco, CA 94158",
    items: [
      { label: "General Inquires:", value: "123-456-7890" },
      { label: "Sales:", value: "info@mysite.com" },
      { label: "Customer Care:", value: "info@mysite.com" },
    ],
  },
  quickLinks: {
    title: "Quick links",
    links: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Refund Policy", href: "#refund" },
      { label: "Accessibility Statement", href: "#accessibility" },
    ],
  },
  follow: {
    title: "Follow",
    emailLabel: "Email *",
    checkboxLabel: "Yes, subscribe me to your newsletter. *",
    submitLabel: "Subscribe",
    socials: [
      { label: "LinkedIn", href: "#linkedin" },
      { label: "YouTube", href: "#youtube" },
      { label: "Facebook", href: "#facebook" },
    ],
  },
  copyright: "\u00A9 2035 by WeDu.",
};

// /* Pricing Plans page ----------------------------------------------------- */
// export const pricingPage = {
//   title: "Pricing Plans",
//   intro: "Choose the plan that fits the way your team works. Change or cancel any time.",
//   plans: [
//     {
//       badge: "",
//       name: "Starter",
//       currency: "\u20AC",
//       price: "0",
//       period: "Every month",
//       description: "Use this area to describe one of your memberships.",
//       validity: "Free forever",
//       cta: { label: "Get Started", href: "#get-started" },
//     },
//     {
//       badge: "Best Value",
//       name: "Premium",
//       currency: "\u20AC",
//       price: "50",
//       period: "Every month",
//       description: "Use this area to describe one of your memberships.",
//       validity: "Valid for 12 months",
//       cta: { label: "Get Started", href: "#get-started" },
//     },
//     {
//       badge: "",
//       name: "Business",
//       currency: "\u20AC",
//       price: "120",
//       period: "Every month",
//       description: "Use this area to describe one of your memberships.",
//       validity: "Valid for 12 months",
//       cta: { label: "Get Started", href: "#get-started" },
//     },
//   ],
// };

/* Product page ----------------------------------------------------------- */
export const productPage = {
  title: "One Product,\nEvery Workflow",
  intro:
    "Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
};
