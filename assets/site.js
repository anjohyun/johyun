// 조현 Johyun — small site behaviours
(function () {
  var nav = document.querySelector('.nav');
  var solidAlways = nav && nav.hasAttribute('data-solid');
  function onScroll() {
    if (!nav) return;
    if (solidAlways || window.scrollY > 40) nav.classList.add('solid');
    else nav.classList.remove('solid');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Projects page tabs (#music / #dev)
  var tabs = document.querySelectorAll('.tabs button');
  if (tabs.length) {
    function show(id) {
      tabs.forEach(function (b) { b.classList.toggle('on', b.dataset.tab === id); b.setAttribute('aria-selected', b.dataset.tab === id); });
      document.querySelectorAll('.panel').forEach(function (p) { p.classList.toggle('on', p.id === id); });
      document.querySelectorAll('#' + id + ' .reveal').forEach(function (el) { el.classList.add('in'); });
    }
    tabs.forEach(function (b) {
      b.addEventListener('click', function () { show(b.dataset.tab); history.replaceState(null, '', '#' + b.dataset.tab); });
    });
    var h = (location.hash || '').replace('#', '');
    show(h === 'dev' ? 'dev' : 'music');
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
