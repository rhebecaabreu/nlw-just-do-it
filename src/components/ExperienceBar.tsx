export function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0 xp</span> 
      <div>
        <div style={{ width: '50%' }} />
        <span
          style={{ left: '50%' }}
          className="current-experience"
          >
            300 xp
          </span>
      </div>
      <span> 680 xp </span>
    </header>
  );
}