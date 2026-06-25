// shared behavior for the Darkhorses mock site
(function(){
  // mobile menu
  var burger = document.getElementById('burger');
  var links = document.getElementById('nav-links');
  if(burger && links){
    burger.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ links.classList.remove('open'); }); });
  }
  // current year
  var y = document.getElementById('yr'); if(y) y.textContent = new Date().getFullYear();
  // reveal on scroll
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  // mock form guard
  document.querySelectorAll('form[data-mock]').forEach(function(f){
    f.addEventListener('submit', function(e){ e.preventDefault(); alert('This is a design mockup — the form isn’t wired up yet.'); });
  });
})();
