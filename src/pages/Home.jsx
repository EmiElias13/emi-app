function Home() {
  return (
    <main>
      <section className="hero">
        <div className="portrait-frame">
          <img src={`${import.meta.env.BASE_URL}emi-portrait.png?v=3`} alt="Doodle of a software engineer in a green shirt at a laptop, with a colorful Mexican mug" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer</p>
          <h1>Emi Elias</h1>
          <p className="subtitle">
            Software engineer specializing in AWS serverless architecture, Angular and
            React frontends. Currently working at Trimble building cloud infrastructure, 
            development tools and web applications.
          </p>
        </div>
      </section>

      <section className="services">
        <p className="section-label">Practice</p>
        <h2>Services</h2>
        <div className="service-grid">
          <article className="service-card">
            <h3>Product Engineering</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at nisl vitae nisi gravida facilisis.
            </p>
          </article>
          <article className="service-card">
            <h3>Interface Design</h3>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </p>
          </article>
          <article className="service-card">
            <h3>Technical Advisory</h3>
            <p>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Home
