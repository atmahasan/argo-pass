const { useState } = React;
const { HashRouter, NavLink, Routes, Route } = ReactRouterDOM;

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__logo">Vibe Coder</div>
    <nav className="navbar__links">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    <button className="navbar__cta">Book a collab</button>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div>
      <h4>Vibe Coder Studio</h4>
      <p>Designing immersive web experiences with bold visuals and human-first UX.</p>
    </div>
    <div className="footer__links">
      <span>hello@vibecoder.studio</span>
      <span>Instagram · Dribbble · Behance</span>
    </div>
    <span className="footer__copy">© 2024 Vibe Coder. All rights reserved.</span>
  </footer>
);

const Home = () => (
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

const About = () => (
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

const Services = () => (
  <section className="page services">
    <div className="page__header">
      <h1>Services</h1>
      <p>Choose a vibe. I’ll build a digital space that feels like you.</p>
    </div>
    <div className="services__grid">
      {[
        {
          title: 'Signature Website',
          description:
            'End-to-end website design and development with strategic messaging and immersive visuals.'
        },
        {
          title: 'Creative Dev Sprint',
          description: 'Two-week build to turn a design file into a polished React experience.'
        },
        {
          title: 'Visual System Refresh',
          description: 'Revamp your UI kit, typography, and design system for consistency and flow.'
        },
        {
          title: 'Launch Support',
          description: 'Animation polish, SEO readiness, and seamless deployment support.'
        }
      ].map((service) => (
        <article key={service.title} className="services__card">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <span className="tag">Starting at $2.5k</span>
        </article>
      ))}
    </div>
    <div className="services__cta">
      <h2>Need a custom combo?</h2>
      <p>Let’s craft a package that matches your brand and launch timeline.</p>
      <button className="primary">Request a quote</button>
    </div>
  </section>
);

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

const Projects = () => (
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

const Contact = () => (
  <section className="page contact">
    <div className="page__header">
      <h1>Contact</h1>
      <p>Ready to build your next digital experience? Drop a line.</p>
    </div>
    <div className="contact__grid">
      <form className="contact__form">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@studio.com" />
        </label>
        <label>
          Project type
          <select>
            <option>Brand website</option>
            <option>Portfolio refresh</option>
            <option>Creative dev sprint</option>
            <option>Something custom</option>
          </select>
        </label>
        <label>
          Project details
          <textarea rows="5" placeholder="Tell me about the vibe you're aiming for." />
        </label>
        <button className="primary" type="submit">
          Send message
        </button>
      </form>
      <div className="contact__details">
        <div>
          <h3>Studio</h3>
          <p>Los Angeles · Remote worldwide</p>
        </div>
        <div>
          <h3>Availability</h3>
          <p>Currently booking for next month’s launches.</p>
        </div>
        <div>
          <h3>Connect</h3>
          <p>hello@vibecoder.studio</p>
          <p>LinkedIn · Instagram · Dribbble</p>
        </div>
        <div className="contact__highlight">
          <h4>Let’s create something unforgettable.</h4>
          <p>Share a moodboard or inspo links and I’ll map the next steps.</p>
        </div>
      </div>
    </div>
  </section>
);

const App = () => (
  <div className="app">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

const Root = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
