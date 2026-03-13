'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import {
  PROJECTS, CATEGORY_FILTERS, TECH_FILTERS,
  BADGE_CONFIG, TYPE_CONFIG,
} from '@/data/portfolio';

function Badge({ type }) {
  const cfg = BADGE_CONFIG[type];
  if (!cfg) return null;
  return (
    <span className="proj-badge" style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.color}33` }}>
      <i className={cfg.icon} style={{ fontSize: '.55rem' }} />{cfg.label}
    </span>
  );
}

function TypeChip({ type }) {
  const cfg = TYPE_CONFIG[type] || { icon: 'fas fa-tag', color: '#64748B' };
  return (
    <span className="proj-type-chip" style={{ color: cfg.color }}>
      <i className={cfg.icon} />{type}
    </span>
  );
}

function ProjectCard({ project }) {
  const { title, shortDesc, tech, type, badge, url, githubUrl, thumbnail, icon, gradient, accent, featured, year, client } = project;
  const primaryUrl = url || githubUrl;

  const handleClick = () => { if (primaryUrl) window.open(primaryUrl, '_blank', 'noopener,noreferrer'); };

  return (
    <div
      className={`proj-card-wrap${primaryUrl ? '' : ' proj-card-wrap--disabled'}`}
      onClick={handleClick}
      role={primaryUrl ? 'link' : undefined}
      tabIndex={primaryUrl ? 0 : undefined}
      style={{ cursor: primaryUrl ? 'pointer' : 'default' }}
      onKeyDown={(e) => { if (primaryUrl && (e.key==='Enter'||e.key===' ')) handleClick(); }}
    >
      <article className="proj-card" style={{ '--accent': accent }}>
        <div className="proj-thumb" style={{ background: gradient }}>
          {thumbnail
            ? <Image src={thumbnail} alt={title} fill sizes="(max-width:768px)100vw,380px" style={{ objectFit:'cover' }} className="proj-thumb-img" />
            : <i className={`${icon} proj-thumb-icon`} />
          }
          <div className="proj-overlay">
            <span className="proj-overlay-inner">
              {primaryUrl ? <><i className="fas fa-external-link-alt" /> View Project</> : <><i className="fas fa-lock" /> Private</>}
            </span>
          </div>
          {featured && <span className="proj-ribbon"><i className="fas fa-star" /> Featured</span>}
          <div className="proj-badge-pos"><Badge type={badge} /></div>
        </div>

        <div className="proj-body">
          <div className="proj-meta">
            <TypeChip type={type} />
            <span className="proj-year">{year}</span>
          </div>
          <h3 className="proj-title">{title}</h3>
          <p className="proj-desc">{shortDesc}</p>
          <div className="proj-tags">{tech.map((t) => <span key={t} className="proj-tag">{t}</span>)}</div>
          {client && <p className="proj-client"><i className="fas fa-briefcase" /> {client}</p>}
          <div className="proj-actions">
            {primaryUrl
              ? <a href={primaryUrl} target="_blank" rel="noopener noreferrer" className="proj-view-btn" onClick={(e)=>e.stopPropagation()}>
                  <i className={githubUrl&&!url?'fab fa-github':'fas fa-external-link-alt'} />
                  {githubUrl&&!url?'View on GitHub':'View Project'}
                </a>
              : <span className="proj-lock-btn"><i className="fas fa-lock" /> Private Project</span>
            }
            {githubUrl && url && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="proj-gh-btn" onClick={(e)=>e.stopPropagation()}>
                <i className="fab fa-github" />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

function StatsRow() {
  const live = PROJECTS.filter(p=>p.badge==='live').length;
  const apps = PROJECTS.filter(p=>p.category==='app').length;
  const web  = PROJECTS.filter(p=>p.category==='web').length;
  return (
    <div className="port-stats-row fade-up">
      {[
        { icon:'fas fa-briefcase', num:PROJECTS.length+'+', label:'Total Projects', color:'#0D9488' },
        { icon:'fas fa-globe',     num:live+'+',             label:'Live Projects',  color:'#16A34A' },
        { icon:'fas fa-code',      num:web+'+',              label:'Web Projects',   color:'#7C3AED' },
        { icon:'fas fa-mobile-alt',num:apps+'+',             label:'Mobile Apps',    color:'#0369A1' },
      ].map(({ icon, num, label, color }) => (
        <div key={label} className="port-stat-cell">
          <span className="port-stat-icon" style={{ color }}><i className={icon} /></span>
          <span className="port-stat-num" style={{ color }}>{num}</span>
          <span className="port-stat-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [cat,  setCat]  = useState('all');
  const [tech, setTech] = useState(null);
  const [q,    setQ]    = useState('');

  const filtered = useMemo(() => PROJECTS.filter(p => {
    const catOk  = cat==='all' || p.category===cat;
    const techOk = !tech || p.tech.includes(tech);
    const sq     = q.toLowerCase();
    const qOk    = !sq || p.title.toLowerCase().includes(sq) || p.shortDesc.toLowerCase().includes(sq) || p.tech.some(t=>t.toLowerCase().includes(sq));
    return catOk && techOk && qOk;
  }), [cat, tech, q]);

  const hasFilters = cat!=='all' || tech || q;
  const clear = () => { setCat('all'); setTech(null); setQ(''); };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="sec-head fade-up">
          <div className="sec-label"><i className="fas fa-briefcase" /> Our Work</div>
          <h2 className="sec-title">Projects & <span className="sec-accent">Portfolio</span></h2>
          <div className="teal-bar" />
          <p className="sec-subtitle" style={{ marginTop:'16px' }}>
            Real projects we&apos;ve built — click any card to explore the live website, app, or demo.
          </p>
        </div>

        <StatsRow />

        {/* Category filters */}
        <div className="port-filters fade-up">
          {CATEGORY_FILTERS.map(({ key, label, icon }) => (
            <button key={key} className={`port-filter-btn${cat===key?' active':''}`} onClick={() => setCat(key)}>
              <i className={icon} />{label}
            </button>
          ))}
        </div>

        {/* Toolbar: tech pills + search */}
        <div className="port-toolbar fade-up">
          <div className="port-tech-pills">
            {TECH_FILTERS.map(t => (
              <button key={t} className={`port-tech-pill${tech===t?' active':''}`} onClick={()=>setTech(tech===t?null:t)}>{t}</button>
            ))}
            {hasFilters && <button className="port-clear-pill" onClick={clear}><i className="fas fa-times" />Clear</button>}
          </div>
          <div className="port-search-box">
            <i className="fas fa-search" />
            <input type="text" className="port-search-input" placeholder="Search projects..." value={q} onChange={e=>setQ(e.target.value)} />
            {q && <button className="port-search-clear" onClick={()=>setQ('')}><i className="fas fa-times" /></button>}
          </div>
        </div>

        <p className="port-count fade-up">
          Showing <strong>{filtered.length}</strong> of <strong>{PROJECTS.length}</strong> projects
          {hasFilters && <button className="port-count-clear" onClick={clear}>Clear filters</button>}
        </p>

        {filtered.length > 0
          ? <div className="port-grid">{filtered.map(p => <ProjectCard key={p.id} project={p} />)}</div>
          : <div className="port-empty">
              <i className="fas fa-search" />
              <h3>No projects found</h3>
              <p>Try adjusting your filters or search query.</p>
              <button className="btn btn-primary" onClick={clear}><i className="fas fa-redo" /> Reset</button>
            </div>
        }

        {/* Bottom CTA */}
        <div className="port-cta-box fade-up">
          <div className="port-cta-icon"><i className="fas fa-rocket" /></div>
          <div>
            <h3>Have a Project in Mind?</h3>
            <p>We build websites, mobile apps, and run digital campaigns that actually convert.</p>
          </div>
          <div className="port-cta-btns">
            <a href="#contact" className="btn btn-primary"><i className="fas fa-paper-plane" /> Start a Project</a>
            <a href="https://wa.me/918459449727" target="_blank" rel="noopener noreferrer" className="btn btn-wa"><i className="fab fa-whatsapp" /> WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
