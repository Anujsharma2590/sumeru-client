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
  Flame,
  FileInput,
  Building,
  TreePine,
  Footprints,
  Calendar,
  HardHat,
  UtensilsCrossed,
  Landmark,
  Film,
  Car,
  Trophy,
  Truck,
} from "lucide-react";

export const siteConfig = {
  company: {
    name: "Sumeru Securities",
    legalName: "Sumeru Securities and Consultants LLP",
    shortName: "Sumeru",
    description:
      "Reliable security, manpower, housekeeping, and surveillance support services for residential, commercial, and industrial spaces.",
    phone: "+91 9873234375",
    phoneHref: "tel:+919873234375",
    phones: [
      { number: "+91 9873234338", href: "tel:+919873234338" },
      { number: "+91 9873234374", href: "tel:+919873234374" },
      { number: "+91 9873234375", href: "tel:+919873234375" },
      { number: "+91 9873234333", href: "tel:+919873234333" },
    ],
    email: "sumeru.llp@gmail.com",
    emailHref: "mailto:sumeru.llp@gmail.com",
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

export const aboutContent = {
  vision:
    "At Sumeru Securities, our vision is to redefine security & manpower solutions through innovation and unwavering commitment, ensuring safety without compromise.",
  mission:
    "Our mission at Sumeru Securities is to deliver exceptional security & manpower solutions tailored to each client's unique needs. With a focus on professionalism, integrity, and advanced technology, we ensure safety and reliability in every environment we serve.",
  intro:
    "Sumeru Securities and Consultants LLP is a trusted manpower solutions provider, connecting skilled professionals with businesses across various industries. We specialize in temporary staffing, permanent recruitment, and contract-based hiring tailored to your specific needs. We deliver reliable, efficient, and flexible workforce solutions. Our team is committed to quality, compliance, and client satisfaction.",
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
    title: "Housekeeping Services",
    description:
      "Comprehensive cleaning and maintenance services to ensure a clean and secure environment.",
    icon: Sparkles,
  },
  {
    title: "Multi-Tasking Staff",
    description:
      "Professional versatile employees trained to handle a variety of duties across different roles or departments.",
    icon: Users,
  },
  {
    title: "Armed / Unarmed Security Guards",
    description:
      "Highly trained armed and unarmed security personnel to provide maximum protection for high-risk and standard environments.",
    icon: ShieldAlert,
  },
  {
    title: "Fire Watch Services",
    description:
      "Dedicated personnel to monitor and ensure fire safety compliance at your site.",
    icon: Flame,
  },
  {
    title: "Data Entry Operator",
    description:
      "Experienced people for inputting, updating, and maintaining accurate information in computer systems and databases.",
    icon: FileInput,
  },
  {
    title: "CCTV Monitoring",
    description:
      "Real-time monitoring of CCTV systems to detect and respond to suspicious activities.",
    icon: Camera,
  },
  {
    title: "Facility Management",
    description:
      "We serve HVAC, Plumbing, Lighting, Electrical, Mechanical and Building Maintenance staff.",
    icon: Building,
  },
  {
    title: "Gardener",
    description:
      "Skilled personnel for cultivating and maintaining outdoor spaces, including gardens, parks, and landscapes.",
    icon: TreePine,
  },
  {
    title: "Patrol Services",
    description:
      "Regular patrols by trained officers to detect crime and maintain safety.",
    icon: Footprints,
  },
  {
    title: "PSO / Bodyguard",
    description:
      "Professional personal security support for executives, families, and private needs.",
    icon: UserCheck,
  },
  {
    title: "Security Guards",
    description:
      "Disciplined guards for offices, societies, retail spaces, and commercial properties.",
    icon: Shield,
  },
];

export const reasons = [
  "Experienced Professionals",
  "24/7 Support",
  "Customized Solutions",
  "Cutting Edge Technology",
  "Proven Track Record",
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
  { title: "Residential", icon: Building2 },
  { title: "Commercial", icon: Store },
  { title: "Industrial", icon: Warehouse },
  { title: "Events", icon: Calendar },
  { title: "Education", icon: GraduationCap },
  { title: "Healthcare", icon: Hospital },
  { title: "Construction", icon: HardHat },
  { title: "Hospitality", icon: UtensilsCrossed },
  { title: "Financial Institutions", icon: Landmark },
  { title: "Corporate", icon: Briefcase },
  { title: "Entertainment", icon: Film },
  { title: "Retail", icon: Store },
  { title: "Parking Facilities", icon: Car },
  { title: "Religious Institutions", icon: Building2 },
  { title: "Sports Venues", icon: Trophy },
  { title: "Government", icon: Landmark },
  { title: "Logistics", icon: Truck },
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

export const testimonials = [
  {
    company: "Innovatiview India Pvt Ltd",
    quote:
      "We've had the pleasure of partnering with Sumeru Securities for the past years, and their service has exceeded our expectations in every way. The professionalism and expertise of their security team are evident from day one.",
  },
  {
    company: "Inde en Vogue Sourcing Pvt Ltd",
    quote:
      "Sumeru Securities has been an invaluable partner in ensuring the safety and security of our premises. Their team is professional, reliable, and always on top of their game. We've seen a noticeable improvement in our security measures since they came on board. We highly recommend Sumeru Securities to anyone in need of top-notch security services.",
  },
  {
    company: "Timeus Interactive Services Pvt Ltd",
    quote:
      "Sumeru's housekeeping services are highly professional and reliable. The staff is well-trained, punctual, and maintains excellent cleanliness standards. They ensure all areas are spotless and organized, creating a hygienic and pleasant environment. Highly recommended for maintaining a clean and healthy space.",
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
  {
    src: "/images/gallery-bodyguard-1.jpg",
    alt: "PSO / bodyguard executive protection",
  },
  {
    src: "/images/gallery-bodyguard-2.jpg",
    alt: "Professional personal security officer",
  },
];
