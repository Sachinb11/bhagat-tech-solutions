'use client';
import Logo             from '@/components/Logo';
import { useTypewriter } from '@/hooks/useTypewriter';

const DASH_PROJECTS = [
  { name: 'E-Commerce Platform', icon: 'fas fa-store',     bg: 'linear-gradient(135deg,#14B8A6,#22C55E)', status: 'live',   label: 'Live' },
  { name: 'Food Delivery App',   icon: 'fas fa-utensils',  bg: 'linear-gradient(135deg,#0F2A44,#1E3A5F)', status: 'build',  label: 'Building' },
  { name: 'Real Estate Portal',  icon: 'fas fa-building',  bg: 'linear-gradient(135deg,#7C3AED,#5B21B6)', status: 'design', label: 'Design' },
];

const BAR_HEIGHTS = [35, 50, 28, 65, 45, 80, 55];

export default function Hero() {
  const typed = useTypewriter();

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-mesh" />
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-inner">

          {/* ── LEFT ── */}
          <div>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Premier IT &amp; Digital Solutions — Maharashtra, India
            </div>

            <h1 className="hero-title">
              Build Powerful<br />
              <span className="hero-title-accent">Apps &amp; Digital</span><br />
              Solutions
            </h1>

            <div className="hero-typewriter-wrap">
              <span className="hero-typewriter-prefix">Experts in</span>
              <span className="hero-typed">{typed}<span className="hero-cursor" /></span>
            </div>

            <p className="hero-sub">
              We help startups and businesses build <strong>modern websites</strong>,{' '}
              <strong>mobile apps</strong>, and <strong>scalable digital platforms</strong>{' '}
              that drive real growth.
            </p>

            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-rocket" /> Get Free Consultation
              </a>
              <a href="#portfolio" className="btn btn-outline">
                <i className="fas fa-briefcase" /> View Our Work
              </a>
            </div>

            {/* <div className="hero-stats">
              <StatItem target={50} suffix="+" label="Projects Done" />
              <div className="hero-stat-div" />
              <StatItem target={30} suffix="+" label="Happy Clients" />
              <div className="hero-stat-div" />
              <StatItem target={7}  suffix=""  label="Core Services" />
              <div className="hero-stat-div" />
              <StatItem target={5}  suffix="★" label="Avg Rating" />
            </div> */}
          </div>

          {/* ── RIGHT — Dashboard Mockup ── */}
          <div className="hero-visual">

            {/* Floating badges */}
            <div className="hero-badge hb1">
              <div className="hero-badge-icon" style={{ background: 'linear-gradient(135deg,#22C55E,#16A34A)' }}>
                <i className="fas fa-check" />
              </div>
              <div>
                <div style={{ fontSize: '.68rem', color: 'var(--text-muted)', marginBottom: '1px' }}>Delivered</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '.92rem' }}>On Time ✓</div>
              </div>
            </div>

            <div className="hero-badge hb2">
              <div className="hero-badge-icon" style={{ background: 'linear-gradient(135deg,#F59E0B,#D97706)' }}>
                <i className="fas fa-star" />
              </div>
              <div>
                <div style={{ fontSize: '.68rem', color: 'var(--text-muted)', marginBottom: '1px' }}>Client Rating</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '.92rem' }}>5.0 Stars</div>
              </div>
            </div>

            {/* Main dashboard card */}
            <div className="hero-dashboard">
              {/* Topbar */}
              <div className="dash-topbar">
                <div className="dash-dots">
                  <div className="dash-dot dash-dot-r" />
                  <div className="dash-dot dash-dot-y" />
                  <div className="dash-dot dash-dot-g" />
                </div>
                <div className="dash-title-bar">
                  <i className="fas fa-chart-line" style={{ marginRight: '6px', color: 'var(--teal)' }} />
                  BTS Dashboard
                </div>
                <Logo size={22} />
              </div>

              {/* Metrics row */}
              <div className="dash-metrics">
                {[
                  { icon: '🚀', val: '50+', label: 'Projects' },
                  { icon: '😊', val: '30+', label: 'Clients' },
                  { icon: '⭐', val: '5.0', label: 'Rating' },
                ].map((m) => (
                  <div key={m.label} className="dash-metric">
                    <div className="dash-metric-icon">{m.icon}</div>
                    <div className="dash-metric-val">{m.val}</div>
                    <div className="dash-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="dash-chart-area">
                <div className="dash-chart-label">
                  Monthly Deliveries
                  <span className="dash-chart-badge">+23% ↑</span>
                </div>
                <div className="dash-bars">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div
                      key={i}
                      className={`dash-bar${i === 5 ? ' active' : ''}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent projects */}
              <div className="dash-projects">
                {DASH_PROJECTS.map((p) => (
                  <div key={p.name} className="dash-proj-row">
                    <div className="dash-proj-icon" style={{ background: p.bg }}>
                      <i className={p.icon} />
                    </div>
                    <span className="dash-proj-name">{p.name}</span>
                    <span className={`dash-proj-status status-${p.status}`}>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
