function App() {
  const { NavBar, Footer, Icon } = window.PrideInTurfDesignSystem_2d4922;
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

  function resolvePage() {
    if (path === '/') return <HomePage onNavigate={navigate} />;
    if (path === '/about/') return <AboutPage onNavigate={navigate} />;
    if (path === '/contact/') return <ContactPage />;
    if (path === '/client-portal/') return <ClientPortalPage />;
    if (path === '/lawn-care/') return <LawnCareProgramsHub onNavigate={navigate} />;
    if (path === '/lawn-services/') return <LawnServicesArchive onNavigate={navigate} />;
    if (path === '/reviews/') return <ReviewsArchive />;
    if (path === '/blog/') return <BlogArchive onNavigate={navigate} />;
    if (path === '/careers/') return <CareersPage />;
    if (path === '/referral/') return <ReferralPage onNavigate={navigate} />;
    if (path === '/search/') return <SearchPage query="aeration" onNavigate={navigate} />;
    if (path === '/privacy-policy/') {
      return (
        <StandardPage title="Privacy Policy" breadcrumbItems={[{ href: '/', label: 'Home' }, { label: 'Privacy Policy' }]}>
          <p>Standard-page template placeholder — the real policy text flows here as ordinary WordPress page content (headings, paragraphs, lists).</p>
        </StandardPage>
      );
    }
    if (path === '/locations/atlanta/') return <AtlantaBranchPage />;
    if (path === '/locations/hoschton/') return <HoschtonBranchPage />;
    if (path === '/service-areas/duluth/') return <DuluthServiceAreaPage onNavigate={navigate} />;

    const program = data.programs.find((p) => p.href === path);
    if (program) return <ProgramPage program={program} onNavigate={navigate} />;

    const service = data.services.find((s) => s.href === path);
    if (service) return <ServicePage service={service} onNavigate={navigate} />;

    for (const svc of data.services) {
      const child = (svc.childServices || []).find((c) => c.href === path);
      if (child) return <ChildServicePage parent={svc} childLabel={child.label} onNavigate={navigate} />;
    }

    const post = data.blogPosts.find((p) => p.href === path);
    if (post) return <BlogSingle post={post} onNavigate={navigate} />;

    return <NotFoundPage onNavigate={navigate} />;
  }

  const page = resolvePage();

  const logoEl = <img src={(window.__resources && window.__resources.logo) || "../../assets/logo/pride-in-turf-logo.png"} alt="Pride In Turf" style={{ height: '34px' }} />;
  const footerLogoEl = (
    <img src={(window.__resources && window.__resources.logoWhite) || "../../assets/logo/pride-in-turf-logo-white.jpeg"} alt="Pride In Turf" style={{ height: '40px' }} />
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
      <div style={{ background: 'var(--surface-inverse)', borderTop: '1px solid var(--border-on-dark)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-4) var(--container-padding)', display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          {data.utilityLinks.map((l) => (
            <a key={l.href} href={l.href} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-on-dark-secondary)', textDecoration: 'none' }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const __rootEl = document.getElementById('root');
if (__rootEl) {
  ReactDOM.createRoot(__rootEl).render(<App />);
}
