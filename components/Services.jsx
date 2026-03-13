import { SERVICES } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="sec-head fade-up">
          <div className="sec-label"><i className="fas fa-layer-group" /> What We Do</div>
          <h2 className="sec-title">Services That <span className="sec-accent">Drive Growth</span></h2>
          <div className="teal-bar" />
          <p className="sec-subtitle" style={{ marginTop: '16px' }}>
            From pixel-perfect web design to high-performance mobile apps — we deliver end-to-end
            digital solutions tailored to your business goals.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((svc) => (
            <div key={svc.id} className={`svc-card fade-up ${svc.delay}`}>
              <div className="svc-icon-wrap"><i className={svc.icon} /></div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.description}</p>
              <span className="svc-benefit"><i className="fas fa-check-circle" />{svc.benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
