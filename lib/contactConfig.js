/**
 * CONTACT FORM CONFIG
 * ──────────────────────────────────────────────────────────────
 * Fill in your real credentials below. Instructions:
 *
 * WEB3FORMS:
 *   1. Visit https://web3forms.com
 *   2. Enter bhagattechsolutions@gmail.com → Get Access Key
 *   3. Paste the key as WEB3FORMS_KEY
 *
 * EMAILJS:
 *   1. Sign up at https://emailjs.com
 *   2. Connect your Gmail account
 *   3. Create a Service  → copy Service ID  → EMAILJS_SERVICE_ID
 *   4. Create a Template → copy Template ID → EMAILJS_TEMPLATE_ID
 *   5. Account tab       → copy Public Key  → EMAILJS_PUBLIC_KEY
 *
 * WHATSAPP:
 *   Already set — no configuration needed!
 * ──────────────────────────────────────────────────────────────
 */
export const CONTACT_CONFIG = {
  // ── Web3Forms ──────────────────────────
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY',

  // ── EmailJS ────────────────────────────
  emailjsServiceId:  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID',
  emailjsTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  emailjsPublicKey:  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY',

  // ── WhatsApp ───────────────────────────
  whatsappNumber: '918459449727',

  // ── Business email (fallback display) ─
  businessEmail: 'bhagattechsolutions@gmail.com',
};
