import Navbar           from '@/components/Navbar';
import Portfolio        from '@/components/Portfolio';
import CTA              from '@/components/CTA';
import Footer           from '@/components/Footer';
import WAFloat          from '@/components/WAFloat';
import ScrollRevealInit from '@/components/ScrollRevealInit';

export const metadata = {
  title: 'Projects & Portfolio – Bhagat Tech Solutions',
  description:
    'Explore live websites, mobile apps, and digital marketing campaigns delivered by Bhagat Tech Solutions. Real projects, real results — click to view.',
  openGraph: {
    title: 'Projects & Portfolio – Bhagat Tech Solutions',
    description:
      'Live websites, Flutter apps, Android apps, and marketing campaigns delivered across Maharashtra.',
    url: 'https://www.bhagatechsolutions.com/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />

      <main>
        {/* Page hero header */}
        <div
          style={{
            paddingTop: '74px',
            background:
              'linear-gradient(160deg,#04080f 0%,#080d18 60%,#04080f 100%)',
            borderBottom: '1px solid rgba(0,198,255,.1)',
          }}
        >
          <div
            className="container"
            style={{ padding: '60px 24px 56px', textAlign: 'center' }}
          >
            {/* FIXED: was .tag (undefined) → .sec-label */}
            <div className="sec-label" style={{ marginBottom: '20px' }}>
              <i className="fas fa-briefcase" /> Our Work
            </div>

            {/* FIXED: var(--font-heading) → var(--font-display) */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem,4.5vw,3.2rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '14px',
              }}
            >
              Projects &amp;{' '}
              {/* FIXED: .grad-text (undefined) → inline gradient */}
              <span
                style={{
                  background: 'var(--g-teal)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Portfolio
              </span>
            </h1>

            {/* FIXED: var(--muted) → var(--text-muted) */}
            <p
              style={{
                color: 'var(--text-muted)',
                maxWidth: '520px',
                margin: '0 auto',
                fontSize: '1rem',
                lineHeight: 1.7,
              }}
            >
              Real projects we&apos;ve built for clients — live websites,
              mobile apps, and campaigns you can explore right now.
            </p>
          </div>
        </div>

        <Portfolio />
        <CTA />
      </main>

      <Footer />
      <WAFloat />
    </>
  );
}
