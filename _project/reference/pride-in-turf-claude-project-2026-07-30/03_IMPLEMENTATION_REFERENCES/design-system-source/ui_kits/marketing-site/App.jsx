function App() {
  const { NavBar, Footer } = window.PrideInTurfDesignSystem_2d4922;
  const data = window.SITE_DATA;
  const [path, setPath] = React.useState('/');

  function navigate(href) {
    setPath(href);
    window.scrollTo(0, 0);
  }

  function handleContainerClick(e) {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http') || href.startsWith('#')) return;
    e.preventDefault();
    navigate(href);
  }

  let page;
  if (path === '/contact/') {
    page = <ContactPage />;
  } else if (path === '/about/') {
    page = <AboutPage onNavigate={navigate} />;
  } else if (path === '/client-portal/') {
    page = <ClientPortalPage />;
  } else {
    const program = data.programs.find((p) => p.href === path);
    const service = data.services.find((s) => s.href === path);
    if (program) page = <ProgramPage program={program} onNavigate={navigate} />;
    else if (service) page = <ServicePage service={service} onNavigate={navigate} />;
    else page = <HomePage onNavigate={navigate} />;
  }

  const logoEl = <img src={(window.__resources && window.__resources.logo) || "../../assets/logo/pride-in-turf-logo.png"} alt="Pride In Turf" style={{ height: '34px' }} />;
  const footerLogoEl = (
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-xl)', color: 'var(--text-on-dark)' }}>
      PRIDE <span style={{ color: 'var(--brand-accent)' }}>in</span> TURF
    </span>
  );

  return (
    <div onClick={handleContainerClick}>
      <NavBar logo={logoEl} links={data.nav} activeHref={path} onCtaClick={() => navigate('/contact/')} />
      {page}
      <Footer
        logo={footerLogoEl}
        programLinks={data.programs.map((p) => ({ href: p.href, label: p.title }))}
        phone={data.contact.phone}
        email={data.contact.email}
        address={data.contact.locations[0].address}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
