/* Atlas de estructuras – navegación sin marcos.
   Cada página carga este script en su <head>. El script añade:
   - el índice lateral fijo a la izquierda (en el móvil, desplegable con el botón «Índice»);
   - el submenú superior en los apartados que lo tienen (glúcidos, lípidos, hemoglobina e inmunoglobulinas);
   - el resaltado de la página activa;
   - el contador de visitas (GoatCounter).
   El menú se define una sola vez, aquí abajo, en MENU y SUBMENUS. */
(function () {
  "use strict";

  // Si la página se abre dentro de la antigua versión con marcos (por ejemplo,
  // una copia de estructuras.htm guardada en la caché del navegador), sale de los
  // marcos y se muestra sola, para que el índice no aparezca duplicado.
  // Solo actúa con los nombres de marco de la versión antigua, así que no afecta
  // a la página si se inserta en otra web o en una presentación.
  if (window.top !== window.self && /^(f_right|f_left|up|down)$/.test(window.name)) {
    try {
      window.top.location.replace(window.location.href);
      return;
    } catch (e) { /* si el navegador no lo permite, la página sigue cargando */ }
  }

  // Carpeta raíz del sitio, deducida de la dirección de este mismo script (…/js/marco.js).
  var yo = document.currentScript || document.querySelector('script[src*="js/marco.js"]');
  var RAIZ = yo.src.replace(/js\/marco\.js(\?.*)?$/, "");

  // Contador de visitas (GoatCounter, sin cookies). Solo cuenta en la web publicada,
  // no en copias locales. Las estadísticas están en https://biomodels.goatcounter.com
  if (location.hostname === "jrlopezbwv988.github.io") {
    var gc = document.createElement("script");
    gc.async = true;
    gc.src = "https://gc.zgo.at/count.js";
    gc.setAttribute("data-goatcounter", "https://biomodels.goatcounter.com/count");
    document.head.appendChild(gc);
  }

  // ---------------------------------------------------------------
  // Índice lateral. Rutas relativas a la raíz del sitio.
  // Un elemento con "href" es un enlace; con "cat" es un apartado con subelementos;
  // con "grupo" es un subtítulo dentro de un apartado.
  // ---------------------------------------------------------------
  var MENU = [
    { t: "Inicio", href: "atlas.htm" },
    { t: "Aminoácidos", href: "aminoacidos.htm" },
    { cat: "Glúcidos", items: [
      { t: "Monosácaridos", href: "Introglucidos.htm", sub: "glucidos" }
    ]},
    { t: "Lípidos", href: "Lipidos.htm", sub: "lipidos" },
    { t: "Vitaminas y Coenzimas", href: "vitaminas.htm" },
    { cat: "Proteínas", items: [
      { t: "Oligopéptidos", href: "oligopeptidos.htm" },
      { grupo: "Estructura Secundaria", items: [
        { t: "Hélice alfa", href: "proteinas/helicealfa.htm" },
        { t: "Hoja beta", href: "proteinas/hojabeta.htm" }
      ]},
      { grupo: "Estructura Terciaria", items: [
        { t: "Hidrofobicidad", href: "proteinas/hidrofobicidad.htm" }
      ]},
      { grupo: "Estructura Cuaternaria", items: [
        { t: "Hemoglobina", href: "proteinas/MioHb.htm", sub: "globinas" },
        { t: "Inmunoglobulinas", href: "proteinas/igg.htm", sub: "inmuno" },
        { t: "Colágeno", href: "proteinas/colageno.htm" }
      ]}
    ]},
    { cat: "Enzimas: Motivos, Módulos y Dominios", items: [
      { t: "Tirosina quinasa Src", href: "SRC.htm" },
      { t: "aa-tRNA Sintetasas", href: "tRNASintetasas.htm" },
      { t: "Acido Graso Sintasa", href: "proteinas/FAS.htm" }
    ]},
    { cat: "Ácidos Nucleicos", items: [
      { t: "Bases y Nucleótidos", href: "nucleotidos.htm" },
      { t: "Apareamiento de Bases", href: "ParesBases.htm" },
      { t: "Doble Hélice del DNA", href: "DNA.htm" },
      { t: "RNA de transferencia", href: "tRNA.htm" }
    ]},
    { cat: "Macroestructuras", items: [
      { t: "Ribosomas", href: "ribosoma.htm" }
    ]}
  ];

  // ---------------------------------------------------------------
  // Submenús superiores. "paginas" son todas las páginas del apartado:
  // en cualquiera de ellas se muestra la barra y se resalta su enlace del índice.
  // ---------------------------------------------------------------
  var SUBMENUS = {
    glucidos: {
      paginas: ["Introglucidos.htm"],
      enlaces: [
        { t: "Triosas", href: "Triosas.htm" },
        { t: "Aldopentosas", href: "Aldopentosas.htm" },
        { t: "Aldohexosas", href: "Aldohexosas.htm" },
        { t: "Tetrosas", href: "Tetrosas.htm" },
        { t: "Cetopentosas", href: "Cetopentosas.htm" },
        { t: "Cetohexosas", href: "Cetohexosas.htm" }
      ]
    },
    lipidos: {
      paginas: ["Lipidos.htm"],
      enlaces: [
        { t: "Ácidos grasos", href: "AcidosGrasos.htm" },
        { t: "Triacilgliceroles", href: "Triacilgliceroles.htm" },
        { t: "Fosfolípidos", href: "Fosfolipidos.htm" },
        { t: "Isoprenoides", href: "Isoprenoides.htm" }
      ]
    },
    globinas: {
      paginas: [],
      enlaces: [
        { t: "Mioglobina y Hemoglobina", href: "proteinas/MioHb.htm" },
        { t: "Estructura del grupo hemo", href: "proteinas/Hem.htm" },
        { t: "Unión del oxígeno al hemo", href: "proteinas/O2Hem.htm" },
        { t: "Formas Tensa y Relajada: Puentes salinos", href: "proteinas/TyR.htm" },
        { t: "2,3 Bisfosfoglicerato", href: "proteinas/2.3.BPG.htm" }
      ]
    },
    inmuno: {
      paginas: [],
      enlaces: [
        { t: "Inmunoglobulinas G", href: "proteinas/igg.htm" },
        { t: "Plegamiento de inmunoglobulina", href: "proteinas/Igdomain.htm" },
        { t: "Unión antígeno-anticuerpo", href: "proteinas/cdrs.htm" }
      ]
    }
  };

  // Páginas que no están en el índice: se resalta el enlace del que dependen.
  var PADRES = {
    "MSC.htm": "tRNASintetasas.htm"
  };

  // Ruta de la página actual relativa a la raíz, p. ej. "proteinas/TyR.htm".
  function rutaRelativa(url) {
    var u = url.split("#")[0].split("?")[0];
    return u.indexOf(RAIZ) === 0 ? decodeURIComponent(u.slice(RAIZ.length)) : u;
  }
  var ACTUAL = rutaRelativa(location.href) || "atlas.htm";

  // Apartado con submenú al que pertenece la página actual (si lo hay).
  var subActual = null;
  Object.keys(SUBMENUS).forEach(function (k) {
    var s = SUBMENUS[k];
    var todas = s.paginas.concat(s.enlaces.map(function (e) { return e.href; }));
    if (todas.indexOf(ACTUAL) !== -1) subActual = k;
  });

  function enlace(item) {
    var a = document.createElement("a");
    a.href = RAIZ + item.href;
    a.textContent = item.t;
    if (item.href === ACTUAL || item.href === PADRES[ACTUAL] || (item.sub && item.sub === subActual)) {
      a.className = "activo";
      a.setAttribute("aria-current", "page");
    }
    return a;
  }

  function lista(items, clase) {
    var ul = document.createElement("ul");
    ul.className = clase;
    items.forEach(function (it) {
      var li = document.createElement("li");
      if (it.href) {
        li.appendChild(enlace(it));
      } else {
        var span = document.createElement("span");
        span.className = it.cat ? "cat" : "grupo";
        span.textContent = it.cat || it.grupo;
        li.appendChild(span);
        li.appendChild(lista(it.items, it.cat ? "nivel2" : "nivel3"));
      }
      ul.appendChild(li);
    });
    return ul;
  }

  // Se marca el <html> en cuanto se carga el script, para que el contenido
  // deje sitio al índice desde el principio y no salte al terminar de cargar.
  document.documentElement.classList.add("con-marco");

  function montar() {
    var body = document.body;
    if (!body || document.querySelector(".marco-lateral")) return;

    // Índice lateral
    var aside = document.createElement("nav");
    aside.className = "marco-lateral nav-lateral";
    aside.id = "marco-indice";
    aside.setAttribute("aria-label", "Índice");
    var logo = document.createElement("a");
    logo.href = RAIZ + "atlas.htm";
    logo.className = "marco-logo";
    var img = document.createElement("img");
    img.src = RAIZ + "images/LogoUva.png";
    img.alt = "Universidad de Valladolid";
    img.width = 100;
    logo.appendChild(img);
    aside.appendChild(logo);
    var menu = document.createElement("div");
    menu.className = "menu";
    menu.appendChild(lista(MENU, "nivel1"));
    aside.appendChild(menu);

    // Botón «Índice» (solo visible en pantallas estrechas)
    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "marco-boton";
    boton.textContent = "Índice";
    boton.setAttribute("aria-controls", "marco-indice");
    boton.setAttribute("aria-expanded", "false");
    boton.addEventListener("click", function () {
      var abierto = aside.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    });

    var primero = body.firstChild;
    body.insertBefore(boton, primero);
    body.insertBefore(aside, primero);

    // Submenú superior
    if (subActual) {
      var barra = document.createElement("nav");
      barra.className = "marco-superior nav-superior";
      barra.setAttribute("aria-label", "Submenú");
      var ul = document.createElement("ul");
      SUBMENUS[subActual].enlaces.forEach(function (e) {
        var li = document.createElement("li");
        li.appendChild(enlace(e));
        ul.appendChild(li);
      });
      barra.appendChild(ul);
      body.insertBefore(barra, primero);
    }

    // Ayuda del ratón (solo en las páginas con modelos JSmol)
    if (document.querySelector('script[src*="jsmol/"]')) montarAyudaRaton(body);

    // Mantiene visible en el índice el enlace activo
    var activo = aside.querySelector("a.activo");
    if (activo && activo.scrollIntoView && activo.getBoundingClientRect().bottom > window.innerHeight) {
      activo.scrollIntoView({ block: "center" });
    }
  }

  // ---------------------------------------------------------------
  // Ayuda del ratón: botón fijo en la esquina inferior derecha que abre
  // una ventana pequeña con el uso del ratón en los modelos JSmol.
  // Se cierra con el mismo botón, con la «×», con Esc o al hacer clic fuera.
  // ---------------------------------------------------------------
  var AYUDA_RATON = [
    ["Girar el modelo", "Arrastrar con el botón izquierdo"],
    ["Girar en el plano de la pantalla", "Mayús + arrastrar en horizontal"],
    ["Acercar o alejar (zoom)", "Rueda del ratón, o Mayús + arrastrar en vertical"],
    ["Desplazar el modelo", "Ctrl + arrastrar con el botón derecho, o Ctrl + Alt + arrastrar con el izquierdo"],
    ["Abrir el menú de JSmol", "Clic con el botón derecho, o Ctrl + clic"],
    ["Volver a la orientación inicial", "Mayús + doble clic en una zona vacía del modelo"]
  ];

  var ICONO_RATON =
    '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">' +
    '<rect x="6" y="2.5" width="12" height="19" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
    '<line x1="12" y1="2.5" x2="12" y2="10" stroke="currentColor" stroke-width="1.8"/>' +
    '<line x1="6" y1="10" x2="18" y2="10" stroke="currentColor" stroke-width="1.8"/>' +
    '<rect x="11" y="5" width="2" height="3" rx="1" fill="currentColor"/></svg>';

  function montarAyudaRaton(body) {
    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "raton-boton";
    boton.innerHTML = ICONO_RATON;
    boton.title = "Uso del ratón en los modelos 3D";
    boton.setAttribute("aria-label", "Uso del ratón en los modelos 3D");
    boton.setAttribute("aria-controls", "raton-ayuda");
    boton.setAttribute("aria-expanded", "false");

    var panel = document.createElement("div");
    panel.className = "raton-ayuda";
    panel.id = "raton-ayuda";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-labelledby", "raton-ayuda-titulo");
    panel.hidden = true;

    var cabecera = document.createElement("div");
    cabecera.className = "raton-ayuda-cabecera";
    var titulo = document.createElement("strong");
    titulo.id = "raton-ayuda-titulo";
    titulo.textContent = "Uso del ratón en los modelos 3D";
    var cerrar = document.createElement("button");
    cerrar.type = "button";
    cerrar.className = "raton-cerrar";
    cerrar.setAttribute("aria-label", "Cerrar");
    cerrar.textContent = "×";
    cabecera.appendChild(titulo);
    cabecera.appendChild(cerrar);
    panel.appendChild(cabecera);

    var dl = document.createElement("dl");
    AYUDA_RATON.forEach(function (fila) {
      var dt = document.createElement("dt");
      dt.textContent = fila[0];
      var dd = document.createElement("dd");
      dd.textContent = fila[1];
      dl.appendChild(dt);
      dl.appendChild(dd);
    });
    panel.appendChild(dl);

    var nota = document.createElement("p");
    nota.className = "raton-nota";
    nota.textContent = "En pantallas táctiles: un dedo gira el modelo y pellizcar con dos dedos lo acerca o aleja. " +
      "En Mac, Ctrl + clic equivale al botón derecho.";
    panel.appendChild(nota);

    function abrir(si) {
      panel.hidden = !si;
      boton.setAttribute("aria-expanded", si ? "true" : "false");
    }
    boton.addEventListener("click", function () { abrir(panel.hidden); });
    cerrar.addEventListener("click", function () { abrir(false); boton.focus(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { abrir(false); boton.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (!panel.hidden && !panel.contains(e.target) && !boton.contains(e.target)) abrir(false);
    });

    body.appendChild(panel);
    body.appendChild(boton);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montar);
  } else {
    montar();
  }
})();
