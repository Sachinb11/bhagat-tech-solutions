/**
 * ═══════════════════════════════════════════════════════
 * BHAGAT TECH SOLUTIONS — Testimonials Data
 * ═══════════════════════════════════════════════════════
 *
 * Field guide:
 *   approved  → only true entries appear on the website
 *   avatar    → path under /public/avatars/ (null = initials fallback)
 *   gradient  → used as avatar background when avatar is null
 *   initials  → 2-letter fallback shown inside gradient circle
 * ═══════════════════════════════════════════════════════
 */

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Mehta',
    company: 'Mehta Retail Store',
    role: 'Owner',
    project: 'E-Commerce Website',
    text: 'Bhagat Tech Solutions built our e-commerce platform in just 3 weeks. Sales increased by 40% in the first month. Their attention to detail and speed is unmatched.',
    rating: 5,
    avatar: null,
    initials: 'RM',
    gradient: 'linear-gradient(135deg,#14B8A6,#22C55E)',
    approved: true,
  },
  {
    id: 2,
    name: 'Sunita Patil',
    company: "Patil's Kitchen",
    role: 'Founder',
    project: 'Food Ordering App',
    text: 'The Flutter app they developed for our restaurant runs flawlessly on both Android and iOS. The real-time order tracking feature has reduced customer complaints by 80%.',
    rating: 5,
    avatar: null,
    initials: 'SP',
    gradient: 'linear-gradient(135deg,#0F2A44,#1E3A5F)',
    approved: true,
  },
  {
    id: 3,
    name: 'Amit Sharma',
    company: 'Sharma Builders',
    role: 'Director',
    project: 'SEO & Digital Marketing',
    text: 'Their SEO and Google Ads strategy took us from page 3 to the #1 Google ranking in just 4 months. Lead volume tripled. Best investment we made.',
    rating: 5,
    avatar: null,
    initials: 'AS',
    gradient: 'linear-gradient(135deg,#7C3AED,#5B21B6)',
    approved: true,
  },
  {
    id: 4,
    name: 'Dr. Priya Joshi',
    company: 'Joshi Clinic',
    role: 'Medical Director',
    project: 'Clinic Booking App',
    text: 'Professional, responsive, and genuinely care about results. The clinic appointment app has streamlined our entire booking process. Highly recommend BTS.',
    rating: 5,
    avatar: null,
    initials: 'PJ',
    gradient: 'linear-gradient(135deg,#EF4444,#DC2626)',
    approved: true,
  },
  {
    id: 5,
    name: 'Kavita Desai',
    company: 'Desai Jewellers',
    role: 'Marketing Head',
    project: 'WhatsApp Campaign',
    text: 'WhatsApp marketing campaign during Diwali reached 15,000 customers with a 52% conversion rate. ROI was incredible. The team is creative and data-driven.',
    rating: 5,
    avatar: null,
    initials: 'KD',
    gradient: 'linear-gradient(135deg,#F59E0B,#D97706)',
    approved: true,
  },
  {
    id: 6,
    name: 'Suresh Kulkarni',
    company: 'Kulkarni Academy',
    role: 'Principal',
    project: 'Education Portal',
    text: 'The school portal they built handles 500+ students seamlessly. Online admissions, results, fee payments — everything in one place. Parents love it too.',
    rating: 5,
    avatar: null,
    initials: 'SK',
    gradient: 'linear-gradient(135deg,#22C55E,#16A34A)',
    approved: true,
  },
];

/**
 * GOOGLE REVIEWS CONFIG
 * ─────────────────────────────────────────────────────
 * Replace with your actual Google Place info.
 * Find your Place ID at:
 *   https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
 *
 * writeUrl format: https://g.page/r/YOUR_PLACE_ID/review
 */
export const GOOGLE_CONFIG = {
  placeId: 'YOUR_GOOGLE_PLACE_ID',
  reviewsUrl: 'https://www.google.com/maps/search/Bhagat+Tech+Solutions+Maharashtra',
  writeUrl: 'https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID',
  rating: 5.0,
  totalReviews: 30,
};
