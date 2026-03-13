import { TEAM } from '@/data/team';

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="sec-head fade-up">
          <div className="sec-label"><i className="fas fa-users" /> Our Team</div>
          <h2 className="sec-title">The People Behind <span className="sec-accent">Your Success</span></h2>
          <div className="teal-bar" />
          <p className="sec-subtitle" style={{ marginTop: '16px' }}>
            A passionate team of developers, designers, and marketers dedicated to delivering exceptional results.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((member) => (
            <div key={member.id} className={`team-card fade-up ${member.delay}`}>
              <div className="team-top">
                <div className="team-avatar" style={{ background: member.avatarGradient }}>
                  {member.initials}
                </div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </div>
              <div className="team-body">
                <p className="team-bio">{member.bio}</p>
                <div className="team-skills">
                  {member.skills.map((s) => <span key={s} className="team-skill">{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
