import Logo from '@/components/Logo';

const STATS = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '30+', label: 'Happy Clients'      },
  { num: '7',   label: 'Core Services'      },
  { num: '5★',  label: 'Client Rating'      },
];

const FEATURES = [
  { icon: 'fas fa-code',       title: 'Modern Tech Stack',    desc: 'React, Flutter, Node.js, and cutting-edge frameworks.' },
  { icon: 'fas fa-bolt',       title: 'Fast Delivery',         desc: 'Agile sprints with on-time delivery, every time.'       },
  { icon: 'fas fa-headset',    title: 'Dedicated Support',     desc: '24/7 support with transparent communication.'          },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">

          {/* Visual */}
          <div className="fade-left">
            <div className="about-logo-ring">
              <Logo size={180} />
            </div>
            <div className="about-stats-grid">
              {STATS.map((s) => (
                <div key={s.label} className="about-stat-card fade-up">
                  <div className="about-stat-num">{s.num}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="fade-right">
            <div className="sec-label"><i className="fas fa-info-circle" /> About Us</div>
            <h2 className="sec-title">Your Growth-Focused <span className="sec-accent">Tech Partner</span></h2>
            <div className="teal-bar" style={{ margin: '0 0 24px' }} />

            <p className="about-text">
              Bhagat Tech Solutions is a premium IT company based in Maharashtra, India. We specialise in building
              high-performance web platforms, cross-platform mobile apps, and data-driven digital marketing campaigns
              that deliver measurable business results.
            </p>
            <p className="about-text">
              From local businesses to growing startups, we bring enterprise-level quality at accessible pricing —
              because every business deserves world-class digital solutions.
            </p>

            <div className="about-features">
              {FEATURES.map((f) => (
                <div key={f.title} className="about-feature fade-up">
                  <div className="about-feature-icon"><i className={f.icon} /></div>
                  <div className="about-feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-paper-plane" /> Work With Us
              </a>
              <a href="#services" className="btn btn-ghost">
                <i className="fas fa-layer-group" /> Our Services
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
