/* =====================================================================
   main.js — منطق الموقع العام: الهيدر/الفوتر، تبديل اللغة، القوائم، الـ Lightbox
   Languages: ar, en (inside translations.js) + de, fr, it, tr, zh, ja, ms, ru, pt
   (each one lives in its own js/lang-XX.js file and is loaded on demand)
   ===================================================================== */

(function(){
  "use strict";

  const LANG_KEY = "coach-site-lang";

  /* ---------------- Language registry ----------------
     To add another language: create js/lang-XX.js (same structure as the "en" data),
     then add one line here. */
  const LANGS = {
    ar: { name: "العربية",          flag: "🇪🇬", dir: "rtl" },
    en: { name: "English",          flag: "🇬🇧", dir: "ltr" },
    de: { name: "Deutsch",          flag: "🇩🇪", dir: "ltr", file: "lang-de.js" },
    fr: { name: "Français",         flag: "🇫🇷", dir: "ltr", file: "lang-fr.js" },
    it: { name: "Italiano",         flag: "🇮🇹", dir: "ltr", file: "lang-it.js" },
    tr: { name: "Türkçe",           flag: "🇹🇷", dir: "ltr", file: "lang-tr.js" },
    zh: { name: "中文",              flag: "🇨🇳", dir: "ltr", file: "lang-zh.js" },
    ja: { name: "日本語",            flag: "🇯🇵", dir: "ltr", file: "lang-ja.js" },
    ms: { name: "Bahasa Melayu",    flag: "🇲🇾", dir: "ltr", file: "lang-ms.js" },
    ru: { name: "Русский",          flag: "🇷🇺", dir: "ltr", file: "lang-ru.js" },
    pt: { name: "Português",        flag: "🇵🇹", dir: "ltr", file: "lang-pt.js" }
  };

  function getLang(){
    let saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch(e){}
    if (saved && LANGS[saved]) return saved;
    return (typeof DEFAULT_LANG !== "undefined" && LANGS[DEFAULT_LANG]) ? DEFAULT_LANG : "ar";
  }
  function setLang(lang){
    try { localStorage.setItem(LANG_KEY, lang); } catch(e){}
  }

  /* ---------------- Language packs (lazy loaded) ---------------- */
  function mergePack(lang){
    const pack = (window.LANG_PACKS || {})[lang];
    if (!pack) return false;
    Object.keys(pack).forEach(key => {
      if (SITE_DATA[key]) SITE_DATA[key][lang] = pack[key];
    });
    return true;
  }

  function loadPack(lang){
    return new Promise(resolve => {
      if (SITE_DATA.meta[lang]) return resolve(true);          // ar / en or already merged
      if (!LANGS[lang] || !LANGS[lang].file) return resolve(false);
      const s = document.createElement("script");
      s.src = "js/" + LANGS[lang].file;
      s.onload = () => resolve(mergePack(lang));
      s.onerror = () => resolve(false);
      document.head.appendChild(s);
    });
  }

  const ICONS = {
    whatsapp: "💬", phone: "📞", email: "✉️", facebook: "📘", instagram: "📷", youtube: "▶️", menu: "☰"
  };

  /* ---------------- Header / Footer templates ---------------- */
  function renderHeader(lang){
    const t = SITE_DATA.nav[lang];
    const h = SITE_DATA.header[lang];
    const common = SITE_DATA.common[lang];
    const path = currentPage();

    const navLinks = [
      ["index.html", t.home],
      ["about.html", t.about],
      ["courses.html", t.courses],
      ["thesis.html", t.thesis],
      ["experience.html", t.experience],
      ["cv.html", t.cv]
    ];

    const navHtml = navLinks.map(([href, label]) => {
      const active = path === href ? " active" : "";
      return `<a href="${href}" class="${active.trim()}">${label}</a>`;
    }).join("");

    const dropdownLinks = [
      ["gallery.html", "🏊", t.gallery],
      ["certificates.html", "🏆", t.certificates],
      ["videos.html", "🎥", t.videos]
    ];

    const langItems = Object.keys(LANGS).map(code =>
      `<a href="#" class="lang-item${code === lang ? " active" : ""}" data-lang-switch="${code}" hreflang="${code}"><span>${LANGS[code].flag}</span><span>${LANGS[code].name}</span></a>`
    ).join("");

    const dropdownHtml = dropdownLinks.map(([href, icon, label]) =>
      `<a href="${href}"><span>${icon}</span><span>${label}</span></a>`
    ).join("") + `<div class="dropdown-divider"></div>` +
      `<div class="dd-label">${common.language}</div>` + langItems;

    const drawerLangItems = Object.keys(LANGS).map(code =>
      `<a href="#" class="${code === lang ? "active" : ""}" data-lang-switch="${code}">${LANGS[code].flag} ${LANGS[code].name}</a>`
    ).join("");

    return `
    <div class="header-inner">
      <a href="index.html" class="brand">
        <span class="brand-photo"><img src="adam-profile.jpg" alt="${h.name}"></span>
        <span class="brand-text">
          <span class="brand-name">${h.name}</span>
          <span class="brand-role">${h.role}</span>
        </span>
      </a>
      <nav class="main-nav" aria-label="Main navigation">
        ${navHtml}
      </nav>
      <div style="display:flex; align-items:center; gap:8px; position:relative;">
        <button class="menu-toggle" id="dropdownToggle" aria-haspopup="true" aria-expanded="false" aria-label="${t.menuMore}">☰</button>
        <div class="dropdown-panel" id="dropdownPanel">${dropdownHtml}</div>
        <button class="mobile-nav-toggle" id="mobileNavToggle" aria-label="${t.menuMore}">☰</button>
      </div>
    </div>
    <div class="mobile-drawer" id="mobileDrawer">
      <div class="mobile-drawer-panel">
        <button class="mobile-drawer-close" id="mobileDrawerClose" aria-label="${common.close}">×</button>
        <div style="clear:both;"></div>
        <span class="section-label">${t.home}</span>
        ${navLinks.map(([href,label]) => `<a href="${href}">${label}</a>`).join("")}
        <span class="section-label">${t.menuMore}</span>
        ${dropdownLinks.map(([href,icon,label]) => `<a href="${href}">${icon} ${label}</a>`).join("")}
        <span class="section-label">${common.language}</span>
        ${drawerLangItems}
      </div>
    </div>`;
  }

  function renderFooter(lang){
    const t = SITE_DATA.nav[lang];
    const f = SITE_DATA.footer[lang];
    const h = SITE_DATA.header[lang];
    const c = SITE_DATA.contact[lang];
    const year = new Date().getFullYear();

    const links1 = [
      ["index.html", t.home], ["about.html", t.about], ["courses.html", t.courses], ["thesis.html", t.thesis], ["experience.html", t.experience]
    ];
    const links2 = [
      ["cv.html", t.cv], ["gallery.html", t.gallery], ["certificates.html", t.certificates], ["videos.html", t.videos]
    ];

    return `
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="footer-brand">
            <img src="adam-profile.jpg" alt="${h.name}">
            <div>
              <div class="footer-brand-name">${h.name}</div>
              <div class="footer-brand-role">${f.role}</div>
            </div>
          </div>
          <p style="max-width:36ch; font-size:.9rem; color:rgba(255,255,255,.6);">${SITE_DATA.hero[lang].subtitle}</p>
          <div class="footer-social">
            ${c.facebookUrl ? `<a href="${c.facebookUrl}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>` : ""}
            ${c.instagramUrl ? `<a href="${c.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>` : ""}
            ${c.youtubeUrl ? `<a href="${c.youtubeUrl}" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.youtube}</a>` : ""}
            <a href="https://wa.me/${c.whatsappValue.replace('+','')}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>
            <a href="mailto:${c.emailValue}" aria-label="Email">${ICONS.email}</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>${f.linksTitle}</h4>
          ${links1.map(([href,label]) => `<a href="${href}">${label}</a>`).join("")}
        </div>
        <div class="footer-col">
          <h4>&nbsp;</h4>
          ${links2.map(([href,label]) => `<a href="${href}">${label}</a>`).join("")}
        </div>
      </div>
      <div class="footer-bottom">${f.rights} © ${year} — ${h.name}</div>
    </div>`;
  }

  function currentPage(){
    const p = window.location.pathname.split("/").pop();
    return p === "" ? "index.html" : p;
  }

  /* ---------------- Interactions ---------------- */
  function bindHeaderEvents(){
    const toggle = document.getElementById("dropdownToggle");
    const panel = document.getElementById("dropdownPanel");
    if (toggle && panel){
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = panel.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      document.addEventListener("click", (e) => {
        if (!panel.contains(e.target) && e.target !== toggle){
          panel.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    const mobileToggle = document.getElementById("mobileNavToggle");
    const drawer = document.getElementById("mobileDrawer");
    const drawerClose = document.getElementById("mobileDrawerClose");
    if (mobileToggle && drawer){
      mobileToggle.addEventListener("click", () => drawer.classList.add("open"));
      drawerClose && drawerClose.addEventListener("click", () => drawer.classList.remove("open"));
      drawer.addEventListener("click", (e) => { if (e.target === drawer) drawer.classList.remove("open"); });
    }

    document.querySelectorAll("[data-lang-switch]").forEach(el => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        applyLanguage(el.getAttribute("data-lang-switch"));
      });
    });
  }

  /* ---------------- Language application ---------------- */
  let applyToken = 0;
  async function applyLanguage(lang){
    if (!LANGS[lang]) lang = "ar";
    const token = ++applyToken;

    const ok = await loadPack(lang);
    if (token !== applyToken) return;          // a newer language click won
    if (!ok) lang = SITE_DATA.meta[lang] ? lang : "en";

    setLang(lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", LANGS[lang].dir);

    const headerEl = document.getElementById("site-header");
    const footerEl = document.getElementById("site-footer");
    if (headerEl) headerEl.innerHTML = renderHeader(lang);
    if (footerEl) footerEl.innerHTML = renderFooter(lang);
    bindHeaderEvents();

    document.title = buildPageTitle(lang);

    // static data-i18n text nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const path = el.getAttribute("data-i18n");
      const val = resolvePath(path, lang);
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const path = el.getAttribute("data-i18n-html");
      const val = resolvePath(path, lang);
      if (val !== undefined) el.innerHTML = val;
    });

    // run page-specific render if present
    if (typeof window.renderPageContent === "function"){
      window.renderPageContent(lang);
    }

    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function resolvePath(path, lang){
    const parts = path.split(".");
    let node = SITE_DATA[parts[0]];
    if (!node) return undefined;
    node = node[lang];
    for (let i = 1; i < parts.length; i++){
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  function buildPageTitle(lang){
    const meta = SITE_DATA.meta[lang];
    const pageKey = document.body.getAttribute("data-page-title");
    let pageTitle = "";
    if (pageKey){
      const val = resolvePath(pageKey, lang);
      if (val) pageTitle = val + " — ";
    }
    return pageTitle + meta.siteName + " | " + meta.siteTagline;
  }

  /* ---------------- Lightbox (shared) ---------------- */
  function ensureLightbox(){
    if (document.getElementById("siteLightbox")) return;
    const div = document.createElement("div");
    div.className = "lightbox";
    div.id = "siteLightbox";
    div.innerHTML = `
      <button class="lightbox-close" id="lightboxClose" aria-label="close">×</button>
      <div class="lightbox-content">
        <div class="lightbox-media" id="lightboxMedia"></div>
        <div class="lightbox-caption" id="lightboxCaption"></div>
      </div>`;
    document.body.appendChild(div);
    div.addEventListener("click", (e) => { if (e.target === div) closeLightbox(); });
    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
  }
  function closeLightbox(){
    const lb = document.getElementById("siteLightbox");
    if (!lb) return;
    lb.classList.remove("open");
    document.getElementById("lightboxMedia").innerHTML = "";
  }
  window.openImageLightbox = function(src, title, meta){
    ensureLightbox();
    document.getElementById("lightboxMedia").innerHTML = `<img src="${src}" alt="${title || ''}">`;
    document.getElementById("lightboxCaption").innerHTML = `<h4>${title || ""}</h4><p>${meta || ""}</p>`;
    document.getElementById("siteLightbox").classList.add("open");
  };
  window.openVideoLightbox = function(src, title, desc){
    ensureLightbox();
    document.getElementById("lightboxMedia").innerHTML = `<video src="${src}" controls autoplay playsinline></video>`;
    document.getElementById("lightboxCaption").innerHTML = `<h4>${title || ""}</h4><p>${desc || ""}</p>`;
    document.getElementById("siteLightbox").classList.add("open");
  };

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getLang());
  });

})();
