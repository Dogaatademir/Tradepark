import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [lang, setLang] = useState('TR')
  const isTR = lang === 'TR'
  const [menuOpen, setMenuOpen] = useState(false)

  // Sadece scroll-animate elemanları için görünürlük animasyonu
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    }

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observerInstance.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="logo">TRADEPARK</div>

        {/* HAMBURGER MENU BUTTON - YENİ */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVBAR BUTONLARI + DROPDOWN */}
        <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
          <button className="nav-btn" onClick={() => setMenuOpen(false)}>
            {isTR ? 'Ana Sayfa' : 'Main Page'}
          </button>

          <button className="nav-btn" onClick={() => setMenuOpen(false)}>
            {isTR ? 'Hakkımızda' : 'About Us'}
          </button>

          {/* HİZMETLERİMİZ DROPDOWN */}
          <div className="dropdown">
            <button className="nav-btn">
              {isTR ? 'Hizmetlerimiz' : 'Services'}
            </button>
            <div className="dropdown-menu">
              <button type="button" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                {isTR ? 'Biz Kimiz' : 'Who We Are'}
              </button>
              <button type="button" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                {isTR ? 'Faaliyet Alanımız' : 'Our Field of Activity'}
              </button>
              <button type="button" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                {isTR ? 'Şirket Profili' : 'Company Profile'}
              </button>
              <button type="button" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                {isTR ? 'Ekibimiz' : 'Our Team'}
              </button>
            </div>
          </div>

          <button className="nav-btn" onClick={() => setMenuOpen(false)}>
            {isTR ? 'İletişim' : 'Contact'}
          </button>
        </nav>

        {/* DİL SEÇİMİ */}
        <div className="lang-switch">
          <button
            className={`lang-btn ${isTR ? 'active' : ''}`}
            onClick={() => setLang('TR')}
          >
            TR
          </button>
          <button
            className={`lang-btn ${!isTR ? 'active' : ''}`}
            onClick={() => setLang('EN')}
          >
            EN
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="scroll-animate">
              {isTR
                ? 'Fikirlerinizi Koruyor, Tescil Ediyoruz'
                : 'We Protect and Register Your Ideas'}
            </h1>
            <p className="scroll-animate">
              {isTR
                ? 'TRADEPARK Uluslararası Danışmanlık Ltd. Şti., sınai mülkiyet vekilliği ve hukuki danışmanlık alanında uzman bir ekiple, firmaların ulusal ve uluslararası pazarlarda rekabet gücünü artırmasına destek olur. Patent, marka, tasarım ve diğer sınai mülkiyet haklarının tescil ve korunma süreçlerini uçtan uca yönetiyoruz.'
                : 'TRADEPARK International Consultancy Ltd. is an Industrial Property Attorney and Legal Consultancy firm supporting companies to increase their competitiveness in domestic and foreign markets. We manage end-to-end registration and protection processes for patents, trademarks, designs and other industrial property rights at national and international level.'}
            </p>
            <div className="hero-buttons scroll-animate">
              <button className="btn btn-primary" type="button">
                {isTR ? 'Hakkımızda' : 'About Us'}
              </button>
              <button className="btn btn-secondary" type="button">
                {isTR ? 'Hizmetlerimiz' : 'Our Services'}
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/tradeparklogo.png"
              alt="TRADEPARK Logo"
              className="hero-logo-img scroll-animate"
            />
          </div>
        </div>
      </section>

      {/* KURUMSAL / CORPORATE */}
      <section id="about">
        <h2 className="section-title scroll-animate">
          {isTR ? 'Kurumsal' : 'Corporate'}
        </h2>

        <div className="corporate-grid">
          {/* Biz Kimiz Kartı (Değişmedi) */}
          <div className="corporate-card scroll-animate">
            <h3>{isTR ? 'Biz Kimiz?' : 'Who We Are'}</h3>
            <p>
              {isTR
                ? 'Firmaların iç ve dış pazarlarda rekabet gücünü artırabilmeleri için belgelendirme faaliyetleri ve özellikle sınai mülkiyet haklarına ilişkin patent, faydalı model, marka ve tasarım tescil süreçleri kritik öneme sahiptir. TRADEPARK’ta bu süreçler, uygulamanın içinden gelen deneyimli Patent ve Marka Uzmanlarımız tarafından yürütülür; hak kaybı yaşanmaması için gerekli hukuki işlemler ise Avukatlarımız tarafından takip edilir.'
                : 'Certification activities, especially the acquisition of patent, utility model, trademark and design registrations as industrial property rights, are crucial for companies to strengthen their competitiveness. At TRADEPARK, these processes are carried out by experienced Patent and Trademark Experts, while all legal requirements are handled by our Lawyers to avoid any loss of rights.'}
            </p>
            <p>
              {isTR
                ? 'TRADEPARK her ne kadar 2015 yılında kurulmuş bir şirket olsa da, bünyemizde görev alan patent ve marka vekillerimiz 19 yılı aşan bilgi birikimine sahiptir. Kadromuz, Türk Patent ve Marka Kurumu’nun kurucu koordinatörü olan, Türk Patent Kanunlarının hazırlanması ve uygulanması ile mevzuat uyum sürecinde ülkemizi temsil eden Zekeriya BAŞTÜRK tarafından yetiştirilmiştir.'
                : 'Although TRADEPARK was established in 2015, our patent and trademark attorneys have more than 19 years of experience. They were trained by Mr. Zekeriya BAŞTÜRK, the Founding Coordinator of the Turkish Patent and Trademark Office, who represented Türkiye abroad, drafted and implemented the Turkish Patent Laws and led the harmonization of legislation.'}
            </p>
       
            <button type="button" className="read-more">
              {isTR ? 'Detaylı oku →' : 'Read more →'}
            </button>
          </div> 
        </div>
      </section>

      {/* HİZMETLER / SERVICES */}
      <section id="services">
        <h2 className="section-title scroll-animate">
          {isTR ? 'Hizmetlerimiz' : 'Our Services'}
        </h2>

        <div className="services-grid">
          <div className="service-card scroll-animate">
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <h3>{isTR ? 'Marka Hizmetleri' : 'Trademark Services'}</h3>
            <p>
              {isTR
                ? 'Türk Patent ve Marka Kurumu nezdinde marka tescili, tescil sonrası işlemler, yenileme ve marka portföyünüzün stratejik yönetimi. Madrid Protokolü kapsamında uluslararası marka başvuruları ve bölgesel ofisler nezdinde topluluk markası süreçlerinin takibi.'
                : 'National and international trademark registration and post-registration procedures before the Turkish Patent and Trademark Office and foreign offices. Management of registration through the Madrid Protocol and regional systems such as EUIPO and other industrial property offices.'}
            </p>
          </div>

          <div className="service-card scroll-animate">
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <h3>
              {isTR ? 'Patent ve Faydalı Model' : 'Patents and Utility Models'}
            </h3>
            <p>
              {isTR
                ? 'Buluşlarınızın korunması için patent ve faydalı model başvuruları, PCT kapsamında uluslararası patent tescili, Avrupa ve Avrasya Patent Ofisi nezdinde başvurular ile tescil sonrası tüm hukuki ve teknik işlemlerin takibi.'
                : 'Patent and utility model applications, PCT patent filings and European / Eurasian patent procedures, together with all legal and technical post-registration actions before national and regional offices.'}
            </p>
          </div>

          <div className="service-card scroll-animate">
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.586 7.586" />
              <circle cx="11" cy="11" r="2" />
            </svg>
            <h3>
              {isTR
                ? 'Tasarım ve Coğrafi İşaretler'
                : 'Designs & Geographical Indications'}
            </h3>
            <p>
              {isTR
                ? 'Endüstriyel tasarımların tescili, tescil sonrası işlemleri ve Lahey sistemi kapsamında uluslararası tasarım başvuruları; coğrafi işaret ve geleneksel ürün adlarının tescili ve korunmasına yönelik danışmanlık.'
                : 'Registration and post-registration procedures of industrial designs, including international filings via the Hague System, and consultancy regarding registration and protection of geographical indications and traditional product names.'}
            </p>
          </div>

          <div className="service-card scroll-animate">
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
            <h3>
              {isTR
                ? 'Sınai Mülkiyet Hukuki Danışmanlık'
                : 'Industrial Property Legal Consulting'}
            </h3>
            <p>
              {isTR
                ? 'Fikri ve Sınai Haklar Hukuk Mahkemeleri nezdinde hakların ihlali, tecavüz ve hükümsüzlük davalarının yürütülmesi, hukuki mütalaa hazırlanması ve lisans, devir, know-how sözleşmelerine ilişkin danışmanlık.'
                : 'Conducting infringement and invalidation lawsuits before the Intellectual and Industrial Rights Civil Courts, preparing legal opinions and advising on licence, assignment and know-how agreements concerning industrial property rights.'}
            </p>
          </div>

          <div className="service-card scroll-animate">
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <h3>
              {isTR
                ? 'Araştırma, İnceleme ve Eğitimler'
                : 'Search, Examination & Trainings'}
            </h3>
            <p>
              {isTR
                ? 'Marka ve patent araştırmaları, tescil öncesi risk analizleri, portföy incelemeleri ve firmalara özel sınai mülkiyet eğitimleri ile kurum içi farkındalığın artırılması.'
                : 'Trademark, patent and design searches, risk analyses before filing, portfolio review and tailor-made industrial property trainings to increase in-house awareness.'}
            </p>
          </div>

          <div className="service-card scroll-animate">
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <h3>
              {isTR
                ? 'Uluslararası Tescil ve Tercüme'
                : 'International Protection & Translation'}
            </h3>
            <p>
              {isTR
                ? 'WIPO, bölgesel ve ulusal ofisler nezdinde uluslararası tescil süreçlerinin yönetimi; sınai mülkiyet odaklı teknik ve yeminli tercüme hizmetleriyle global ölçekte kesintisiz destek.'
                : 'Management of international protection procedures before WIPO and regional / national offices, together with technical and certified translation services focused on industrial property documentation.'}
            </p>
          </div>
        </div>

        <div className="center-btn">
          <button className="btn btn-primary btn-on-light" type="button">
            {isTR ? 'Tüm Hizmetlerimizi Görün' : 'View All Services'}
          </button>
        </div>
      </section>

      {/* EKİBİMİZ / OUR TEAM */}
      <section id="team">
        <h2 className="section-title scroll-animate">
          {isTR ? 'Ekibimiz' : 'Our Team'}
        </h2>

        <div className="team-grid">
          {/* Serap Karakuş */}
          <div className="team-card scroll-animate">
            <div className="team-photo">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3>Serap Karakuş</h3>
            <p>
              {isTR
                ? 'Patent Vekili, Marka Vekili'
                : 'Patent Attorney, Trademark Attorney'}
            </p>
          </div>

          {/* Sevgi Karakuş */}
          <div className="team-card scroll-animate">
            <div className="team-photo">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3>Sevgi Karakuş</h3>
            <p>{isTR ? 'Marka Vekili' : 'Trademark Attorney'}</p>
          </div>

          {/* Av. İlker Oğuzlar */}
          <div className="team-card scroll-animate">
            <div className="team-photo">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3>Av. İlker Oğuzlar</h3>
            <p>{isTR ? 'Avukat' : 'Lawyer'}</p>
          </div>
        </div>

        <div className="center-btn">
      <button className="btn btn-primary btn-on-light" type="button">
  {isTR ? 'Ekibimizin Tamamını Görüntüleyin' : 'View Full Team'}
