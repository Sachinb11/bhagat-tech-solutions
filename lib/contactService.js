import { CONTACT_CONFIG as CFG } from './contactConfig';

/**
 * Send via Web3Forms API
 */
export async function sendWeb3Forms(data) {
  if (
    !CFG.web3formsKey ||
    CFG.web3formsKey === 'YOUR_WEB3FORMS_KEY'
  ) {
    throw new Error('Web3Forms key not configured');
  }

  const formData = new FormData();
  formData.append('access_key', CFG.web3formsKey);
  formData.append('name',    data.name);
  formData.append('email',   data.email);
  formData.append('phone',   data.phone   || 'N/A');
  formData.append('service', data.service || 'Not specified');
  formData.append('message', data.message);
  formData.append(
    'subject',
    `New Enquiry from ${data.name} — BTS Website`
  );

  const res  = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message || 'Web3Forms failed');
  return json;
}

/**
 * Send via EmailJS (lazy-loads SDK)
 */
export async function sendEmailJS(data) {
  if (
    !CFG.emailjsServiceId ||
    CFG.emailjsServiceId === 'YOUR_SERVICE_ID'
  ) {
    throw new Error('EmailJS not configured');
  }

  // Lazy-load EmailJS browser SDK
  const emailjs = await import('@emailjs/browser');
  emailjs.init(CFG.emailjsPublicKey);

  return emailjs.send(CFG.emailjsServiceId, CFG.emailjsTemplateId, {
    from_name:  data.name,
    from_email: data.email,
    phone:      data.phone   || 'N/A',
    service:    data.service || 'Not specified',
    message:    data.message,
    to_email:   CFG.businessEmail,
    reply_to:   data.email,
  });
}

/**
 * Build WhatsApp deep-link URL (always works, no config needed)
 */
export function buildWhatsAppURL(data) {
  const text = [
    '👋 *New Enquiry — Bhagat Tech Solutions*',
    '─────────────────────',
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    data.phone   ? `*Phone:* ${data.phone}`     : null,
    data.service ? `*Service:* ${data.service}` : null,
    `*Message:* ${data.message}`,
    '─────────────────────',
    '_Sent via website contact form_',
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${CFG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Master submit — tries all three channels
 * Returns { emailSent: boolean }
 */
export async function submitContactForm(data) {
  let emailSent = false;

  // Channel 1 — Web3Forms
  try {
    await sendWeb3Forms(data);
    emailSent = true;
    console.log('✅ Web3Forms: sent');
  } catch (e) {
    console.warn('Web3Forms skipped:', e.message);
  }

  // Channel 2 — EmailJS
  try {
    await sendEmailJS(data);
    emailSent = true;
    console.log('✅ EmailJS: sent');
  } catch (e) {
    console.warn('EmailJS skipped:', e.message);
  }

  // Channel 3 — WhatsApp (always)
  const waURL = buildWhatsAppURL(data);
  if (typeof window !== 'undefined') {
    window.open(waURL, '_blank');
  }

  // NOTE: success:true is always returned because the WhatsApp fallback always works.
  // emailSent indicates whether an email copy was also dispatched.
  return { success: true, emailSent, waURL };
}
