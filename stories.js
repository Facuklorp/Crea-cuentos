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
    artEsc: {
      castillo:'un Castillo Encantado', bosque:'un Bosque Mágico',
      isla:'una Isla del Tesoro', nube:'una Nube Gigante',
      mar:'el Fondo del Mar', montana:'una Montaña Nevada',
      jardin:'un Jardín Secreto', estrellas:'la Ciudad de Estrellas',
    },
    artObj: function(id) {
      const g = this.generoObj[id];
      const o = this.elementos.objetos.find(x => x.id === id);
      return (g === 'f' ? 'la ' : 'el ') + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} y el secreto de {E}",
        cuerpo: `Había una vez, en {ea}, un pequeñ{oa} {p} que soñaba con vivir una gran aventura.\n\nUna mañana, mientras paseaba entre los rincones más escondidos del lugar, descubrió algo que brillaba con una luz especial: ¡{oa_art}! Al tocar{lola}, sintió un cosquilleo mágico en las manos.\n\n"{pe} ¡Qué maravilla!" — exclamó {P} con los ojos bien abiertos.\n\n{O} tenía un poder increíble: podía hacer que todo {E} se llenara de colores brillantes y música suave. Las flores bailaban, los árboles cantaban y las estrellas se asomaban incluso antes de que llegara la noche.\n\nPero había una condición: la magia solo funcionaba cuando {P} hacía algo amable por alguien más. Así que decidió compartir su descubrimiento con todos los habitantes del lugar.\n\nJuntos, hicieron de {E} el lugar más bonito y feliz del mundo. Y cada noche, antes de dormir, {P} susurraba: "Gracias, {O}, por enseñarme que la magia más grande es la bondad."\n\nY así, con el corazón lleno de alegría, {P} se durmió soñando con las aventuras del día siguiente. 🌙✨`
      },
      {
        titulo: "✨ La aventura de {P} en {E}",
        cuerpo: `En un lugar muy especial llamado {E}, vivía un valiente {p} que tenía un sueño: encontrar {oa_art} legendari{ao}.\n\nTodos decían que {O} estaba escondid{ao} en el corazón de {E}, protegid{ao} por un acertijo que nadie había podido resolver.\n\n{P} caminó por senderos luminosos, cruzó puentes de arcoíris y escaló colinas de algodón hasta llegar a una puerta mágica. En ella había una inscripción que decía:\n\n"Solo quien tenga un corazón generoso podrá pasar."\n\n{pe} {P} pensó un momento, sacó de su bolsillo su dulce favorito y lo dejó junto a la puerta como regalo. ¡Y la puerta se abrió!\n\nDentro encontró {oa_art}, que brillaba como mil estrellas. Pero lo mejor de todo fue que, al tocar{lola}, todos los habitantes de {E} recibieron un poquito de su magia.\n\nEsa noche, {P} regresó a casa con una gran sonrisa. Había aprendido que el verdadero tesoro no es lo que encuentras, sino lo que compartes.\n\nBuenas noches, pequeño aventurero. 🌟💤`
      },
      {
        titulo: "🌙 {P} y {O} mágic{ao}",
        cuerpo: `Cuando el sol se escondía detrás de {E}, la magia comenzaba. Y nadie lo sabía mejor que {P}, quien cada noche miraba cómo las estrellas empezaban a bailar en el cielo.\n\nUna noche especial, una estrella fugaz cayó justo frente a {P}. ¡Pero no era una estrella! Era {oa_art} que brillaba con todos los colores del arcoíris.\n\n"{pe} ¿Qué haces aquí, pequeñ{ao} {O}?" — preguntó {P} con curiosidad.\n\n{O} respondió con un destello mágico y, de pronto, {P} podía entender el idioma de los animales, el susurro del viento y las canciones de las flores.\n\nLos animales de {E} le contaron historias increíbles: de ríos que cantaban, de montañas que reían y de nubes que hacían cosquillas. {P} rió tanto que las estrellas brillaron aún más fuerte.\n\nCuando llegó la hora de dormir, {P} abrazó {oa_art} y susurró: "Mañana viviremos otra aventura."\n\nY así, arropado por la noche estrellada, {P} cerró los ojos con una sonrisa. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} y el misterio de {E}",
        cuerpo: `Todo comenzó cuando {P} encontró una nota misteriosa debajo de una piedra en {E}. La nota decía: "Sigue las huellas brillantes y encontrarás algo maravilloso."\n\n¡{P} no lo dudó ni un segundo! Se puso su capa de aventurer{oa} y siguió las huellas que brillaban como polvo de estrellas por todo {E}.\n\nLas huellas lo llevaron por caminos llenos de flores luminosas, pasaron junto a un río que cantaba melodías dulces y llegaron hasta un gran árbol que tocaba el cielo.\n\nEn la copa del árbol, envuelt{ao} en hojas doradas, estaba {oa_art}. Cuando {P} la tomó entre sus manos, todo {E} se iluminó como si fueran las fiestas más bonitas del mundo.\n\n"{pe} ¡Es hermoso!" — dijo {P}.\n\n{O} le mostró que cada habitante de {E} tenía algo especial que ofrecer. El viento sabía contar chistes, las rocas sabían abrazar y las nubes preparaban los sueños más bonitos.\n\n{P} entendió que la magia no estaba en {oa_art}, sino en descubrir lo especial que hay en cada uno.\n\nCon esa lección en el corazón, se acurrucó bajo las estrellas y soñó los sueños más dulces. 🌜💫`
      },
      {
        titulo: "💫 El viaje de {P} a {E}",
        cuerpo: `{P} siempre había querido visitar {E}, ese lugar mágico del que hablaban todos los cuentos. Un día, finalmente, decidió emprender el viaje.\n\nLlevó en su mochila un bocadillo de mermelada, una linterna y mucha valentía. El camino fue largo pero emocionante: cruzó ríos de limonada, saltó charcos de caramelo y caminó bajo arcoíris dobles.\n\nCuando por fin llegó a {E}, se quedó sin palabras. ¡Era aún más bonito de lo que imaginaba! Y justo en la entrada, esperándol{oa}, había {oa_art}.\n\n"{pe} Te estaba esperando" — dijo {O} con voz suave como una brisa.\n\n{O} le explicó que {E} necesitaba un guardián especial: alguien amable, valiente y con muchísima imaginación. ¿Y quién mejor que {P}?\n\nDesde ese día, {P} se convirtió en el guardián de {E}. Cuidaba de los animales, contaba cuentos a las flores y pintaba el cielo de atardeceres con colores increíbles con ayuda de {oa_art}.\n\nY cada noche, los habitantes de {E} le cantaban una canción de cuna:\n\n"Duerme, {P}, duerme ya,\nque mañana más aventuras habrá."\n\n🌙⭐💤`
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
        cuerpo: `Once upon a time, in {ea}, a little {p} dreamed of living a great adventure.\n\nOne morning, while walking through the most hidden corners of the place, they discovered something glowing with a special light: {oa_art}! Touching it caused a magical tingle in their hands.\n\n"{pe} How wonderful!" — exclaimed {P} with wide eyes.\n\n{O} had an incredible power: it could fill all of {E} with bright colors and soft music. The flowers danced, the trees sang, and the stars peeked out even before night arrived.\n\nBut there was a condition: the magic only worked when {P} did something kind for someone else. So they decided to share their discovery with all the inhabitants of the place.\n\nTogether, they made {E} the most beautiful and happiest place in the world. And every night, before sleeping, {P} whispered: "Thank you, {O}, for teaching me that the greatest magic is kindness."\n\nAnd so, with a heart full of joy, {P} fell asleep dreaming of the next day's adventures. 🌙✨`
      },
      {
        titulo: "✨ The adventure of {P} in {E}",
        cuerpo: `In a very special place called {E}, lived a brave {p} who had a dream: to find the legendary {O}.\n\nEveryone said that {O} was hidden in the heart of {E}, protected by a riddle no one could solve.\n\n{P} walked along luminous paths, crossed rainbow bridges, and climbed cotton hills until reaching a magic door. On it was an inscription that read:\n\n"Only one with a generous heart may pass."\n\n{pe} {P} thought for a moment, took their favorite candy from their pocket, and left it by the door as a gift. And the door opened!\n\nInside they found {oa_art}, shining like a thousand stars. But the best part was that, by touching it, all the inhabitants of {E} received a little bit of its magic.\n\nThat night, {P} returned home with a big smile. They had learned that the true treasure is not what you find, but what you share.\n\nGoodnight, little adventurer. 🌟💤`
      },
      {
        titulo: "🌙 {P} and the magic {O}",
        cuerpo: `When the sun hid behind {E}, the magic began. And no one knew it better than {P}, who every night watched the stars start to dance in the sky.\n\nOne special night, a shooting star fell right in front of {P}. But it wasn't a star! It was {oa_art} glowing with all the colors of the rainbow.\n\n"{pe} What are you doing here, little {O}?" — asked {P} curiously.\n\n{O} responded with a magical flash and, suddenly, {P} could understand the language of the animals, the whisper of the wind, and the songs of the flowers.\n\nThe animals of {E} told incredible stories: of singing rivers, laughing mountains, and tickling clouds. {P} laughed so much that the stars shone even brighter.\n\nWhen bedtime came, {P} hugged {oa_art} and whispered: "Tomorrow we will have another adventure."\n\nAnd so, tucked in by the starry night, {P} closed their eyes with a smile. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} and the mystery of {E}",
        cuerpo: `It all started when {P} found a mysterious note under a stone in {E}. The note said: "Follow the glowing footprints... and you will find something wonderful."\n\n{P} didn't hesitate for a second! They put on their adventurer cape and followed the footprints that glowed like stardust all over {E}.\n\nThe footprints led them along paths full of luminous flowers, past a river that sang sweet melodies, and to a great tree that touched the sky.\n\nAt the top of the tree, wrapped in golden leaves, was {oa_art}. When {P} took it in their hands, all of {E} lit up as if it were the most beautiful festival in the world.\n\n"{pe} It's beautiful!" — said {P}.\n\n{O} showed them that every inhabitant of {E} had something special to offer. The wind knew how to tell jokes, the rocks knew how to hug, and the clouds prepared the most beautiful dreams.\n\n{P} understood that the magic was not in {oa_art}, but in discovering how special everyone is.\n\nWith that lesson in their heart, they curled up under the stars and dreamed the sweetest dreams. 🌜💫`
      },
      {
        titulo: "💫 {P}'s journey to {E}",
        cuerpo: `{P} had always wanted to visit {E}, that magical place everyone talked about in stories. One day, finally, they decided to embark on the journey.\n\nThey packed a jam sandwich, a flashlight, and a lot of bravery in their backpack. The path was long but exciting: crossing lemonade rivers, jumping caramel puddles, and walking under double rainbows.\n\nWhen they finally arrived at {E}, they were speechless. It was even more beautiful than they imagined! And right at the entrance, waiting for them, was {oa_art}.\n\n"{pe} I was waiting for you" — said {O} with a voice soft as a breeze.\n\n{O} explained that {E} needed a special guardian: someone kind, brave, and with a lot of imagination. And who better than {P}?\n\nFrom that day on, {P} became the guardian of {E}. They took care of the animals, told stories to the flowers, and painted the sky with incredible colors with the help of {oa_art}.\n\nAnd every night, the inhabitants of {E} sang them a lullaby:\n\n"Sleep, {P}, sleep now,\nfor tomorrow there will be more adventures."\n\n🌙⭐💤`
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
        cuerpo: `Il était une fois, dans {ea}, un(e) petit(e) {p} qui rêvait de vivre une grande aventure.\n\nUn matin, en se promenant, il a découvert quelque chose qui brillait avec une lumière spéciale : {oa_art} ! Le toucher lui a fait ressentir un frisson magique.\n\n"{pe} Quelle merveille !" — s'est exclamé(e) {P}.\n\n{O} avait un pouvoir incroyable : il pouvait remplir tout(e) {E} de couleurs vives. Les fleurs dansaient et les arbres chantaient.\n\nEt ainsi, avec un cœur plein de joie, {P} s'est endormi(e) en rêvant aux aventures du lendemain. 🌙✨`
      },
      {
        titulo: "✨ L'aventure de {P} dans {E}",
        cuerpo: `Dans un endroit très spécial appelé {E}, vivait un(e) courageux(se) {p} qui avait un rêve : trouver {oa_art} légendaire.\n\nTous disaient que {O} était caché(e) au cœur de {E}, protégé(e) par une énigme que personne n'avait pu résoudre.\n\nÀ l'intérieur, il(elle) a trouvé {oa_art}, qui brillait comme mille étoiles. Mais le meilleur de tout, c'est qu'en le touchant, tous les habitants en ont reçu un peu de magie.\n\nBonne nuit, petit(e) aventurier(ère). 🌟💤`
      },
      {
        titulo: "🌙 {P} et {O} magique",
        cuerpo: `Quand le soleil se cachait derrière {E}, la magie commençait. Et personne ne le savait mieux que {P}.\n\nUne nuit spéciale, une étoile filante est tombée juste devant {P}. Mais ce n'était pas une étoile ! C'était {oa_art} qui brillait de toutes les couleurs de l'arc-en-ciel.\n\nLes animaux de {E} racontaient des histoires incroyables : de rivières qui chantaient et de nuages qui chatouillaient. {P} a tellement ri que les étoiles ont brillé encore plus fort.\n\nEt ainsi, bordé(e) par la nuit étoilée, {P} a fermé les yeux avec le sourire. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} et le mystère de {E}",
        cuerpo: `Tout a commencé quand {P} a trouvé une note mystérieuse sous une pierre dans {E}. La note disait : "Suis les empreintes brillantes."\n\nAu sommet de l'arbre, enveloppé(e) dans des feuilles dorées, se trouvait {oa_art}. Quand {P} l'a pris dans ses mains, tout(e) {E} s'est illuminé(e) comme si c'était la plus belle fête du monde.\n\nAvec cette leçon dans le cœur, il(elle) s'est blotti(e) sous les étoiles et a fait les rêves les plus doux. 🌜💫`
      },
      {
        titulo: "💫 Le voyage de {P} à {E}",
        cuerpo: `{P} avait toujours voulu visiter {E}, cet endroit magique dont tout le monde parlait dans les histoires.\n\nQuand il(elle) est enfin arrivé(e) à {E}, il(elle) est resté(e) sans voix. C'était encore plus beau qu'il(elle) ne l'imaginait ! Et juste à l'entrée, {oa_art} l'attendait.\n\nEt chaque nuit, les habitants de {E} lui chantaient une berceuse :\n\n"Dors, {P}, dors maintenant,\ncar demain il y aura plus d'aventures."\n\n🌙⭐💤`
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
        cuerpo: `Es war einmal, in {ea}, ein kleines {p}, das davon träumte, ein großes Abenteuer zu erleben.\n\nEines Morgens entdeckte es etwas, das mit einem besonderen Licht leuchtete: {oa_art}! Es zu berühren, fühlte sich magisch an.\n\n"{pe} Wie wunderbar!" — rief {P}.\n\n{O} hatte eine unglaubliche Kraft: Es konnte ganz {E} mit bunten Farben füllen. Die Blumen tanzten und die Bäume sangen.\n\nUnd so schlief {P} mit einem Herzen voller Freude ein und träumte von den Abenteuern des nächsten Tages. 🌙✨`
      },
      {
        titulo: "✨ Das Abenteuer von {P} in {E}",
        cuerpo: `An einem ganz besonderen Ort namens {E} lebte ein mutiges {p}, das einen Traum hatte: {oa_art} zu finden.\n\nAlle sagten, dass {O} im Herzen von {E} versteckt sei.\n\nDarin fand es {oa_art}, das wie tausend Sterne leuchtete. Aber das Beste war, dass durch die Berührung alle Bewohner ein wenig von seiner Magie erhielten.\n\nGute Nacht, kleiner Abenteurer. 🌟💤`
      },
      {
        titulo: "🌙 {P} und das magische {O}",
        cuerpo: `Wenn sich die Sonne hinter {E} versteckte, begann die Magie. Und niemand wusste das besser als {P}.\n\nIn einer besonderen Nacht fiel eine Sternschnuppe genau vor {P}. Aber es war kein Stern! Es war {oa_art}, das in allen Farben des Regenbogens leuchtete.\n\nDie Tiere von {E} erzählten unglaubliche Geschichten. {P} lachte so sehr, dass die Sterne noch heller leuchteten.\n\nUnd so schloss {P}, eingekuschelt von der sternenklaren Nacht, mit einem Lächeln die Augen. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} und das Geheimnis von {E}",
        cuerpo: `Alles begann, als {P} eine mysteriöse Notiz unter einem Stein in {E} fand. Die Notiz besagte: "Folge den leuchtenden Fußspuren."\n\nAuf der Spitze des Baumes lag {oa_art}. Als {P} es in die Hände nahm, leuchtete ganz {E} auf.\n\nMit dieser Lektion im Herzen rollte es sich unter den Sternen zusammen und träumte die süßesten Träume. 🌜💫`
      },
      {
        titulo: "💫 Die Reise von {P} nach {E}",
        cuerpo: `{P} wollte schon immer {E} besuchen, diesen magischen Ort, über den alle in Geschichten sprachen.\n\nAls es schließlich in {E} ankam, war es sprachlos. Es war noch schöner, als es sich vorgestellt hatte! Und direkt am Eingang wartete {oa_art} darauf.\n\nUnd jede Nacht sangen ihm die Bewohner von {E} ein Schlaflied:\n\n"Schlaf, {P}, schlaf jetzt,\ndenn morgen gibt es mehr Abenteuer."\n\n🌙⭐💤`
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
        cuerpo: `Era uma vez, em {ea}, um pequeno {p} que sonhava em viver uma grande aventura.\n\nUma manhã, enquanto caminhava, descobriu algo que brilhava com uma luz especial: {oa_art}! Tocá-lo causou um frio mágico na barriga.\n\n"{pe} Que maravilha!" — exclamou {P}.\n\n{O} tinha um poder incrível: podia encher todo o {E} com cores brilhantes. As flores dançavam e as árvores cantavam.\n\nE assim, com o coração cheio de alegria, {P} adormeceu sonhando com as aventuras do dia seguinte. 🌙✨`
      },
      {
        titulo: "✨ A aventura de {P} em {E}",
        cuerpo: `Em um lugar muito especial chamado {E}, vivia um corajoso {p} que tinha um sonho: encontrar {oa_art} lendário.\n\nTodos diziam que {O} estava escondido no coração de {E}.\n\nLá dentro encontrou {oa_art}, que brilhava como mil estrelas. Mas o melhor de tudo foi que, ao tocá-lo, todos os habitantes receberam um pouco de sua magia.\n\nBoa noite, pequeno aventureiro. 🌟💤`
      },
      {
        titulo: "🌙 {P} e {O} mágico",
        cuerpo: `Quando o sol se escondia atrás de {E}, a magia começava. E ninguém sabia disso melhor que {P}.\n\nUma noite especial, uma estrela cadente caiu bem na frente de {P}. Mas não era uma estrela! Era {oa_art} que brilhava com todas as cores do arco-íris.\n\nOs animais de {E} contavam histórias incríveis. {P} riu tanto que as estrelas brilharam ainda mais forte.\n\nE assim, aconchegado pela noite estrelada, {P} fechou os olhos com um sorriso. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} e o mistério de {E}",
        cuerpo: `Tudo começou quando {P} encontrou uma nota misteriosa debaixo de uma pedra em {E}. A nota dizia: "Siga as pegadas brilhantes."\n\nNo topo da árvore, estava {oa_art}. Quando {P} o pegou em suas mãos, todo o {E} se iluminou.\n\nCom essa lição em seu coração, se encolheu sob as estrelas e sonhou os sonhos mais doces. 🌜💫`
      },
      {
        titulo: "💫 A jornada de {P} para {E}",
        cuerpo: `{P} sempre quis visitar {E}, aquele lugar mágico de que todos falavam nas histórias.\n\nQuando finalmente chegou a {E}, ficou sem palavras. Era ainda mais bonito do que imaginava! E bem na entrada, {oa_art} o esperava.\n\nE todas as noites, os habitantes de {E} cantavam uma canção de ninar:\n\n"Durma, {P}, durma agora,\npois amanhã haverá mais aventuras."\n\n🌙⭐💤`
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
  const tpl = templates[Math.floor(Math.random() * templates.length)];
  
  // Español gramática
  const isEs = currentLang === 'es';
  const gP = isEs ? (data.generoMap[personajeId] || 'm') : 'm';
  const gO = isEs ? (data.generoMap[objetoId] || 'm') : 'm';

  const reps = {
    '{P}': personaje.nombre, 
    '{p}': personaje.nombre.toLowerCase(),
    '{pe}': personaje.emoji,
    '{E}': escenario.nombre, 
    '{ea}': data.artEsc[escenarioId] || escenario.nombre,
    '{ee}': escenario.emoji,
    '{O}': objeto.nombre, 
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
    fecha: new Date().toISOString(), templateId: templates.indexOf(tpl), lang: currentLang
  };
}
