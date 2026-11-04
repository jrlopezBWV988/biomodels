// Resalta el enlace activo en los índices (lateral y superior).
(function () {
  var links = document.querySelectorAll('a[target]');
  function marcar(a) {
    for (var i = 0; i < links.length; i++) links[i].classList.remove('activo');
    a.classList.add('activo');
  }
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () { marcar(this); });
  }
  if (links.length) marcar(links[0]);
})();
