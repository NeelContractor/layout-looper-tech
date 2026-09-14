/**
 * ===========================================================================
 * SITE CONTENT — edit every word, link and image path from this one file.
 * ===========================================================================
 * Images live in /public/images, so a path like "/images/hero-illustration.svg"
 * can be swapped for any file you drop in that folder.
 */

export const brand = {
  name: "WeDu",
  tagline: "Communicate. Collaborate. Create.",
  logo: "/images/logo.png",
  logoHeight: 48, // px — change to resize the header logo
};

export const nav = {
  links: [
    { label: "Home", to: "/" as const },
    { label: "Pricing Plans", to: "/pricing-plans" as const },
    { label: "Product", to: "/product" as const },
  ],
  login: { label: "Log In", href: "#login" },
  cta: { label: "Get Started", href: "#get-started" },
};

export const hero = {
  title: "Communicate.\nCollaborate. Create.",
  subtitle: "WeDu provides an effective and powerful way to manage your projects",
  cta: { label: "Get Started", href: "#get-started" },
  image: "/images/hero-illustration.svg",
  imageAlt: "Team building a product together",
  highlights: [
    { icon: "shield", label: "Speed &\nSecurity" },
    { icon: "layers", label: "Flexibility &\nScalability" },
    { icon: "copy", label: "Better\nCollaboration" },
  ],
};

export const about = {
  title: "With the Right Software, Great Things Can Happen",
  body: "This is a space to share more about your business. Explain who's behind it, what it does and what this site has to offer. It's an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share your company's history or highlight a particular feature that sets it apart from competitors.",
};

export const services = {
  title: "What We Offer",
  intro:
    "This is the space to introduce your Services section. Briefly describe the types of services you offer and highlight any special benefits or features.",
  items: [
    {
      title: "Workflows\nThat Work",
      body: "Describe the service and how your customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      image: "/images/service-1.jpg",
    },
    {
      title: "All-In-One\nSolution",
      body: "Describe the service and how your customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      image: "/images/service-2.jpg",
    },
    {
      title: "Comprehensive\nCustomer Support",
      body: "Describe the service and how your customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      image: "/images/service-3.jpg",
    },
    {
      title: "Smart Automation\nTools",
      body: "Describe the service and how your customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book.",
      image: "/images/service-4.jpg",
    },
  ],
};

export const creatives = {
  title: "Built for Creatives,\nby Creatives",
  body: "Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes your business unique and how users can benefit from choosing it.",
  image: "/images/collaboration-illustration.svg",
  imageAlt: "People collaborating inside an app window",
  highlights: [
    { icon: "grid", label: "All-In-One\nToolkit" },
    { icon: "folder", label: "Integrated\nFile Sharing" },
    { icon: "pencil", label: "Total Design\nFreedom" },
  ],
};

export const brands = {
  title: "Trusted Among Industry Leaders",
  body: "Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes your business unique and how users can benefit from choosing it.",
  logos: [
    { src: "/images/brand-1.png", alt: "Meta Definer" },
    { src: "/images/brand-2.png", alt: "Delta Tech" },
    { src: "/images/brand-3.png", alt: "TechMed" },
    { src: "/images/brand-4.png", alt: "Power Core" },
    { src: "/images/brand-5.png", alt: "Strongest Link" },
    { src: "/images/brand-6.png", alt: "Cog Industry" },
    { src: "/images/brand-7.png", alt: "A.T. Motion" },
    { src: "/images/brand-8.png", alt: "Bond" },
  ],
};

export const testimonials = {
  title: "What Our Clients Say",
  items: [
    {
      quote:
        "\u201CI'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.\u201D",
      author: "Deena Levies,\nMission Bay",
      plant: "/images/plant-2.svg",
    },
    {
      quote:
        "\u201CI'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.\u201D",
      author: "Tom Smithenson,\nParkmerced",
      plant: "/images/plant-1.svg",
    },
    {
      quote:
        "\u201CI'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.\u201D",
      author: "Tilly Green,\nHayes Valley",
      plant: "/images/plant-3.svg",
    },
  ],
};

export const pricing = {
  title: "Explore Our\nPricing Options",
  body: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \u201CEdit Text\u201D or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
  cta: { label: "See More", to: "/pricing-plans" as const },
  plans: [
    {
      badge: "Best Value",
      name: "Premium",
      currency: "\u20AC",
      price: "50",
      period: "Every month",
      description: "Use this area to describe one of your memberships.",
      validity: "Valid for 12 months",
      cta: { label: "Get Started", href: "#get-started" },
    },
  ],
};

export const finalCta = {
  title: "Get Ready to Maximize Your Productivity With Our Workflow Solutions",
  cta: { label: "Get Started", href: "#get-started" },
  image: "/images/cta-illustration.svg",
  imageAlt: "Team assembling a website",
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

/* Pricing Plans page ----------------------------------------------------- */
export const pricingPage = {
  title: "Pricing Plans",
  intro: "Choose the plan that fits the way your team works. Change or cancel any time.",
  plans: [
    {
      badge: "",
      name: "Starter",
      currency: "\u20AC",
      price: "0",
      period: "Every month",
      description: "Use this area to describe one of your memberships.",
      validity: "Free forever",
      cta: { label: "Get Started", href: "#get-started" },
    },
    {
      badge: "Best Value",
      name: "Premium",
      currency: "\u20AC",
      price: "50",
      period: "Every month",
      description: "Use this area to describe one of your memberships.",
      validity: "Valid for 12 months",
      cta: { label: "Get Started", href: "#get-started" },
    },
    {
      badge: "",
      name: "Business",
      currency: "\u20AC",
      price: "120",
      period: "Every month",
      description: "Use this area to describe one of your memberships.",
      validity: "Valid for 12 months",
      cta: { label: "Get Started", href: "#get-started" },
    },
  ],
};

/* Product page ----------------------------------------------------------- */
export const productPage = {
  title: "One Product,\nEvery Workflow",
  intro:
    "Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.",
};
