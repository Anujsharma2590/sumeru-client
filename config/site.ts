import {
  Building2,
  Camera,
  Shield,
  ShieldAlert,
  Sparkles,
  UserCheck,
  Users,
  Warehouse,
  Hospital,
  GraduationCap,
  Store,
  Briefcase,
} from "lucide-react";

export const siteConfig = {
  company: {
    name: "Sumeru Securities",
    shortName: "Sumeru",
    description:
      "Reliable security, manpower, housekeeping, and surveillance support services for residential, commercial, and industrial spaces.",
    phone: "+91 9873234375",
    phoneHref: "tel:+919873234375",
    email: "info@sumerullp.com",
    emailHref: "mailto:info@sumerullp.com",
    address:
      "100, South Enclave, Opp. Dr. Ambedkar Nagar Police Station, New Delhi - 110062",
    whatsappHref: "https://wa.me/919873234375",
    website: "https://www.sumerusecurities.com",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  trustPoints: [
    "Verified personnel",
    "24/7 support",
    "Fast deployment",
    "Disciplined supervision",
    "Delhi NCR coverage",
  ],
};

export const heroData = {
  eyebrow: "Trusted Security & Manpower Solutions",
  title: "Reliable Security Services with a Modern Professional Standard",
  description:
    "From trained guards and armed protection to housekeeping, CCTV support, and manpower deployment — Sumeru Securities helps businesses and communities stay secure, efficient, and supported.",
  primaryCta: {
    label: "Request Consultation",
    href: "#contact",
  },
  secondaryCta: {
    label: "Explore Services",
    href: "#services",
  },
  highlights: [
    "Trained & verified staff",
    "Residential & corporate coverage",
    "Responsive on-ground support",
  ],
};

export const services = [
  {
    title: "Security Guards",
    description:
      "Disciplined guards for offices, societies, retail spaces, and commercial properties.",
    icon: Shield,
  },
  {
    title: "Armed Guards",
    description:
      "Licensed armed security support for high-sensitivity premises and assignments.",
    icon: ShieldAlert,
  },
  {
    title: "PSO / Bodyguard",
    description:
      "Professional personal security support for executives, families, and private needs.",
    icon: UserCheck,
  },
  {
    title: "Housekeeping Staff",
    description:
      "Well-managed housekeeping teams for residential and commercial environments.",
    icon: Sparkles,
  },
  {
    title: "CCTV Support",
    description:
      "Surveillance coordination and support services for effective security monitoring.",
    icon: Camera,
  },
  {
    title: "Manpower Services",
    description:
      "Flexible staffing support for operational, facility, and site requirements.",
    icon: Users,
  },
];

export const reasons = [
  "Verified and trained workforce",
  "Deployment tailored to site requirements",
  "Professional supervision and coordination",
  "Short-term and long-term staffing support",
  "Strong focus on punctuality, discipline, and safety",
  "Responsive escalation and service support",
];

export const processSteps = [
  {
    step: "01",
    title: "Requirement Discussion",
    description: "We understand your site type, staffing needs, risk level, and service expectations.",
  },
  {
    step: "02",
    title: "Site Assessment",
    description: "We assess deployment conditions and recommend the right manpower or security setup.",
  },
  {
    step: "03",
    title: "Deployment",
    description: "Trained personnel are assigned based on your operational and security requirements.",
  },
  {
    step: "04",
    title: "Supervision & Support",
    description: "We maintain quality through active supervision, communication, and issue handling.",
  },
];

export const industries = [
  { title: "Corporate Offices", icon: Briefcase },
  { title: "Residential Societies", icon: Building2 },
  { title: "Retail Stores", icon: Store },
  { title: "Warehouses", icon: Warehouse },
  { title: "Educational Institutions", icon: GraduationCap },
  { title: "Healthcare Facilities", icon: Hospital },
];

export const stats = [
  { value: "10+", label: "Years of service" },
  { value: "500+", label: "Personnel deployed" },
  { value: "100+", label: "Clients served" },
  { value: "24/7", label: "Support availability" },
];

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Delhi NCR and nearby regions depending on project requirements.",
  },
  {
    question: "Do you provide armed guards?",
    answer:
      "Yes, subject to legal and assignment requirements, we can provide licensed armed guard services.",
  },
  {
    question: "Can I hire staff for short-term events or temporary needs?",
    answer:
      "Yes, we support both short-term and long-term deployment depending on availability and requirements.",
  },
  {
    question: "Do you provide housekeeping and manpower services as well?",
    answer:
      "Yes, we provide integrated support including housekeeping staff and manpower services.",
  },
  {
    question: "How quickly can deployment happen?",
    answer:
      "Timelines depend on the location, role, and scale of deployment, but we aim for quick turnaround wherever possible.",
  },
];

export const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Security personnel at commercial entrance",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Professional guard on site patrol duty",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "CCTV and surveillance monitoring support",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Housekeeping and facility support staff",
  },
];
