(function () {
  "use strict";

  var C = window.CONTENT;
  var UI = window.UI;
  var lang = "en";
  var filter = "all";
  var expanded = false;
  var INITIAL = 6;

  /* ---------- helpers ---------- */
  function L(v) {
    if (v && typeof v === "object" && ("en" in v || "zh" in v)) return v[lang] || v.en || "";
    return v == null ? "" : v;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function $(id) { return document.getElementById(id); }
  function isExternal(href) { return /^https?:/.test(href); }
  function target(href) { return isExternal(href) ? ' target="_blank" rel="noopener"' : ""; }

  var ICON = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4 7 8 6 8-6"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M8 10.5V16M8 7.8v.1M11.5 16v-5.5M11.5 13c0-1.6 1-2.6 2.4-2.6S16 11.4 16 13v3"/></svg>'
  };

  function sectionHead(num, key) {
    return '<div class="section__head reveal"><span class="section__num">' + num + '</span><h2 class="section__title">' +
      esc(UI[lang].sections[key]) + "</h2></div>";
  }
  function linkArrow(l) {
    return '<a class="link-arrow" href="' + esc(l.href) + '"' + target(l.href) + ">" + esc(L(l.label)) + ICON.arrow + "</a>";
  }

  /* ---------- sections ---------- */
  function renderNav() {
    var n = UI[lang].nav;
    var keys = ["about", "experience", "publications", "projects", "education", "more", "contact"];
    $("nav").innerHTML = keys.map(function (k) { return '<a href="#' + k + '" data-sec="' + k + '">' + esc(n[k]) + "</a>"; }).join("");
    $("langBtn").textContent = UI[lang].langSwitch;
    $("langBtn").setAttribute("aria-label", lang === "en" ? "切換為中文" : "Switch to English");
    $("themeBtn").setAttribute("aria-label", UI[lang].themeLabel);
  }

  function renderHero() {
    var p = C.profile;
    var parts = p.name.split(" ");
    // "Cheng-Yu (Jason) Tung" -> italic nickname
    var nameHtml = esc(p.name).replace("(Jason)", "<em>(Jason)</em>");
    $("hero").innerHTML =
      '<div class="wrap hero__grid">' +
        '<div class="hero__text">' +
          '<a class="seeking" href="#contact"><span class="seeking__dot" aria-hidden="true"></span>' + esc(L(p.seeking)) + '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg></a>' +
          '<h1 class="hero__name">' + nameHtml + "</h1>" +
          '<div class="hero__zh" lang="zh-Hant">' + esc(p.nameZh) + "</div>" +
          '<p class="hero__role">' + esc(L(p.role)) + "</p>" +
          '<p class="hero__tagline">' + esc(L(p.tagline)) + "</p>" +
          '<p class="hero__status">' + esc(L(p.status)) + "</p>" +
          '<div class="hero__actions">' +
            '<a class="btn btn--primary" href="' + esc(p.resume) + '" target="_blank" rel="noopener">' + ICON.download + esc(UI[lang].resume) + "</a>" +
            '<a class="btn" href="mailto:' + esc(p.email) + '">' + ICON.mail + esc(UI[lang].email) + "</a>" +
            '<a class="icon-link" href="' + esc(p.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + ICON.github + "</a>" +
            '<a class="icon-link" href="' + esc(p.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + ICON.linkedin + "</a>" +
          "</div>" +
        "</div>" +
        '<figure class="portrait" style="margin:0">' +
          '<span class="portrait__tape" aria-hidden="true"></span>' +
          '<div class="portrait__frame">' +
            '<div class="portrait__img"><img src="assets/img/photo.jpg" alt="' + esc(p.name) + '" width="800" height="1000"></div>' +
          "</div>" +
          '<figcaption class="portrait__caption">' + (lang === "en" ? "hello, nice to meet you" : "你好，很高興認識你") + "</figcaption>" +
        "</figure>" +
      "</div>";
    void parts;
  }

  function renderAbout() {
    var a = C.about;
    $("about").innerHTML =
      '<div class="wrap">' + sectionHead("01", "about") +
        '<div class="about">' +
          '<div class="about__text reveal">' + a.paragraphs.map(function (p) { return "<p>" + esc(L(p)) + "</p>"; }).join("") + "</div>" +
          '<dl class="facts reveal">' + a.facts.map(function (f) {
            return "<div><dt>" + esc(L(f.k)) + "</dt><dd>" + esc(L(f.v)) + "</dd></div>";
          }).join("") + "</dl>" +
        "</div>" +
      "</div>";
  }

  function renderExperience() {
    $("experience").innerHTML =
      '<div class="wrap">' + sectionHead("02", "experience") +
        '<ol class="timeline">' + C.experience.map(function (j) {
          return '<li class="job reveal">' +
            '<div class="job__when">' + esc(L(j.date)) + "<span>" + esc(L(j.place)) + "</span></div>" +
            "<div>" +
              '<h3 class="job__org">' + esc(j.org) + "</h3>" +
              '<p class="job__role">' + esc(L(j.role)) + (j.note ? ' <span class="job__note">· ' + esc(L(j.note)) + "</span>" : "") + "</p>" +
              "<ul>" + j.bullets.map(function (b) { return "<li>" + L(b) + "</li>"; }).join("") + "</ul>" +
              (j.stack ? '<p class="stack">' + esc(j.stack) + "</p>" : "") +
            "</div>" +
          "</li>";
        }).join("") + "</ol>" +
      "</div>";
  }

  function renderPublications() {
    $("publications").innerHTML =
      '<div class="wrap">' + sectionHead("03", "publications") +
        '<ol class="pubs">' + C.publications.map(function (p) {
          return '<li class="pub reveal">' +
            '<div class="pub__year">' + esc(p.year) + "</div>" +
            "<div>" +
              '<h3 class="pub__title">' + esc(p.title) + "</h3>" +
              '<p class="pub__authors">' + p.authors + "</p>" +
              '<p class="pub__venue">' + esc(L(p.venue)) + "</p>" +
              (p.links.length ? '<div class="pub__links">' + p.links.map(linkArrow).join("") + "</div>" : "") +
            "</div>" +
          "</li>";
        }).join("") + "</ol>" +
      "</div>";
  }

  // Small drawn network for the GTCN card: drug -> target -> pathway -> disease.
  function graphArt() {
    var cols = [
      { x: 70, n: 4, c: "var(--accent)" },
      { x: 200, n: 5, c: "var(--sage)" },
      { x: 330, n: 4, c: "var(--dusty)" },
      { x: 450, n: 3, c: "var(--rose)" }
    ];
    var pts = cols.map(function (col) {
      var out = [];
      for (var i = 0; i < col.n; i++) out.push({ x: col.x, y: 50 + (190 / (col.n - 1)) * i, c: col.c });
      return out;
    });
    var seed = 7;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    var edges = "";
    for (var k = 0; k < pts.length - 1; k++) {
      pts[k].forEach(function (a) {
        pts[k + 1].forEach(function (b) {
          if (rnd() < 0.55) {
            var mx = (a.x + b.x) / 2;
            edges += '<path d="M' + a.x + " " + a.y + " C" + mx + " " + a.y + " " + mx + " " + b.y + " " + b.x + " " + b.y + '"/>';
          }
        });
      });
    }
    var nodes = "";
    pts.forEach(function (col) {
      col.forEach(function (p) {
        nodes += '<circle cx="' + p.x + '" cy="' + p.y + '" r="9" fill="' + p.c + '" fill-opacity=".85"/>';
      });
    });
    var labels = ["drug", "target", "pathway", "disease"].map(function (t, i) {
      return '<text x="' + cols[i].x + '" y="272" text-anchor="middle">' + t + "</text>";
    }).join("");
    return '<svg viewBox="0 0 520 292" role="img" aria-label="Drug, target, pathway and disease graph">' +
      '<rect width="520" height="292" fill="var(--paper-2)"/>' +
      '<g fill="none" stroke="var(--ink-3)" stroke-opacity=".45" stroke-width="1">' + edges + "</g>" +
      "<g>" + nodes + "</g>" +
      '<g font-family="IBM Plex Mono, monospace" font-size="11" fill="var(--ink-3)" letter-spacing="1">' + labels + "</g>" +
    "</svg>";
  }

  function projectMedia(p, catLabel) {
    var badge = p.featured ? '<span class="badge">' + esc(UI[lang].featured) + "</span>" : "";
    if (p.art === "graph") return '<div class="card__media">' + graphArt() + badge + "</div>";
    if (p.img) {
      var contain = /docking|racecar|mopm|gtcn/.test(p.img) ? " card__media--contain" : "";
      return '<div class="card__media' + contain + '"><img src="' + esc(p.img) + '" alt="" loading="lazy">' + badge + "</div>";
    }
    var glyph = p.glyph || p.title.split(/\s+/)[0];
    return '<div class="card__media"><div class="cover"><div class="cover__glyph">' + esc(glyph) + '</div><div class="cover__label">' + esc(catLabel) + "</div></div>" + badge + "</div>";
  }

  function renderProjects() {
    var labels = {};
    C.projectFilters.forEach(function (f) { labels[f.id] = L(f.label); });
    var chips = C.projectFilters.map(function (f) {
      var count = f.id === "all" ? C.projects.length : C.projects.filter(function (p) { return p.cat.indexOf(f.id) > -1; }).length;
      return '<button class="chip" type="button" data-filter="' + f.id + '" aria-pressed="' + (f.id === filter) + '">' +
        esc(L(f.label)) + '<span class="count">' + count + "</span></button>";
    }).join("");
    var cards = C.projects.map(function (p) {
      return '<article class="card reveal" data-cat="' + p.cat.join(" ") + '">' +
        projectMedia(p, labels[p.cat[0]]) +
        '<div class="card__body">' +
          '<p class="card__meta">' + esc(L(p.meta)) + "</p>" +
          '<h3 class="card__title">' + esc(p.title) + "</h3>" +
          '<p class="card__desc">' + esc(L(p.desc)) + "</p>" +
          '<ul class="tags">' + p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
          (p.links.length ? '<div class="card__links">' + p.links.map(linkArrow).join("") + "</div>" : "") +
        "</div>" +
      "</article>";
    }).join("");
    $("projects").innerHTML =
      '<div class="wrap">' + sectionHead("04", "projects") +
        '<div class="filters reveal" role="group" aria-label="Filter projects">' + chips + "</div>" +
        '<div class="cards">' + cards + "</div>" +
        '<div class="more-row"><button class="btn more-btn" type="button" id="moreBtn"></button></div>' +
      "</div>";
    applyFilter();
    $("moreBtn").addEventListener("click", function () {
      expanded = !expanded;
      applyFilter();
      if (!expanded) $("projects").scrollIntoView();
    });
    $("projects").querySelector(".filters").addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      filter = b.getAttribute("data-filter");
      applyFilter();
    });
  }

  function applyFilter() {
    var root = $("projects");
    root.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-filter") === filter)); });
    var shown = 0, total = 0;
    root.querySelectorAll(".card").forEach(function (card) {
      var match = filter === "all" || card.getAttribute("data-cat").split(" ").indexOf(filter) > -1;
      if (match) total++;
      var show = match && (filter !== "all" || expanded || shown < INITIAL);
      if (show) shown++;
      card.classList.toggle("is-hidden", !show);
      if (show) card.classList.add("is-in");
    });
    var btn = $("moreBtn");
    if (btn) {
      var needed = filter === "all" && total > INITIAL;
      btn.parentNode.style.display = needed ? "" : "none";
      btn.textContent = expanded ? UI[lang].showLess : UI[lang].showMore.replace("{n}", total - INITIAL);
    }
  }

  function renderEducation() {
    $("education").innerHTML =
      '<div class="wrap">' + sectionHead("05", "education") +
        '<ol class="edu">' + C.education.map(function (e) {
          return '<li class="reveal">' +
            '<div class="job__when">' + esc(L(e.date)) + "<span>" + esc(L(e.place)) + "</span></div>" +
            "<div>" +
              '<h3 class="edu__school">' + esc(L(e.school)) + "</h3>" +
              '<p class="edu__degree">' + esc(L(e.degree)) + "</p>" +
              (e.detail ? '<p class="edu__detail">' + esc(L(e.detail)) + "</p>" : "") +
            "</div>" +
          "</li>";
        }).join("") + "</ol>" +
      "</div>";
  }

  function renderMore() {
    var ui = UI[lang];
    $("more").innerHTML =
      '<div class="wrap">' + sectionHead("06", "more") +
        '<div class="more">' +
          "<div>" +
            '<h3 class="subhead">' + esc(ui.leadership) + "</h3>" +
            '<ul class="lead-list">' + C.leadership.map(function (l) {
              return '<li class="reveal"><h4>' + esc(L(l.title)) + '</h4><p class="when">' + esc(L(l.org)) + " · " + esc(L(l.date)) + "</p><p>" + esc(L(l.desc)) + "</p></li>";
            }).join("") + "</ul>" +
          "</div>" +
          "<div>" +
            '<h3 class="subhead">' + esc(ui.awards) + "</h3>" +
            '<ul class="awards">' + C.awards.map(function (a) {
              return '<li class="reveal"><span class="when">' + esc(a.date) + "</span>" + esc(L(a.title)) + "</li>";
            }).join("") + "</ul>" +
            '<h3 class="subhead">' + esc(ui.sections.skills) + "</h3>" +
            '<dl class="skills">' + C.skills.map(function (s) {
              return '<div class="reveal"><dt>' + esc(L(s.group)) + "</dt><dd>" + s.items.map(function (i) { return "<span>" + esc(i) + "</span>"; }).join("") + "</dd></div>";
            }).join("") + "</dl>" +
          "</div>" +
        "</div>" +
      "</div>";
  }

  function renderContact() {
    var p = C.profile;
    var cup = '<svg class="cup" viewBox="0 0 64 64" aria-hidden="true">' +
      '<path class="steam" d="M26 8c-3 4 3 6 0 10"/><path class="steam" d="M34 6c-3 4 3 6 0 10"/>' +
      '<path d="M14 26h32v12a14 14 0 0 1-14 14h-4a14 14 0 0 1-14-14V26Z"/><path d="M46 30h3a6 6 0 0 1 0 12h-4"/><path d="M10 56h40"/></svg>';
    $("contact").innerHTML =
      '<div class="wrap">' +
        '<div class="section__head reveal">' + cup + '<span class="section__num">07</span><h2 class="section__title">' + esc(UI[lang].sections.contact) + "</h2></div>" +
        '<p class="contact__text reveal">' + esc(UI[lang].contactText) + "</p>" +
        '<a class="contact__email reveal" href="mailto:' + esc(p.email) + '">' + esc(p.email) + "</a>" +
        '<div class="contact__icons reveal">' +
          '<a class="icon-link" href="' + esc(p.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + ICON.github + "</a>" +
          '<a class="icon-link" href="' + esc(p.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + ICON.linkedin + "</a>" +
          '<a class="icon-link" href="' + esc(p.resume) + '" target="_blank" rel="noopener" aria-label="' + esc(UI[lang].resume) + '">' + ICON.download + "</a>" +
        "</div>" +
      "</div>";
    $("footer").innerHTML = "<span>© 2026 " + esc(UI[lang].footer) + "</span><span>" + esc(UI[lang].updated) + "</span>";
  }

  /* ---------- behaviour ---------- */
  var observer = null;
  function setupReveal() {
    var els = document.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-in"); }); return; }
    if (observer) observer.disconnect();
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); observer.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    els.forEach(function (e) { observer.observe(e); });
  }

  function updateSpy() {
    var ids = ["about", "experience", "publications", "projects", "education", "more", "contact"];
    var line = window.innerHeight * 0.4, current = null;
    ids.forEach(function (id) { var el = $(id); if (el && el.getBoundingClientRect().top <= line) current = id; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = "contact";
    document.querySelectorAll("#nav a").forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("data-sec") === current); });
  }

  function render() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.title = lang === "zh" ? "童政瑜 Cheng-Yu (Jason) Tung" : "Cheng-Yu (Jason) Tung";
    renderNav();
    renderHero();
    renderAbout();
    renderExperience();
    renderPublications();
    renderProjects();
    renderEducation();
    renderMore();
    renderContact();
    setupReveal();
    updateSpy();
  }

  function setLang(next, keepScroll) {
    var y = window.scrollY;
    lang = next;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    var url = new URL(window.location.href);
    if (lang === "zh") url.searchParams.set("lang", "zh"); else url.searchParams.delete("lang");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
    render();
    if (keepScroll) {
      document.querySelectorAll(".reveal").forEach(function (e) { e.classList.add("is-in"); });
      window.scrollTo(0, y);
    }
  }

  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function init() {
    var q = new URLSearchParams(window.location.search).get("lang");
    var stored = null;
    try { stored = localStorage.getItem("lang"); } catch (e) {}
    lang = q === "zh" || q === "en" ? q : stored === "zh" ? "zh" : "en";
    render();

    $("langBtn").addEventListener("click", function () { setLang(lang === "en" ? "zh" : "en", true); });
    $("themeBtn").addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
    var nav = $("nav"), menuBtn = $("menuBtn");
    menuBtn.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
    });
    var bar = document.querySelector(".topbar");
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        bar.classList.toggle("is-scrolled", window.scrollY > 8);
        updateSpy();
        ticking = false;
      });
    }, { passive: true });
  }

  init();
})();
