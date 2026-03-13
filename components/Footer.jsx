import Logo from '@/components/Logo';

const QUICK_LINKS = [
  { href: '#home',      label: 'Home'      },
  { href: '#about',     label: 'About Us'  },
  { href: '#services',  label: 'Services'  },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#team',      label: 'Our Team'  },
  { href: '#contact',   label: 'Contact'   },
];

const SERVICES = [
  'Web Development', 'Flutter App Dev', 'Android App Dev',
  'iOS App Dev', 'Digital Marketing', 'WhatsApp Marketing', 'SEO Optimization',
];

const SOCIALS = [
  { icon: 'fab fa-facebook-f',  href: 'https://www.facebook.com/profile.php?id=61583747224431',          title: 'Facebook'  },
  { icon: 'fab fa-instagram',   href: 'https://www.instagram.com/bhagat.techsolutions',                   title: 'Instagram' },
  { icon: 'fab fa-whatsapp',    href: 'https://wa.me/918459449727',           title: 'WhatsApp'  },
  { icon: 'fas fa-envelope',    href: 'mailto:bhagattechsolutions@gmail.com', title: 'Email'     },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/company/bhagat-tech-solutions/',                                    title: 'LinkedIn'  },
];

const CONTACT = [
  { icon: 'fas fa-phone',         val: '+91 8459449727',                  href: 'tel:+918459449727'                        },
  { icon: 'fas fa-envelope',      val: 'bhagattechsolutions@gmail.com',   href: 'mailto:bhagattechsolutions@gmail.com'     },
  { icon: 'fas fa-globe',         val: 'www.bhagatechsolutions.com',      href: 'https://www.bhagatechsolutions.com'       },
  { icon: 'fas fa-map-marker-alt',val: 'Maharashtra, India',              href: null                                       },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main">

          {/* Brand */}
          <div>
            <div className="foot-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Logo size={38} />
              <div className="logo-text" style={{ color: '#fff' }}>
                Bhagat Tech Solutions
                <span style={{ color: 'rgba(255,255,255,.45)' }}>Digital &amp; Software Solutions</span>
              </div>
            </div>
            <p className="foot-desc">
              Building powerful websites, mobile apps, and digital campaigns for businesses across Maharashtra and beyond.
            </p>
            <div className="foot-socials">
              {SOCIALS.map((s) => (
                <a key={s.title} href={s.href} title={s.title} className="foot-social" target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="foot-col">
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="foot-col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="foot-col">
            <h4>Contact Us</h4>
            <div className="foot-contact-list">
              {CONTACT.map((c) =>
                c.href ? (
                  <a key={c.val} href={c.href} className="foot-contact-item">
                    <i className={c.icon} />{c.val}
                  </a>
                ) : (
                  <div key={c.val} className="foot-contact-item">
                    <i className={c.icon} />{c.val}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Bhagat Tech Solutions. All rights reserved.</p>
          <span className="footer-bottom-right">Made with ♥ in Maharashtra, India</span>
        </div>
      </div>
    </footer>
  );
}
