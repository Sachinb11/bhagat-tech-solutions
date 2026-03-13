'use client';
/**
 * CustomCursor — Premium two-layer cursor
 *
 * Layer 1 (dot):  small filled circle that snaps to the pointer instantly
 *                 via direct DOM style writes — zero React re-renders on move.
 *
 * Layer 2 (ring): larger hollow circle that lerps to the pointer position
 *                 on every requestAnimationFrame — creates the premium lag.
 *
 * States
 *   default  →  gold dot  +  gold ring
 *   hover    →  ring scales up + fills teal tint (on <a> <button> .svc-card etc.)
 *   click    →  ring snaps inward (scale-down then back)
 *   hidden   →  both layers fade out when the pointer leaves the window
 *
 * Only activates on fine-pointer devices (desktop mice).
 * Touch screens get the native cursor as normal.
 */

import { useEffect, useRef } from 'react';

/* ─── tuning ─────────────────────────────────────────── */
const LERP_SPEED   = 0.115;   // ring follow speed  (0–1, lower = more lag)
const DOT_SIZE     = 7;       // px, default dot diameter
const DOT_SIZE_H   = 11;      // px, hover dot diameter
const RING_SIZE    = 36;      // px, default ring diameter
const RING_SIZE_H  = 50;      // px, hover  ring diameter
const RING_SIZE_C  = 26;      // px, click  ring diameter

/* interactive selectors that trigger the "hover" state */
const HOVER_SEL = [
  'a', 'button', 'input', 'select', 'textarea', 'label',
  '[role="button"]', '[tabindex]',
  '.svc-card', '.proj-card-wrap', '.testi-card',
  '.team-card', '.why-card', '.about-stat-card',
  '.port-filter-btn', '.port-tech-pill', '.contact-item',
  '.foot-social', '.contact-social-btn',
].join(',');
/* ──────────────────────────────────────────────────────── */

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    /* skip on touch / coarse-pointer devices */
    if (
      typeof window === 'undefined' ||
      !window.matchMedia('(pointer: fine)').matches
    ) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    /* ── state ── */
    const mouse = { x: 0, y: 0 };
    const pos   = { x: 0, y: 0 };   // ring's current lerped position
    let visible = false;
    let hover   = false;
    let clicked = false;
    let raf     = 0;

    /* ── helpers ── */
    const setDot = () => {
      const s = hover ? DOT_SIZE_H : DOT_SIZE;
      dot.style.width  = `${s}px`;
      dot.style.height = `${s}px`;
      dot.style.marginLeft = `${-s / 2}px`;
      dot.style.marginTop  = `${-s / 2}px`;
      dot.style.background = hover
        ? 'linear-gradient(135deg,#14B8A6,#22C55E)'
        : '#C9A84C';
    };

    const setRing = () => {
      const s = clicked ? RING_SIZE_C : hover ? RING_SIZE_H : RING_SIZE;
      ring.style.width  = `${s}px`;
      ring.style.height = `${s}px`;
      ring.style.marginLeft = `${-s / 2}px`;
      ring.style.marginTop  = `${-s / 2}px`;
      ring.style.borderColor = hover
        ? 'rgba(20,184,166,.75)'
        : 'rgba(201,168,76,.65)';
      ring.style.background = hover
        ? 'rgba(20,184,166,.06)'
        : 'transparent';
    };

    /* ── RAF loop (ring only) ── */
    const tick = () => {
      pos.x += (mouse.x - pos.x) * LERP_SPEED;
      pos.y += (mouse.y - pos.y) * LERP_SPEED;
      ring.style.transform = `translate(${pos.x}px,${pos.y}px)`;
      raf = requestAnimationFrame(tick);
    };

    /* ── events ── */
    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      /* dot snaps instantly via direct style write */
      dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      if (!visible) {
        visible = true;
        dot.style.opacity  = '1';
        ring.style.opacity = '1';
      }
    };

    const onEnter = () => {
      visible = true;
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
    };

    const onDown = () => {
      clicked = true;
      setRing();
    };

    const onUp = () => {
      clicked = false;
      setRing();
    };

    /* delegate hover detection — works for dynamically added elements */
    const onMouseOver = (e) => {
      if (e.target.closest(HOVER_SEL)) {
        hover = true;
        setDot();
        setRing();
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest(HOVER_SEL)) {
        hover = false;
        setDot();
        setRing();
      }
    };

    window.addEventListener('mousemove',  onMove,      { passive: true });
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover',  onMouseOver, { passive: true });
    document.addEventListener('mouseout',   onMouseOut,  { passive: true });

    /* initialise ring position at centre so it doesn't fly in */
    pos.x = window.innerWidth  / 2;
    pos.y = window.innerHeight / 2;

    setDot();
    setRing();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover',  onMouseOver);
      document.removeEventListener('mouseout',   onMouseOut);
    };
  }, []);

  return (
    <>
      {/* hide-native-cursor rule injected as a style tag so it applies globally */}
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>

      {/* DOT — snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          zIndex:        99999,
          pointerEvents: 'none',
          width:         `${DOT_SIZE}px`,
          height:        `${DOT_SIZE}px`,
          marginLeft:    `${-DOT_SIZE / 2}px`,
          marginTop:     `${-DOT_SIZE / 2}px`,
          borderRadius:  '50%',
          background:    '#C9A84C',
          opacity:       0,
          willChange:    'transform',
          transform:     'translate(0px,0px)',
          transition:
            'width .22s ease, height .22s ease, margin .22s ease, ' +
            'background .22s ease, opacity .3s ease',
        }}
      />

      {/* RING — lags behind via lerp */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          zIndex:        99998,
          pointerEvents: 'none',
          width:         `${RING_SIZE}px`,
          height:        `${RING_SIZE}px`,
          marginLeft:    `${-RING_SIZE / 2}px`,
          marginTop:     `${-RING_SIZE / 2}px`,
          borderRadius:  '50%',
          border:        '1.5px solid rgba(201,168,76,.65)',
          background:    'transparent',
          opacity:       0,
          willChange:    'transform',
          transform:     'translate(0px,0px)',
          transition:
            'width .35s cubic-bezier(.25,.46,.45,.94), ' +
            'height .35s cubic-bezier(.25,.46,.45,.94), ' +
            'margin .35s cubic-bezier(.25,.46,.45,.94), ' +
            'border-color .25s ease, background .25s ease, opacity .3s ease',
        }}
      />
    </>
  );
}
