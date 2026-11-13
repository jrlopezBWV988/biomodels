# Atlas de estructuras moleculares

Web docente de estructuras moleculares en 3D (aminoácidos, coenzimas, glúcidos, oligopéptidos, vitaminas, proteínas, ácidos nucleicos y ribosoma), visualizadas con [JSmol](http://jmol.sourceforge.net/).

Autor y mantenimiento: José Ramón López López, Bioquímica y Biología Molecular, Universidad de Valladolid.

## Estructura

- `atlas.htm`: portada. `index.html` redirige a ella.
- Sin marcos: cada página tiene su propia dirección y muestra el índice lateral fijo; en pantallas estrechas, el índice se abre con el botón «Índice».
- `estructuras.htm`, `glucidos.htm`, `proteinas/globinas.htm` y `proteinas/inmuno.htm`: redirigen a la página equivalente, para que sigan funcionando los enlaces antiguos (incluidos los del tipo `estructuras.htm?p=SRC.htm`).
- `proteinas/`: páginas de estructura de proteínas.
- `pdb/`: coordenadas moleculares (`.pdb.gz`, `.mol`, `.cif`) e imágenes de glúcidos.
- `jsmol/`: biblioteca JSmol 16.5.7 (`JSmol.min.js`, `js/Jmol2.js` y `j2s/`). Todas las páginas usan el árbol completo `jsmol/j2s`; `js/Jmol2.js` incluye un ajuste local para que `jmolInitialize("…/jsmol/js")` apunte a él.
- `css/moderno.css`: hoja de estilo común; se carga en todas las páginas.
- `js/marco.js`: genera el índice lateral, los submenús de glúcidos, hemoglobina e inmunoglobulinas y el resaltado de la página activa. Para añadir o cambiar un enlace del índice, se edita la lista `MENU` (o `SUBMENUS`) de este archivo.
- `images/`: logotipos y fotografía.
