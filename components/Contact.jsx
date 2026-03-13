'use client';
import { useState } from 'react';
import { submitContactForm } from '@/lib/contactService';
import { CONTACT_CONFIG }    from '@/lib/contactConfig';

const SERVICES_LIST = ['Web Development','Android App','iOS App','Flutter App','Digital Marketing','WhatsApp Marketing','SEO Optimization','Other'];

const INFO_ITEMS = [
  { icon:'fas fa-phone',         label:'Call / WhatsApp', val:'+91 8459449727',                href:'tel:+918459449727'                      },
  { icon:'fas fa-envelope',      label:'Email Address',   val:'bhagattechsolutions@gmail.com', href:'mailto:bhagattechsolutions@gmail.com'   },
  { icon:'fas fa-globe',         label:'Website',         val:'www.bhagatechsolutions.com',    href:'https://www.bhagatechsolutions.com'     },
  { icon:'fas fa-map-marker-alt',label:'Location',        val:'Maharashtra, India',            href:null                                    },
];

const SOCIALS = [
  { icon: 'fab fa-facebook-f',  href: 'https://www.facebook.com/profile.php?id=61583747224431', title: 'Facebook'  },
  { icon: 'fab fa-instagram',   href: 'https://www.instagram.com/bhagat.techsolutions',          title: 'Instagram' },
  { icon: 'fab fa-whatsapp',    href: 'https://wa.me/918459449727',                               title: 'WhatsApp' },
  { icon: 'fas fa-envelope',    href: 'mailto:bhagattechsolutions@gmail.com',                     title: 'Email'    },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/bhagat-tech-solutions/',  title: 'LinkedIn' }
];

const isConfigured = (v, p) => v && v !== p;

export default function Contact() {
  const [form, setForm]       = useState({ name:'', email:'', phone:'', service:'', message:'' });
  const [status, setStatus]   = useState(null);
  const [loading, setLoading] = useState(false);

  const showSetup = !isConfigured(CONTACT_CONFIG.web3formsKey,'YOUR_WEB3FORMS_KEY') && !isConfigured(CONTACT_CONFIG.emailjsServiceId,'YOUR_SERVICE_ID');

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { alert('Please fill Name, Email and Message.'); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { alert('Please enter a valid email.'); return false; }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true); setStatus(null);
    try {
      const res = await submitContactForm(form);
      setStatus(res.success ? 'success' : 'error');
      if (res.success) setForm({ name:'', email:'', phone:'', service:'', message:'' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="sec-head fade-up">
          <div className="sec-label"><i className="fas fa-paper-plane" /> Get In Touch</div>
          <h2 className="sec-title">Let&apos;s Build Something <span className="sec-accent">Amazing</span></h2>
          <div className="teal-bar" />
          <p className="sec-subtitle" style={{ marginTop:'16px' }}>
            Ready to start your project? Send us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="fade-left">
            <h2 style={{ marginBottom:'12px' }}>Contact <span className="sec-accent">Information</span></h2>
            <p style={{ color:'var(--text-muted)', marginBottom:'32px', lineHeight:1.8 }}>
              Reach out through any channel — WhatsApp is the fastest way to connect with us.
            </p>

            <div className="contact-items">
              {INFO_ITEMS.map((item) =>
                item.href ? (
                  <a key={item.val} href={item.href} className="contact-item">
                    <div className="contact-item-icon"><i className={item.icon} /></div>
                    <div className="contact-item-info">
                      <strong>{item.label}</strong>
                      <span>{item.val}</span>
                    </div>
                  </a>
                ) : (
                  <div key={item.val} className="contact-item">
                    <div className="contact-item-icon"><i className={item.icon} /></div>
                    <div className="contact-item-info">
                      <strong>{item.label}</strong>
                      <span>{item.val}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="contact-social">
              {SOCIALS.map(s => (
                <a key={s.title} href={s.href} title={s.title} className="contact-social-btn" target={s.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="fade-right">
            <div className="contact-form-wrap">
              <h3>Send Us a Message</h3>
              <p>Fill in the form and we&apos;ll reach out within 24 hours.</p>

              {showSetup && (
                <div className="form-notice">
                  <strong>⚙️ Setup Required:</strong> Add your{' '}
                  <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">Web3Forms</a> or{' '}
                  <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer">EmailJS</a> keys to{' '}
                  <code>.env.local</code>. WhatsApp fallback works immediately.
                </div>
              )}

              {status === 'success' && <div className="form-success"><i className="fas fa-check-circle" /> Message sent! We&apos;ll be in touch shortly.</div>}
              {status === 'error'   && <div className="form-error"><i className="fas fa-exclamation-triangle" /> Something went wrong. Please try WhatsApp.</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-field">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="form-field">
                    <label>Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label>Your Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={4} required />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }} disabled={loading}>
                  {loading ? <><i className="fas fa-spinner fa-spin" /> Sending...</> : <><i className="fas fa-paper-plane" /> Send Message</>}
                </button>
                <p className="form-channels">
                  <i className="fas fa-shield-alt" /> Sent via Email · <i className="fab fa-whatsapp" /> WhatsApp fallback active
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
