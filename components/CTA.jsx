export default function CTA() {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta-inner fade-up">
          <div className="sec-label" style={{ background:'rgba(20,184,166,.15)', borderColor:'rgba(20,184,166,.3)', color:'var(--teal-light)' }}>
            <i className="fas fa-rocket" /> Ready to Start?
          </div>
          <h2>Ready to Grow Your<br />Business Digitally?</h2>
          <p>
            Let&apos;s build something extraordinary together. From your first website to a full-scale
            digital platform — we&apos;re your partner every step of the way.
          </p>
          <div className="cta-btns">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-paper-plane" /> Start a Project
            </a>
            <a href="https://wa.me/918459449727" target="_blank" rel="noopener noreferrer" className="btn btn-wa">
              <i className="fab fa-whatsapp" /> WhatsApp Us
            </a>
            <a href="tel:+918459449727" className="btn btn-white">
              <i className="fas fa-phone" /> Call Now
            </a>
          </div>
          <div className="cta-tag">
            <i className="fas fa-shield-alt" />
            Free consultation · No commitment · Response within 24 hours
          </div>
        </div>
      </div>
    </section>
  );
}
