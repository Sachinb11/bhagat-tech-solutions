'use client';
import { useState } from 'react';

const EMPTY = { name: '', company: '', rating: 0, message: '' };

export default function ReviewForm() {
  const [form, setForm]       = useState(EMPTY);
  const [hover, setHover]     = useState(0);
  const [status, setStatus]   = useState(null);
  const [errMsg, setErrMsg]   = useState('');
  const [loading, setLoading] = useState(false);

  const set = (field, val) => setForm(p => ({ ...p, [field]: val }));

  const validate = () => {
    if (!form.name.trim())    { alert('Please enter your name.');         return false; }
    if (!form.company.trim()) { alert('Please enter your company name.'); return false; }
    if (form.rating < 1)      { alert('Please select a star rating.');    return false; }
    if (!form.message.trim()) { alert('Please write your review.');       return false; }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus(null);
    setErrMsg('');

    try {
      const res = await fetch('/api/reviews', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name.trim(),
          company: form.company.trim(),
          rating:  form.rating,
          message: form.message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Show the exact error from the API (e.g. "Supabase not configured")
        setErrMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm(EMPTY);

    } catch (err) {
      // This only fires if the server is completely unreachable
      console.error('ReviewForm fetch error:', err);
      setErrMsg('Could not reach the server. Make sure npm run dev is running.');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const STAR_LABELS = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
  const active = hover || form.rating;

  return (
    <div className="review-form-wrap">
      <div className="review-form-header">
        <div className="review-form-icon">
          <i className="fas fa-pen-nib" />
        </div>
        <div>
          <h3 className="review-form-title">Share Your Experience</h3>
          <p className="review-form-sub">
            Your review helps others and helps us improve. All reviews are verified before publishing.
          </p>
        </div>
      </div>

      {status === 'success' && (
        <div className="review-success">
          <i className="fas fa-check-circle" />
          <div>
            <strong>Thank you for your review!</strong>
            <p>It&apos;s been received and will appear on the site once approved.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="review-error">
          <i className="fas fa-exclamation-triangle" />
          <span>{errMsg}</span>
        </div>
      )}

      {status !== 'success' && (
        <form onSubmit={handleSubmit} className="review-form">
          <div className="review-form-row">
            <div className="review-field">
              <label htmlFor="rv-name">Full Name <span className="req">*</span></label>
              <input
                id="rv-name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => set('name', e.target.value)}
                required
              />
            </div>
            <div className="review-field">
              <label htmlFor="rv-company">Company / Business <span className="req">*</span></label>
              <input
                id="rv-company"
                type="text"
                placeholder="Your business name"
                value={form.company}
                onChange={e => set('company', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="review-field">
            <label>Your Rating <span className="req">*</span></label>
            <div className="star-picker" role="group" aria-label="Select rating">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  type="button"
                  className={`star-btn${n <= active ? ' active' : ''}`}
                  onClick={() => set('rating', n)}
                  onMouseEnter={() => setHover(n)}
                  onMouseLeave={() => setHover(0)}
                  aria-label={`${n} star${n > 1 ? 's' : ''}`}
                >
                  <i className="fas fa-star" />
                </button>
              ))}
              {active > 0 && <span className="star-label">{STAR_LABELS[active]}</span>}
            </div>
          </div>

          <div className="review-field">
            <label htmlFor="rv-msg">Your Review <span className="req">*</span></label>
            <textarea
              id="rv-msg"
              placeholder="Tell us about your experience with Bhagat Tech Solutions..."
              rows={4}
              value={form.message}
              onChange={e => set('message', e.target.value)}
              required
            />
          </div>

          <div className="review-form-footer">
            <p className="review-privacy">
              <i className="fas fa-shield-alt" />
              Reviews are moderated before being published. We never share your details.
            </p>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading
                ? <><i className="fas fa-spinner fa-spin" /> Submitting...</>
                : <><i className="fas fa-paper-plane" /> Submit Review</>
              }
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
