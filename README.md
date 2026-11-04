# Atlas de estructuras moleculares

Web docente de estructuras moleculares en 3D (aminoácidos, coenzimas, glúcidos, oligopéptidos, vitaminas, proteínas, ácidos nucleicos y ribosoma), visualizadas con [JSmol](http://jmol.sourceforge.net/).

Autor y mantenimiento: José Ramón López López, Bioquímica y Biología Molecular, Universidad de Valladolid.

## Estructura

- `estructuras.htm`: página principal con dos marcos (índice lateral y contenido). `index.html` redirige a ella.
- `indice.htm`: índice lateral. `atlas.htm`: portada.
- `proteinas/`: páginas de estructura de proteínas.
- `pdb/`: coordenadas moleculares (`.pdb.gz`, `.mol`, `.cif`) e imágenes de glúcidos.
- `jsmol/`: biblioteca JSmol 14.30.2 (`JSmol.min.js`, `js/Jmol2.js` y `j2s/`).
- `css/moderno.css`: hoja de estilo común; se carga en todas las páginas.
- `js/nav.js`: resalta el enlace activo en los índices.
- `images/`: logotipos y fotografía.

## Publicación en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz de un repositorio público.
2. En **Settings → Pages**, elige **Deploy from a branch**, rama `main`, carpeta `/(root)`.
3. La web quedará en `https://USUARIO.github.io/REPOSITORIO/`.

GitHub distingue mayúsculas y minúsculas en los nombres de archivo: los enlaces y las órdenes `load` deben coincidir exactamente con el nombre del archivo.
