'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS, GOOGLE_CONFIG } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';
import ReviewForm      from '@/components/ReviewForm';

/* Only show approved testimonials */
const APPROVED = TESTIMONIALS.filter(t => t.approved);

/* Framer Motion variants */
const variants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

/* ── Google Trust Badge ────────────────────────────── */
function GoogleBadge() {
  const { rating, totalReviews, reviewsUrl, writeUrl } = GOOGLE_CONFIG;
  const fullStars = Math.floor(rating);

  return (
    <div className="google-trust-wrap fade-up">
      <div className="google-badge-card">
        {/* Google branding */}
        <div className="google-badge-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-label="Google">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="google-badge-label">Google Reviews</span>
        </div>

        {/* Rating display */}
        <div className="google-badge-rating">
          <span className="google-rating-num">{rating.toFixed(1)}</span>
          <div className="google-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`${i < fullStars ? 'fas' : 'far'} fa-star`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="google-review-count">Based on {totalReviews}+ reviews</span>
        </div>

        {/* CTAs */}
        <div className="google-badge-btns">
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline google-view-btn"
          >
            <i className="fas fa-star" /> View All Reviews
          </a>
          <a
            href={writeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <i className="fas fa-pen" /> Write a Review
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Slider dots ───────────────────────────────────── */
function SliderDots({ total, current, onClick }) {
  return (
    <div className="testi-dots" role="tablist" aria-label="Testimonial navigation">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === current}
          aria-label={`Testimonial ${i + 1}`}
          className={`testi-dot${i === current ? ' active' : ''}`}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
}

/* ── Main Testimonials section ─────────────────────── */
export default function Testimonials() {
  const [index,     setIndex]     = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused,    setPaused]    = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((next) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const next = useCallback(() => {
    goTo((index + 1) % APPROVED.length);
  }, [index, goTo]);

  const prev = useCallback(() => {
    goTo((index - 1 + APPROVED.length) % APPROVED.length);
  }, [index, goTo]);

  /* Auto-advance every 5 s unless paused */
  useEffect(() => {
    if (paused || APPROVED.length <= 1) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [paused, next]);

  /* Keyboard nav */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">

        {/* ── Section header ── */}
        <div className="sec-head fade-up">
          <div className="sec-label"><i className="fas fa-quote-left" /> Testimonials</div>
          <h2 className="sec-title">Clients Love <span className="sec-accent">Our Work</span></h2>
          <div className="teal-bar" />
          <p className="sec-subtitle" style={{ marginTop: '16px' }}>
            Don&apos;t take our word for it — here&apos;s what our clients say about working with Bhagat Tech Solutions.
          </p>
        </div>

        {/* ── Slider ── */}
        {APPROVED.length > 0 && (
          <div
            className="testi-slider-wrap fade-up"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Prev / Next arrows */}
            <button
              className="testi-arrow testi-arrow-prev"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left" />
            </button>

            {/* Animated card */}
            <div className="testi-slider-viewport">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="testi-slider-item"
                >
                  <TestimonialCard testimonial={APPROVED[index]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="testi-arrow testi-arrow-next"
              onClick={next}
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right" />
            </button>

            {/* Dots */}
            <SliderDots
              total={APPROVED.length}
              current={index}
              onClick={(i) => goTo(i)}
            />

            {/* Progress bar */}
            <div className="testi-progress-bar">
              <motion.div
                key={`progress-${index}`}
                className="testi-progress-fill"
                initial={{ width: '0%' }}
                animate={{ width: paused ? undefined : '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            </div>
          </div>
        )}

        {/* ── All cards — static visible grid (below slider) ── */}
        <div className="testi-grid-static fade-up">
          {APPROVED.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>

        {/* ── Google Trust Badge ── */}
        <GoogleBadge />

        {/* ── Review Form ── */}
        <div className="review-section fade-up">
          <ReviewForm />
        </div>

      </div>
    </section>
  );
}
