const Services = () => {
  return (
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
            description:
              'Two-week build to turn a design file into a polished React experience.'
          },
          {
            title: 'Visual System Refresh',
            description:
              'Revamp your UI kit, typography, and design system for consistency and flow.'
          },
          {
            title: 'Launch Support',
            description:
              'Animation polish, SEO readiness, and seamless deployment support.'
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
};

export default Services;
