/**
 * ═══════════════════════════════════════════════════════
 * BHAGAT TECH SOLUTIONS — Projects / Portfolio Data
 * ═══════════════════════════════════════════════════════
 *
 * HOW TO ADD A NEW PROJECT:
 *  1. Copy any object below and paste it at the bottom
 *  2. Give it a unique id (increment from last one)
 *  3. Fill in title, shortDesc, tech[], category, type
 *  4. Set badge: 'live' | 'demo' | 'client' | 'github'
 *  5. Set url to the live/demo link (null = no button)
 *  6. Optionally add thumbnail: '/projects/your-image.png'
 *     (place image in /public/projects/)
 *  7. Save — the UI updates automatically
 * ═══════════════════════════════════════════════════════
 */

export const PROJECTS = [

  // ── WEB ────────────────────────────────────────────────
  {
    id: 1,
    title: 'Local Business E-Commerce Platform',
    shortDesc:
      'Full-featured online store with product management, Razorpay payments, and a powerful admin dashboard.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Razorpay'],
    category: 'web',
    type: 'Website',
    badge: 'live',
    url: 'https://www.bhagatechsolutions.com',   // ← replace with real URL
    githubUrl: null,
    thumbnail: null,          // e.g. '/projects/ecommerce.png'
    icon: 'fas fa-store',
    accent: '#0057ff',
    gradient: 'linear-gradient(135deg,#0a1a4a 0%,#0057ff 100%)',
    featured: true,
    year: '2024',
    client: 'Retail Client, Maharashtra',
  },
  {
    id: 2,
    title: 'Educational Institute Portal',
    shortDesc:
      'Complete school portal with admissions, results, student login, attendance, and fee payment gateway.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    category: 'web',
    type: 'Admin Panel',
    badge: 'live',
    url: 'https://www.bhagatechsolutions.com',   // ← replace
    githubUrl: null,
    thumbnail: null,
    icon: 'fas fa-graduation-cap',
    accent: '#6b21ff',
    gradient: 'linear-gradient(135deg,#1a0a3a 0%,#6b21ff 100%)',
    featured: false,
    year: '2023',
    client: 'Educational Institution, Palghar',
  },
  {
    id: 3,
    title: 'Real Estate Listing Website',
    shortDesc:
      'Property portal with advanced search filters, virtual tour links, agent profiles, and WhatsApp lead capture.',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'SEO'],
    category: 'web',
    type: 'Website',
    badge: 'live',
    url: 'https://www.bhagatechsolutions.com',   // ← replace
    githubUrl: null,
    thumbnail: null,
    icon: 'fas fa-building',
    accent: '#17e9e0',
    gradient: 'linear-gradient(135deg,#001a14 0%,#17e9e0 100%)',
    featured: true,
    year: '2024',
    client: 'Real Estate Client, Mumbai',
  },

  // ── MOBILE APP ─────────────────────────────────────────
  {
    id: 4,
    title: 'Restaurant Food Ordering App',
    shortDesc:
      'Flutter app with real-time order tracking, digital menu, table booking, and a loyalty rewards system.',
    tech: ['Flutter', 'Firebase', 'Dart', 'Google Maps'],
    category: 'app',
    type: 'Mobile App',
    badge: 'live',
    url: 'https://play.google.com/store',        // ← replace with Play Store link
    githubUrl: null,
    thumbnail: null,
    icon: 'fas fa-utensils',
    accent: '#00c6ff',
    gradient: 'linear-gradient(135deg,#001a3a 0%,#00c6ff 100%)',
    featured: true,
    year: '2024',
    client: 'F&B Client, Pune',
  },
  {
    id: 5,
    title: 'Clinic Appointment Booking App',
    shortDesc:
      'Android app for a medical clinic — slot booking, doctor profiles, digital prescriptions, and patient history.',
    tech: ['Android', 'Java', 'SQLite', 'Retrofit'],
    category: 'app',
    type: 'Mobile App',
    badge: 'client',
    url: null,                                    // private — no public link
    githubUrl: null,
    thumbnail: null,
    icon: 'fas fa-heartbeat',
    accent: '#ff3d00',
    gradient: 'linear-gradient(135deg,#1a0a0a 0%,#ff3d00 100%)',
    featured: false,
    year: '2023',
    client: 'Healthcare Client, Thane',
  },
  {
    id: 6,
    title: 'Grocery Delivery Flutter App',
    shortDesc:
      'Hyperlocal grocery app with live inventory, slot delivery, in-app wallet, and a multi-vendor admin panel.',
    tech: ['Flutter', 'Firebase', 'Razorpay', 'Google Maps'],
    category: 'app',
    type: 'Mobile App',
    badge: 'demo',
    url: 'https://www.bhagatechsolutions.com',   // ← replace with demo link
    githubUrl: null,
    thumbnail: null,
    icon: 'fas fa-shopping-basket',
    accent: '#22c55e',
    gradient: 'linear-gradient(135deg,#001a0e 0%,#22c55e 100%)',
    featured: true,
    year: '2024',
    client: 'Start-up Client',
  },

  // ── MARKETING ──────────────────────────────────────────
  {
    id: 7,
    title: 'WhatsApp Bulk Marketing Campaign',
    shortDesc:
      'Automated campaign reaching 10,000+ customers with personalised templates, achieving 45% conversion uplift.',
    tech: ['WhatsApp API', 'Node.js', 'Automation', 'Analytics'],
    category: 'marketing',
    type: 'Marketing',
    badge: 'client',
    url: null,
    githubUrl: null,
    thumbnail: null,
    icon: 'fab fa-whatsapp',
    accent: '#25D366',
    gradient: 'linear-gradient(135deg,#0a1a14 0%,#25D366 100%)',
    featured: false,
    year: '2023',
    client: 'Retail Brand, Maharashtra',
  },
  {
    id: 8,
    title: 'SEO & Google Ads Campaign',
    shortDesc:
      'Full digital marketing strategy — technical SEO, content calendar, and Google Ads achieving 300% lead growth.',
    tech: ['SEO', 'Google Ads', 'Google Analytics', 'Content'],
    category: 'marketing',
    type: 'Marketing',
    badge: 'client',
    url: null,
    githubUrl: null,
    thumbnail: null,
    icon: 'fas fa-chart-line',
    accent: '#f5c842',
    gradient: 'linear-gradient(135deg,#1a1200 0%,#f5c842 100%)',
    featured: false,
    year: '2024',
    client: 'Service Business, Palghar',
  },
];

