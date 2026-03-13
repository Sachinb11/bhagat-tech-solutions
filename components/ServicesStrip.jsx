import { STRIP_ITEMS } from '@/data/services';

export default function ServicesStrip() {
  const doubled = [...STRIP_ITEMS, ...STRIP_ITEMS];
  return (
    <div className="strip-section">
      <div className="strip-track">
        {doubled.map((item, i) => (
          <span key={i} className="strip-item">
            <i className={item.icon} />
            {item.label}
            {i < doubled.length - 1 && <span className="strip-sep">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
