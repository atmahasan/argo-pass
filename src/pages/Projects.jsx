const projects = [
  {
    name: 'Celestial Sounds',
    type: 'Music brand portal',
    detail: 'Gradient-heavy visuals with immersive audio previews.'
  },
  {
    name: 'Studio Drift',
    type: 'Creative agency site',
    detail: 'Bold typography and animated case study scrolls.'
  },
  {
    name: 'Glitch Garden',
    type: 'NFT experience',
    detail: 'Reactive UI with vivid 3D cues and layered textures.'
  },
  {
    name: 'Lumen Labs',
    type: 'SaaS marketing launch',
    detail: 'Conversion-ready sections with strong narrative flow.'
  }
];

const Projects = () => {
  return (
    <section className="page projects">
      <div className="page__header">
        <h1>Projects</h1>
        <p>Selected builds that mix immersive design with production-ready React.</p>
      </div>
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.name} className="projects__card">
            <div>
              <h2>{project.name}</h2>
              <p className="projects__type">{project.type}</p>
              <p>{project.detail}</p>
            </div>
            <button className="ghost">View case</button>
          </article>
        ))}
      </div>
      <div className="projects__footer">
        <h3>Want to see more?</h3>
        <p>Ask for the full archive or a custom walkthrough.</p>
        <button className="primary">Open archive</button>
      </div>
    </section>
  );
};

export default Projects;
