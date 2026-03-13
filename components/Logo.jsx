'use client';
import { useState } from 'react';
import Image from 'next/image';

/**
 * Smart Logo component
 * - Tries to load /logo.png first (place your real logo here)
 * - If PNG fails (missing/404), automatically falls back to /logo.svg
 * - If both fail, renders a clean CSS text fallback
 * - Works correctly in dev, production, and Vercel/Netlify deployment
 */
export default function Logo({ size = 44, className = '' }) {
  const [src,    setSrc]    = useState('/logo.png');
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (src === '/logo.png') {
      // PNG missing → try SVG
      setSrc('/logo.svg');
    } else {
      // SVG also missing → use CSS fallback
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <span
        className={`logo-fallback ${className}`}
        style={{
          width:          size,
          height:         size,
          borderRadius:   '50%',
          background:     'linear-gradient(135deg, #00afaf, #00c6b8)',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontFamily:     'Arial Black, sans-serif',
          fontWeight:     900,
          fontSize:       size * 0.3,
          color:          '#fff',
          flexShrink:     0,
          letterSpacing:  '0.5px',
        }}
      >
        BTS
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt="Bhagat Tech Solutions Logo"
      width={size}
      height={size}
      priority
      className={className}
      onError={handleError}
      style={{ flexShrink: 0, display: 'block', objectFit: 'contain' }}
    />
  );
}
