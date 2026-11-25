/* Funciones comunes de los capítulos de la visita guiada: opciones de JSmol,
   botones activos y test de comprobación. */
var JmolInfo = {
  width: '100%',
  height: '100%',
  color: '#F0F8FF',
  j2sPath: '../jsmol/j2s',
  serverURL: '../jsmol/php/jsmol.php',
  disableJ2SLoadMonitor: true,
  disableInitialConsole: true,
  use: 'html5'
};

// Marca como activo el botón pulsado dentro de un mismo grupo
function marcar(boton) {
  var grupo = boton.parentNode.querySelectorAll('input[type="button"]');
  for (var i = 0; i < grupo.length; i++) grupo[i].classList.remove('activo');
  boton.classList.add('activo');
}

// ---------------------------------------------------------------
// Comprueba lo que has aprendido
// ---------------------------------------------------------------
var respondidas = 0, aciertos = 0;
function responder(boton, ok, texto) {
  var preg = boton.closest('.vc-pregunta');
  if (preg.dataset.hecha) return;
  preg.dataset.hecha = '1';
  respondidas++; if (ok) aciertos++;
  var botones = preg.querySelectorAll('input[type="button"]');
  for (var i = 0; i < botones.length; i++) {
    botones[i].disabled = true;
    if (botones[i].dataset.ok) botones[i].classList.add('ok');
  }
  if (!ok) boton.classList.add('mal');
  var r = preg.querySelector('.vc-respuesta');
  r.className = 'vc-respuesta ' + (ok ? 'ok' : 'mal');
  r.innerHTML = '<b>' + (ok ? 'Correcto. ' : 'No. ') + '</b>' + texto;
  r.hidden = false;
  var total = document.querySelectorAll('.vc-pregunta').length;
  document.getElementById('marcador').textContent = 'Has respondido ' + respondidas + ' de ' + total + ' preguntas; ' + aciertos + ' correctas.';
}
function repetirTest() {
  respondidas = 0; aciertos = 0;
  var pregs = document.querySelectorAll('.vc-pregunta');
  for (var i = 0; i < pregs.length; i++) {
    delete pregs[i].dataset.hecha;
    var bs = pregs[i].querySelectorAll('input[type="button"]');
    for (var j = 0; j < bs.length; j++) { bs[j].disabled = false; bs[j].classList.remove('ok', 'mal'); }
    pregs[i].querySelector('.vc-respuesta').hidden = true;
  }
  document.getElementById('marcador').textContent = '';
}