</button>

        </div>
      </section>

      {/* REFERANSLAR / REFERENCES */}
      <section id="references">
        <h2 className="section-title scroll-animate">
          {isTR ? 'Referanslarımızdan Bazıları' : 'Some of Our Clients'}
        </h2>

        <div className="references-grid">
          <div className="reference-logo scroll-animate">
            <img
              src="/genveonlogo.png"
              alt="Genveon"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className="reference-logo scroll-animate">
            {isTR ? 'Kozmetik & Kişisel Bakım' : 'Cosmetics & Personal Care'}
          </div>
          <div className="reference-logo scroll-animate">
            {isTR ? 'İnşaat & Gayrimenkul' : 'Construction & Real Estate'}
          </div>
          <div className="reference-logo scroll-animate">
            {isTR ? 'Enerji & Petrol' : 'Energy & Petroleum'}
          </div>
          <div className="reference-logo scroll-animate">
            {isTR ? 'Savunma & Teknoloji' : 'Defence & Technology'}
          </div>
        </div>

        <div className="center-btn">
        <button className="btn btn-primary btn-on-light" type="button">
  {isTR ? 'Tüm Referansları Görüntüleyin' : 'View All References'}
</button>

        </div>
      </section>

      {/* CTA / İLETİŞİM */}
      <section className="cta scroll-animate" id="contact">
        <h2>{isTR ? '“Fikirlerinizi Koruyoruz”' : '“We Protect Your Ideas”'}</h2>
        <p>
          {isTR
            ? 'Patent, marka, tasarım ve diğer sınai mülkiyet haklarınız için ulusal ve uluslararası ölçekte güvenilir bir iş ortağı arıyorsanız, TRADEPARK ekibi yanınızda. Projeleriniz için en doğru yol haritasını birlikte oluşturalım.'
            : 'If you are looking for a reliable partner to protect your patents, trademarks, designs and other industrial property rights at national and international level, the TRADEPARK team is ready to assist you. Let us build the right strategy for your projects together.'}
        </p>
        <a href="mailto:info@tradepark.com.tr" className="btn btn-primary">
          {isTR ? 'Bizimle İletişime Geçin' : 'Contact Us'}
        </a>
      </section>

      <footer>
  <div className="footer-grid">
    <div className="footer-item">
      <strong>Adres</strong>
      <p>Açın Caddesi 18/10 GOP Çankaya / Ankara / TÜRKİYE</p>
    </div>

    <div className="footer-item">
      <strong>Telefon</strong>
      <p>(+90 312) 437 33 37<br/>(+90 312) 437 33 38</p>
    </div>

    <div className="footer-item">
      <strong>Fax</strong>
      <p>(+90 312) 437 33 38</p>
    </div>

    <div className="footer-item">
      <strong>E-posta</strong>
      <p><a href="mailto:info@tradepark.com.tr">info@tradepark.com.tr</a></p>
    </div>
  </div>

  <p className="footer-copy">
    &copy; {new Date().getFullYear()} TRADEPARK Uluslararası Danışmanlık Ltd. Şti.  
    {isTR ? ' Tüm hakları saklıdır.' : ' All rights reserved.'}
  </p>
</footer>

    </>
  )
}

export default App
