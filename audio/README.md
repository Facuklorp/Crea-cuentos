# 🎵 Guía de Audio para Crea Cuentos

## Archivos necesarios

Coloca los siguientes archivos `.mp3` en esta carpeta `audio/`:

| Archivo | Pantalla/Escenario | Descripción para Suno |
|---|---|---|
| `home.mp3` | Pantalla de inicio | Música mágica y tierna para niños, fairy tale, caja de música |
| `castillo.mp3` | Castillo Encantado | Medieval orchestral, magical castle, harp and strings |
| `bosque.mp3` | Bosque Mágico | Enchanted forest ambient, birds chirping, gentle flute |
| `isla.mp3` | Isla del Tesoro | Pirate adventure, accordion, sea shanty, cheerful |
| `nube.mp3` | Nube Gigante | Wind chimes, celestial music, dreamy, floating clouds |
| `mar.mp3` | Fondo del Mar | Underwater ambient, bubbles, whale sounds, gentle waves |
| `montana.mp3` | Montaña Nevada | Mountain wind, panflute, nordic ambient, snowy |
| `jardin.mp3` | Jardín Secreto | Garden birds, cute soft music, spring flowers, ukulele |
| `estrellas.mp3` | Ciudad de Estrellas | Space ambient, twinkling stars, cosmic synth, galaxy |

---

## Cómo crear la música con Suno AI (GRATIS)

1. Ir a **[suno.com](https://suno.com)** y crear una cuenta gratuita
2. Tendrás **50 créditos/día** (aprox. 10 canciones de 2 minutos)
3. Ir a **"Create"** y seleccionar modo **"Custom"**
4. Pegar el prompt correspondiente (ver tabla abajo)
5. Descargar el MP3 y renombrarlo según la tabla de arriba

### Prompts sugeridos para cada escenario

**home.mp3:**
```
magical lullaby for children, music box, fairy tale, soft and gentle, 
dreamy piano, twinkling bells, bedtime story, no vocals, loop friendly
```

**castillo.mp3:**
```
medieval fantasy orchestral, enchanted castle, harp and strings, 
magical kingdom, cinematic, no vocals, children fairy tale, loop friendly
```

**bosque.mp3:**
```
enchanted forest ambient, birds chirping softly, gentle flute, 
magical woodland, nature sounds, peaceful, no vocals, loop friendly
```

**isla.mp3:**
```
pirate adventure for kids, cheerful accordion, sea shanty rhythm, 
treasure hunt, jolly sailing, no vocals, child friendly, loop friendly
```

**nube.mp3:**
```
floating on clouds, wind chimes, celestial harp, dreamy and ethereal, 
sky music, soft and airy, no vocals, children ambient, loop friendly
```

**mar.mp3:**
```
underwater ocean ambient, gentle bubbles, whale songs, 
mermaid music, deep sea calm, soft waves, no vocals, loop friendly
```

**montana.mp3:**
```
snowy mountain ambient, nordic flute, cold wind gentle, 
alpine adventure, peaceful winter, no vocals, loop friendly
```

**jardin.mp3:**
```
secret garden, cute bird songs, soft ukulele, spring flowers, 
gentle and warm, magical garden, no vocals, children music, loop friendly
```

**estrellas.mp3:**
```
space ambient for children, twinkling stars, cosmic synth, 
galaxy journey, magical universe, soft and dreamy, no vocals, loop friendly
```

---

## Alternativas gratuitas a Suno

- **[Udio](https://udio.com)** — Muy buena calidad
- **[Mubert](https://mubert.com)** — Excelente para música ambiental
- **[Pixabay Music](https://pixabay.com/music/)** — Biblioteca gratuita sin IA, royalty-free
- **[Freesound](https://freesound.org)** — Efectos y loops gratuitos

---

## Activar los archivos en el Service Worker

Una vez que tengas los archivos MP3, descomenta las líneas en `sw.js`:

```js
'./audio/home.mp3',
'./audio/castillo.mp3',
// etc...
```

Esto permitirá que la música funcione **offline** una vez que la app se haya cargado al menos una vez con conexión.