/* ── CATEGORY FILTERS ─────────────────────────────────── */
export const CATEGORY_FILTERS = [
  { key: 'all',       label: 'All Projects', icon: 'fas fa-th-large' },
  { key: 'web',       label: 'Web',          icon: 'fas fa-globe' },
  { key: 'app',       label: 'Mobile App',   icon: 'fas fa-mobile-alt' },
  { key: 'marketing', label: 'Marketing',    icon: 'fas fa-bullhorn' },
];

/* ── TECH FILTERS (curated popular ones) ─────────────── */
export const TECH_FILTERS = [
  'React.js', 'Next.js', 'Flutter', 'Android',
  'PHP', 'Node.js', 'Firebase', 'SEO',
];

/* ── BADGE CONFIG ─────────────────────────────────────── */
export const BADGE_CONFIG = {
  live:   { label: 'Live',           color: '#16a34a', bg: 'rgba(22,163,74,.1)',    icon: 'fas fa-circle' },
  demo:   { label: 'Demo',           color: '#0369a1', bg: 'rgba(3,105,161,.1)',    icon: 'fas fa-play-circle' },
  client: { label: 'Client Project', color: '#92400e', bg: 'rgba(146,64,14,.1)',   icon: 'fas fa-lock' },
  github: { label: 'Open Source',    color: '#1e1b4b', bg: 'rgba(30,27,75,.1)',    icon: 'fab fa-github' },
};

/* ── TYPE CONFIG ──────────────────────────────────────── */
export const TYPE_CONFIG = {
  'Website':     { icon: 'fas fa-globe',       color: '#0369a1' },
  'Mobile App':  { icon: 'fas fa-mobile-alt',  color: '#16a34a' },
  'Admin Panel': { icon: 'fas fa-cogs',         color: '#7c3aed' },
  'Marketing':   { icon: 'fas fa-chart-bar',    color: '#b45309' },
};
