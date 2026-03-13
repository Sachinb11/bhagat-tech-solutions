import Image from 'next/image';

/**
 * TestimonialCard — single testimonial card
 * Used both in the slider and the static grid fallback.
 */
export default function TestimonialCard({ testimonial }) {
  const { name, company, role, project, text, rating, avatar, initials, gradient } = testimonial;

  return (
    <article className="testi-card-v2">
      {/* Quote mark decoration */}
      <div className="testi-quote-icon" aria-hidden="true">
        <i className="fas fa-quote-left" />
      </div>

      {/* Stars */}
      <div className="testi-stars-row" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className={`${i < rating ? 'fas' : 'far'} fa-star testi-star-v2`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review text */}
      <p className="testi-text-v2">&ldquo;{text}&rdquo;</p>

      {/* Author row */}
      <div className="testi-author-v2">
        {/* Avatar */}
        <div className="testi-avatar-v2" style={{ background: gradient }}>
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>

        {/* Name + role */}
        <div className="testi-meta-v2">
          <div className="testi-name-v2">{name}</div>
          <div className="testi-company-v2">{role}, {company}</div>
          {project && (
            <div className="testi-project-v2">
              <i className="fas fa-check-circle" /> {project}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
