const About = () => {
  return (
    <section className="page about">
      <div className="page__header">
        <h1>About the vibe</h1>
        <p>
          I’m a hybrid web designer + developer who builds expressive, accessible, and responsive
          experiences. My work blends strategy, storytelling, and experimental visual systems.
        </p>
      </div>
      <div className="about__grid">
        <div className="about__card">
          <h2>My approach</h2>
          <p>
            We start with a clear story, map the user journey, then layer in visuals, motion, and
            development polish.
          </p>
        </div>
        <div className="about__card">
          <h2>Tools I love</h2>
          <p>Figma, React, Framer Motion, WebGL light touches, and plenty of caffeine.</p>
        </div>
        <div className="about__card">
          <h2>Collaboration</h2>
          <p>
            I work with founders, creative studios, and product teams to ship fast and feel
            unforgettable.
          </p>
        </div>
      </div>
      <div className="about__timeline">
        <div>
          <h3>2018</h3>
          <p>Started crafting minimalist portfolios and indie brand sites.</p>
        </div>
        <div>
          <h3>2021</h3>
          <p>Expanded into creative development, motion, and multi-platform launches.</p>
        </div>
        <div>
          <h3>2024</h3>
          <p>Now building immersive web stories for global clients.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
