// ============================================
// CREA CUENTOS — Motor de Historias
// ============================================

const STORY_DATA = {
  es: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princesa', emoji: '👸' },
        { id: 'caballero', nombre: 'Caballero', emoji: '🤺' },
        { id: 'dragon', nombre: 'Dragón', emoji: '🐉' },
        { id: 'hada', nombre: 'Hada', emoji: '🧚' },
        { id: 'pirata', nombre: 'Pirata', emoji: '🏴‍☠️' },
        { id: 'unicornio', nombre: 'Unicornio', emoji: '🦄' },
        { id: 'robot', nombre: 'Robot', emoji: '🤖' },
        { id: 'sirena', nombre: 'Sirena', emoji: '🧜‍♀️' },
        { id: 'conejito', nombre: 'Conejito', emoji: '🐰' },
        { id: 'bruja_buena', nombre: 'Bruja Buena', emoji: '🧙‍♀️' },
      ],
      escenarios: [
        { id: 'castillo', nombre: 'Castillo Encantado', emoji: '🏰' },
        { id: 'bosque', nombre: 'Bosque Mágico', emoji: '🌳' },
        { id: 'isla', nombre: 'Isla del Tesoro', emoji: '🏝️' },
        { id: 'nube', nombre: 'Nube Gigante', emoji: '☁️' },
        { id: 'mar', nombre: 'Fondo del Mar', emoji: '🌊' },
        { id: 'montana', nombre: 'Montaña Nevada', emoji: '🏔️' },
        { id: 'jardin', nombre: 'Jardín Secreto', emoji: '🌷' },
        { id: 'estrellas', nombre: 'Ciudad de Estrellas', emoji: '🌟' },
      ],
      objetos: [
        { id: 'espada', nombre: 'Espada de Luz', emoji: '⚔️' },
        { id: 'corona', nombre: 'Corona Mágica', emoji: '👑' },
        { id: 'mapa', nombre: 'Mapa del Tesoro', emoji: '🗺️' },
        { id: 'varita', nombre: 'Varita Mágica', emoji: '✨' },
        { id: 'pocion', nombre: 'Poción Brillante', emoji: '🧪' },
        { id: 'llave', nombre: 'Llave Dorada', emoji: '🔑' },
        { id: 'libro', nombre: 'Libro Encantado', emoji: '📖' },
        { id: 'amuleto', nombre: 'Amuleto Protector', emoji: '🔮' },
      ]
    },
    generoMap: {
      princesa:'f', caballero:'m', dragon:'m', hada:'f', pirata:'m',
      unicornio:'m', robot:'m', sirena:'f', conejito:'m', bruja_buena:'f',
    },
    generoObj: {
      espada:'f', corona:'f', mapa:'m', varita:'f',
      pocion:'f', llave:'f', libro:'m', amuleto:'m',
    },
    artPers: function(id) {
      const p = this.elementos.personajes.find(x => x.id === id);
      if (id === 'hada') return 'el ' + p.nombre; 
      const g = this.generoMap[id];
      return (g === 'f' ? 'la ' : 'el ') + p.nombre;
    },
    artEscDef: function(id) {
      const defs = {
        castillo:'el Castillo Encantado', bosque:'el Bosque Mágico',
        isla:'la Isla del Tesoro', nube:'la Nube Gigante',
        mar:'el Fondo del Mar', montana:'la Montaña Nevada',
        jardin:'el Jardín Secreto', estrellas:'la Ciudad de Estrellas',
      };
      return defs[id] || 'el lugar';
    },
    artObj: function(id) {
      const g = this.generoObj[id];
      const o = this.elementos.objetos.find(x => x.id === id);
      return (g === 'f' ? 'la ' : 'el ') + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} y el secreto de {E}",
        cuerpo: `Había una vez, en {ea}, un pequeñ{oa} {p_base} que soñaba con vivir una gran aventura.\n\nUna mañana, mientras paseaba entre los rincones más escondidos del lugar, descubrió algo que brillaba con una luz especial: ¡{oa_art}! Al tocar{lola}, sintió un cosquilleo mágico en las manos.\n\n"{pe} ¡Qué maravilla!" — exclamó {P} con los ojos bien abiertos.\n\n{O} tenía un poder increíble: podía hacer que todo {E} se llenara de colores brillantes y música suave.\n\nJuntos, hicieron de {E} el lugar más bonito del mundo. Antes de dormir, {P} susurraba: "Gracias, {O}, por la magia." 🌙✨`
      },
      {
        titulo: "✨ La aventura de {P} en {E}",
        cuerpo: `En un lugar muy especial llamado {E}, vivía un valiente {p_base} que tenía un sueño: encontrar {oa_art} legendari{ao}.\n\nTodos decían que {O} estaba escondid{ao} en el corazón de {E}, protegid{ao} por un acertijo.\n\n{P} caminó por senderos luminosos hasta llegar a una puerta mágica. "Solo quien tenga un corazón generoso podrá pasar."\n\n{pe} {P} dejó su dulce favorito como regalo. ¡Y la puerta se abrió! Dentro encontró {oa_art}, que brillaba como mil estrellas. Había aprendido que el verdadero tesoro es lo que compartes. 🌟💤`
      },
      {
        titulo: "🌙 {P} y {O} mágic{ao}",
        cuerpo: `Cuando el sol se escondía detrás de {E}, la magia comenzaba. Nadie lo sabía mejor que {P}, quien cada noche miraba las estrellas.\n\nUna noche especial, una estrella fugaz cayó justo frente a {P}. Era {oa_art} que brillaba con colores del arcoíris.\n\n"{pe} ¿Qué haces aquí, pequeñ{ao} {O}?" — preguntó {P}. {O} respondió con un destello y, de pronto, {P} podía entender el idioma de los animales.\n\nCuando llegó la hora de dormir, {P} abrazó {oa_art} y sonrió. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} y el misterio de {E}",
        cuerpo: `Todo comenzó cuando {P} encontró una nota misteriosa en {E}: "Sigue las huellas brillantes."\n\n¡{P} no lo dudó! Siguió las huellas de polvo de estrellas por todo {E} hasta llegar a un gran árbol.\n\nEn la copa, estaba {oa_art}. Cuando {P} la tomó, todo {E} se iluminó de alegría. {P} entendió que la magia estaba en descubrir lo especial que hay en cada uno.\n\nSe acurrucó bajo las estrellas y soñó cuentos dulces. 🌜💫`
      },
      {
        titulo: "💫 El viaje de {P} a {E}",
        cuerpo: `{P} siempre había querido visitar {E}. Un día, finalmente, decidió emprender el viaje con mucha valentía.\n\nCruzó ríos de limonada y caminó bajo arcoíris dobles. Cuando por fin llegó a {E}, se quedó sin palabras. ¡Era hermoso!\n\nY justo en la entrada, esperándol{oa}, había {oa_art}. "{pe} Te estaba esperando" — dijo {O}.\n\nDesde ese día, {P} se convirtió en el guardián de {E}, cuidando de todos con ayuda de {oa_art}. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} y el Gran Festival de {E}",
        cuerpo: `¡Todo estaba listo para la fiesta en {E}! {P} preparaba guirnaldas de luces, pero faltaba la música.\n\nRecordó que en un rincón guardaba {oa_art}. Al tocar {O}, una melodía dulce llenó {E} y todos empezaron a bailar.\n\n{pe} "{P}, gracias por traer la armonía" — dijeron sus amigos. {P} comprendió que compartir el talento es la mejor magia.\n\nCansad{oa} de bailar, se fue a dormir con una sonrisa. 🌜✨`
      },
      {
        titulo: "🎁 Un Regalo de las Estrellas para {P}",
        cuerpo: `Una noche en {E}, algo cayó suavemente sobre la hierba. ¡Era {oa_art} con el brillo de las galaxias!\n\nAl tomarlo, {P} sintió que podía convertir los miedos en sueños bonitos. "{pe} ¡Es un regalo especial!" — exclamó.\n\nUsó la magia de {O} para que todos en {E} durmieran tranquilos esa noche. {P} se sintió feliz de ayudar y cerró los ojos agradecido. 🌟💤`
      },
      {
        titulo: "🐾 {P} al Rescate en {E}",
        cuerpo: `{P} escuchó un gemido en {E}: era un pequeño animalito perdido. Para ayudarlo, {P} usó {oa_art}.\n\nEl objeto iluminó el camino como si fuera de día, guiando al pequeño de vuelta a su hogar.\n\n{pe} "{P} eres muy valiente" — susurró el animalito. {P} sonrió sabiendo que {O} era perfecto para hacer el bien.\n\nCon paz en el corazón, {P} regresó a descansar. 🌛💨`
      },
      {
        titulo: "🌸 {P} y el Cambio de Estación en {E}",
        cuerpo: `La primavera llegaba a {E}, pero los campos seguían con nieve. {P} tomó {oa_art} y sopló sobre las flores dormidas.\n\nDe pronto, todo {E} se llenó de colores y perfumes. "{pe} ¡Qué bonito está todo!" — pensó {P}.\n\nTodos en {E} salieron a saludar al sol. {P} guardó {oa_art} y se preparó para un día de juegos. 🌼🌜`
      },
      {
        titulo: "🎶 La Melodía de {O} en {E}",
        cuerpo: `Había un gran silencio en {E}. {P} se propuso encontrar el sonido perdido y buscó hasta hallar {oa_art}.\n\nAl moverlo, {O} empezó a cantar una canción que hacía bailar a las nubes. "{pe} ¡La música ha vuelto!" — gritó {P}.\n\nTodo {E} volvió a llenarse de vida. Esa noche, {P} se durmió escuchando el latido feliz del lugar. 🎵💤`
      },
      {
        titulo: "🚀 {P} y el Amigo Galáctico",
        cuerpo: `Un cohete aterrizó en {E} y un visitante espacial salió saludando. {P} usó {oa_art} para traducir sus deseos en luces.\n\n"{pe} ¡Ahora somos amigos!" — dijo {P}. Pasaron la tarde descubriendo secretos del cosmos en {E}.\n\nCuando el visitante partió, {P} miró a las estrellas y supo que nunca estaría solo. 🌌✨`
      },
      {
        titulo: "🏆 El Concurso de Talentos de {P}",
        cuerpo: `Hoy era el día del concurso en {E}. {P} estaba nervios{oa}, ¡todos tenían talentos increíbles!\n\nPero cuando llegó su turno, {P} enseñó {oa_art}. {O} empezó a crear figuras de luz que contaban historias fantásticas.\n\n{pe} "¡Es el ganador{a}!" — exclamaron. {P} aprendió que su mayor talento era su imaginación. 🏅🌟`
      },
      {
        titulo: "📚 {P} en la Biblioteca de Sueños",
        cuerpo: `En {E} hay una biblioteca donde los libros vuelan. {P} entró y un libro dorado cayó en sus manos.\n\nSus páginas estaban vacías, pero {P} usó {oa_art} y se llenaron de dibujos sobre su vida. "{pe} ¡Mi vida es un cuento!" — dijo {P}.\n\nCada día es una página nueva que él escribe en {E}. Se durmió soñando historias nuevas. 📖✨`
      },
      {
        titulo: "🎨 {P} y el Día de los Colores",
        cuerpo: `Un viento gris había quitado el color a {E}. Pero {P} sacó {oa_art} y, como un pincel, pintó el cielo de azul profundo.\n\n{pe} "¡Mirad qué maravilla!" — decían en {E} mientras los colores volvían gracias a {O}.\n\nCuando terminó, {P} contempló su obra de arte y cerró los ojos feliz. 🌈😴`
      },
      {
        titulo: "🕯️ La Promesa del Mañana",
        cuerpo: `{P} estaba bajo el gran árbol de {E}. {oa_art} empezó a brillar con una luz cálida y suave.\n\n{O} le mostró visiones de campos llenos de flores y risas de nuevos amigos. "{pe} El mañana será increíble" — prometió {P}.\n\nCon mucha esperanza, se quedó dormid{oa} mientras una brisa suave lo acariciaba en {E}. 🌜💤`
      }
    ]
  },
  en: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princess', emoji: '👸' },
        { id: 'caballero', nombre: 'Knight', emoji: '🤺' },
        { id: 'dragon', nombre: 'Dragon', emoji: '🐉' },
        { id: 'hada', nombre: 'Fairy', emoji: '🧚' },
        { id: 'pirata', nombre: 'Pirate', emoji: '🏴‍☠️' },
        { id: 'unicornio', nombre: 'Unicorn', emoji: '🦄' },
        { id: 'robot', nombre: 'Robot', emoji: '🤖' },
        { id: 'sirena', nombre: 'Mermaid', emoji: '🧜‍♀️' },
        { id: 'conejito', nombre: 'Bunny', emoji: '🐰' },
        { id: 'bruja_buena', nombre: 'Good Witch', emoji: '🧙‍♀️' },
      ],
      escenarios: [
        { id: 'castillo', nombre: 'Enchanted Castle', emoji: '🏰' },
        { id: 'bosque', nombre: 'Magic Forest', emoji: '🌳' },
        { id: 'isla', nombre: 'Treasure Island', emoji: '🏝️' },
        { id: 'nube', nombre: 'Giant Cloud', emoji: '☁️' },
        { id: 'mar', nombre: 'Bottom of the Sea', emoji: '🌊' },
        { id: 'montana', nombre: 'Snowy Mountain', emoji: '🏔️' },
        { id: 'jardin', nombre: 'Secret Garden', emoji: '🌷' },
        { id: 'estrellas', nombre: 'City of Stars', emoji: '🌟' },
      ],
      objetos: [
        { id: 'espada', nombre: 'Sword of Light', emoji: '⚔️' },
        { id: 'corona', nombre: 'Magic Crown', emoji: '👑' },
        { id: 'mapa', nombre: 'Treasure Map', emoji: '🗺️' },
        { id: 'varita', nombre: 'Magic Wand', emoji: '✨' },
        { id: 'pocion', nombre: 'Glowing Potion', emoji: '🧪' },
        { id: 'llave', nombre: 'Golden Key', emoji: '🔑' },
        { id: 'libro', nombre: 'Enchanted Book', emoji: '📖' },
        { id: 'amuleto', nombre: 'Protective Amulet', emoji: '🔮' },
      ]
    },
    artEsc: {
      castillo:'an Enchanted Castle', bosque:'a Magic Forest',
      isla:'a Treasure Island', nube:'a Giant Cloud',
      mar:'the Bottom of the Sea', montana:'a Snowy Mountain',
      jardin:'a Secret Garden', estrellas:'the City of Stars',
    },
    artObj: function(id) {
      const o = this.elementos.objetos.find(x => x.id === id);
      return 'the ' + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} and the secret of {E}",
        cuerpo: `Once upon a time, in {ea}, a little {p} dreamed of a great adventure.\n\nOne morning, they discovered something glowing: {oa_art}! Touching it caused a magical tingle.\n\n"{pe} How wonderful!" — exclaimed {P}. {O} had an incredible power to fill {E} with bright colors. Before sleeping, {P} whispered: "Thank you, {O}, for the magic." 🌙✨`
      },
      {
        titulo: "✨ The adventure of {P} in {E}",
        cuerpo: `In a special place called {E}, a brave {p} wanted to find the legendary {O}.\n\nAt the heart of {E}, {P} found a magic door. "Only a generous heart may pass." {P} left a gift, and the door opened!\n\nInside was {oa_art}, shining like stars. {P} learned that the true treasure is what you share. 🌟💤`
      },
      {
        titulo: "🌙 {P} and the magic {O}",
        cuerpo: `When the sun hid behind {E}, magic began. {P} watched the stars every night.\n\nOne night, a shooting star fell—it was {oa_art}! "{pe} What are you doing here, little {O}?" asked {P}.\n\n{O} flashed, and suddenly {P} understood the language of animals. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} and the mystery of {E}",
        cuerpo: `It started with a note in {E}: "Follow the glowing footprints." {P} followed them to a great tree.\n\nAt the top was {oa_art}. When {P} took it, all of {E} lit up. {P} understood that magic is discovering how special everyone is. 🌜💫`
      },
      {
        titulo: "💫 {P}'s journey to {E}",
        cuerpo: `{P} always wanted to visit {E}. One day, they set off with bravery.\n\nThey arrived at {E} and were speechless. It was beautiful! Right at the entrance was {oa_art}. "{pe} I was waiting for you," said {O}.\n\nFrom then on, {P} became the guardian of {E} with the help of {oa_art}. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} and the Great Festival in {E}",
        cuerpo: `The party in {E} was ready, but the music was missing. {P} used {oa_art}.\n\nA sweet melody filled {E} and everyone danced. "{pe} {P}, thank you for the harmony!" said their friends. Sharing talent is the best magic. 🌜✨`
      },
      {
        titulo: "🎁 A Gift from the Stars for {P}",
        cuerpo: `One night in {E}, {oa_art} fell from the sky with the glow of galaxies.\n\n{P} felt it could turn fears into beautiful dreams. "{pe} What a special gift!" they cried.\n\nUsing {O}, everyone in {E} slept peacefully. {P} felt happy to help and closed their eyes. 🌟💤`
      },
      {
        titulo: "🐾 {P} to the Rescue in {E}",
        cuerpo: `{P} heard a sound in {E}: a lost little animal. To help, {P} used {oa_art}.\n\nThe object lit the way like day, guiding the little one home. "{pe} {P}, you are so brave," whispered the animal. {P} smiled, knowing {O} was perfect for doing good. 🌛💨`
      },
      {
        titulo: "🌸 {P} and the Seasonal Change in {E}",
        cuerpo: `Spring was coming to {E}, but snow remained. {P} took {oa_art} and breathed on the flowers.\n\nSuddenly, {E} was full of colors and scents. "{pe} Everything is so beautiful!" thought {P}.\n\nEveryone in {E} cheered for the sun. {P} got ready for a day of games. 🌼🌜`
      },
      {
        titulo: "🎶 The Melody of {O} in {E}",
        cuerpo: `Silence filled {E}. {P} wanted to find the lost sound and searched until they found {oa_art}.\n\nAs it moved, {O} sang a song that made clouds dance. "{pe} Music is back!" cried {P}.\n\n{E} was full of life again. {P} fell asleep to the happy heartbeat of the world. 🎵💤`
      },
      {
        titulo: "🚀 {P} and the Galactical Friend",
        cuerpo: `A rocket landed in {E} and a space visitor stepped out. {P} used {oa_art} to translate wishes into lights.\n\n"{pe} Now we are friends!" said {P}. They spent the afternoon discovering secrets of the cosmos in {E}.\n\nWhen the visitor left, {P} knew they were never alone. 🌌✨`
      },
      {
        titulo: "🏆 {P}'s Talent Show",
        cuerpo: `Today was the talent show in {E}. {P} was nervous—everyone was so talented!\n\nBut when it was their turn, {P} showed {oa_art}. {O} created light figures telling fantastic stories.\n\n"{pe} Winner!" everyone cheered. {P} learned that their greatest talent was imagination. 🏅🌟`
      },
      {
        titulo: "📚 {P} in the Library of Dreams",
        cuerpo: `In {E} there's a library where books fly. {P} found a golden book with empty pages.\n\n{P} used {oa_art} and pages filled with drawings of their life. "{pe} My life is a story!" said {P}.\n\nEach day is a new page they write in {E}. They fell asleep dreaming of new tales. 📖✨`
      },
      {
        titulo: "🎨 {P} and the Day of Colors",
        cuerpo: `A grey wind took the color from {E}. But {P} used {oa_art} like a brush to paint the sky blue.\n\n"{pe} Look how wonderful!" they said in {E} as colors returned thanks to {O}.\n\nWhen finished, {P} looked at the masterpiece and closed their eyes happy. 🌈😴`
      },
      {
        titulo: "🕯️ The Promise of Tomorrow",
        cuerpo: `{P} sat under the big tree in {E}. {oa_art} began to glow with a warm, soft light.\n\n{O} showed visions of fields full of flowers and laughter. "{pe} Tomorrow will be amazing," promised {P}.\n\nWith hope, they fell asleep while a soft breeze brushed them in {E}. 🌜💤`
      }
    ]
  },
  fr: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princesse', emoji: '👸' },
        { id: 'caballero', nombre: 'Chevalier', emoji: '🤺' },
        { id: 'dragon', nombre: 'Dragon', emoji: '🐉' },
        { id: 'hada', nombre: 'Fée', emoji: '🧚' },
        { id: 'pirata', nombre: 'Pirate', emoji: '🏴‍☠️' },
        { id: 'unicornio', nombre: 'Licorne', emoji: '🦄' },
        { id: 'robot', nombre: 'Robot', emoji: '🤖' },
        { id: 'sirena', nombre: 'Sirène', emoji: '🧜‍♀️' },
        { id: 'conejito', nombre: 'Lapin', emoji: '🐰' },
        { id: 'bruja_buena', nombre: 'Bonne Sorcière', emoji: '🧙‍♀️' },
      ],
      escenarios: [
        { id: 'castillo', nombre: 'Château Enchanté', emoji: '🏰' },
        { id: 'bosque', nombre: 'Forêt Magique', emoji: '🌳' },
        { id: 'isla', nombre: 'Île au Trésor', emoji: '🏝️' },
        { id: 'nube', nombre: 'Nuage Géant', emoji: '☁️' },
        { id: 'mar', nombre: 'Fond de la Mer', emoji: '🌊' },
        { id: 'montana', nombre: 'Montagne Enneigée', emoji: '🏔️' },
        { id: 'jardin', nombre: 'Jardin Secret', emoji: '🌷' },
        { id: 'estrellas', nombre: 'Ville des Étoiles', emoji: '🌟' },
      ],
      objetos: [
        { id: 'espada', nombre: 'Épée de Lumière', emoji: '⚔️' },
        { id: 'corona', nombre: 'Couronne Magique', emoji: '👑' },
        { id: 'mapa', nombre: 'Carte au Trésor', emoji: '🗺️' },
        { id: 'varita', nombre: 'Baguette Magique', emoji: '✨' },
        { id: 'pocion', nombre: 'Potion Brillante', emoji: '🧪' },
        { id: 'llave', nombre: 'Clé d\'Or', emoji: '🔑' },
        { id: 'libro', nombre: 'Livre Enchanté', emoji: '📖' },
        { id: 'amuleto', nombre: 'Amulette', emoji: '🔮' },
      ]
    },
    artEsc: {
      castillo:'un Château Enchanté', bosque:'une Forêt Magique',
      isla:'une Île au Trésor', nube:'un Nuage Géant',
      mar:'le Fond de la Mer', montana:'une Montagne Enneigée',
      jardin:'un Jardin Secret', estrellas:'la Ville des Étoiles',
    },
    artObj: function(id) {
      const o = this.elementos.objetos.find(x => x.id === id);
      return 'le/la ' + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} et le secret de {E}",
        cuerpo: `Il était une fois, dans {ea}, un(e) petit(e) {p} qui rêvait d'aventure.\n\nUn matin, il a découvert {oa_art} qui brillait. Le toucher lui a fait ressentir un frisson magique.\n\n"{pe} Quelle merveille !" s'est exclamé {P}. {O} pouvait remplir {E} de couleurs vives. Avant de dormir, il a chuchoté : "Merci pour la magie." 🌙✨`
      },
      {
        titulo: "✨ L'aventure de {P} dans {E}",
        cuerpo: `Dans un endroit spécial appelé {E}, {p} voulait trouver {O} légendaire. {P} a trouvé une porte : "Seul un cœur généreux peut passer."\n\n{pe} {P} a laissé un cadeau et la porte s'est ouverte ! À l'intérieur se trouvait {oa_art}. {P} a appris que le vrai trésor est ce que l'on partage. 🌟💤`
      },
      {
        titulo: "🌙 {P} et {O} magique",
        cuerpo: `Quand le soleil se cachait derrière {E}, la magie commençait. Une nuit, une étoile filante est tombée: c'était {oa_art}!\n\n"{pe} Que fais-tu ici, petit(e) {O} ?" a demandé {P}. {O} a répondu par un éclair et {P} a compris le langage des animaux. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} et le mystère de {E}",
        cuerpo: `Tout a commencé avec une note dans {E}: "Suis les empreintes." {P} les a suivies jusqu'à un grand arbre.\n\nAu sommet se trouvait {oa_art}. Quand {P} l'a pris, tout {E} s'est illuminé. La magie, c'est découvrir la beauté en chacun. 🌜💫`
      },
      {
        titulo: "💫 Le voyage de {P} vers {E}",
        cuerpo: `{P} avait toujours voulu visiter {E}. Un jour, il est parti avec courage. Arrivé à {E}, il était sans voix.\n\nÀ l'entrée, {oa_art} l'attendait. "{pe} Je t'attendais," a dit {O}. {P} est devenu le gardien de {E}. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} et le Grand Festival de {E}",
        cuerpo: `La fête à {E} était prête, mais la musique manquait. {P} a utilisé {oa_art}. Une mélodie a rempli {E} et tout le monde a dansé.\n\n{pe} "{P}, merci pour l'harmonie !" Partager son talent est la plus belle magie. 🌜✨`
      },
      {
        titulo: "🎁 Un Cadeau des Étoiles pour {P}",
        cuerpo: `Une nuit à {E}, {oa_art} est tombé du ciel. {P} a senti qu'il pouvait transformer les peurs en rêves.\n\n"{pe} Quel cadeau spécial !" En utilisant {O}, tout le monde à {E} a dormi paisiblement. 🌟💤`
      },
      {
        titulo: "🐾 {P} au Secours dans {E}",
        cuerpo: `{P} a entendu un cri dans {E} : un animal perdu. Pour l'aider, {P} a utilisé {oa_art}.\n\nL'objet a éclairé le chemin comme en plein jour. "{pe} {P}, tu es si brave." {P} a souri en sachant que {O} servait à faire le bien. 🌛💨`
      },
      {
        titulo: "🌸 {P} et le Changement de Saison à {E}",
        cuerpo: `Le printemps arrivait mais la neige restait à {E}. {P} a pris {oa_art} et a soufflé sur les fleurs.\n\nSoudain, {E} s'est rempli de couleurs. {pe} "Tout est si beau !" Tout le monde a fêté le soleil. 🌼🌜`
      },
      {
        titulo: "🎶 La Mélodie de {O} dans {E}",
        cuerpo: `Le silence régnait sur {E}. {P} a cherché le son perdu jusqu'à trouver {oa_art}.\n\nEn bougeant, {O} a chanté et les nuages ont dansé. "{pe} La musique est de retour !" {E} était à nouveau plein de vie. 🎵💤`
      },
      {
        titulo: "🚀 {P} et l'Ami Galactique",
        cuerpo: `Une fusée a atterri à {E}. {P} a utilisé {oa_art} para traduire les souhaits en lumières.\n\n"{pe} Nous sommes amis !" Ils ont découvert les secrets del cosmos à {E}. {P} a su qu'il n'était plus seul. 🌌✨`
      },
      {
        titulo: "🏆 Le Concours de Talents de {P}",
        cuerpo: `C'était le jour del concours à {E}. {P} était nerveux. Mais quand vint son tour, il a montré {oa_art}.\n\n{O} a créé des figures de lumière racontant des histoires. "{pe} Gagnant !" Son plus grand talent était son imagination. 🏅🌟`
      },
      {
        titulo: "📚 {P} dans la Bibliothèque des Rêves",
        cuerpo: `À {E}, il y a une bibliothèque où les livres volent. {P} a trouvé un livre d'or aux pages vides.\n\n{P} a utilisé {oa_art} et les pages se sont remplies de dessins de sa vie. "{pe} Ma vie est un conte !" 📖✨`
      },
      {
        titulo: "🎨 {P} et le Jour des Couleurs",
        cuerpo: `Un vent gris avait volé les couleurs de {E}. Mais {P} a utilisé {oa_art} comme un pinceau pour repeindre le ciel.\n\n"{pe} Regardez !" Les couleurs sont revenues grâce à {O}. Tout le monde était heureux. 🌈😴`
      },
      {
        titulo: "🕯️ La Promesse de Demain",
        cuerpo: `{P} s'est assis sous le grand arbre de {E}. {oa_art} brillait d'une lumière douce. {O} lui a montré des champs de fleurs.\n\n"{pe} Demain sera incroyable," a promis {P}. Avec espoir, il s'est endormi. 🌜💤`
      }
    ]
  },
  de: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Prinzessin', emoji: '👸' },
        { id: 'caballero', nombre: 'Ritter', emoji: '🤺' },
        { id: 'dragon', nombre: 'Drache', emoji: '🐉' },
        { id: 'hada', nombre: 'Fee', emoji: '🧚' },
        { id: 'pirata', nombre: 'Pirat', emoji: '🏴‍☠️' },
        { id: 'unicornio', nombre: 'Einhorn', emoji: '🦄' },
        { id: 'robot', nombre: 'Roboter', emoji: '🤖' },
        { id: 'sirena', nombre: 'Meerjungfrau', emoji: '🧜‍♀️' },
        { id: 'conejito', nombre: 'Hase', emoji: '🐰' },
        { id: 'bruja_buena', nombre: 'Gute Hexe', emoji: '🧙‍♀️' },
      ],
      escenarios: [
        { id: 'castillo', nombre: 'Verzaubertes Schloss', emoji: '🏰' },
        { id: 'bosque', nombre: 'Magischer Wald', emoji: '🌳' },
        { id: 'isla', nombre: 'Schatzinsel', emoji: '🏝️' },
        { id: 'nube', nombre: 'Riesige Wolke', emoji: '☁️' },
        { id: 'mar', nombre: 'Grund des Meeres', emoji: '🌊' },
        { id: 'montana', nombre: 'Verschneiter Berg', emoji: '🏔️' },
        { id: 'jardin', nombre: 'Geheimer Garten', emoji: '🌷' },
        { id: 'estrellas', nombre: 'Stadt der Sterne', emoji: '🌟' },
      ],
      objetos: [
        { id: 'espada', nombre: 'Lichtschwert', emoji: '⚔️' },
        { id: 'corona', nombre: 'Magische Krone', emoji: '👑' },
        { id: 'mapa', nombre: 'Schatzkarte', emoji: '🗺️' },
        { id: 'varita', nombre: 'Zauberstab', emoji: '✨' },
        { id: 'pocion', nombre: 'Leuchtender Trank', emoji: '🧪' },
        { id: 'llave', nombre: 'Goldener Schlüssel', emoji: '🔑' },
        { id: 'libro', nombre: 'Verzaubertes Buch', emoji: '📖' },
        { id: 'amuleto', nombre: 'Schutzamulett', emoji: '🔮' },
      ]
    },
    artEsc: {
      castillo:'ein Verzaubertes Schloss', bosque:'ein Magischer Wald',
      isla:'eine Schatzinsel', nube:'eine Riesige Wolke',
      mar:'der Grund des Meeres', montana:'ein Verschneiter Berg',
      jardin:'ein Geheimer Garten', estrellas:'die Stadt der Sterne',
    },
    artObj: function(id) {
      const o = this.elementos.objetos.find(x => x.id === id);
      return 'das Objekt ' + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} und das Geheimnis von {E}",
        cuerpo: `Es war einmal, in {ea}, ein kleines {p}, das von Abenteuern träumte. Eines Morgens entdeckte es {oa_art}.\n\n"{pe} Wie wunderbar!" rief {P}. {O} erfüllte {E} mit bunten Farben. Gute Nacht! 🌙✨`
      },
      {
        titulo: "✨ Das Abenteuer von {P} in {E}",
        cuerpo: `In {E} wollte {p} {O} finden. {P} fand eine magische Tür: "Nur ein großzügiges Herz darf eintreten."\n\n{pe} {P} gab ein Geschenk und die Tür öffnete sich ! Darin war {oa_art}. Teilen ist der wahre Schatz. 🌟💤`
      },
      {
        titulo: "🌙 {P} und das magische {O}",
        cuerpo: `Wenn die Sonne hinter {E} verschwand, begann die Magie. Eine Sternschnuppe fiel—es war {oa_art}!\n\n"{pe} Kleines {O}, was machst du hier?" fragte {P}. {O} leuchtete und plötzlich verstand {P} die Tiere. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} und das Geheimnis von {E}",
        cuerpo: `Alles begann mit einer Notiz in {E}: "Folge den Spuren." {P} folgte ihnen zu einem Baum.\n\nOben war {oa_art}. Ganz {E} leuchtete auf. Magie ist, das Besondere in jedem zu finden. 🌜💫`
      },
      {
        titulo: "💫 {P}s Reise nach {E}",
        cuerpo: `{P} wollte schon immer {E} besuchen. Eines Tages kam er an und war sprachlos. Es war so schön!\n\nAm Eingang wartete {oa_art}. "{pe} Ich habe auf dich gewartet," sagte {O}. {P} wurde der Wächter von {E}. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} und das Große Festival in {E}",
        cuerpo: `Das Fest in {E} war bereit, aber die Musik fehlte. {P} benutzte {oa_art}.\n\nEine Melodie erfüllte {E} und alle tanzten. "{pe} Danke für die Harmonie!" Sharing is the best magic. 🌜✨`
      },
      {
        titulo: "🎁 Ein Geschenk der Sterne für {P}",
        cuerpo: `In {E} fiel {oa_art} vom Himmel. {P} spürte, dass es Angst in Träume verwandeln konnte.\n\n"{pe} Was für ein Geschenk!" Alle in {E} schliefen friedlich. 🌟💤`
      },
      {
        titulo: "🐾 {P} zur Rettung in {E}",
        cuerpo: `{P} hörte ein Tier in {E}. Er benutzte {oa_art}, um den Weg zu beleuchten.\n\nDas Objekt leuchtete wie am Tag. "{pe} Du bist so tapfer." {O} war perfekt, um Gutes zu tun. 🌛💨`
      },
      {
        titulo: "🌸 {P} und der Jahreszeitenwechsel in {E}",
        cuerpo: `Der Frühling kam nach {E}, aber es lag noch Schnee. {P} nahm {oa_art} und pustete.\n\nPlötzlich war {E} voller Farben. {pe} "Alles ist so schön!" Alle feierten die Sonne. 🌼🌜`
      },
      {
        titulo: "🎶 Die Melodie von {O} in {E}",
        cuerpo: `Es war still in {E}. {P} suchte den Klang und fand {oa_art}.\n\n{O} sang ein Lied und die Wolken tanzten. "{pe} Die Musik ist zurück!" {E} war wieder voller Leben. 🎵💤`
      },
      {
        titulo: "🚀 {P} und der galaktische Freund",
        cuerpo: `In {E} landete eine Rakete. {P} benutzte {oa_art}, um Wünsche in Lichter zu übersetzen.\n\n"{pe} Jetzt sind wir Freunde!" Sie entdeckten die Geheimnisse des Kosmos in {E}. 🌌✨`
      },
      {
        titulo: "🏆 {P}s Talent-Show",
        cuerpo: `Heute war die Show in {E}. {P} war nervös. Aber dann zeigte er {oa_art}.\n\n{O} erschuf Lichtfiguren. "{pe} Gewinner!" Fantasie war sein größtes Talent. 🏅🌟`
      },
      {
        titulo: "📚 {P} in der Bibliothek der Träume",
        cuerpo: `In {E} fliegen Bücher. {P} fand ein goldenes Buch mit leeren Seiten.\n\n{P} benutzte {oa_art} und die Seiten füllten sich mit Bildern. "{pe} Mein Leben ist ein Märchen!" 📖✨`
      },
      {
        titulo: "🎨 {P} und der Tag der Farben",
        cuerpo: `Ein grauer Wind stahl die Farben in {E}. Doch {P} benutzte {oa_art} wie einen Pinsel.\n\n"{pe} Schaut mal!" Alle Farben kehrten dank {O} zurück. Alle waren glücklich. 🌈😴`
      },
      {
        titulo: "🕯️ Das Versprechen von Morgen",
        cuerpo: `{P} saß unter dem Baum in {E}. {oa_art} glühte sanft und zeigte schöne Blumen.\n\n"{pe} Morgen wird wunderbar," versprach {P}. Voller Hoffnung schlief er ein. 🌜💤`
      }
    ]
  },
  pt: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princesa', emoji: '👸' },
        { id: 'caballero', nombre: 'Cavaleiro', emoji: '🤺' },
        { id: 'dragon', nombre: 'Dragão', emoji: '🐉' },
        { id: 'hada', nombre: 'Fada', emoji: '🧚' },
        { id: 'pirata', nombre: 'Pirata', emoji: '🏴‍☠️' },
        { id: 'unicornio', nombre: 'Unicórnio', emoji: '🦄' },
        { id: 'robot', nombre: 'Robô', emoji: '🤖' },
        { id: 'sirena', nombre: 'Sereia', emoji: '🧜‍♀️' },
        { id: 'conejito', nombre: 'Coelhinho', emoji: '🐰' },
        { id: 'bruja_buena', nombre: 'Bruxa Boa', emoji: '🧙‍♀️' },
      ],
      escenarios: [
        { id: 'castillo', nombre: 'Castelo Encantado', emoji: '🏰' },
        { id: 'bosque', nombre: 'Floresta Mágica', emoji: '🌳' },
        { id: 'isla', nombre: 'Ilha do Tesouro', emoji: '🏝️' },
        { id: 'nube', nombre: 'Nuvem Gigante', emoji: '☁️' },
        { id: 'mar', nombre: 'Fundo do Mar', emoji: '🌊' },
        { id: 'montana', nombre: 'Montanha Nevada', emoji: '🏔️' },
        { id: 'jardin', nombre: 'Jardim Secreto', emoji: '🌷' },
        { id: 'estrellas', nombre: 'Cidade das Estrelas', emoji: '🌟' },
      ],
      objetos: [
        { id: 'espada', nombre: 'Espada de Luz', emoji: '⚔️' },
        { id: 'corona', nombre: 'Coroa Mágica', emoji: '👑' },
        { id: 'mapa', nombre: 'Mapa do Tesouro', emoji: '🗺️' },
        { id: 'varita', nombre: 'Varinha Mágica', emoji: '✨' },
        { id: 'pocion', nombre: 'Poção Brilhante', emoji: '🧪' },
        { id: 'llave', nombre: 'Chave Dourada', emoji: '🔑' },
        { id: 'libro', nombre: 'Livro Encantado', emoji: '📖' },
        { id: 'amuleto', nombre: 'Amuleto Protetor', emoji: '🔮' },
      ]
    },
    artEsc: {
      castillo:'um Castelo Encantado', bosque:'uma Floresta Mágica',
      isla:'uma Ilha do Tesouro', nube:'uma Nuvem Gigante',
      mar:'o Fundo do Mar', montana:'uma Montanha Nevada',
      jardin:'um Jardim Secreto', estrellas:'a Cidade das Estrelas',
    },
    artObj: function(id) {
      const o = this.elementos.objetos.find(x => x.id === id);
      return 'o objeto ' + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} e o segredo de {E}",
        cuerpo: `Era uma vez, em {ea}, um pequeno {p} que sonhava com aventuras. Um dia descobriu {oa_art}.\n\n"{pe} Que maravilha!" exclamou {P}. {O} encheu {E} de cores. Antes de dormir, ele sussurrou: "Obrigado pela magia." 🌙✨`
      },
      {
        titulo: "✨ A aventura de {P} em {E}",
        cuerpo: `Em {E}, {p} queria encontrar {O} lendário. {P} encontrou uma porta: "Apenas um coração generoso pode passar."\n\n{pe} {P} deixou um presente e a porta abriu! Lá dentro estava {oa_art}. Compartilhar é o verdadeiro tesouro. 🌟💤`
      },
      {
        titulo: "🌙 {P} e o {O} mágico",
        cuerpo: `Quando o sol se escondia atrás de {E}, a magia começava. Uma estrela caiu: era {oa_art}!\n\n"{pe} Pequeno {O}, o que fazes aqui?" perguntou {P}. {O} brilhou e {P} entendeu os animais. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} e o mistério de {E}",
        cuerpo: `Começou com uma nota em {E}: "Siga as pegadas." {P} seguiu-as até uma grande árvore.\n\nNo topo estava {oa_art}. Todo o {E} se iluminou. A magia é descobrir o especial em cada um. 🌜💫`
      },
      {
        titulo: "💫 A jornada de {P} para {E}",
        cuerpo: `{P} sempre quis visitar {E}. Um dia ele chegou e ficou sem palavras. Era tão bonito!\n\nNa entrada, {oa_art} esperava por ele. "{pe} Eu estava esperando," disse {O}. {P} tornou-se o guardião de {E}. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} e o Grande Festival em {E}",
        cuerpo: `A festa em {E} estava pronta mas faltava a música. {P} usou {oa_art}.\n\nUma melodia encheu {E} e todos dançaram. "{pe} Obrigado pela harmonia!" Compartilhar talento é a melhor magia. 🌜✨`
      },
      {
        titulo: "🎁 Um Presente das Estrelas para {P}",
        cuerpo: `Em {E}, {oa_art} caiu do céu. {P} sentiu que podia transformar o medo em sonhos.\n\n"{pe} Que presente especial!" Todos em {E} dormiram em paz. 🌟💤`
      },
      {
        titulo: "🐾 {P} ao Resgate em {E}",
        cuerpo: `{P} ouviu um animal em {E}. Ele usou {oa_art} para iluminar o caminho.\n\nO objeto brilhou como o dia. "{pe} Tu és tão corajoso." {O} era perfeito para fazer o bem. 🌛💨`
      },
      {
        titulo: "🌸 {P} e a Mudança de Estação em {E}",
        cuerpo: `A primavera chegava em {E} mas havia neve. {P} pegou {oa_art} e soprou.\n\nDe repente {E} ficou cheio de cores. {pe} "Tudo é tão lindo!" Todos celebraram o sol. 🌼🌜`
      },
      {
        titulo: "🎶 A Melodia de {O} em {E}",
        cuerpo: `Estava silêncio em {E}. {P} procurou o som e encontrou {oa_art}.\n\n{O} cantou uma música e as nuvens dançaram. "{pe} A música voltou!" {E} estava cheio de vida outra vez. 🎵💤`
      },
      {
        titulo: "🚀 {P} e o Amigo Galáctico",
        cuerpo: `Um foguetão pousou em {E}. {P} usou {oa_art} para traduzir desejos em luzes.\n\n"{pe} Agora somos amigos!" Eles descobriram segredos do cosmos em {E}. 🌌✨`
      },
      {
        titulo: "🏆 O Show de Talentos de {P}",
        cuerpo: `Hoje era o show em {E}. {P} estava nervoso. Mas depois mostrou {oa_art}.\n\n{O} criou figuras de luz. "{pe} Vencedor!" Imaginação era o seu maior talento. 🏅🌟`
      },
      {
        titulo: "📚 {P} na Biblioteca dos Sonhos",
        cuerpo: `Em {E} os livros voam. {P} encontrou um livro de ouro com páginas vazias.\n\n{P} usó {oa_art} e as páginas encheram-se de desenhos da sua vida. "{pe} A minha vida é um conto!" 📖✨`
      },
      {
        titulo: "🎨 {P} e o Dia das Cores",
        cuerpo: `Um vento cinzento roubou as cores de {E}. Mas {P} usou {oa_art} como um pincel.\n\n"{pe} Olhem só!" As cores voltaram graças a {O}. Todos ficaram felizes. 🌈😴`
      },
      {
        titulo: "🕯️ A Promessa de Amanhã",
        cuerpo: `{P} sentou-se sob a árvore em {E}. {oa_art} brilhava suavemente e mostrava flores.\n\n"{pe} Amanhã será incrível," prometeu {P}. Dormiu com esperança. 🌜💤`
      }
    ]
  }
};

