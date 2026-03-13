import { WHY_ITEMS } from '@/data/services';

export default function WhyChoose() {
  return (
    <section id="why" className="why-section">
      <div className="container">
        <div className="sec-head fade-up">
          <div className="sec-label"><i className="fas fa-star" /> Why Choose Us</div>
          <h2 className="sec-title">Built on <span className="sec-accent">Trust & Results</span></h2>
          <div className="teal-bar" />
          <p className="sec-subtitle" style={{ marginTop: '16px' }}>
            We don&apos;t just build software — we build partnerships that grow with your business.
          </p>
        </div>
        <div className="why-grid">
          {WHY_ITEMS.map((item) => (
            <div key={item.title} className={`why-card fade-up ${item.delay}`}>
              <div className="why-icon" style={{ '--icon-color': item.color }}>
                <i className={item.icon} style={{ color: item.color }} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
