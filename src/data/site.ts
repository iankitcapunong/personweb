export const site = {
  name: "Ian Kit Capunong",
  short: "Ian Kit.",
  /** Shown next to the name, like a verified tick. Set to false to hide. */
  verified: false,
  photo: "/Iankit.jpg",
  location: "Hinatuan, Surigao del Sur, Philippines",
  role: "Web Developer & UI/UX Designer",
  /** Drop a resume.pdf into /public and set this to "/resume.pdf" to show the button. */
  resumeUrl: "",
  email: "yayan.cap12@gmail.com",
  about: [
    "I build funnels, booking systems and websites for coaches and small businesses, from the first Figma mockup to the live site. I started out in GoHighLevel and now build custom sites and tools in Next.js and Vue, with n8n handling the automation behind them. Recent work includes a webinar funnel for a fitness coaching brand and an AI tool that turns a client interview into ready-to-use marketing copy. I'm based in the Philippines and open to freelance work.",
  ],
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ian-kit-capunong-80399a351/" },
    { label: "GitHub", url: "https://github.com/iankitcapunong" },
    { label: "Instagram", url: "https://www.instagram.com/yanzkieedoo" },
    { label: "Facebook", url: "https://www.facebook.com/yayanngwapoo/" },
  ],
};

/** The bulleted list in the Experience card. */
export const experience = [
  {
    title: "GoHighLevel Developer",
    org: "Built client funnels and sites inside GoHighLevel, wiring lead capture forms into the CRM and setting up calendar bookings and chat widgets so leads could book without back-and-forth.",
    year: "2023 — 2024",
  },
  {
    title: "Freelance Web Developer",
    org: "Designed and shipped a webinar funnel and scholarship application for Better Body Academy, a site for healthcare consultancy The Joxel Group, and four design variants for a chauffeur service. Also built OnboardLayer, an AI client-onboarding tool that generates email copy, ad copy and landing pages.",
    year: "2024 — Present",
  },
];

/** Grouped chips in the Tech Stack card. */
export const techStack = [
  {
    group: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Next.js", "Vue", "Vuetify", "Bootstrap"],
  },
  { group: "Backend (Basic Knowledge)", items: ["Node.js", "PostgreSQL"] },
  { group: "Tools & Workflow", items: ["Git & GitHub", "VS Code", "Figma"] },
  { group: "Automation", items: ["n8n", "GoHighLevel"] },
  { group: "Deployment", items: ["Vercel", "Hostinger"] },
];

/** Rows in the Certifications card. `image` opens in a modal when clicked. */
export const certifications = [
  { name: "HubSpot Certificate", issuer: "Coursera", year: "2024", image: "/cert1.png" },
  { name: "HTML Essentials", issuer: "Certification", year: "2023", image: "/html.jpg" },
  { name: "CSS Essentials", issuer: "Certification", year: "2023", image: "/css.jpg" },
  { name: "JavaScript Essentials", issuer: "Certification", year: "2023", image: "/javascript.jpg" },
];

/**
 * Optional photo strip at the bottom. Drop images into /public and list them
 * here, e.g. ["/gallery/1.jpg", "/gallery/2.jpg"]. Empty = section hidden.
 */
export const gallery: string[] = [];
