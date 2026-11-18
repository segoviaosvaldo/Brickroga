# Brickroga

Sitio público de www.brickroga.com (HTML estático, sin compilación).

| Archivo | Qué es |
|---|---|
| `index.html` | Inicio: buscador, alquileres destacados, banner de canastas, servicios |
| `alquileres.html` | Listado con filtros (tipo, dormitorios, precio, amoblado) |
| `propiedad.html#<id>` | Ficha de cada propiedad |
| `canastas-navidenas-corporativas.html` | Página SEO de canastas navideñas corporativas |
| `data/datos.js` | **Todo el contenido**: propiedades, canastas, servicios y contacto |
| `interno/terrenos.html` | Herramienta interna de seguimiento de terrenos (no indexada) |

## Cargar datos reales
Editá `data/datos.js`. Las fotos van en `assets/fotos/<id>/` y se listan en `fotos`.
Quitá `ejemplo: true` cuando el dato sea real. Completá `whatsapp`, `email` e `instagram` en `config`.

## Backoffice (próximo paso)
`data/datos.js` ya tiene la forma que va a administrar el backoffice: el panel solo tiene que leer y escribir esa misma estructura (o una API que devuelva lo mismo).

## Publicar
Funciona en GitHub Pages, Netlify o Vercel tal cual. Para el dominio, agregar un archivo `CNAME` con `www.brickroga.com` (GitHub Pages) y apuntar el DNS.
