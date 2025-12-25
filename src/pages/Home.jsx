const Home = () => {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero__content">
          <p className="eyebrow">Vibe coder · Web designer</p>
          <h1>Crafting digital vibes that feel like music for the eyes.</h1>
          <p className="subcopy">
            I blend playful motion, bold typography, and clean code to create portfolio-ready
            experiences for startups, artists, and future-focused brands.
          </p>
          <div className="hero__actions">
            <button className="primary">View projects</button>
            <button className="ghost">Let’s build</button>
          </div>
          <div className="hero__stats">
            <div>
              <h3>6+</h3>
              <p>Years crafting digital stories</p>
            </div>
            <div>
              <h3>48</h3>
              <p>Launches with flow + function</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Vibe-aligned client energy</p>
            </div>
          </div>
        </div>
        <div className="hero__card">
          <div className="card__badge">Currently building</div>
          <h2>Neon Atelier</h2>
          <p>Immersive e-commerce for a futuristic apparel brand.</p>
          <div className="card__tags">
            <span>UI systems</span>
            <span>Webflow → React</span>
            <span>Motion design</span>
          </div>
        </div>
      </div>

      <div className="strip">
        <h2>Signature services</h2>
        <p>Full-stack creativity with a design-first mindset.</p>
        <div className="strip__grid">
          <div>
            <h3>Brand story sites</h3>
            <p>High-impact landing pages with vibe-led copy and visual systems.</p>
          </div>
          <div>
            <h3>Interactive portfolios</h3>
            <p>Scroll-triggered moments, playful micro-interactions, and buttery UX.</p>
          </div>
          <div>
            <h3>Design-to-dev handoff</h3>
            <p>Pixel-perfect React builds for designers who need dev support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