STORY_DATA['es-latam'] = STORY_DATA['es'];

// ============================================
// Story Generator
// ============================================
function generateStory(personajeId, escenarioId, objetoId) {
  const data = STORY_DATA[currentLang];
  const personaje = data.elementos.personajes.find(p => p.id === personajeId);
  const escenario = data.elementos.escenarios.find(e => e.id === escenarioId);
  const objeto = data.elementos.objetos.find(o => o.id === objetoId);
  
  if (!personaje || !escenario || !objeto) return null;

  const templates = data.plantillas;
  
  // Anti-repetición: Obtener índice del historial local
  let selectedIdx = 0;
  
  // Clave única por combinación y lenguaje
  const key = `cc_history_${currentLang}_${personajeId}_${escenarioId}_${objetoId}`;
  let used = [];
  try {
    used = JSON.parse(localStorage.getItem(key)) || [];
  } catch(e) { used = []; }

  // Encontrar índices disponibles
  let available = [];
  for(let i=0; i<templates.length; i++) {
     if (!used.includes(i)) available.push(i);
  }

  // Si se usaron todos, reiniciar
  if (available.length === 0) {
    available = templates.map((_, i) => i);
    used = [];
  }

  // Elegir uno de los disponibles al azar
  const randomPos = Math.floor(Math.random() * available.length);
  selectedIdx = available[randomPos];

  // Guardar en historial
  used.push(selectedIdx);
  localStorage.setItem(key, JSON.stringify(used));

  const tpl = templates[selectedIdx];
  
  // Español gramática
  const isEs = currentLang === 'es';
  const gP = isEs ? (data.generoMap[personajeId] || 'm') : 'm';
  const gO = isEs ? (data.generoMap[objetoId] || 'm') : 'm';

  const reps = {
    // Personaje: {P}, {p}, {p_base}
    '{P}': isEs ? data.artPers(personajeId) : personaje.nombre, 
    '{p}': isEs ? data.artPers(personajeId).toLowerCase() : personaje.nombre.toLowerCase(),
    '{p_base}': personaje.nombre.toLowerCase(),
    '{pe}': personaje.emoji,

    // Escenario: {E}, {ea}, {ee}
    '{E}': isEs ? data.artEscDef(escenarioId) : escenario.nombre, 
    '{ea}': data.artEsc[escenarioId] || escenario.nombre,
    '{ee}': escenario.emoji,

    // Objeto: {O}, {oa_art}, {oe}
    '{O}': isEs ? data.artObj(objetoId) : objeto.nombre, 
    '{oa_art}': data.artObj(objetoId),
    '{oe}': objeto.emoji,
    
    // Solo relevante para español
    '{oa}': gP === 'f' ? 'a' : 'o',
    '{ao}': gO === 'f' ? 'a' : 'o',
    '{lola}': gO === 'f' ? 'la' : 'lo',
    '{oa_obj}': gO === 'f' ? 'a' : 'o',
    '{oa_esc}': 'o', 
  };

  let titulo = tpl.titulo;
  let cuerpo = tpl.cuerpo;

  for (const [k, v] of Object.entries(reps)) {
    const re = new RegExp(k.replace(/[{}]/g, '\\$&'), 'g');
    titulo = titulo.replace(re, v);
    cuerpo = cuerpo.replace(re, v);
  }

  return {
    titulo, cuerpo,
    personaje: personaje.nombre, escenario: escenario.nombre, objeto: objeto.nombre,
    personajeEmoji: personaje.emoji, escenarioEmoji: escenario.emoji, objetoEmoji: objeto.emoji,
    personajeId, escenarioId, objetoId,
    fecha: new Date().toISOString(), templateId: selectedIdx, lang: currentLang
  };
}
