// ============================================
// CREA CUENTOS — Motor de Historias v2.0
// Ahora con villanos tiernos y cuentos más largos
// ============================================

const STORY_DATA = {
  es: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princesa', emoji: '👸' },
        { id: 'caballero', nombre: 'Caballero', emoji: '🛡️' },
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
      ],
      villanos: [
        // Personajes villanos tiernos
        { id: 'dragoncillo', nombre: 'Dragoncillo Dormilón', emoji: '😪🐲', tipo: 'personaje', genero: 'm' },
        { id: 'brujita', nombre: 'Brujita del Frío', emoji: '🥶🧙‍♀️', tipo: 'personaje', genero: 'f' },
        { id: 'duende', nombre: 'Duende Goloso', emoji: '🍭👺', tipo: 'personaje', genero: 'm' },
        { id: 'ratoncito', nombre: 'Ratoncito Revoltoso', emoji: '🐭💨', tipo: 'personaje', genero: 'm' },
        { id: 'honguito', nombre: 'Honguito Parlante', emoji: '🍄💬', tipo: 'personaje', genero: 'm' },
        { id: 'caracol', nombre: 'Caracol Baboso', emoji: '🐌💧', tipo: 'personaje', genero: 'm' },
        // Conflictos del entorno
        { id: 'tormenta', nombre: 'una tormenta repentina', emoji: '⛈️', tipo: 'entorno', genero: 'f' },
        { id: 'viento', nombre: 'un viento curioso y revoltoso', emoji: '🌬️', tipo: 'entorno', genero: 'm' },
        { id: 'arena', nombre: 'una nube de arena viajera', emoji: '🌪️', tipo: 'entorno', genero: 'f' },
        { id: 'niebla', nombre: 'una niebla espesa que todo lo ocultaba', emoji: '🌫️', tipo: 'entorno', genero: 'f' },
        { id: 'nieve', nombre: 'una tormenta de nieve traviesa', emoji: '❄️🌨️', tipo: 'entorno', genero: 'f' },
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
        cuerpo: `Había una vez, en {ea}, {un_p} pequeñ{oa} {p_base} que soñaba con vivir una gran aventura. Cada mañana miraba el horizonte con los ojos llenos de esperanza, imaginando mundos increíbles más allá de lo que podía ver.

Una mañana dorada, mientras exploraba los rincones más escondidos del lugar, algo brilló entre las hojas: ¡{oa_art}! Al tocar{lola}, sintió un cosquilleo mágico que le subía por los dedos hasta el corazón.

"¡{pe} Qué maravilla!" — exclamó {P} con los ojos bien abiertos.

Pero justo en ese momento [[p: apareció {V}, el villano más... sorprendente de {E}. {V} no era malvado de verdad: era tan pequeño y despistado que sin querer tropezó con {oa_art} y lo escondió debajo de su enorme almohada de nubes. | e: las cosas cambiaron en {E} y se desató {V}. No era algo malo de verdad, pero era tan fuerte que sin querer movió {oa_art} y lo ocultó en un rincón profundo. ]]

[[p: "¡Eso es mío!" — dijo {V} bostezando —. "¡Necesito algo suave para dormir!" | e: ]]

{P} no se enojó. [[p: En vez de eso, se sentó junto a {V} y le preguntó con dulzura: "¿Por qué no puedes dormir?" Y así descubrió que {V} tenía miedo de la oscuridad. | e: En su lugar, buscó con paciencia una solución y descubrió que el lugar necesitaba un poco de luz y calma para que todo volviera a la normalidad. ]]

{P} usó el poder de {oa_art} para crear una pequeña luz suave y cálida que iluminó [[p: el rincón de {V}. Desde ese momento, {V} ya no necesitaba robar nada porque tenía su propia luz mágica... ¡y un nuevo amigo! | e: cada rincón de {E}. Desde ese momento, la fuerza de {V} se calmó y se convirtió en una suave brisa que acompañaba los sueños de todos. ]]

Juntos hicieron de {E} el lugar más bonito y acogedor del mundo. Antes de dormir, {P} susurró: "La magia más grande no está en los objetos, sino en el corazón de quienes los comparten." 🌙✨`
      },
      {
        titulo: "✨ La gran aventura de {P} en {E}",
        cuerpo: `En un lugar muy especial llamado {E}, vivía {un_p} valiente {p_base} que tenía un sueño enorme: encontrar {oa_art} legendari{ao}. Todo el mundo decía que ese objeto tenía el poder de hacer realidad los sueños más bonitos.

Un día, {P} emprendió el viaje con el corazón lleno de valentía. Cruzó puentes de arcoíris, caminó por caminos de polvo de estrellas y atravesó jardines donde las flores susurraban canciones.

Pero entonces [[p: apareció {V}. Este peculiar personaje había llegado antes a {E} y, sin mala intención, había enredado todos los caminos mientras intentaba jugar. | e: se produjo {V}. Este fenómeno natural llegó de repente a {E} y, sin querer, revolvió todos los caminos y senderos. ]] ¡Los senderos estaban mezclados y nadie sabía por dónde ir!

[[p: "{V} ¡Ay, lo siento mucho!" — dijo {V} poniéndose muy colorado —. "Solo quería hacer un laberinto para jugar..." | e: ]]

{P} respiró hondo y sonrió. [[p: "No te preocupes. ¡Podemos resolverlo juntos!" Y los dos pasaron una tarde entera desenredando caminos, riendo y contándose historias. | e: Con calma y paciencia, se puso a trabajar para ordenar el lugar. Pasó una tarde entera desenredando caminos y devolviendo la armonía a {E}. ]]

Al final, cuando todo estaba en orden, {P} encontró {oa_art} brillando en el centro de {E}. Pero lo más valioso del día no fue el objeto mágico: fue haber aprendido que la paciencia [[p: y la amistad son el mayor tesoro. | e: es el mayor tesoro para superar cualquier dificultad. ]]

Se acurrucaron juntos viendo las estrellas, y {P} comprendió que cada aventura es más bonita cuando se comparte. 🌟💤`
      },
      {
        titulo: "🌙 {P} y {O} bajo las estrellas",
        cuerpo: `Cuando el sol se escondía detrás de {E} y el cielo empezaba a llenarse de puntitos brillantes, la magia comenzaba. Nadie lo sabía mejor que {P}, quien cada noche miraba el firmamento y pedía un deseo diferente.

Una noche muy especial, algo cayó con un suave destello justo frente a {P}. Era {oa_art}, que brillaba con todos los colores del arcoíris a la vez.

"¡{pe} ¿Qué haces aquí, pequeñ{ao} {O_base}?" — preguntó {P} asombrad{oa}.

Pero antes de que {O} pudiera responder, [[p: llegó {V} corriendo. Había estado persiguiendo {oa_art} toda la noche porque pensaba que era una estrella caída y quería regodeársela al cielo. ¡Pobre {V}, estaba agotad{ao} de tanto correr! | e: se sintió la fuerza de {V}. Este fenómeno había estado envolviendo {oa_art} toda la noche, como si quisiera llevarlo de vuelta al cielo. ]]

{P} le explicó con cariño [[p: que {oa_art} no era una estrella sino algo mucho más especial: un objeto capaz de hacer realidad los sueños de quien lo necesita. Y {V} necesitaba algo en realidad: un amigo que le acompañara por las noches, porque se sentía muy sol{ao}. | e: al viento y a las estrellas que {oa_art} era un objeto especial capaz de traer calma y sueños bonitos a quien más lo necesitara. ]]

Esa noche, {P} usó el poder de {oa_art} para que [[p: {V} pudiera entender el idioma de las estrellas. Y así, mientras {P} escuchaba sus secretos brillantes, {V} aprendió que nunca más estaría sol{ao}. | e: la paz regresara a {E}. El cielo se volvió sereno y las estrellas brillaron con más fuerza que nunca. ]]

Los tres —{P}, [[p: {V} | e: la calma ]] y las estrellas de {E}— se convirtieron en los mejores amigos del universo. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} y el misterio de {E}",
        cuerpo: `Todo comenzó un martes de lo más normal cuando {P} encontró una nota misteriosa pegada en la puerta de {E}: "Alguien ha robado la alegría del lugar. Sigue las huellas brillantes y descubre quién fue."

¡{P} no lo dudó ni un segundo! Siguió las huellas de polvo de estrellas que serpenteaban por {E} hasta llegar a un claro escondido entre árboles enormes.

Allí estaba [[p: {V}, rodeado de toda la alegría de {E}: risas en frasquitos, colores en bolsitas y melodías en cajitas pequeñas. Pero {V} no estaba riendo; estaba sentad{ao} en el suelo, muy triste. | e: el efecto de {V}, que había atrapado toda la alegría de {E}: las risas, los colores y las melodías estaban envueltos en un torbellino de confusión. ]]

[[p: "¿Por qué recogiste todo esto?" — preguntó {P} con voz dulce. | e: ]]

[[p: {V} explicó entre sollozos que había querido guardar la alegría de {E} porque tenía miedo de que se acabara. "Me da tanto pánico que un día no haya más cosas bonitas..." | e: Parecía que el entorno había atrapado la alegría por temor a perderla, creando un clima de melancolía en todo el lugar. ]]

{P} sacó {oa_art} y con su magia creó algo increíble: una fuente de alegría inagotable en el corazón de {E}, una que nunca se acabaría mientras hubiera alguien que quiera compartir.

[[p: {V} abrió todos los frasquitos, bolsitas y cajitas, y la alegría inundó {E} de colores. | e: El torbellino de {V} se disipó suavemente, liberando toda la alegría acumulada, y los colores inundaron {E}. ]] Fue el día más bonito que nadie en ese lugar recordaba.

Esa noche, {P} se acurrucó bajo las estrellas sabiendo que la alegría, cuando se comparte, no disminuye: ¡se multiplica! 🌜💫`
      },
      {
        titulo: "💫 El gran viaje de {P} a {E}",
        cuerpo: `{P} siempre había soñado con visitar {E}. En su habitación tenía dibujos, mapas y postales de ese lugar mágico. Y un buen día, finalmente, decidió que era el momento de emprender el viaje.

El camino fue largo pero lleno de maravillas. {P} vio cascadas de chocolate, puentes hechos de nubes esponjosas y pájaros que cantaban melodías conocidas.

Cuando por fin llegó a {E}, se quedó sin palabras. Era incluso más hermoso de lo que había imaginado. Pero algo pasaba: todos los habitantes del lugar estaban preocupados.

[[p: "Es {V}" — explicó un pequeño duende —. "Esta mañana se ha metido en {ea} y sin querer ha revuelto todo. ¡Ha confundido el norte con el sur y ahora nadie sabe dónde está nada!" | e: "Es por {V}" — explicó un pequeño duende —. "Esta mañana ha llegado a {ea} y lo ha revuelto todo. El viento sopló tan fuerte que ha confundido el norte con el sur y ahora nadie sabe dónde está nada." ]]

{P} encontró a [[p: {V} intentando arreglarlo todo frenéticamente, tropezando con una cosa al intentar ordenar otra. Era tan torpemente adorable que {P} no pudo evitar reír con ternura. | e: la zona donde {V} había pasado, con rastros de hojas y arena por todos lados. ]]

Juntos, con la ayuda de {oa_art} que esperaba en la entrada del lugar, ordenaron {E} en tiempo récord. Cada objeto regresó a su sitio con un destello mágico y una pequeña melodía.

Cuando todo estuvo perfecto, [[p: {V} se volvió hacia {P} con las mejillas rojas: "Gracias. Nunca había tenido a alguien que me ayudara sin reírse de mí." | e: el aire en {E} se volvió fresco y tranquilo. ]]

[[p: "¡Sí que me he reído!" — admitió {P} sonriendo —. "Pero solo porque eres encantador{a}." | e: ]]

Desde ese día, {P} se convirtió en el guardián de {E} [[p: y {V} en su ayudante más leal —aunque algo torpe—. | e: cuidando que el clima fuera siempre agradable para todos. ]] Y vivieron felices muchas, muchas noches. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} y el Gran Festival de {E}",
        cuerpo: `¡Todo estaba listo para la fiesta más grande del año en {E}! {P} había pasado semanas preparando guirnaldas de luces, globos de colores y una tarta enorme de varios pisos. Era la noche del Gran Festival.

Pero cuando faltaba una hora para que empezara, ocurrió algo inesperado: la música había desaparecido. Sin música, ¡no había fiesta!

[[p: Y la culpable era {V}, que había escondido todos los instrumentos porque quería tocarlos ella sola antes de que nadie llegara... pero no sabía tocar ninguno, y ahora estaba rodeada de instrumentos y llorando de vergüenza. | e: Resulta que {V} había soplado tan fuerte que los instrumentos se habían dispersado por todo {E}, quedando atrapados en lugares insospechados. ]]

{P} no la regañó. En su lugar, [[p: se sentó a su lado y le enseñó algo sencillo: cómo hacer música con las manos. Palmadas, chasquidos, golpes suaves en las rodillas. | e: buscó una forma creativa de recuperar la armonía. ]]

Luego recordó que había guardado {oa_art}. Al tocarlo, una melodía dulce y perfecta llenó cada rincón de {E}, haciendo bailar incluso a las flores y a las nubes.

[[p: {V} se unió a la música con sus palmadas, y pronto todos los invitados llegaron y comenzaron a bailar. | e: El efecto de {V} se suavizó y los instrumentos regresaron a sus sitios como por arte de magia. ]] Fue la mejor fiesta que {E} había tenido jamás.

"¡{pe} {P}, gracias por traer la armonía!" — dijeron todos. [[p: Y {V}, que ya no era un secreto torpe, fue ovacionada por sus palmadas perfectas. | e: ]]

Cansad{oa} de tanta diversión, {P} se fue a dormir con una sonrisa de oreja a oreja. 🌜✨`
      },
      {
        titulo: "🎁 Un regalo de las estrellas para {P}",
        cuerpo: `Era una noche tremendamente tranquila en {E} cuando algo cayó suavemente del cielo como un copo de nieve brillante. Al aterrizar, resultó ser {oa_art} con el brillo de mil galaxias.

{P} lo sostuvo con cuidado. Al tocarlo, sintió que podía convertir los miedos más oscuros en sueños bonitos y coloridos.

"¡{pe} Es un regalo especial!" — exclamó {P}.

Pero entonces [[p: apareció {V}, con cara de haber estado llorando. Explicó que esse regalo había caído exactamente donde él vivía y que, en realidad, creia que era para él. | e: se desató {V} en la zona. Parecía que el clima también quería reclamar ese brillo para calmar su propia fuerza. ]]

{P} pensó un momento y luego tuvo una idea maravillosa: "¿Y si lo compartimos? [[p: Tú tienes miedo por las noches, y yo quiero ayudar a todos en {E}. ¡Podemos hacer las dos cosas a la vez!" | e: Yo quiero ayudar a todos en {E}, y así la calma llegará a cada rincón del lugar." ]]

[[p: {V} parpadeó sorprendido. Nunca nadie le había propuesto compartir algo así. | e: ]]

Esa noche, {P} [[p: y {V} usaron juntos la magia de {oa_art} para que todos en {E} tuvieran sueños bonitos: los niños soñaron con aventuras, los mayores con recuerdos felices y {V} soñó, por primera vez, sin ningún miedo. | e: usó la magia de {oa_art} para que todos en {E} tuvieran sueños bonitos. La fuerza de {V} se convirtió en un arrullo constante y todos soñaron, por primera vez, con una paz absoluta. ]]

{P} cerró los ojos agradecid{oa}, sabiendo que la generosidad es la magia más poderosa de todas. 🌟💤`
      },
      {
        titulo: "🐾 {P} al rescate en {E}",
        cuerpo: `Era una tarde tranquila en {E} cuando {P} escuchó un sonido extraño: una mezcla entre gemido y risita que venía de entre los matorrales. Al acercarse, encontró a un pequeño animalito perdido [[p: ... y junto a él, a {V}. | e: en medio de {ea}. ]]

[[p: {V} había intentado ayudar al animalito a encontrar su camino, pero siendo tan despistado como era, habían terminado los dos perdidos en un rincón de {E} que ninguno de los dos conocía. | e: Resulta que {V} había envuelto el lugar con su fuerza y el pequeño animalito no podía encontrar la salida. ]]

[[p: "¡{pe} Qué lío tan gracioso hemos armado!" — admitió {V} rascándose la cabeza. | e: ]]

{P} no pudo evitar reír, pero rápidamente sacó {oa_art}. El objeto empezó a brillar con una luz cálida y constante, trazando en el aire un camino luminoso que llevaba directo al hogar del pequeño animalito.

Mientras caminaban, {P} le explicó [[p: a {V} | e: ]] cómo orientarse con las estrellas y las flores: "Las flores del bosque siempre miran al sol, así que si sabes dónde está el sol al mediodía, nunca te perderás."

[[p: {V} escuchaba con atención, tomando nota mental de cada consejo. | e: ]] Cuando el animalito llegó a casa sano y salvo, su familia lo recibió con tanto amor que las lágrimas de alegría eran visibles.

"{pe} {P} eres muy valiente" — susurró el animalito [[p: —. "Y tú, {V}, aunque te perdiste, ¡nunca me abandonaste!" | e: . ]]

[[p: {V} se sonrojó de felicidad. Había fallado en lo de guiar, pero había triunfado en lo que de verdad importaba: estar ahí. | e: ]]

Con paz en el corazón y la lección aprendida, todos regresaron a descansar bajo las estrellas de {E}. 🌛💨`
      },
      {
        titulo: "🌸 {P} y el cambio de estación en {E}",
        cuerpo: `La primavera estaba a punto de llegar a {E}, pero algo la retenía: los campos seguían cubiertos de nieve y las flores se negaban a despertar. Todos en {E} estaban intrigados.

[[p: La culpable, aunque sin mala intención, era {V}, que había encontrado un botón mágico con forma de copo de nieve y lo había apretado muchas, muchísimas veces porque le parecía adorable. ¡Y con cada apretón, llegaba un poco más de invierno! | e: Todo era por causa de {V}, que se había instalado en {E} y no quería dejar paso al sol. El frío era tan intenso que parecía que el invierno no quería terminar nunca. ]]

[[p: "No sabía que eso pasaría" — confesó {V} con la voz muy pequeña. | e: ]]

{P} tomó {oa_art} con delicadeza y sopló suavemente sobre las flores dormidas. Una a una, como si despertaran de un largo sueño, fueron abriendo sus pétalos: primero unos pocos tímidos y luego, en cascada, todos a la vez.

"¡Esto es precioso!" [[p: — exclamó {V}, que nunca había visto florecer a las flores de verdad porque siempre llegaba cuando ya estaban abiertas. | e: ]]

{P} le enseñó [[p: | e: al mundo ]] que hay momentos especiales en la naturaleza que hay que esperar con paciencia, sin apresurar ni que las cosas florezcan ni que los sueños se cumplan.

Todo {E} se llenó de colores, perfumes y el zumbido alegre de las abejas. [[p: {V} cuidó el botón de copo de nieve con mucho más cuidado desde ese día, y solo lo apretaba en verano para que hubiera un poquito de fresco. | e: La fuerza de {V} se disipó, dejando que el sol calentara cada rincón. ]]

Y {P}, con el corazón ligero como una flor al viento, se preparó para un día de juegos interminables. 🌼🌜`
      },
      {
        titulo: "🎶 La melodía perdida de {E}",
        cuerpo: `Había un gran y extraño silencio en {E}. No había pájaros cantando, ni viento entre las hojas, ni riachuelos murmurando. Era como si la música del mundo hubiera desaparecido de golpe.

{P} decidió encontrar el sonido perdido. Caminó, buscó y preguntó hasta que llegó a la cueva más profunda de {E}, donde encontró [[p: a {V} rodeado de miles de sonidos que había capturado en pequeñas burbujas de jabón. | e: que {V} había atrapado todos los sonidos en pequeñas burbujas de aire que flotaban por todos lados. ]]

[[p: "Colecciono sonidos" — explicó {V} feliz —. "¡Ya tengo el canto del primer pájaro del día, el sonido de la lluvia en las hojas y tres tipos diferentes de silencio!" | e: Parecía que el entorno había decidido guardar silencio, atrapando cada nota musical en el aire. ]]

{P} entendió que [[p: {V} no era maldadoso, solo era muy curioso. Le propuso un trato: {V} soltaría todos los sonidos si {P} le ayudaba a aprender música de verdad. | e: era necesario liberar esos sonidos para que {E} recuperara su vida. ]]

[[p: {V} aceptó emocionado. | e: ]] Cuando [[p: soltó las burbujas | e: las burbujas estallaron ]], {E} explotó en una sinfonía maravillosa: todos los sonidos del mundo sonando a la vez, creando la melodía más hermosa que nadie había escuchado.

Luego {P} tomó {oa_art} y con él creó una pequeña canción especial [[p: solo para {V}: una melodía que llevaba su nombre y que podía escuchar siempre que quisiera. | e: para el lugar: una melodía que resonaría en {E} siempre que alguien necesitara alegría. ]]

"{pe} ¡La música ha vuelto!" — gritó {P} [[p: —, "¡y además tenemos una canción nueva!" | e: . ]]

Esa noche, {E} se llenó de vida y {P} se durmió mecido por el latido feliz del lugar. 🎵💤`
      },
      {
        titulo: "🚀 {P} y el visitante galáctico",
        cuerpo: `Un cohete plateado aterrizó en {E} con una suave explosión de luz azul. De su interior salió un visitante del espacio: pequeño, redondo, con ojos enormes como lunas llenas y una sonrisa que ocupaba toda su cara.

Todos en {E} se asomaron curiosos, pero nadie podía entender lo que el visitante decía. Sus palabras sonaban como música lejana, como campanillas bajo el agua.

Entonces [[p: apareció {V}, convencido de que podía hablar el idioma espacial porque una vez había soñado que lo hacía. Se plantó delante del visitante y empezó a decir cosas sin sentido en voz muy alta. ¡El visitante parecía cada vez más confundido! | e: se escuchó la fuerza de {V}. El ruido era tan intenso que las palabras del visitante se perdían en el aire, y el pobre viajero parecía cada vez más confundido. ]]

{P} sonrió con paciencia y sacó {oa_art}. Con su magia, el objeto tradujo los deseos del visitante en burbujas de luz que todos podían ver y entender.

El visitante venía de un planeta donde ya no quedaban historias. Había viajado por toda la galaxia buscando un lugar donde las historias nunca se acabaran, y había encontrado {E}.

{P} le prometió algo maravilloso: cada noche, antes de dormir, alguien de {E} le contaría una historia nueva. El visitante pondría esas historias en su nave y las llevaría a su planeta para que los niños de allá también pudieran soñar.

"{pe} ¡Ahora somos amigos intergalácticos!" — dijo {P}. [[p: Y {V}, que había intentado ayudar a su manera, fue nombrado embajador de las palabras confusas, que resultaron ser perfectas para hacer reír a todos. | e: ]]

Cuando el visitante partió, {P} miró las estrellas y supo que ninguna historia se pierde jamás. 🌌✨`
      },
      {
        titulo: "🏆 {P} y el concurso de talentos",
        cuerpo: `Hoy era el día del Gran Concurso de Talentos de {E}. Había flautistas de viento, domadores de nubes, pintores de arcoíris y bailarines de rayos de sol. {P} observaba todo con admiración y un poco de nervios.

Pero cuando llegó el turno de {P}, algo pasó: [[p: {V} había entrado antes al escenario pensando que el concurso empezaba más tarde, y ahora estaba haciendo malabares con frutos del bosque delante de todo el público. ¡Nadie quería decirle que no era su turno! | e: de repente se desató {V} justo sobre el escenario. Las hojas y frutos del bosque empezaron a volar por los aires delante de todo el público, ¡parecía un caos total! ]]

{P} observó la escena un momento. [[p: {V} era adorablemente desastroso: dejaba caer la mitad de los frutos, tropezaba con sus propios pies y sin embargo tenía una sonrisa enorme. El público, aunque confundido, empezaba a reír con cariño. | e: Todo era un desorden inesperado, pero los frutos volaban de una forma casi rítmica. El público observaba con asombro aquel espectáculo natural. ]]

Entonces {P} tuvo una idea brillante. Subió al escenario [[p: junto a {V} | e: ]] y sacó {oa_art}. Con él, creó figuras de luz que acompañaban [[p: los malabares de {V} | e: el movimiento de {V} ]], convirtiendo cada tropiezo en un movimiento artístico y cada frutico caído en una estrella brillante.

La actuación fue un espectáculo sin igual: parte magia, parte caos, completamente único.

"{pe} ¡Son los ganadores!" — exclamaron cuando terminaron, porque habían hecho algo que nadie esperaba: habían convertido un accidente en arte.

{P} aprendió que su mayor talento no era la perfección, sino la capacidad de ver la magia donde otros solo ven caos. Y durmió plácidamente, soñando con mañanas llenas de posibilidades. 🏅🌟`
      },
      {
        titulo: "📚 {P} en la Biblioteca de los Sueños",
        cuerpo: `En {E} había una biblioteca muy especial: sus libros no se leían, sino que se vivían. Cuando abrías uno, te metías de cabeza dentro de la historia y la vivías desde adentro. La gente podía pasar tardes enteras explorando otros mundos sin salir de la biblioteca.

{P} entró una tarde con mucha curiosidad... y encontró [[p: a {V} atascado dentro de un libro. Había entrado en "El Gran Laberinto de los Sueños" y no encontraba la salida. Llevaba horas dando vueltas. | e: que el efecto de {V} se había colado entre las páginas de un libro. El cuento de "El Gran Laberinto de los Sueños" estaba todo revuelto por el viento y la niebla. ]]

[[p: "¡{pe} {P} por favor, hace horas que busco!" — llegó la voz de {V} desde las páginas. | e: ]]

{P} sacó {oa_art} y con su magia, las páginas del libro se iluminaron mostrando el camino correcto del laberinto. Pero {P} tuvo una idea mejor: en vez de darle directamente la solución [[p: a {V} | e: al misterio ]], le dio pistas.

"Mira los dibujos en las paredes del laberinto. Las flechas pequeñas señalan siempre hacia el corazón del libro, no hacia la salida."

[[p: {V} siguió las pistas una a una, y cuando por fin salió del libro, tenía los ojos brillantes de emoción. | e: Siguiendo las pistas, el aire se calmó y las páginas volvieron a su lugar una a una. ]]

"{pe} ¡Lo resolví yo solo! [[p: Bueno... con tus pistas. | e: ]] "

{P} le explicó que ese era exactamente el propósito de los libros: no darte las respuestas, sino darte las herramientas para encontrarlas tú mism{oa}.

Se sentaron juntos en la biblioteca y {P} eligió un libro dorado con páginas vacías. Empezaron a escribir en él la historia de esa tarde, porque las mejores historias son las que vives tú mismo.

Cada día es una página nueva, y mientras encuentres [[p: amigos como {V} | e: momentos mágicos ]], ninguna página estará vacía. 📖✨`
      },
      {
        titulo: "🎨 {P} y el día que {E} perdió sus colores",
        cuerpo: `Amaneció diferente en {E}: el cielo era gris, las flores habían perdido su color, los pájaros eran blancos y negros y hasta el arcoíris se veía como una línea de gris claro. Alguien había robado todos los colores.

{P} investigó y siguió un rastro de pequeñas manchas grises hasta encontrar [[p: a {V}, que estaba sentad{ao} en medio de un charco enorme de color... mezclado. | e: que {V} había pasado por allí, dejando un charco enorme de color... mezclado. ]] Había querido crear el color perfecto, tomando un poquito de cada cosa, y sin querer había mezclado tanto que todos los colores se habían convertido en gris.

[[p: "{V} ...¿Qué hiciste?" — preguntó {P} sin poder creerlo. | e: ]]

[[p: "Quería crear el color más bonito del mundo" — respondió {V} en voz muy baja —. "Uno que lo contuviera todo." | e: Parecía que la naturaleza había intentado unir todas sus tonalidades en una sola, pero el resultado era una nube gris que lo cubría todo. ]]

{P} entendió. [[p: {V} no buscaba destruir los colores, buscaba lo opuesto: quería encontrar la belleza en la unión de todos. | e: No era un intento de quitar la belleza, sino de encontrarla en la unión de todo. ]] Solo que había olvidado que el secreto de los colores es que brillan cuando están separados.

Sacó {oa_art} y, como si fuera el pincel más mágico del universo, empezó a separar los colores del charco. Uno a uno fueron regresando a su lugar: el azul al cielo, el verde a las hojas, el amarillo al sol, el rojo a las rosas.

[[p: {V} ayudó con entusiasmo, aunque poniendo algunos colores en lugares inesperados: una nube naranja aquí, un árbol morado allá. | e: La fuerza de {V} ayudó a esparcir los colores de nuevo, aunque algunos terminaron en lugares inesperados: una nube naranja aquí, un árbol morado allá. ]] Y resultó que {E} quedó más colorido y alegre que nunca.

[[p: "¡Lo hiciste de nuevo!" — dijo {V} admirad{ao}. "¡Convertiste mi lío en algo hermoso!" | e: ]]

{P} sonrió. [[p: "Lo hicimos los dos." | e: ]]

Esa noche {P} miró {E} desde lo alto y pensó: no hay error tan grande que no pueda convertirse, con ayuda y creatividad, en algo más bonito que lo original. 🌈😴`
      },
      {
        titulo: "🕯️ La promesa del mañana",
        cuerpo: `{P} estaba sentad{oa} bajo el gran árbol centenario de {E}, el que decían que era tan viejo que recordaba el primer día del mundo. Había tenido un día difícil: las cosas no habían salido como planeaba y el corazón le pesaba un poco.

Fue entonces cuando [[p: llegó {V}, que tenía una habilidad peculiar: podía oler la tristeza. No era una habilidad muy útil en general, pero en momentos como ese, le llevaba exactamente donde alguien necesitaba compañía. | e: se sintió llegar a {V}. No era un viento fuerte, sino una brisa suave que parecía entender el silencio del momento. ]]

[[p: "¿Qué ocurre?" — preguntó {V} sentándose a su lado. | e: ]]

{P} explicó sus preocupaciones mientras {oa_art} empezaba a brillar sola con una luz cálida y suave, como si quisiera calmar el ambiente.

[[p: {O} | e: El amuleto ]] le mostró visiones de campos llenos de flores donde los errores del pasado se convertían en semillas para el futuro. Le mostró risas de amigos aún por conocer y aventuras que solo podrían vivirse si se levantaba mañana con esperanza.

[[p: {V} no sabía qué decir, así que hizo lo único que sabía hacer cuando alguien estaba triste: se acurrucó muy cerca y puso la cabeza en el hombro de {P} como un pequeño girasol que siempre busca el sol. | e: El entorno se volvió tan pacífico que {P} sintió como si {E} mismo le estuviera dando un abrazo. ]]

"{pe} El mañana será increíble" — prometió {P} en voz baja, y esta vez lo creía de verdad.

Porque en la vida, los días difíciles son el precio que pagamos por los días maravillosos. Y cuando tienes [[p: a alguien que se queda a tu lado | e: momentos de paz ]] en los difíciles, los maravillosos son aún más brillantes.

La brisa suave de {E} los arrulló hasta que [[p: ambos se quedaron dormidos, uno junto al otro, | e: {P} se quedó dormid{oa}, ]] mientras las estrellas montaban guardia toda la noche. 🌜💤`
      }
    ]
  },
  en: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princess', emoji: '👸' },
        { id: 'caballero', nombre: 'Knight', emoji: '🛡️' },
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
      ],
      villanos: [
        // Character villains (cute)
        { id: 'grumpling', nombre: 'Sleepy Grumpling', emoji: '😪👹', tipo: 'personaje', genero: 'm' },
        { id: 'frostitwitch', nombre: 'Frostie the Forgetful', emoji: '🥶🧙', tipo: 'personaje', genero: 'f' },
        { id: 'snackgoblin', nombre: 'Snack Goblin', emoji: '🍭👺', tipo: 'personaje', genero: 'm' },
        { id: 'scramblerat', nombre: 'Scramble Rat', emoji: '🐭💨', tipo: 'personaje', genero: 'm' },
        { id: 'talkingmushroom', nombre: 'Talking Mushroom', emoji: '🍄💬', tipo: 'personaje', genero: 'm' },
        { id: 'slimysnail', nombre: 'Slimy Snail', emoji: '🐌💧', tipo: 'personaje', genero: 'm' },
        // Environmental conflicts
        { id: 'storm', nombre: 'a sudden wild storm', emoji: '⛈️', tipo: 'entorno', genero: 'f' },
        { id: 'wind', nombre: 'a curious, restless wind', emoji: '🌬️', tipo: 'entorno', genero: 'm' },
        { id: 'sandcloud', nombre: 'a wandering sand cloud', emoji: '🌪️', tipo: 'entorno', genero: 'f' },
        { id: 'mist', nombre: 'a thick mist that hid everything', emoji: '🌫️', tipo: 'entorno', genero: 'f' },
        { id: 'snowstorm', nombre: 'a mischievous snowstorm', emoji: '❄️🌨️', tipo: 'entorno', genero: 'f' },
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
        titulo: "{pe} {P} and the Secret of {E}",
        cuerpo: `Once upon a time, in {ea}, there lived a brave little {p} who dreamed of the most wonderful adventures. Every morning they looked at the horizon with wide, hopeful eyes, imagining magical worlds beyond what anyone could see.

On one golden morning, while exploring the hidden corners of the land, something glowed between the leaves: {oa_art}! Touching it sent a magical tingle from their fingers all the way to their heart.

"{pe} How wonderful!" exclaimed {P} with eyes wide open.

But just then, [[p: {V} appeared—the most surprising character in all of {E}. {V} wasn't truly wicked: they were just so small and absentminded that they tripped right over {oa_art} and accidentally hid it under an enormous cloud pillow. | e: the weather changed in {E} and {V} broke out. It wasn't truly bad, but it was so strong that it accidentally moved {oa_art} and hid it in a deep corner. ]]

[[p: "That's mine!" said {V}, yawning. "I need something soft to sleep on!" | e: ]]

{P} didn't get angry. [[p: Instead, they sat beside {V} and asked gently: "Why can't you sleep?" And so they discovered that {V} was afraid of the dark. | e: Instead, they patiently looked for a solution and discovered that the place needed a bit of light and calm for everything to return to normal. ]]

{P} used the power of {oa_art} to create a small, warm, soft light that glowed in [[p: {V}'s corner. From that moment on, {V} no longer needed to steal anything, because they had their own magical light—and a brand new friend! | e: every corner of {E}. From that moment on, the force of {V} calmed down and turned into a gentle breeze that accompanied everyone's dreams. ]]

Together, they made {E} the most beautiful and welcoming place in the world. Before drifting off to sleep, {P} whispered: "The greatest magic isn't in objects—it's in the hearts of those who share them." 🌙✨`
      },
      {
        titulo: "✨ The Grand Adventure of {P} in {E}",
        cuerpo: `In the wonderful land of {E}, there lived a brave {p} with one enormous dream: to find the legendary {oa_art}. Everyone said that this magical object had the power to make the most beautiful dreams come true.

One day, {P} set out on the journey with a heart full of courage. They crossed rainbow bridges, walked along paths of stardust, and passed through gardens where flowers whispered songs.

But then [[p: {V} appeared. This rather peculiar character had arrived in {E} first and, without meaning any harm, had tangled all the paths while trying to play. | e: {V} occurred. This natural phenomenon suddenly arrived in {E} and, without meaning to, scrambled all the paths and trails. ]] The trails were all mixed up and nobody knew which way to go!

[[p: "{pe} Oh, I'm so sorry!" cried {V}, turning red. "I just wanted to build a maze to play in..." | e: ]]

{P} took a deep breath and smiled. [[p: "Don't worry. We can sort it out together!" And the two of them spent the whole afternoon untangling paths, laughing and swapping stories. | e: With calm and patience, they set to work to put the place in order. They spent the whole afternoon untangling paths and returning harmony to {E}. ]]

At the end of the day, when everything was in order, {P} spotted {oa_art} glowing at the heart of {E}. But the most precious thing they found that day wasn't the magical object—it was learning that patience [[p: and friendship are the greatest treasure of all. | e: is the greatest treasure to overcome any difficulty. ]]

They curled up together beneath the stars, and {P} understood that every adventure becomes more beautiful when it's shared. 🌟💤`
      },
      {
        titulo: "🌙 {P} and {O} beneath the Stars",
        cuerpo: `When the sun hid behind {E} and the sky began to fill with tiny, sparkling dots, the magic would begin. Nobody knew this better than {P}, who wished on a different star every single night.

On one very special evening, something fell with a gentle gleam right before {P}'s eyes. It was {oa_art}, glowing with every color of the rainbow all at once.

"{pe} What are you doing here, little {O}?" asked {P}, astonished.

But before {O} could answer, [[p: {V} came running over. They'd been chasing {oa_art} all night, thinking it was a fallen star and wanting to return it to the sky. Poor {V} was exhausted from all that running! | e: the force of {V} was felt. This phenomenon had been enveloping {oa_art} all night, as if it wanted to carry it back to the sky. ]]

{P} gently explained [[p: that {oa_art} wasn't a star at all, but something far more special: an object that could make the deepest wishes come true for whoever needed it most. And what {V} needed was simple: a friend to keep them company at night, because they were terribly lonely. | e: to the wind and the stars that {oa_art} was a special object capable of bringing calm and beautiful dreams to whoever needed it most. ]]

That evening, {P} used the power of {oa_art} so that [[p: {V} could understand the language of the stars. And as {P} listened to their glittering secrets, {V} discovered they would never be alone again. | e: peace returned to {E}. The sky became serene and the stars shone brighter than ever. ]]

The three of them—{P}, [[p: {V} | e: the calm ]] and the stars of {E}— became the best friends in the entire universe. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} and the Mystery of {E}",
        cuerpo: `It all started one perfectly ordinary Tuesday when {P} found a mysterious note pinned to the gate of {E}: "Someone has stolen the joy from this place. Follow the glowing footprints and discover who."

{P} didn't hesitate for even a second! They followed the trails of stardust that wound through {E} until they arrived at a hidden clearing, deep among enormous ancient trees.

There was [[p: {V}, surrounded by all the joy of {E}: laughter bottled in tiny jars, colours packed in little pouches, and melodies tucked inside small boxes. But {V} wasn't smiling—they were sitting on the ground, looking very sad. | e: the effect of {V}, which had trapped all the joy of {E}: laughter, colours and melodies were wrapped in a whirlwind of confusion. ]]

[[p: "Why did you take all of this?" asked {P} with a gentle voice. | e: ]]

[[p: {V} explained through sniffles that they had wanted to keep {E}'s joy safe, because they were terrified it might someday run out. "I'm so afraid that one day there will be nothing beautiful left..." they whispered. | e: It seemed that the environment had trapped the joy for fear of losing it, creating an atmosphere of melancholy throughout the place. ]]

{P} held up {oa_art} and its magic created something extraordinary: an endless spring of joy at the heart of {E}, one that would never dry up as long as someone was willing to share.

[[p: {V} opened every jar, pouch and box, and joy flooded {E} in a cascade of colour. | e: The whirlwind of {V} gently dissipated, releasing all the accumulated joy, and colours flooded {E}. ]] It was the most beautiful day anyone in that place could ever remember.

That night, {P} nestled under the stars, knowing that joy, when shared, doesn't grow smaller—it multiplies. 🌜💫`
      },
      {
        titulo: "💫 {P}'s Journey to {E}",
        cuerpo: `{P} had always dreamed of visiting {E}. Their bedroom walls were covered in drawings, maps and postcards of that magical place. And one fine day, they finally decided the time had come to set off.

The journey was long but filled with wonders. {P} saw waterfalls of chocolate, bridges made of fluffy clouds, and birds singing melodies that felt like old familiar friends.

When they finally arrived at {E}, they were completely speechless. It was even more beautiful than they had ever imagined. But something was wrong—all the inhabitants were worried.

[[p: "It's {V}," explained a tiny sprite. "This morning they wandered into {ea} and muddled everything without meaning to. They mixed up north and south, and now nobody knows where anything is!" | e: "It's because of {V}," explained a tiny sprite. "This morning it arrived in {ea} and muddled everything. The wind blew so hard that it mixed up north and south, and now nobody knows where anything is!" ]]

{P} found [[p: {V} frantically trying to fix things, tripping over one object while trying to set right another. They were so endearingly clumsy that {P} couldn't help letting out a warm laugh. | e: the area where {V} had passed, with traces of leaves and sand everywhere. ]]

Together, helped by {oa_art} that was waiting at the entrance of the land, they put {E} back in order in record time. Every object returned to its place with a little flash of magic and a tiny chime.

When everything was perfect, [[p: {V} turned to {P} with rosy cheeks: "Thank you. No one has ever helped me without laughing at me." | e: the air in {E} became fresh and calm. ]]

[[p: "Oh, I did laugh!" {P} admitted with a smile. "But only because you're absolutely wonderful." | e: ]]

From that day on, {P} became the guardian of {E} [[p: and {V} their most loyal—if somewhat clumsy—helper. | e: making sure the weather was always pleasant for everyone. ]] And they lived happily for many, many nights. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} and the Grand Festival of {E}",
        cuerpo: `Everything was ready for the biggest celebration of the year in {E}! {P} had spent weeks preparing strings of lights, colourful balloons and a towering, multi-tiered cake. Tonight was the Grand Festival.

But with just one hour to go, something dreadful happened: the music had vanished. Without music, there was no party!

[[p: The culprit was {V}, who had hidden all the instruments because they wanted to play them alone before the guests arrived—but didn't know how to play any of them, and was now surrounded by instruments and crying with embarrassment. | e: The culprit was the effect of {V}, which had blown so hard that the instruments had scattered all over {E}, getting trapped in unexpected places. ]]

{P} didn't scold. Instead, [[p: they sat beside {V} and taught them something simple: how to make music with just their hands. Clapping, snapping fingers, soft taps on their knees. | e: they looked for a creative way to restore the harmony. ]]

Then {P} remembered {oa_art}. Touching it caused a sweet, perfect melody to fill every corner of {E}, making even the flowers and clouds want to dance.

[[p: {V} joined in with their hand-clapping, and soon all the guests arrived and started dancing. | e: The effect of {V} softened and the instruments returned to their places as if by magic. ]] It was the best festival {E} had ever seen.

"Thank you for bringing the harmony back!" everyone cheered. [[p: And {V}, whose clapping was the secret heartbeat of it all, was given the loudest applause of the night. | e: ]]

Tired out from so much fun, {P} drifted off to sleep with a smile that reached from ear to ear. 🌜✨`
      },
      {
        titulo: "🎁 A Gift from the Stars for {P}",
        cuerpo: `It was an extraordinarily peaceful night in {E} when something drifted down from the sky like a brilliant snowflake. When it landed, it turned out to be {oa_art}, shining with the light of a thousand galaxies.

{P} held it carefully. Touching it, they felt they could transform the deepest fears into beautiful, colourful dreams.

"{pe} It's a very special gift!" exclaimed {P}.

But then [[p: {V} appeared, with eyes that showed they'd been crying. They explained that the gift had fallen right where they lived, and they had truly believed it was meant for them. | e: the force of {V} broke out in the area. It seemed the weather also wanted to claim that glow to calm its own force. ]]

{P} thought for a moment, then had a wonderful idea: "What if we share it? [[p: You're afraid at night, and I want to help everyone in {E}. We can do both at the same time!" | e: I want to help everyone in {E}, and in doing so, calm will reach every corner of the land." ]]

[[p: {V} blinked, astonished. Nobody had ever offered to share something like this with them before. | e: ]]

That night, {P} [[p: and {V} used the magic of {oa_art} together so that everyone in {E} would have beautiful dreams: the children dreamed of adventures, the grown-ups dreamed of happy memories, and {V} dreamed—for the very first time—without a single fear. | e: used the magic of {oa_art} to ensure everyone in {E} had beautiful dreams. The force of {V} turned into a constant lullaby and everyone dreamt, for the very first time, with absolute peace. ]]

{P} closed their eyes, grateful, knowing that generosity is the most powerful magic of all. 🌟💤`
      },
      {
        titulo: "🐾 {P} to the Rescue in {E}",
        cuerpo: `It was a calm afternoon in {E} when {P} heard a peculiar sound: somewhere between a whimper and a little giggle, coming from behind the bushes. Moving closer, they found a tiny lost animal—and right beside it, [[p: {V}. | e: {ea}. ]]

[[p: {V} had tried to help the little creature find its way home, but being as scatterbrained as they were, the two of them had ended up lost together in a corner of {E} that neither of them had ever seen before. | e: It turned out that {V} had enveloped the place with its force and the little animal couldn't find the way out. ]]

[[p: "{pe} What a funny muddle we've made!" admitted {V}, scratching their head. | e: ]]

{P} couldn't help laughing, but quickly produced {oa_art}. The object began to glow with a warm, steady light, drawing a shining path through the air that led directly to the little animal's home.

Along the way, {P} explained [[p: to {V} | e: ]] how to find direction using stars and flowers. "The forest flowers always face the sun, so if you know where the sun is at midday, you'll never be lost."

[[p: {V} listened carefully, making a mental note of every tip. | e: ]] When the little animal arrived home safe and sound, their family greeted them with such fierce love that tears of joy were visible all around.

"{pe} You're so brave," whispered the little animal to {P}. [[p: "And you, {V}—even though you got lost, you never left me on my own!" | e: . ]]

[[p: {V} flushed with happiness. They had failed at guiding, but triumphed at what truly mattered: being there. | e: ]]

With hearts at peace and a lesson well learned, everyone made their way back to rest under the stars of {E}. 🌛💨`
      },
      {
        titulo: "🌸 {P} and the Changing of the Season",
        cuerpo: `Spring was supposed to arrive in {E}, but something was holding it back. The fields were still covered in snow and the flowers refused to wake up. Everyone in {E} was puzzled.

[[p: The culprit—though quite by accident—was {V}, who had found a magical button shaped like a snowflake and pressed it many, many times, because it was simply too adorable to resist. And with every press, a little more winter arrived! | e: It was all because of {V}, which had settled in {E} and didn't want to let the sun through. The cold was so intense that it seemed winter would never end. ]]

[[p: "I didn't know that would happen," confessed {V} in a very small voice. | e: ]]

{P} gently picked up {oa_art} and blew softly over the sleeping flowers. One by one, as if waking from a long, sweet dream, they opened their petals: first a few shy ones, then all of them at once, in a great rushing cascade of colour.

"This is beautiful!" [[p: cried {V}, who had never actually seen flowers blooming, since they always arrived after everything was already open. | e: ]]
{P} explained [[p: to them | e: to the world ]] that some special moments in nature must be waited for with patience—that you can't rush flowers into blooming any more than you can rush a dream into coming true.

All of {E} filled with colours, sweet scents and the cheerful hum of bees. [[p: From that day on, {V} took very good care of the snowflake button and only pressed it in summer, just to bring a tiny bit of cool breeze. | e: The force of {V} dissipated, letting the sun warm every corner. ]]

And {P}, with a heart as light as a petal in the wind, got ready for a day of endless play. 🌼🌜`
      },
      {
        titulo: "🎶 The Lost Melody of {E}",
        cuerpo: `A strange and heavy silence had settled over {E}. No birds sang, no wind stirred the leaves, no streams trickled and murmured. It was as if the music of the world had simply vanished.

{P} understood that {V} wasn't wicked at all—just incredibly curious. They suggested a deal: {V} would release all the sounds if {P} would help them learn to make real music.

{V} accepted with enormous excitement. When the bubbles were released, {E} burst into a magnificent symphony: every sound in the world playing at once, creating the most beautiful melody anyone had ever heard.

Then {P} touched {oa_art} and created something new: a small, special song just for {V}—a melody that carried their name, one they could listen to whenever they wished.

"{pe} Music is back!" cried {P}, "and we have a brand new song!"

That night, {E} was full of life, and {P} fell asleep rocked by the happy heartbeat of the land. 🎵💤`
      },
      {
        titulo: "🚀 {P} and the Visitor from Space",
        cuerpo: `A silver rocket landed in {E} with a soft explosion of blue light. Out stepped a space visitor: small and round, with enormous eyes like full moons and a smile that took up their whole face.

Everyone in {E} peeked out with curiosity, but no one could understand a single word the visitor was saying. Their speech sounded like distant music, like little bells ringing underwater.

Then [[p: {V} appeared, absolutely convinced they could speak the language of space because they'd once had a dream about doing so. They marched right up to the visitor and began shouting nonsense at the top of their lungs. The visitor looked more confused than ever! | e: the force of {V} was heard. The noise was so intense that the visitor's words were lost in the air, and the poor traveler seemed more confused than ever. ]]

{P} smiled patiently and produced {oa_art}. With its magic, the object translated the visitor's wishes into bubbles of light that everyone could see and understand.

The visitor came from a planet where all the stories had run out. They had travelled across the entire galaxy searching for a place where stories never end, and they had found {E}.

{P} made a wonderful promise: every night before bedtime, someone from {E} would tell the visitor a new story. The visitor would store these stories in their ship and take them back to their home planet, so the children there could dream too.

"{pe} We're intergalactic friends now!" said {P}. [[p: And {V}, who had tried to help in their own unique way, was named the Ambassador of Muddled Words—which turned out to be perfect for making everyone laugh. | e: ]]

As the visitor departed, {P} looked up at the stars, knowing that no story is ever truly lost. 🌌✨`
      },
      {
        titulo: "🏆 {P} and the Talent Show",
        cuerpo: `Today was the day of the Great Talent Show in {E}. There were wind flautists, cloud tamers, rainbow painters and sunshine dancers. {P} watched it all with admiration—and just a flutter of nerves.

But when {P}'s turn arrived, something happened: [[p: {V} had wandered onto the stage earlier, thinking the contest started later, and was now juggling forest berries in front of the entire audience. No one had the heart to tell them it wasn't their turn! | e: suddenly {V} broke out right over the stage. Forest leaves and berries began flying through the air in front of the entire audience—it looked like total chaos! ]]

{P} watched the scene for a moment. [[p: {V} was endearingly disastrous: dropping half the berries, tripping over their own feet, yet wearing an enormous grin. The audience, though confused, began to laugh with genuine affection. | e: It was all an unexpected mess, but the berries flew in an almost rhythmic way. The audience watched in awe at this natural spectacle. ]]

Then {P} had a brilliant idea. They stepped onto the stage [[p: alongside {V} | e: ]] and produced {oa_art}. With it, they created figures of light that followed [[p: {V}'s juggling | e: the movement of {V} ]], turning every fumble into an artistic movement and every dropped berry into a shining star.

The performance was like nothing anyone had ever seen: part magic, part chaos, and completely unique.

"{pe} They're the winners!" everyone cried when they finished, because they had done something nobody expected: they had turned an accident into art.

{P} learned that their greatest talent wasn't perfection, but the ability to see magic where others only saw chaos. And they slept peacefully, dreaming of mornings filled with possibility. 🏅🌟`
      },
      {
        titulo: "📚 {P} in the Library of Dreams",
        cuerpo: `In {E} there was a very special library: its books weren't read, they were lived. When you opened one, you tumbled straight into the story and experienced it from the inside. People could spend entire afternoons exploring other worlds without ever leaving the building.

{P} entered one afternoon, full of curiosity, and found [[p: {V} stuck inside a book. They had wandered into "The Great Dream Labyrinth" and couldn't find the way out. They'd been going in circles for hours! | e: that the effect of {V} had seeped between the pages of a book. The story of "The Great Dream Labyrinth" was all scrambled by wind and mist. ]]

[[p: "{pe} {P}, please help! I've been searching for hours!" came {V}'s voice from between the pages. | e: ]]

{P} produced {oa_art}, and with its magic, the book's pages lit up, showing the correct path through the labyrinth. But {P} had a better idea: instead of giving [[p: {V} | e: the mystery ]] the answer directly, they gave out clues.

"Look at the drawings on the labyrinth walls. The tiny arrows always point toward the heart of the book, not toward the exit."

[[p: {V} followed the clues one by one, and when they finally emerged from the book, their eyes were bright with excitement. | e: Following the clues, the air calmed and the pages returned to their places one by one. ]]

"{pe} I solved it myself! [[p: Well... with your clues. | e: ]] "

{P} explained that this was exactly what books were for: not to give you the answers, but to give you the tools to find them for yourself.

They sat together in the library, and {P} chose a golden book with blank pages. They began to write the story of that afternoon, because the best stories are the ones you live yourself.

Every day is a new page, and as long as you find [[p: friends like {V} | e: magical moments ]], no page will ever be empty. 📖✨`
      },
      {
        titulo: "🎨 {P} and the Day the Colours Vanished",
        cuerpo: `{E} woke up different. The sky was grey, the flowers had lost their colour, the birds were black and white, and even the rainbow looked like a pale grey line. Someone had stolen all the colours.

{P} investigated, following a trail of tiny grey spots until they found [[p: {V}, who was sitting in the middle of an enormous puddle of... mixed-up colour. | e: that {V} had passed through, leaving an enormous puddle of... mixed-up colour. ]] They had wanted to create the perfect colour by taking a little bit of everything, but they had mixed so much that all the colours had turned into grey.

[[p: "{V}... What have you done?" asked {P}, hardly able to believe it. | e: ]]

[[p: "I wanted to create the most beautiful colour in the world," {V} replied in a very small voice. "One that had everything inside it." | e: It seemed that nature had tried to unite all its shades into one, but the result was a grey cloud covering everything. ]]

{P} understood. [[p: {V} wasn't trying to destroy the colours; they wanted the opposite—they wanted to find the beauty in bringing everything together. | e: It wasn't an attempt to take away the beauty, but to find it in the union of everything. ]] They had just forgotten that the secret of colours is that they shine brightest when they're separate.

They produced {oa_art} and, as if it were the most magical paintbrush in the universe, began to separate the colours from the puddle. One by one, they returned to their places: blue to the sky, green to the leaves, yellow to the sun, red to the roses.

[[p: {V} helped with great enthusiasm, though they put some colours in unexpected places—an orange cloud here, a purple tree there. | e: The force of {V} helped to spread the colours again, though some ended up in unexpected places—an orange cloud here, a purple tree there. ]] And as it turned out, {E} was more colourful and cheerful than ever before.

[[p: "You did it again!" said {V}, full of admiration. "You turned my muddle into something beautiful!" | e: ]]

{P} smiled. [[p: "We both did." | e: ]]

That night, {P} looked out over {E} from high above and thought: there is no mistake so big that it can't be turned, with help and creativity, into something more beautiful than the original. 🌈😴`
      },
      {
        titulo: "🕯️ The Promise of Tomorrow",
{P} shared their worries, while {oa_art} began to glow softly on its own, with a warm, gentle light—as if it, too, wanted to help calm the moment.

{O} showed {P} visions of fields full of flowers, where the mistakes of the past had become seeds for the future. It showed laughter shared with friends not yet met, and adventures that could only happen if {P} woke up tomorrow with hope.

{V} didn't know what to say, so they did the only thing they knew how to do when someone was sad: they curled up very close and rested their head on {P}'s shoulder—like a small sunflower that always turns towards the light.

"{pe} Tomorrow will be incredible," {P} promised quietly—and this time, they truly believed it.

Because in life, the hard days are the price we pay for the wonderful ones. And when you have someone who stays beside you through the hard ones, the wonderful ones shine even brighter.

The gentle breeze of {E} rocked them both until they fell asleep, side by side, while the stars kept watch over them through the whole long night. 🌜💤`
      }
    ]
  },
  fr: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princesse', emoji: '👸' },
        { id: 'caballero', nombre: 'Chevalier', emoji: '🛡️' },
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
        { id: 'llave', nombre: "Clé d'Or", emoji: '🔑' },
        { id: 'libro', nombre: 'Livre Enchanté', emoji: '📖' },
        { id: 'amuleto', nombre: 'Amulette', emoji: '🔮' },
      ],
      villanos: [
        // Personnages mignons
        { id: 'somne', nombre: 'Petit Dormeur', emoji: '😪👹', tipo: 'personaje', genero: 'm' },
        { id: 'gelfroide', nombre: 'Fée Frissonnante', emoji: '🥶🧚', tipo: 'personaje', genero: 'f' },
        { id: 'gobgourmand', nombre: 'Glouton Lutin', emoji: '🍭👺', tipo: 'personaje', genero: 'm' },
        { id: 'sourischao', nombre: 'Souriceau Espiègle', emoji: '🐭💨', tipo: 'personaje', genero: 'm' },
        { id: 'champiparlant', nombre: 'Champignon Parlant', emoji: '🍄💬', tipo: 'personaje', genero: 'm' },
        { id: 'limaconbaveux', nombre: 'Limaçon Baveux', emoji: '🐌💧', tipo: 'personaje', genero: 'm' },
        { id: 'orage', nombre: 'un orage soudain', emoji: '⛈️', tipo: 'entorno', genero: 'm' },
        { id: 'vent', nombre: 'un vent curieux et espiègle', emoji: '🌬️', tipo: 'entorno', genero: 'm' },
        { id: 'sable', nombre: 'un nuage de sable voyageur', emoji: '🌪️', tipo: 'entorno', genero: 'm' },
        { id: 'brouillard', nombre: 'un épais brouillard qui cachait tout', emoji: '🌫️', tipo: 'entorno', genero: 'm' },
        { id: 'tempeteneige', nombre: 'une tempête de neige espiègle', emoji: '❄️🌨️', tipo: 'entorno', genero: 'f' },
      ]
    },
    artEsc: {
      castillo:'un Château Enchanté', bosque:'une Forêt Magique',
      isla:"une Île au Trésor", nube:'un Nuage Géant',
      mar:'le Fond de la Mer', montana:'une Montagne Enneigée',
      jardin:'un Jardin Secret', estrellas:'la Ville des Étoiles',
    },
    artObj: function(id) {
      const o = this.elementos.objetos.find(x => x.id === id);
      return 'la/le ' + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} et le secret de {E}",
        cuerpo: `Il était une fois, dans {ea}, un(e) courageux(se) {p} qui rêvait des plus belles aventures. Chaque matin, il(elle) regardait l'horizon avec des yeux remplis d'espoir, imaginant des mondes magiques au-delà de tout ce qu'on pouvait voir.

Un matin doré, en explorant les recoins cachés du lieu, quelque chose brilla entre les feuilles : {oa_art} ! [[p: Mais à cet instant précis, {V} apparut — le personnage le plus surprenant de {E}. {V} n'était pas vraiment méchant(e) : il/elle était si petit(e) et distrait(e) qu'il/elle trébucha sur {oa_art} et le/la cacha accidentellement sous son énorme oreiller de nuages. | e: Mais soudain, {V} se déchaîna dans {E}. Ce n'était pas vraiment malveillant, mais c'était si fort que cela déplaça sans le vouloir {oa_art} et le cacha dans un recoin profond. ]]

[[p: "C'est à moi !" dit {V} en bâillant. "J'ai besoin de quelque chose de doux pour dormir !" | e: ]]

{P} ne se fâcha pas. [[p: Au contraire, il(elle) s'assit à côté de {V} et demanda doucement : "Pourquoi tu n'arrives pas à dormir ?" Et ainsi il(elle) découvrit que {V} avait peur du noir. | e: Au lieu de cela, il(elle) chercha patiemment une solution et découvrit que l'endroit avait besoin d'un peu de lumière et de calme pour que tout revienne à la normale. ]]

{P} utilisa le pouvoir de {oa_art} pour créer une petite lumière douce et chaude qui éclaira [[p: le coin de {V}. Dès lors, {V} n'eut plus besoin de rien voler, car il/elle avait sa propre lumière magique — et un tout nouvel ami(e) ! | e: chaque recoin de {E}. Dès lors, la force de {V} se calma et se transforma en une brise légère qui accompagnait les rêves de tous. ]]

Ensemble, ils firent de {E} l'endroit le plus beau et accueillant du monde. Avant de s'endormir, {P} murmura : "La plus grande magie n'est pas dans les objets, mais dans le cœur de ceux qui les partagent." 🌙✨`
      },
      {
        titulo: "✨ La grande aventure de {P} dans {E}",
        cuerpo: `Dans le merveilleux pays de {E}, vivait un(e) courageux(se) {p} avec un rêve immense : trouver le légendaire {oa_art}. Tout le monde disait que cet objet magique avait le pouvoir de faire réaliser les plus beaux rêves.

Un jour, {P} se mit en route avec un cœur plein de courage. Il(elle) traversa des ponts en arc-en-ciel, marcha le long de sentiers de poussière d'étoiles et traversa des jardins où les fleurs chuchotaient des chansons.

Mais alors [[p: {V} apparut. Ce personnage singulier était arrivé avant à {E} et, sans mauvaise intention, avait emmêlé tous les chemins en essayant de jouer. | e: {V} se produisit. Ce phénomène naturel arriva soudainement à {E} et, sans le vouloir, brouilla tous les chemins et sentiers. ]] Les sentiers étaient mélangés et personne ne savait par où aller !

[[p: "{pe} Oh, je suis vraiment désolé !" — dit {V} en devenant tout rouge —. "Je voulais juste faire un labyrinthe pour jouer..." | e: ]]

{P} respira profondément et sourit. [[p: "Ne t'inquiète pas. Nous pouvons résoudre cela ensemble !" Et tous les deux passèrent une après-midi entière à démêler les chemins, en riant et en se racontant des histoires. | e: Avec calme et patience, il se mit au travail pour ordonner l'endroit. Il passa une après-midi entière à démêler les chemins et à redonner l'harmonie à {E}. ]]

À la fin de la journée, quand tout fut en ordre, {P} aperçut {oa_art} brillant au cœur de {E}. Mais la chose la plus précieuse trouvée ce jour-là n'était pas l'objet magique — c'était d'avoir appris que la patience [[p: et l'amitié sont le plus grand trésor. | e: est le plus grand trésor pour surmonter toute difficulté. ]]

Ils se blottirent ensemble sous les étoiles, et {P} comprit que chaque aventure est plus belle quand elle est partagée. 🌟💤`
      },
      {
        titulo: "🌙 {P} et {O} sous les étoiles",
        cuerpo: `Quand le soleil se cachait derrière {E} et que le ciel commençait à se remplir de petits points brillants, la magie commençait. Personne ne le savait mieux que {P}, qui faisait un vœu sur une étoile différente chaque soir.

Par une nuit très spéciale, quelque chose tomba avec un doux éclat juste devant les yeux de {P}. C'était {oa_art}, brillant de toutes les couleurs de l'arc-en-ciel à la fois.

Mais avant que {O} ne puisse répondre, [[p: {V} arriva en courant. Il avait poursuivi {oa_art} toute la nuit car il pensait que c'était une étoile filante et voulait la rendre au ciel. Pauvre {V}, il était épuisé d'avoir tant couru ! | e: on sentit la force de {V}. Ce phénomène avait enveloppé {oa_art} toute la nuit, comme s'il voulait le ramener au ciel. ]]

{P} lui expliqua avec affection [[p: que {oa_art} n'était pas une étoile mais quelque chose de bien plus spécial : un objet capable de réaliser les rêves de celui qui en a besoin. Et {V} avait vraiment besoin de quelque chose : un ami pour l'accompagner la nuit, car il se sentait très seul. | e: au vent et aux étoiles que {oa_art} était un objet spécial capable d'apporter le calme et de beaux rêves à celui qui en avait le plus besoin. ]]

Cette nuit-là, {P} utilisa le pouvoir de {oa_art} pour que [[p: {V} puisse comprendre la langue des étoiles. Et ainsi, pendant que {P} écoutait leurs secrets brillants, {V} apprit qu'il ne serait plus jamais seul. | e: la paix revienne à {E}. Le ciel redevint serein et les étoiles brillèrent plus fort que jamais. ]]

Tous les trois — {P}, [[p: {V} | e: le calme ]] et les étoiles de {E} — devinrent les meilleurs amis de l'univers tout entier. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} et le mystère de {E}",
        cuerpo: `Tout commença un mardi parfaitement ordinaire quand {P} trouva une note mystérieuse collée à la porte de {E} : "Quelqu'un a volé la joie de cet endroit. Suis les empreintes lumineuses et découvre qui."

{P} n'hésita pas une seule seconde ! Il(elle) suivit les traces de poussière d'étoiles qui serpentaient à travers {E} jusqu'à arriver dans une clairière cachée, au cœur des grands arbres anciens.

Là était [[p: {V}, entouré de toute la joie de {E} : des rires dans des petits flacons, des couleurs dans des petits sachets et des mélodies dans de petites boîtes. Mais {V} ne riait pas ; il était assis par terre, très triste. | e: l'effet de {V}, qui avait piégé toute la joie de {E} : les rires, les couleurs et les mélodies étaient enveloppés dans un tourbillon de confusion. ]]

[[p: "Pourquoi as-tu ramassé tout cela ?" — demanda {P} d'une voix douce. | e: ]]

[[p: {V} expliqua entre deux sanglots qu'il avait voulu garder la joie de {E} car il avait peur qu'elle ne s'épuise. "J'ai tellement peur qu'un jour il n'y ait plus de jolies choses..." | e: Il semblait que l'environnement avait piégé la joie par peur de la perdre, créant un climat de mélancolie dans tout l'endroit. ]]

{P} sortit {oa_art} et, avec sa magie, créa quelque chose d'incroyable : une source de joie inépuisable au cœur de {E}, qui ne s'arrêterait jamais tant qu'il y aurait quelqu'un pour partager.

[[p: {V} ouvrit tous les flacons, sachets et boîtes, et la joie inonda {E} de couleurs. | e: Le tourbillon de {V} se dissipa doucement, libérant toute la joie accumulée, et les couleurs inondèrent {E}. ]] Ce fut le plus beau jour dont on se souvenait dans cet endroit.

Cette nuit-là, {P} se blottit sous les étoiles, sachant que la joie, quand elle est partagée, ne diminue pas : elle se multiplie ! 🌜💫`
      },
      {
        titulo: "💫 Le voyage de {P} vers {E}",
        cuerpo: `{P} avait toujours rêvé de visiter {E}. Les murs de sa chambre étaient couverts de dessins, de cartes et de cartes postales de cet endroit magique. Et un beau jour, il(elle) décida enfin que le moment était venu de partir.

Le voyage fut long mais plein de merveilles. {P} vit des cascades de chocolat, des ponts faits de nuages moelleux et des oiseaux qui chantaient des mélodies semblables à de vieux amis familiers.

Quand il(elle) arriva enfin à {E}, il(elle) fut complètement sans voix. C'était encore plus beau qu'il(elle) n'avait jamais imaginé. Mais quelque chose n'allait pas — tous les habitants étaient inquiets.

"C'est {V}" expliqua un petit lutin. "Ce matin, il/elle s'est aventuré(e) dans {ea} et a tout embrouillé sans le faire exprès. Il/elle a confondu le nord et le sud, et maintenant personne ne sait où se trouve quoi que ce soit !"

{P} trouva {V} en train d'essayer frénétiquement de tout arranger, trébuchant sur un objet tout en essayant d'en redresser un autre. Il/elle était si maladroitement adorable que {P} ne put s'empêcher de rire chaleureusement.

Ensemble, aidés par {oa_art} qui attendait à l'entrée du pays, ils remirent {E} en ordre en un temps record. Chaque objet retrouva sa place avec un petit éclair de magie et une petite mélodie.

Quand tout fut parfait, {V} se tourna vers {P} avec les joues roses : "Merci. Personne ne m'avait jamais aidé sans se moquer de moi."

"Oh, si, je me suis moqué(e) !" admit {P} avec un sourire. "Mais seulement parce que tu es absolument merveilleux(se)."

Dès ce jour, {P} devint le gardien de {E} et {V} son assistant le plus loyal — même si un peu maladroit. Et ils vécurent heureux pendant de nombreuses, nombreuses nuits. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} et le Grand Festival de {E}",
        cuerpo: `Tout était prêt pour la plus grande fête de l'année à {E} ! {P} avait passé des semaines à préparer des guirlandes lumineuses, des ballons colorés et un magnifique gâteau à plusieurs étages. Ce soir, c'était le Grand Festival.

Mais avec à peine une heure avant le début, quelque chose de terrible se produisit : la musique avait disparu. Sans musique, pas de fête !

La coupable était {V}, qui avait caché tous les instruments parce qu'elle voulait en jouer seule avant l'arrivée des invités — mais elle ne savait en jouer aucun, et se retrouvait maintenant entourée d'instruments à pleurer de honte.

{P} ne la gronda pas. Au lieu de ça, il(elle) s'assit à côté d'elle et lui apprit quelque chose de simple : faire de la musique avec ses propres mains. Des applaudissements, des claquements de doigts, des petits tapotements sur les genoux.

Puis {P} se souvint de {oa_art}. En le/la touchant, une douce mélodie parfaite emplit chaque recoin de {E}, faisant même danser les fleurs et les nuages.

{V} se joignit à la musique avec ses applaudissements, et bientôt tous les invités arrivèrent et commencèrent à danser. Ce fut le meilleur festival que {E} ait jamais connu.

"Merci d'avoir ramené l'harmonie !" applaudirent tous. Et {V}, dont les applaudissements étaient le battement de cœur secret du tout, reçut les acclamations les plus fortes de la nuit.

Épuisé(e) de tant de plaisir, {P} s'endormit avec un sourire qui allait d'une oreille à l'autre. 🌜✨`
      },
      {
        titulo: "🎁 Un cadeau des étoiles pour {P}",
        cuerpo: `C'était une nuit extraordinairement paisible à {E} quand quelque chose dériva du ciel comme un flocon de neige brillant. En atterrissant, il s'avéra que c'était {oa_art}, brillant de la lumière de mille galaxies.

{P} le/la tint avec précaution. En le/la touchant, il(elle) sentit qu'il/elle pouvait transformer les peurs les plus profondes en beaux rêves colorés.

"{pe} C'est un cadeau très spécial !" s'exclama {P}.

Mais alors {V} apparut, avec des yeux qui montraient qu'il/elle avait pleuré. Il/elle expliqua que le cadeau était tombé exactement là où il/elle vivait, et qu'il/elle avait vraiment cru qu'il était pour lui/elle.

{P} réfléchit un moment, puis eut une merveilleuse idée : "Et si on le partageait ? Tu as peur la nuit, et moi je veux aider tout le monde à {E}. On peut faire les deux en même temps !"

{V} cligna des yeux, stupéfait(e). Personne ne lui avait jamais proposé de partager quelque chose comme ça auparavant.

Cette nuit-là, {P} et {V} utilisèrent ensemble la magie de {oa_art} pour que tout le monde à {E} ait de beaux rêves : les enfants rêvèrent d'aventures, les grands de souvenirs heureux, et {V} rêva — pour la toute première fois — sans aucune peur.

{P} ferma les yeux, reconnaissant(e), sachant que la générosité est la magie la plus puissante qui soit. 🌟💤`
      },
      {
        titulo: "🐾 {P} au secours dans {E}",
        cuerpo: `C'était un calme après-midi à {E} quand {P} entendit un son particulier : quelque part entre un gémissement et un petit rire, qui provenait des buissons. En s'approchant, il(elle) trouva un petit animal perdu — et juste à côté, {V}.

{V} avait essayé d'aider la petite créature à trouver son chemin, mais étant aussi tête-en-l'air qu'il/elle l'était, les deux s'étaient retrouvés perdus ensemble dans un coin de {E} qu'aucun des deux ne connaissait.

"{pe} On a fait une belle pagaille !" admit {V} en se grattant la tête.

{P} ne put s'empêcher de rire, mais produisit rapidement {oa_art}. L'objet commença à briller d'une lumière chaude et constante, traçant dans l'air un chemin lumineux menant directement à la maison du petit animal.

En chemin, {P} expliqua à {V} comment s'orienter avec les étoiles et les fleurs. "Les fleurs de la forêt font toujours face au soleil, donc si tu sais où est le soleil à midi, tu ne seras jamais perdu(e)."

{V} écoutait attentivement, prenant mentalement note de chaque conseil. Quand le petit animal arriva chez lui sain et sauf, sa famille l'accueillit avec un amour si fort que les larmes de joie étaient visibles tout autour.

"{pe} Tu es si courageux(se)" chuchota le petit animal à {P}. "Et toi, {V} — même si tu t'es perdu(e), tu ne m'as jamais abandonné(e) !"

{V} rougit de bonheur. Il/elle avait échoué à guider, mais avait triomphé dans ce qui comptait vraiment : être là.

Le cœur en paix et la leçon bien apprise, tout le monde rentra se reposer sous les étoiles de {E}. 🌛💨`
      },
      {
        titulo: "🌸 {P} et le changement de saison à {E}",
        cuerpo: `Le printemps était censé arriver à {E}, mais quelque chose le retenait. Les champs étaient encore couverts de neige et les fleurs refusaient de se réveiller. Tout le monde à {E} était perplexe.

Le coupable — sans mauvaise intention — était {V}, qui avait trouvé un bouton magique en forme de flocon de neige et l'avait appuyé de nombreuses, très nombreuses fois, car il était tout simplement trop adorable pour résister. Et à chaque appui, un peu plus d'hiver arrivait !

"Je ne savais pas que ça se passerait comme ça" avoua {V} d'une toute petite voix.

{P} prit doucement {oa_art} et souffla délicatement sur les fleurs endormies. Une par une, comme si elles se réveillaient d'un long rêve doux, elles ouvrirent leurs pétales : d'abord quelques-uns timides, puis tous à la fois, dans un grand flot de couleurs.

"C'est magnifique !" s'écria {V}, qui n'avait jamais vraiment vu fleurir des fleurs, arrivant toujours quand tout était déjà ouvert.

{P} expliqua que certains moments spéciaux dans la nature doivent être attendus avec patience — qu'on ne peut pas forcer les fleurs à s'épanouir, pas plus qu'on ne peut forcer un rêve à se réaliser.

Tout {E} se remplit de couleurs, de doux parfums et du joyeux bourdonnement des abeilles. À partir de ce jour, {V} prit très soin du bouton flocon de neige et ne l'appuya qu'en été, juste pour apporter un peu de fraîcheur.

Et {P}, avec un cœur aussi léger qu'un pétale dans le vent, se prépara pour une journée de jeux sans fin. 🌼🌜`
      },
      {
        titulo: "🎶 La mélodie perdue de {E}",
        cuerpo: `Un étrange et lourd silence s'était posé sur {E}. Aucun oiseau ne chantait, aucun vent ne remuait les feuilles, aucun ruisseau ne murmurait. Comme si la musique du monde avait simplement disparu.

{P} décida de retrouver les sons perdus. Il(elle) marcha, chercha et posa des questions jusqu'à atteindre la grotte la plus profonde de tout {E}, où il(elle) trouva {V} assis(e) joyeusement entouré(e) de milliers de sons — chacun emprisonné dans une petite bulle de savon flottante.

"Je collectionne les sons" expliqua {V} gaiement. "J'ai déjà le chant du tout premier oiseau du matin, le son de la pluie sur les feuilles et trois variétés différentes de silence !"

{P} comprit que {V} n'était pas du tout méchant(e) — juste incroyablement curieux(se). Il(elle) proposa un accord : {V} libérerait tous les sons si {P} l'aidait à apprendre à faire de la vraie musique.

{V} accepta avec un immense enthousiasme. Quand les bulles furent libérées, {E} éclata en une magnifique symphonie : tous les sons du monde jouant à la fois, créant la plus belle mélodie que quiconque ait jamais entendue.

Ensuite {P} toucha {oa_art} et créa quelque chose de nouveau : une petite chanson spéciale juste pour {V} — une mélodie qui portait son prénom, qu'il/elle pouvait écouter chaque fois qu'il/elle le souhaitait.

"{pe} La musique est de retour !" s'écria {P}, "et nous avons une toute nouvelle chanson !"

Cette nuit-là, {E} était plein de vie, et {P} s'endormit bercé(e) par le joyeux battement de cœur du pays. 🎵💤`
      },
      {
        titulo: "🚀 {P} et le visiteur de l'espace",
        cuerpo: `Une fusée argentée atterrit dans {E} avec une douce explosion de lumière bleue. En sortit un visiteur de l'espace : petit et rond, avec d'immenses yeux comme des pleines lunes et un sourire qui occupait tout son visage.

Tout le monde à {E} se rassembla, curieux, mais personne ne comprenait ce que disait le visiteur. Ses mots sonnaient comme une musique lointaine, comme de petites cloches tintant sous l'eau.

Puis {V} s'avança, absolument convaincu(e) de pouvoir parler le langage spatial — parce qu'il/elle avait une fois rêvé qu'il/elle en était capable. Il/elle se planta devant le visiteur et commença à dire des absurdités à tue-tête. Le visiteur avait l'air de plus en plus confus !

{P} sourit patiemment et sortit {oa_art}. Grâce à sa magie, l'objet traduisit les pensées du visiteur en bulles de lumière que tout le monde put voir et comprendre.

Le visiteur venait d'une planète où les histoires s'étaient épuisées. Il/elle avait voyagé à travers toute la galaxie à la recherche d'un endroit où les histoires ne finissaient jamais, et il/elle avait trouvé {E}.

{P} fit une merveilleuse promesse : chaque soir, avant de dormir, quelqu'un de {E} raconterait une nouvelle histoire. Le visiteur collerait ces histoires dans sa fusée et les emporterait sur sa planète, pour que les enfants là-bas puissent aussi rêver.

"{pe} Maintenant nous sommes des amis intergalactiques !" dit {P}. Et {V}, qui avait essayé d'aider à sa façon, fut nommé(e) Ambassadeur(rice) des Mots Merveilleusement Confus — qui s'avérèrent parfaits pour faire rire tout le monde.

Quand le visiteur repartit, {P} leva les yeux vers les étoiles et sut : aucune histoire n'est jamais vraiment perdue. 🌌✨`
      },
      {
        titulo: "🏆 {P} et le spectacle de talents",
        cuerpo: `Aujourd'hui, c'était le jour du Grand Spectacle de Talents de {E}. Il y avait des flûtistes de vent, des dompteurs de nuages, des peintres d'arc-en-ciel et des danseurs de rayons de soleil. {P} regardait tout avec admiration — et un tout petit frémissement de nervosité.

Mais quand vint le tour de {P}, quelque chose d'inattendu se produisit : {V} était monté(e) sur scène avant lui(elle), pensant que le spectacle commençait plus tard, et jonglait maintenant avec des petits fruits devant tout le public. Personne n'osait vraiment lui dire que ce n'était pas son tour !

{P} observa la scène un moment. {V} était adorablement désastreux(se) : laissant tomber la moitié des fruits, trébuchant sur ses propres pieds, et pourtant arborant un immense sourire. Le public, bien que perplexe, commençait à rire avec une vraie tendresse.

Alors {P} eut une idée brillante. Il(elle) monta sur scène à côté de {V} et sortit {oa_art}. Avec sa magie, il(elle) créa des figures de lumière qui dansaient avec le jonglage de {V}, transformant chaque faux pas en un mouvement artistique et chaque petit fruit tombé en une étoile brillante.

Le spectacle fut comme aucun autre : mi-magie, mi-beau chaos, complètement unique.

"{pe} Ce sont les gagnants !" applaudirent tous quand ce fut terminé — parce qu'ils avaient fait quelque chose que personne n'attendait : transformer un accident en art.

{P} apprit que son plus grand talent n'était pas la perfection, mais la capacité à trouver la magie là où les autres ne voient que du désordre. Et il(elle) dormit paisiblement cette nuit-là, rêvant de matins remplis de possibilités. 🏅🌟`
      },
      {
        titulo: "📚 {P} dans la Bibliothèque des Rêves",
        cuerpo: `À {E}, il y avait une bibliothèque très spéciale : ses livres ne se lisaient pas, ils se vivaient. Quand on en ouvrait un, on plongeait tête la première dans l'histoire et on la vivait de l'intérieur. Les gens pouvaient passer des après-midis entiers à explorer d'autres mondes sans jamais quitter le bâtiment.

Un après-midi, {P} arriva, plein(e) de curiosité — et trouva {V} coincé(e) dans un livre. Il/elle s'était aventuré(e) dans "Le Grand Labyrinthe des Rêves" et ne trouvait pas la sortie. Il/elle tournait en rond depuis des heures.

"{pe} {P}, s'il te plaît, ça fait une éternité que je cherche !" parvint la voix de {V} depuis les pages.

{P} leva {oa_art}. Sa magie illumina les pages, révélant le bon chemin à travers le labyrinthe. Mais {P} eut une meilleure idée que de simplement montrer la voie : au lieu de donner direktement la réponse à {V}, il(elle) donna des indices.

"Regarde les dessins sur les murs du labyrinthe. Les petites flèches pointent toujours vers le cœur du livre, jamais vers la sortie."

{V} suivit les indices un par un — et quand il/elle sortit enfin du livre, ses yeux brillaient d'excitation.

"{pe} J'ai résolu tout seul(e) ! Enfin... avec tes indices."

{P} expliqua que c'était précisément à ça que servaient les livres : pas à te donner les réponses, mais à te donner les outils pour les trouver toi-même.

Ils s'assirent ensemble dans la bibliothèque et {P} choisit un livre doré aux pages vierges. Ils commencèrent à y écrire l'histoire de cet après-midi même — parce que les meilleures histoires sont toujours celles qu'on vit soi-même.

Chaque jour est une nouvelle page. Et tant qu'on trouve des amis comme {V}, pas une seule page ne sera jamais vide. 📖✨`
      },
      {
        titulo: "🎨 {P} et le jour où les couleurs disparurent",
        cuerpo: `{E} se réveilla différent. Le ciel était gris, les fleurs avaient perdu leur couleur, les oiseaux étaient noirs et blancs et même l'arc-en-ciel ressemblait à une pâle ligne grise. Quelqu'un avait volé toutes les couleurs.

{P} mena l'enquête, suivant une piste de petites taches grises jusqu'à trouver {V}, assis(e) au milieu d'une immense flaque de... couleur mélangée. Il/elle avait voulu créer la couleur parfaite, en prenant un tout petit peu de chaque chose, et avait fini par tout mélanger au point que toutes les couleurs étaient devenues grises.

"{V}... qu'est-ce que tu as fait ?" demanda {P}, n'en croyant pas ses yeux.

"Je voulais créer la plus belle couleur du monde" répondit {V} d'une toute petite voix. "Une qui contiendrait tout."

{P} comprit. {V} n'avait pas voulu détruire les couleurs du tout — il/elle avait essayé de faire le contraire : trouver la beauté dans l'union de toutes choses. Il/elle avait simplement oublié que le secret des couleurs est qu'elles brillent le mieux quand elles sont distinctes.

{P} leva {oa_art} et, comme le pinceau le plus magique de l'univers, commença à séparer les couleurs de la flaque. L'une après l'autre, elles retrouvèrent leur place : le bleu pour le ciel, le vert pour les feuilles, le jaune pour le soleil, le rouge pour les roses.

{V} aida avec beaucoup d'enthousiasme — bien qu'en plaçant quelques couleurs dans des endroits inattendus : un nuage orange ici, un arbre violet là. Et il s'avéra que {E} se retrouva plus coloré et joyeux que jamais.

"Tu as encore réussi !" dit {V} dans l'admiration. "Tu as transformé mon désordre en quelque chose de beau !"

{P} sourit. "Nous l'avons fait ensemble."

Cette nuit-là, {P} regarda {E} d'en haut et pensa : il n'y a pas d'erreur si grande qu'elle ne puisse pas devenir, avec de l'aide et de la créativité, plus belle que l'original. 🌈😴`
      },
      {
        titulo: "🕯️ La promesse de demain",
        cuerpo: `{P} était assis(e) sous le grand arbre centenaire de {E} — celui dont on disait qu'il était si vieux qu'il se souvenait du tout premier jour du monde. C'avait été une journée difficile : les choses ne s'étaient pas passées comme prévu, et le cœur de {P} était un peu lourd.

C'est alors qu'arriva {V}, qui avait un don particulier : celui de renifler la tristesse. Ce n'était pas une capacité très utile en général, mais dans des moments comme celui-là, elle le/la menait exactement là où quelqu'un avait besoin de compagnie.

"Qu'est-ce qui se passe ?" demanda {V} en s'asseyant à côté.

{P} partagea ses inquiétudes, tandis que {oa_art} commença à briller doucement tout seul(e), d'une lumière chaude et douce — comme si lui aussi voulait aider à apaiser l'atmosphère.

{O} montra à {P} des visions de champs remplis de fleurs, où les erreurs du passé étaient devenues des graines pour l'avenir. Il lui montra des rires partagés avec des amis pas encore rencontrés, et des aventures qui ne pouvaient n'avoir lieu que si {P} se réveillait demain avec de l'espoir.

{V} ne savait pas quoi dire, alors il/elle fit la seule chose qu'il/elle savait faire quand quelqu'un était triste : il/elle se blottit tout près et posa sa tête sur l'épaule de {P} — comme un petit tournesol qui cherche toujours la lumière.

"{pe} Demain sera incroyable" promit {P} doucement — et cette fois, il(elle) y croyait vraiment.

Car dans la vie, les jours difficiles sont le prix que l'on paie pour les jours merveilleux. Et quand on a quelqu'un qui reste à nos côtés dans les difficiles, les merveilleux brillent encore plus fort.

La douce brise de {E} les berça tous les deux jusqu'à ce qu'ils s'endorment, côte à côte, tandis que les étoiles montaient la garde sur eux toute la longue nuit. 🌜💤`
      }
    ]
  },
  de: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Prinzessin', emoji: '👸' },
        { id: 'caballero', nombre: 'Ritter', emoji: '🛡️' },
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
      ],
      villanos: [
        // Niedliche Figuren
        { id: 'nickerchen', nombre: 'Kleiner Schläfer', emoji: '😪👹', tipo: 'personaje', genero: 'm' },
        { id: 'froststörer', nombre: 'Frostige Störerin', emoji: '🥶🧙', tipo: 'personaje', genero: 'f' },
        { id: 'naschelch', nombre: 'Naschhafter Kobold', emoji: '🍭👺', tipo: 'personaje', genero: 'm' },
        { id: 'wirrimaus', nombre: 'Wirre Maus', emoji: '🐭💨', tipo: 'personaje', genero: 'f' },
        { id: 'sprechpilz', nombre: 'Sprechender Pilz', emoji: '🍄💬', tipo: 'personaje', genero: 'm' },
        { id: 'schleimschnecke', nombre: 'Schleimige Schnecke', emoji: '🐌💧', tipo: 'personaje', genero: 'f' },
        // Natürliche Konflikte
        { id: 'gewitter', nombre: 'ein plötzliches Gewitter', emoji: '⛈️', tipo: 'entorno', genero: 'm' },
        { id: 'windboee', nombre: 'ein neugieriger, unruhiger Wind', emoji: '🌬️', tipo: 'entorno', genero: 'm' },
        { id: 'sandwolke', nombre: 'eine wandernde Sandwolke', emoji: '🌪️', tipo: 'entorno', genero: 'f' },
        { id: 'nebel', nombre: 'ein dichter Nebel, der alles versteckte', emoji: '🌫️', tipo: 'entorno', genero: 'm' },
        { id: 'schneesturm', nombre: 'ein frecher Schneesturm', emoji: '❄️🌨️', tipo: 'entorno', genero: 'm' },
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
      return 'das/die/der ' + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} und das Geheimnis von {E}",
        cuerpo: `Es war einmal, in {ea}, ein mutiges kleines {p}, das von den schönsten Abenteuern träumte. Jeden Morgen blickte es mit hoffnungsvollen Augen auf den Horizont und stellte sich magische Welten jenseits von allem vor, was man sehen konnte.

An einem goldenen Morgen, während es die versteckten Winkel des Landes erkundete, leuchtete etwas zwischen den Blättern: {oa_art}! [[p: Aber genau in diesem Moment erschien {V}, der... überraschendste Bösewicht von {E}. {V} war eigentlich gar nicht böse: Er war nur so klein und zerstreut, dass er aus Versehen über {oa_art} stolperte und es unter seinem riesigen Wolkenkissen versteckte. | e: Aber genau in diesem Moment änderte sich das Wetter in {E} und {V} brach los. Es war eigentlich nichts Schlimmes, aber es war so stark, dass es aus Versehen {oa_art} bewegte und in einem tiefen Winkel versteckte. ]]

[[p: "Das gehört mir!" — sagte {V} gähnend —. "Ich brauche etwas Weiches zum Schlafen!" | e: ]]

{P} wurde nicht wütend. [[p: Stattdessen setzte er sich zu {V} und fragte ihn sanft: "Warum kannst du nicht schlafen?" Und so entdeckte er, dass {V} Angst vor der Dunkelheit hatte. | e: Stattdessen suchte er geduldig nach einer Lösung und entdeckte, dass der Ort ein wenig Licht und Ruhe brauchte, damit alles wieder normal wurde. ]]

{P} nutzte die Kraft von {oa_art}, um ein kleines, sanftes und warmes Licht zu erschaffen, das [[p: die Ecke von {V} erhellte. Von diesem Moment an musste {V} nichts mehr stehlen, weil er sein eigenes magisches Licht hatte... und einen neuen Freund! | e: jeden Winkel von {E} erhellte. Von diesem Moment an beruhigte sich die Kraft von {V} und verwandelte sich in eine sanfte Brise, die die Träume aller begleitete. ]]

Gemeinsam machten sie {E} zum schönsten und gemütlichsten Ort der Welt. Vor dem Einschlafen flüsterte {P}: "Die größte Magie steckt nicht in den Dingen, sondern im Herzen derer, die sie teilen." 🌙✨`
      },
      {
        titulo: "✨ {P}s großes Abenteuer in {E}",
        cuerpo: `Es war einmal im wundervollen Land {E}, da lebte ein mutiges {p} mit einem riesigen Traum: das legendäre {oa_art} zu finden. Alle sagten, dieser magische Gegenstand hätte die Macht, die schönsten Träume wahr werden zu lassen.

Eines Tages machte sich {P} mit mutigem Herzen auf den Weg. Er überquerte Regenbogenbrücken, wanderte auf Sternenstaubpfaden und durchquerte Gärten, in denen die Blumen Lieder flüsterten.

Doch dann [[p: erschien {V}. Diese eigenartige Figur war schon vorher in {E} angekommen und hatte ohne böse Absicht beim Versuch zu spielen alle Wege durcheinandergebracht. | e: geschah {V}. Dieses Naturphänomen kam plötzlich über {E} und wirbelte ohne Absicht alle Wege und Pfade durcheinander. ]] Die Pfade waren vermischt und niemand wusste mehr, wo es langging!

[[p: "{pe} Oh, das tut mir so leid!" — sagte {V} und wurde ganz rot —. "Ich wollte doch nur ein Labyrinth zum Spielen bauen..." | e: ]]

{P} atmete tief durch und lächelte. [[p: "Mach dir keine Sorgen. Wir können das gemeinsam lösen!" Und die beiden verbrachten einen ganzen Nachmittag damit, die Wege zu entwirren, zu lachen und sich Geschichten zu erzählen. | e: Mit Ruhe und Geduld machte er sich an die Arbeit, den Ort zu ordnen. Er verbrachte einen ganzen Nachmittag damit, die Wege zu entwirren und die Harmonie in {E} wiederherzustellen. ]]

Am Ende des Tages, als alles wieder in Ordnung war, fand {P} {oa_art}, das im Herzen von {E} leuchtete. Aber das Wertvollste an diesem Tag war nicht der magische Gegenstand: Es war die Erkenntnis, dass Geduld [[p: und Freundschaft der größte Schatz sind. | e: der größte Schatz ist, um jede Schwierigkeit zu überwinden. ]]

Sie kuschelten sich zusammen und beobachteten die Sterne, und {P} begriff, dass jedes Abenteuer schöner ist, wenn man es teilt. 🌟💤`
      },
      {
        titulo: "🌙 {P} und {O} unter den Sternen",
        cuerpo: `Wenn die Sonne hinter {E} verschwand und der Himmel sich mit kleinen funkelnden Punkten füllte, begann die Magie. Niemand wusste das besser als {P}, der sich jeden Abend bei einem anderen Stern etwas wünschte.

An einem ganz besonderen Abend fiel etwas mit einem sanften Schimmer direkt vor {P}s Augen. Es war {oa_art}, das in allen Farben des Regenbogens gleichzeitig leuchtete.

Doch bevor {O} antworten konnte, [[p: kam {V} herbeigelaufen. Er hatte die ganze Nacht {oa_art} gejagt, weil er dachte, es sei ein Stern, der vom Himmel gefallen war, und er wollte ihn dorthin zurückbringen. Der arme {V} war ganz erschöpft vom vielen Laufen! | e: war die Kraft von {V} zu spüren. Dieses Phänomen hatte {oa_art} die ganze Nacht eingehüllt, als wollte es ihn zurück zum Himmel tragen. ]]

{P} erklärte ihm liebevoll, [[p: dass {oa_art} kein Stern war, sondern etwas viel Besondereres: ein Gegenstand, der die Träume derer wahr machen kann, die sie brauchen. Und {V} brauchte wirklich etwas: einen Freund, der ihn nachts begleitet, weil er sich sehr einsam fühlte. | e: dem Wind und den Sternen, dass {oa_art} ein besonderer Gegenstand war, der Ruhe und schöne Träume bringen konnte, wo sie am meisten gebraucht wurden. ]]

In dieser Nacht nutzte {P} die Kraft von {oa_art}, damit [[p: {V} die Sprache der Sterne verstehen konnte. Und während {P} ihren leuchtenden Geheimnissen lauschte, lernte {V}, dass er nie wieder allein sein würde. | e: der Frieden in {E} einkehrte. Der Himmel wurde heiter und die Sterne leuchteten heller als je zuvor. ]]

Alle drei — {P}, [[p: {V} | e: die Ruhe ]] und die Sterne von {E} — wurden die besten Freunde im ganzen Universum. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} und das Rätsel von {E}",
        cuerpo: `Alles begann an einem ganz normalen Dienstag, als {P} einen geheimnisvollen Zettel am Tor von {E} fand: "Jemand hat die Freude von diesem Ort gestohlen. Folge den leuchtenden Spuren und finde heraus, wer."

{P} zögerte keine Sekunde! Er folgte den Sternenstaubspuren, die sich durch {E} schlängelten, bis er zu einer versteckten Lichtung im Herzen der großen, alten Bäume kam.

Dort war [[p: {V}, umgeben von der ganzen Freude von {E}: Lachen in kleinen Fläschchen, Farben in Säckchen und Melodien in winzigen Schachteln. Aber {V} lachte nicht; er saß ganz traurig auf dem Boden. | e: die Wirkung von {V}, die die ganze Freude von {E} eingefangen hatte: Das Lachen, die Farben und die Melodien waren in einen Wirbel der Verwirrung gehüllt. ]]

[[p: "Warum hast du das alles eingesammelt?" — fragte {P} mit sanfter Stimme. | e: ]]

[[p: {V} erklärte unter Schluchzen, dass er die Freude von {E} aufbewahren wollte, weil er Angst hatte, dass sie ausgehen könnte. "Ich habe so große Angst, dass es eines Tages keine schönen Dinge mehr gibt..." | e: Es schien, als hätte die Umgebung die Freude aus Angst vor ihrem Verlust eingefangen, was eine melancholische Stimmung im ganzen Ort verbreitete. ]]

{P} holte {oa_art} hervor und erschuf mit seiner Magie etwas Unglaubliches: eine unerschöpfliche Quelle der Freude im Herzen von {E}, die niemals versiegen würde, solange es jemanden gibt, der teilen möchte.

[[p: {V} öffnete alle Fläschchen, Säckchen und Schachteln, und die Freude überflutete {E} mit Farben. | e: Der Wirbel von {V} löste sich sanft auf und ließ die ganze angestaute Freude frei, und die Farben überfluteten {E}. ]] Es war der schönste Tag, an den sich irgendjemand an diesem Ort erinnern konnte.

In dieser Nacht kuschelte sich {P} unter die Sterne, in dem Wissen, dass Freude nicht weniger wird, wenn man sie teilt: Sie vervielfacht sich! 🌜💫`
      },
      {
        titulo: "💫 {P}s Reise nach {E}",
        cuerpo: `{P} hatte schon immer davon geträumt, {E} zu besuchen. Die Wände seines/ihres Zimmers waren mit Zeichnungen, Karten und Postkarten dieses magischen Ortes bedeckt. Und eines schönen Tages beschloss er/sie endlich, dass es Zeit war aufzubrechen.

Die Reise war lang, aber voller Wunder. {P} sah Schokoladenwasserfälle, Brücken aus fluffigen Wolken und Vögel, die Melodien sangen, die sich wie alte vertraute Freunde anfühlten.

Als er/sie schließlich in {E} ankam, war er/sie völlig sprachlos. Es war noch schöner, als er/sie es sich je vorgestellt hatte. Aber irgendetwas stimmte nicht — alle Bewohner waren besorgt.

[[p: "Es ist {V}", erklärte ein kleines Gnomen. "Heute Morgen ist er/sie in {ea} gewandert und hat alles durcheinandergebracht. Er/sie hat Norden und Süden verwechselt, und jetzt weiß niemand mehr, wo irgendetwas ist!" | e: "Es liegt an {V}", erklärte ein kleines Gnomen. "Heute Morgen ist er über {ea} hereingebrochen und hat alles durcheinandergewirbelt. Der Wind blies so stark, dass er Norden und Süden verwechselt hat, und jetzt weiß niemand mehr, wo irgendetwas ist!" ]]

{P} fand [[p: {V}, der/die fieberhaft versuchte, alles zu reparieren, über einen Gegenstand stolperte, während er/sie einen anderen aufzurichten versuchte. Er/sie war so entzückend tollpatschig, dass {P} nicht umhin konnte, herzlich zu lachen. | e: den Bereich, den {V} durchquert hatte, mit Spuren von Blättern und Sand überall. ]]

Zusammen, mit der Hilfe von {oa_art}, das am Eingang des Landes wartete, brachten sie {E} in Rekordzeit wieder in Ordnung. Jeder Gegenstand kehrte mit einem kleinen Zauberschimmer und einem kleinen Glöckchen an seinen Platz zurück.

Als alles perfekt war, [[p: drehte sich {V} mit roten Wangen zu {P}: "Danke. Niemand hat mir je geholfen, ohne mich auszulachen." | e: wurde die Luft in {E} wieder frisch und ruhig. ]]

[[p: "Oh, ich habe gelacht!" gab {P} lächelnd zu. "Aber nur, weil du absolut wunderbar bist." | e: ]]

Von da an wurde {P} der Wächter von {E} [[p: und {V} sein/ihr treuester — wenn auch etwas tolpatschiger — Helfer. | e: und sorgte dafür, dass das Wetter für alle immer angenehm war. ]] Und sie lebten glücklich für viele, viele Nächte. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} und das Große Fest in {E}",
        cuerpo: `Alles war bereit für das größte Fest des Jahres in {E}! {P} hatte Wochen damit verbracht, Lichterketten, bunte Luftballons und einen riesigen, mehrstöckigen Kuchen vorzubereiten. Heute Nacht war das Große Fest.

Aber mit nur einer Stunde bis zum Beginn geschah etwas Unerwartetes: Die Musik war verschwunden. Ohne Musik kein Fest!

[[p: Und die Schuldige war {V}, die alle Instrumente versteckt hatte, weil sie sie allein spielen wollte, bevor die Gäste ankamen... aber keines davon spielen konnte, und nun umgeben von Instrumenten und weinend dasaß. | e: Es stellte sich heraus, dass {V} so stark geblasen hatte, dass die Instrumente in ganz {E} verstreut waren und an unerwarteten Stellen feststeckten. ]]

{P} schimpfte nicht. Stattdessen [[p: setzte er sich neben sie und brachte ihr etwas Einfaches bei: Musik nur mit den Händen zu machen. Klatschen, Schnippen der Finger, sanftes Klopfen auf die Knie. | e: suchte er nach einer kreativen Möglichkeit, die Harmonie wiederherzustellen. ]]

Dann erinnerte sich {P} an {oa_art}. Beim Berühren erfüllte eine süße, perfekte Melodie jeden Winkel von {E} und ließ sogar die Blumen und Wolken tanzen.

[[p: {V} machte mit ihren Händen mit, und bald kamen alle Gäste an und begannen zu tanzen. | e: Die Kraft von {V} wurde sanfter und die Instrumente kehrten wie durch Zauberei an ihren Platz zurück. ]] Es war das beste Fest, das {E} je erlebt hatte.

"Danke, dass du die Harmonie zurückgebracht hast!" jubelten alle. [[p: Und {V}, deren Klatschen der geheime Herzschlag von allem war, bekam den lautesten Applaus der Nacht. | e: ]]

Erschöpft von so viel Spaß schlief {P} mit einem Lächeln ein, das von einem Ohr zum anderen reichte. 🌜✨`
      },
      {
        titulo: "🎁 Ein Geschenk der Sterne für {P}",
        cuerpo: `Es war eine außerordentlich friedliche Nacht in {E}, als etwas wie eine leuchtende Schneeflocke vom Himmel schwebte. Als es landete, stellte sich heraus, dass es {oa_art} war, das mit dem Licht von tausend Galaxien leuchtete.

{P} hielt es vorsichtig. Beim Berühren spürte er, dass er die tiefsten Ängste in wunderschöne, bunte Träume verwandeln konnte.

"{pe} Es ist ein ganz besonderes Geschenk!" — rief {P}.

Doch dann [[p: erschien {V} mit Augen, die zeigten, dass er geweint hatte. Er erklärte, dass das Geschenk genau dort gefallen war, wo er lebte, und dass er wirklich geglaubt hatte, es sei für ihn bestimmt. | e: brach {V} in der Gegend los. Es schien, als wollte auch das Wetter dieses Leuchten beanspruchen, um seine eigene Kraft zu beruhigen. ]]

{P} dachte einen Moment nach und hatte dann eine wundervolle Idee: "Was, wenn wir es teilen? [[p: Du hast nachts Angst, und ich möchte allen in {E} helfen. Wir können beides gleichzeitig tun!" | e: Ich möchte allen in {E} helfen, und so wird die Ruhe in jeden Winkel des Ortes einkehren." ]]

[[p: {V} blinzelte erstaunt. Niemand hatte ihm jemals angeboten, etwas so zu teilen. | e: ]]

In dieser Nacht nutzte {P} [[p: und {V} gemeinsam die Magie von {oa_art}, damit alle in {E} schöne Träume haben würden: Die Kinder träumten von Abenteuern, die Erwachsenen von glücklichen Erinnerungen, und {V} träumte — zum allerersten Mal — ohne jegliche Angst. | e: die Magie von {oa_art}, damit alle in {E} schöne Träume haben würden. Die Kraft von {V} verwandelte sich in ein stetiges Schlaflied und alle träumten zum ersten Mal in absolutem Frieden. ]]

{P} schloss die Augen, dankbar, in dem Wissen, dass Großzügigkeit die mächtigste Magie von allen ist. 🌟💤`
      },
      {
        titulo: "🐾 {P} zu Hilfe in {E}",
        cuerpo: `Es war ein ruhiger Nachmittag in {E}, als {P} ein eigenartiges Geräusch hörte: irgendwo zwischen einem Wimmern und einem kleinen Kichern, das aus den Büschen kam. Nähertretend fand er ein kleines verlorenes Tier [[p: ... und direkt daneben {V}. | e: in der Mitte von {ea}. ]]

[[p: {V} hatte versucht, dem kleinen Wesen den Weg nach Hause zu zeigen, aber so zerstreut wie er war, hatten beide sich gemeinsam in einem Winkel von {E} verloren, den keiner von beiden kannte. | e: Es stellte sich heraus, dass {V} den Ort mit seiner Kraft eingehüllt hatte und das kleine Tier den Ausgang nicht finden konnte. ]]

[[p: "{pe} Was für ein lustiges Durcheinander haben wir gemacht!" — gab {V} zu, sich am Kopf kratzend. | e: ]]

{P} konnte nicht umhin zu lachen, brachte aber schnell {oa_art} hervor. Der Gegenstand begann mit einem warmen, gleichmäßigen Licht zu glühen und zeichnete in der Luft einen leuchtenden Weg, der direkt zum Zuhause des kleinen Tieres führte.

Unterwegs erklärte {P} [[p: {V} | e: ]] wie man sich mit Sternen und Blumen orientiert. "Die Waldblumen richten sich immer nach der Sonne aus, also wenn du weißt, wo die Sonne mittags steht, wirst du dich nie verirren."

[[p: {V} hörte aufmerksam zu und merkte sich jeden Ratschlag. | e: ]] Als das kleine Tier sicher und wohlbehalten zu Hause ankam, begrüßte es seine Familie mit so viel Liebe, dass Freudentränen für alle sichtbar waren.

"{pe} Du bist so mutig" — flüsterte das kleine Tier zu {P}. [[p: "Und du, {V} — obwohl du dich verlaufen hast, hast du mich nie allein gelassen!" | e: ]]

[[p: {V} strahlte vor Glück. Er hatte beim Führen versagt, aber in dem triumphiert, was wirklich zählte: da zu sein. | e: ]]

Mit einem friedlichen Herzen und einer gut gelernten Lektion machten sich alle auf den Weg unter die Sterne von {E}, um sich auszuruhen. 🌛💨`
      },
      {
        titulo: "🌸 {P} und der Jahreszeitenwechsel in {E}",
        cuerpo: `Der Frühling sollte eigentlich in {E} ankommen, aber irgendetwas hielt ihn zurück. Die Felder waren noch mit Schnee bedeckt und die Blumen weigerten sich aufzuwachen. Alle in {E} waren verwundert.

[[p: Die Schuldige — wenn auch ganz ohne böse Absicht — war {V}, die einen magischen Knopf in Form einer Schneeflocke gefunden und ihn viele, viele Male gedrückt hatte, weil er einfach zu entzückend war, um dem zu widerstehen. Und mit jedem Druck kam ein bisschen mehr Winter! | e: Das alles lag an {V}, der sich in {E} festgesetzt hatte und die Sonne nicht durchlassen wollte. Die Kälte war so intensiv, dass es schien, als würde der Winter niemals enden. ]]

[[p: "Ich wusste nicht, dass das passieren würde" — gestand {V} mit einer ganz kleinen Stimme. | e: ]]

{P} nahm {oa_art} sanft und pustete zart über die schlafenden Blumen. Eine nach der anderen, als würden sie sich aus einem langen, süßen Schlaf erwecken, öffneten sie ihre Blütenblätter: erst ein paar schüchterne, dann alle auf einmal in einem großen Schwall Farben.

"Das ist wunderschön!" [[p: — rief {V}, die Blumen noch nie wirklich blühen gesehen hatte, da sie immer ankam, wenn alles schon offen war. | e: ]]

{P} erklärte [[p: ihr | e: der Welt ]], dass manche besonderen Momente in der Natur mit Geduld abgewartet werden müssen — dass man Blumen nicht zum Blühen zwingen kann, genau wie man einen Traum nicht zum Wahr-werden zwingen kann.

Ganz {E} füllte sich mit Farben, süßen Düften und dem fröhlichen Summen der Bienen. [[p: Von da an kümmerte sich {V} sehr sorgfältig um den Schneeflockenknopf und drückte ihn nur im Sommer, um ein bisschen kühle Brise zu bringen. | e: Die Kraft von {V} verflog und ließ die Sonne jeden Winkel erwärmen. ]]

Und {P}, mit einem Herzen so leicht wie ein Blütenblatt im Wind, machte sich bereit für einen Tag voller endlosem Spiel. 🌼🌜`
      },
      {
        titulo: "🎶 Die verlorene Melodie von {E}",
        cuerpo: `Eine seltsame und schwere Stille hatte sich über {E} gelegt. Kein Vogel sang, kein Wind bewegte die Blätter, kein Bach rauschte und murmelte. Als ob die Musik der Welt einfach verschwunden wäre.

{P} beschloss, die verlorenen Klänge zu finden. Er wanderte, suchte und stellte Fragen, bis er die tiefste Höhle in ganz {E} erreichte, wo er [[p: {V} fröhlich fand, umgeben von Tausenden von Klängen — jeder in einer kleinen, schwebenden Seifenblase gefangen. | e: feststellte, dass {V} alle Klänge in kleinen Luftblasen eingefangen hatte, die überall umherflogen. ]]

[[p: "Ich sammle Klänge" — erklärte {V} fröhlich —. "Ich habe schon das Lied des allerersten Vogels des Morgens, den Klang von Regen auf Blättern und drei verschiedene Sorten von Stille!" | e: Es schien, als hätte die Umgebung beschlossen, Stille zu bewahren und jede Musiknote in der Luft einzufangen. ]]

{P} verstand, dass [[p: {V} überhaupt nicht böse war — nur unglaublich neugierig. Er schlug einen Deal vor: {V} würde alle Klänge freigeben, wenn {P} ihm helfen würde, echte Musik zu machen. | e: es notwendig war, diese Klänge zu befreien, damit {E} sein Leben zurückgewann. ]]

[[p: {V} akzeptierte mit riesiger Begeisterung. | e: ]] Als [[p: die Blasen freigegeben wurden | e: die Blasen platzten ]], brach {E} in eine prächtige Sinfonie aus: alle Klänge der Welt spielten gleichzeitig und schufen die schönste Melodie, die je jemand gehört hatte.

Dann berührte {P} {oa_art} und schuf mit ihm etwas Neues: ein kleines, besonderes Lied [[p: nur für {V} — eine Melodie, die seinen Namen trug und die er hören konnte, wann immer er wollte. | e: für den Ort — eine Melodie, die in {E} jedes Mal erklingen würde, wenn jemand Freude braucht. ]]

"{pe} Die Musik ist zurück!" — rief {P} [[p: , "und wir haben ein brandneues Lied!" | e: . ]]

In dieser Nacht war {E} voller Leben, und {P} schlief im fröhlichen Herzschlag des Landes gewiegt ein. 🎵💤`
      },
      {
        titulo: "🚀 {P} und der Besucher aus dem Weltraum",
        cuerpo: `Eine silberne Rakete landete in {E} mit einer sanften Explosion aus blauem Licht. Heraus trat ein Besucher aus dem All: klein und rund, mit riesigen Augen wie Vollmonde und einem Lächeln, das sein ganzes Gesicht einnahm.

Alle in {E} versammelten sich neugierig, aber niemand konnte verstehen, was der Besucher sagte. Seine Worte klangen wie ferne Musik, wie kleine Glocken, die unter Wasser klingelten.

Dann [[p: trat {V} vor, absolut überzeugt, die Weltraumsprache sprechen zu können — weil er einmal geträumt hatte, es zu können. Er pflanzte sich vor den Besucher und begann, kompletten Unsinn in voller Lautstärke zu sagen. Der Besucher sah immer verwirrter aus! | e: war die Kraft von {V} zu hören. Das Geräusch war so intensiv, dass die Worte des Besuchers in der Luft verloren gingen, und der arme Reisende sah immer verwirrter aus. ]]

{P} lächelte geduldig und holte {oa_art} hervor. Mit seiner Magie übersetzte der Gegenstand die Gedanken des Besuchers in Lichtblasen, die alle sehen und verstehen konnten.

Der Besucher kam von einem Planeten, auf dem Geschichten ausgegangen waren. Er hatte die gesamte Galaxie auf der Suche nach einem Ort durchreist, an dem Geschichten niemals enden, und hatte {E} gefunden.

{P} machte ein wunderbares Versprechen: Jeden Abend, bevor alle schlafen gehen, würde jemand aus {E} eine neue Geschichte erzählen. Der Besucher würde diese Geschichten in seiner Rakete sammeln und sie auf seinen Planeten bringen, damit die Kinder dort auch träumen könnten.

"{pe} Jetzt sind wir intergalaktische Freunde!" — sagte {P}. [[p: Und {V}, der auf seine Weise versucht hatte zu helfen, wurde zum Botschafter der Wundersam Verwirrten Worte ernannt — die sich als absolut perfekt herausstellten, um alle zum Lachen zu bringen. | e: ]]

Als der Besucher abreiste, blickte {P} zu den Sternen und wusste: Keine Geschichte geht jemals wirklich verloren. 🌌✨`
      },
      {
        titulo: "🏆 {P} und die Talentshow",
        cuerpo: `Heute war der Tag der Großen Talentshow in {E}. Es gab Windflötisten, Wolkenbändiger, Regenbogenmaler und Sonnenstrahltänzer. {P} schaute mit Bewunderung zu — und einem kleinen Flattern der Nerven.

Aber als {P}s Auftritt kam, geschah etwas Unerwartetes: [[p: {V} war zuvor auf die Bühne gewandert, da er dachte, die Show beginne später, und jonglierte nun mit wilden Beeren vor dem gesamten Publikum. Niemand hatte wirklich das Herz, ihm zu sagen, dass es nicht sein Platz war! | e: plötzlich brach {V} direkt über der Bühne los. Waldblätter und Beeren wirbelten vor dem gesamten Publikum durch die Luft — es sah nach totalem Chaos aus! ]]

{P} beobachtete einen Moment. [[p: {V} war entzückend desaströs: ließ die Hälfte der Beeren fallen, stolperte über die eigenen Füße und trug dennoch ein riesiges Lächeln. Das Publikum, obwohl verblüfft, begann mit echter Wärme zu lachen. | e: Es war alles ein unerwartetes Durcheinander, aber die Beeren flogen auf eine fast rhythmische Weise. Das Publikum beobachtete dieses Naturschauspiel voller Staunen. ]]

Dann hatte {P} eine brillante Idee. Er trat [[p: neben {V} | e: ]] auf die Bühne und holte {oa_art} hervor. Mit seiner Magie zauberte er Lichtfiguren, die [[p: zusammen mit {V}s Jonglieren | e: der Bewegung von {V} ]] tanzten und jeden Patzer in eine elegante Bewegung und jede fallengelassene Beere in einen glitzernden Stern verwandelten.

Die Darbietung war wie keine andere: halb Magie, halb wunderschönes Chaos, vollständig einzigartig.

"{pe} Sie sind die Gewinner!" — jubelten alle, als es vorbei war — denn sie hatten etwas getan, das niemand erwartet hatte: einen Unfall in Kunst zu verwandeln.

{P} lernte, dass sein größtes Talent nicht Perfektion war, sondern die Fähigkeit, Magie dort zu finden, wo andere nur ein Durcheinander sehen. Und er schlief in dieser Nacht tief und fest, von Möglichkeiten träumend. 🏅🌟`
      },
      {
        titulo: "📚 {P} in der Bibliothek der Träume",
        cuerpo: `In {E} gab es eine ganz besondere Bibliothek: Ihre Bücher wurden nicht gelesen, sie wurden erlebt. Wenn man eines öffnete, tauchte man kopfüber in die Geschichte ein und erlebte sie von innen. Die Leute konnten ganze Nachmittage damit verbringen, andere Welten zu erkunden, ohne das Gebäude je zu verlassen.

An einem Nachmittag kam {P} voller Neugier an — und fand [[p: {V} in einem Buch gefangen. Er war in "Das Große Labyrinth der Träume" geraten und fand den Ausgang nicht. Er lief seit Stunden im Kreis. | e: dass die Wirkung von {V} zwischen die Seiten eines Buches gesickert war. Die Geschichte von "Das Große Labyrinth der Träume" war durch Wind und Nebel ganz durcheinandergeraten. ]]

[[p: "{pe} {P}, bitte, ich suche schon eine Ewigkeit!" — kam die Stimme von {V} von den Seiten. | e: ]]

{P} hielt {oa_art} hoch. Ihre Magie beleuchtete die Seiten und zeigte den richtigen Weg durch das Labyrinth. Aber {P} hatte eine bessere Idee als einfach den Weg zu zeigen: Anstatt [[p: {V} | e: dem Rätsel ]] die Antwort direkt zu geben, gab er Hinweise.

"Schau dir die Zeichnungen auf den Labyrinthmauern an. Die kleinen Pfeile zeigen immer zum Herzen des Buches, nie zum Ausgang."

[[p: {V} folgte den Hinweisen einen nach dem anderen — und als er das Buch schließlich verließ, leuchteten seine Augen vor Aufregung. | e: Den Hinweisen folgend, beruhigte sich die Luft und die Seiten kehrten nacheinander an ihren Platz zurück. ]]

"{pe} Ich hab's selbst gelöst! [[p: Na ja... mit deinen Hinweisen. | e: ]] "

{P} erklärte, dass das genau der Zweck von Büchern war: nicht die Antworten zu geben, sondern die Werkzeuge, um sie selbst zu finden.

Sie saßen zusammen in der Bibliothek und {P} wählte ein goldenes Buch mit leeren Seiten. Sie begannen, die Geschichte dieses Nachmittags hineinzuschreiben — denn die besten Geschichten sind immer die, die man selbst erlebt.

Jeder Tag ist eine neue Seite. Und solange man [[p: Freunde wie {V} | e: magische Momente ]] findet, wird keine einzige Seite jemals leer sein. 📖✨`
      },
      {
        titulo: "🎨 {P} und der Tag, an dem die Farben verschwanden",
        cuerpo: `{E} erwachte anders. Der Himmel war grau, die Blumen hatten ihre Farbe verloren, die Vögel waren schwarz-weiß und sogar der Regenbogen sah wie eine blasse graue Linie aus. Jemand hatte alle Farben gestohlen.

{P} ermittelte und folgte einer Spur kleiner grauer Flecken, bis er [[p: {V} fand, der mitten in einer riesigen Lache aus... gemischten Farben saß. | e: feststellte, dass {V} vorbeigezogen war und eine riesige Lache aus... gemischten Farben hinterlassen hatte. ]] Er hatte versucht, die perfekte Farbe zu erschaffen, indem er ein kleines bisschen von allem nahm, und hatte so gründlich gemischt, dass alle Farben grau geworden waren.

[[p: "{V}... was hast du getan?" — fragte {P}, die Augen ungläubig. | e: ]]

[[p: "Ich wollte die schönste Farbe der Welt erschaffen", antwortete {V} mit einer ganz kleinen Stimme. "Eine, die alles enthalten würde." | e: Es schien, als hätte die Natur versucht, all ihre Schattierungen zu vereinen, aber das Ergebnis war eine graue Wolke, die alles bedeckte. ]]

{P} verstand. [[p: {V} wollte die Farben überhaupt nicht zerstören — er hatte versucht, das Gegenteil zu tun: Schönheit in der Vereinigung aller Dinge zu finden. | e: Es war kein Versuch, die Schönheit zu nehmen, sondern sie in der Vereinigung von allem zu finden. ]] Er hatte nur vergessen, dass das Geheimnis der Farben darin liegt, dass sie am hellsten leuchten, wenn sie getrennt sind.

{P} hob {oa_art} auf und begann wie der magischste Pinsel des Universums, die Farben aus der Lache zu trennen. Eine nach der anderen kehrten sie an ihren Platz zurück: Blau für den Himmel, Grün für die Blätter, Gelb für die Sonne, Rot für die Rosen.

[[p: {V} half mit großer Begeisterung — wenn auch ein paar Farben an unerwarteten Stellen platzierend: eine orangene Wolke hier, einen lila Baum dort. | e: Die Kraft von {V} half, die Farben wieder zu verteilen, obwohl einige an unerwarteten Stellen landeten: eine orangene Wolke hier, einen lila Baum dort. ]] Und es stellte sich heraus, dass {E} bunter und freudiger als je zuvor wurde.

[[p: "Du hast es wieder geschafft!" — sagte {V} bewundernd. "Du hast mein Durcheinander in etwas Schönes verwandelt!" | e: ]]

{P} lächelte. [[p: "Wir haben es zusammen getan." | e: ]]

In dieser Nacht blickte {P} von oben auf {E} und dachte: Es gibt keinen Fehler, der so groß ist, dass er nicht mit Hilfe und Kreativität schöner werden könnte als das Original. 🌈😴`
      },
      {
        titulo: "🕯️ Das Versprechen von Morgen",
        cuerpo: `{P} saß unter dem großen, alten Baum von {E} — dem, von dem man sagte, er sei so alt, dass er sich an den allerersten Tag der Welt erinnerte. Es war ein schwieriger Tag gewesen: Die Dinge hatten sich nicht wie geplant entwickelt, und {P}s Herz fühlte sich ein bisschen schwer an.

Da kam {V} an. {V} hatte eine besondere Gabe: die Fähigkeit, Traurigkeit zu riechen. Eine nicht sehr nützliche Fähigkeit im Allgemeinen, aber in Momenten wie diesem führte sie ihn/sie genau dorthin, wo jemand Gesellschaft brauchte.

"Was ist los?" fragte {V} und setzte sich daneben.

{P} teilte seine/ihre Sorgen, während {oa_art} von selbst mit einem warmen, sanften Licht zu leuchten begann — als ob auch er/sie helfen wollte, die Atmosphäre zu beruhigen.

{O} zeigte {P} Visionen von Wiesen voller Blumen, wo die Fehler der Vergangenheit zu Samen für die Zukunft geworden waren. Es zeigte Lachen, das mit noch nicht getroffenen Freunden geteilt wurde, und Abenteuer, die nur möglich wären, wenn {P} morgen mit Hoffnung aufwachte.

{V} wusste nicht, was er/sie sagen sollte, also tat er/sie das Einzige, was er/sie wusste, wenn jemand traurig war: Er/sie kuschelte sich ganz nah heran und legte den Kopf auf {P}s Schulter — wie eine kleine Sonnenblume, die sich immer dem Licht zuwendet.

"{pe} Morgen wird unglaublich", versprach {P} leise — und diesmal glaubte er/sie es wirklich.

Denn im Leben sind die schwierigen Tage der Preis, den wir für die wundervollen zahlen. Und wenn jemand in den schwierigen bei dir bleibt, leuchten die wundervollen noch heller.

Die sanfte Brise von {E} wiegte sie beide, bis sie nebeneinander einschliefen, während die Sterne die ganze lange Nacht über sie wachten. 🌜💤`
      }
    ]
  },
  pt: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princesa', emoji: '👸' },
        { id: 'caballero', nombre: 'Cavaleiro', emoji: '🛡️' },
        { id: 'dragon', nombre: 'Dragão', emoji: '�        cuerpo: `Era uma vez, em {ea}, um(a) corajoso(a) {p} que sonhava com as mais belas aventuras. A cada manhã, ele(a) olhava para o horizonte com olhos cheios de esperança, imaginando mundos mágicos além de tudo o que se podia ver.

Numa manhã dourada, enquanto explorava os cantos mais escondidos do lugar, algo brilhou entre as folhas: {oa_art}! Ao tocá-lo(a), um formigamento mágico subiu dos dedos até o coração.

"{pe} Que maravilha!" exclamou {P} com os olhos bem abertos.

Mas exatamente nesse momento [[p: apareceu {V}, o vilão mais... surpreendente de {E}. {V} não era mau de verdade: era tão pequeno e distraído que tropeçou sem querer em {oa_art} e o escondeu debaixo do seu enorme travesseiro de nuvens. | e: o tempo mudou em {E} e {V} se desatou. Não era algo mau de verdade, mas foi tão forte que moveu sem querer {oa_art} e o escondeu em um recanto profundo. ]]

[[p: "É meu!" — disse {V} bocejando —. "Preciso de algo fofinho para dormir!" | e: ]]

{P} não ficou zangado. [[p: Em vez disso, sentou-se ao lado de {V} e perguntou com doçura: "Por que você não consegue dormir?" e assim descobriu que {V} tinha medo do escuro. | e: Em vez disso, procurou pacientemente uma solução e descobriu que o lugar precisava de um pouco de luz e calma para que tudo voltasse ao normal. ]]

{P} usou o poder de {oa_art} para criar uma luzinha suave e quente que iluminou [[p: o cantinho de {V}. A partir desse momento, {V} não precisou mais roubar nada porque tinha sua própria luz mágica... e um novo amigo! | e: cada recanto de {E}. A partir desse momento, a força de {V} se acalmou e se transformou em uma brisa suave que acompanhava os sonhos de todos. ]]

Juntos, fizeram de {E} o lugar mais lindo e acolhedor do mundo. Antes de dormir, {P} sussurrou: "A maior magia não está nos objetos, mas no coração de quem os compartilha." 🌙✨`ero: 'f' },
        { id: 'duendegolosobt', nombre: 'Duende Guloso', emoji: '🍭👺', tipo: 'personaje', genero: 'm' },
        { id: 'ratinhobag', nombre: 'Ratinho Bagunçeiro', emoji: '🐭💨', tipo: 'personaje', genero: 'm' },
        { id: 'cogumfalante', nombre: 'Cogumelo Falante', emoji: '🍄💬', tipo: 'personaje', genero: 'm' },
        { id: 'caracolbab', nombre: 'Caracol Babento', emoji: '🐌💧', tipo: 'personaje', genero: 'm' },
        { id: 'tempestade', nombre: 'uma tempestade repentina', emoji: '⛈️', tipo: 'entorno', genero: 'f' },
        { id: 'ventocurioso', nombre: 'um vento curioso e inquieto', emoji: '🌬️', tipo: 'entorno', genero: 'm' },
        { id: 'nuvemareia', nombre: 'uma nuvem de areia viajante', emoji: '🌪️', tipo: 'entorno', genero: 'f' },
        { id: 'nevoa', nombre: 'uma névoa espessa que escondia tudo', emoji: '🌫️', tipo: 'entorno', genero: 'f' },
        { id: 'nevasca', nombre: 'uma nevasca travessa', emoji: '❄️🌨️', tipo: 'entorno', genero: 'f' },
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
      return 'o/a ' + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} e o segredo de {E}",
        cuerpo: `Era uma vez, em {ea}, um(a) corajoso(a) {p} que sonhava com as mais belas aventuras. A cada manhã, ele(a) olhava para o horizonte com olhos cheios de esperança, imaginando mundos mágicos além de tudo o que se podia ver.

Numa manhã dourada, enquanto explorava os cantos mais escondidos do lugar, algo brilhou entre as folhas: {oa_art}! Ao tocá-lo(a), um formigamento mágico subiu dos dedos até o coração.

"{pe} Que maravilha!" exclamou {P} com os olhos bem abertos.

Mas exatamente nesse momento [[p: apareceu {V}, o vilão mais... surpreendente de {E}. {V} não era mau de verdade: era tão pequeno e distraído que tropeçou sem querer em {oa_art} e o escondeu debaixo do seu enorme travesseiro de nuvens. | e: o tempo mudou em {E} e {V} se desatou. Não era algo mau de verdade, mas foi tão forte que moveu sem querer {oa_art} e o escondeu em um recanto profundo. ]]

[[p: "É meu!" — disse {V} bocejando —. "Preciso de algo fofinho para dormir!" | e: ]]

{P} não ficou zangado. [[p: Em vez disso, sentou-se ao lado de {V} und perguntou com doçura: "Por que você não consegue dormir?" E assim descobriu que {V} tinha medo do escuro. | e: Em vez disso, procurou pacientemente uma solução und descobriu que o lugar precisava de um pouco de luz und calma para que tudo voltasse ao normal. ]]

{P} usou o poder de {oa_art} para criar uma luzinha suave e quente que iluminou [[p: o cantinho de {V}. A partir desse momento, {V} não precisou mais roubar nada porque tinha sua própria luz mágica... e um novo amigo! | e: cada recanto de {E}. A partir desse momento, a força de {V} se acalmou e se transformou em uma brisa suave que acompanhava os sonhos de todos. ]]

Juntos, fizeram de {E} o lugar mais lindo e acolhedor do mundo. Antes de dormir, {P} sussurrou: "A maior magia não está nos objetos, mas no coração de quem os compartilha." 🌙✨`
      },
      {
        titulo: "✨ A grande aventura de {P} em {E}",
        cuerpo: `Na maravilhosa terra de {E}, vivia um(a) corajoso(a) {p} com um sonho enorme: encontrar o lendário {oa_art}. Todos diziam que esse objeto mágico tinha o poder de realizar os mais belos sonhos.

Um dia, {P} partiu em jornada com um coração cheio de coragem. Atravessou pontes de arco-íris, caminhou por trilhos de poeira de estrelas e passou por jardins onde as flores sussurravam canções.

Mas então [[p: apareceu {V}. Esse personagem singular tinha chegado antes a {E} e, sem má intenção, tinha emaranhado todos os caminhos ao tentar brincar. | e: ocorreu {V}. Esse fenômeno natural chegou de repente a {E} e, sem querer, confundiu todos os caminhos e trilhas. ]] As trilhas estavam misturadas e ninguém sabia mais por onde ir!

[[p: "{pe} Oh, sinto muito mesmo!" — disse {V} ficando todo vermelho —. "Eu só queria fazer um labirinto para brincar..." | e: ]]

{P} respirou fundo e sorriu. [[p: "Não se preocupe. Podemos resolver isso juntos!" E os dois passaram uma tarde inteira desembaraçando os caminhos, rindo e contando histórias um ao outro. | e: Com calma e paciência, pôs-se a trabalhar para ordenar o lugar. Passou uma tarde inteira desembaraçando os caminhos e devolvendo a harmonia a {E}. ]]

No final do dia, quando tudo estava em ordem, {P} avistou {oa_art} brilhando no coração de {E}. Mas a coisa mais preciosa encontrada naquele dia não foi o objeto mágico — foi aprender que a paciência [[p: e a amizade são o maior tesouro. | e: é o maior tesouro para superar qualquer dificuldade. ]]

Aconchegaram-se juntos sob as estrelas, e {P} entendeu que cada aventura se torna mais bonita quando é compartilhada. 🌟💤`
      },
      {
        titulo: "🌙 {P} e {O} sob as estrelas",
        cuerpo: `Quando o sol se escondia atrás de {E} e o céu começava a se encher de pontinhos brilhantes, a magia começava. Ninguém sabia isso melhor do que {P}, que fazia um pedido a uma estrela diferente a cada noite.

Numa noite muito especial, algo caiu com um suave brilho bem diante dos olhos de {P}. Era {oa_art}, resplandecendo em todas as cores do arco-íris ao mesmo tempo.

"{pe} O que você está fazendo aqui, pequeno(a) {O}?" perguntou {P}, espantado(a).

Mas antes que {O} pudesse responder, [[p: chegou {V} correndo. Ele tinha perseguido {oa_art} a noite toda porque achava que era uma estrela cadente e queria devolvê-la ao céu. Coitado do {V}, estava exausto de tanto correr! | e: sentiu-se a força de {V}. Esse fenômeno tinha envolvido {oa_art} a noite toda, como se quisesse levá-lo de volta ao céu. ]]

{P} explicou-lhe com carinho [[p: que {oa_art} não era uma estrela, mas algo muito mais especial: um objeto capaz de realizar os sonhos de quem precisa. E {V} precisava muito de algo: um amigo para acompanhá-lo à noite, pois se sentia muito sozinho. | e: ao vento e às estrelas que {oa_art} era um objeto especial capaz de trazer calma e bons sonhos a quem mais precisava. ]]

Nesta noite, {P} usou o poder de {oa_art} para que [[p: {V} pudesse entender a língua das estrelas. E assim, enquanto {P} escutava seus segredos brilhantes, {V} aprendeu que nunca mais estaria sozinho. | e: a paz voltasse a {E}. O céu ficou sereno novamente e as estrelas brilharam mais forte do que nunca. ]]

Os três — {P}, [[p: {V} | e: a calma ]] e as estrelas de {E} — tornaram-se os melhores amigos de todo o universo. 🌙🌟`
      },
      {
        titulo: "{pe} {P}, {O} e o mistério de {E}",
        cuerpo: `Tudo começou numa terça-feira perfeitamente comum quando {P} encontrou um bilhete misterioso na porta de {E}: "Alguém roubou a alegria deste lugar. Siga as pegadas luminosas e descubra quem foi."

{P} não hesitou nem por um segundo! Seguiu os rastros de poeira de estrelas que serpenteavam por {E} até chegar a uma clareira escondida, fundo entre grandes árvores antigas.

Lá estava [[p: {V}, rodeado de toda a alegria de {E}: risos engarrafados em pequenos frascos, cores embaladas em pequenas bolsinhas e melodias guardadas em pequenas caixinhas. Mas {V} não estava rindo — estava sentado no chão, com uma expressão muito triste. | e: o efeito de {V}, que tinha aprisionado toda a alegria de {E}: as risadas, as cores e as melodias estavam envoltas em um redemoinho de confusão. ]]

[[p: "Por que você pegou tudo isso?" — perguntou {P} com voz gentil. | e: ]]

[[p: {V} explicou entre soluços que queria guardar a alegria de {E} em segurança, pois tinha um medo terrível de que um dia ela acabasse. "Tenho tanto medo que um dia não reste mais nada bonito..." sussurrou. | e: Parecia que o ambiente tinha aprisionado a alegria por medo de perdê-la, criando um clima de melancolia em todo o lugar. ]]

{P} ergueu {oa_art} e sua magia criou algo extraordinário: uma fonte inesgotável de alegria no coração de {E}, uma que nunca secaria enquanto alguém quisesse compartilhar.

[[p: {V} abriu todos os frascos, as bolsinhas e as caixinhas, e a alegria inundou {E} numa cascata de cores. | e: O redemoinho de {V} se dissipou suavemente, libertando toda a alegria acumulada, e as cores inundaram {E}. ]] Foi o dia mais bonito de que qualquer pessoa naquele lugar já se lembrava.

Naquela noite, {P} se aninhou sob as estrelas, sabendo que a alegria, quando compartilhada, não diminui — se multiplica. 🌜💫`
      },
      {
        titulo: "💫 A jornada de {P} para {E}",
        cuerpo: `{P} sempre sonhou em visitar {E}. As paredes do seu quarto estavam cheias de desenhos, mapas e cartões-postais daquele lugar mágico. E um belo dia, finalmente, decidiu que era hora de partir.

A jornada foi longa, mas cheia de maravilhas. {P} viu cachoeiras de chocolate, pontes feitas de nuvens fofas e pássaros que cantavam melodias que pareciam velhos amigos familiares.

Quando finalmente chegou a {E}, ficou completamente sem palavras. Era ainda mais bonito do que havia imaginado. Mas algo estava errado — todos os habitantes estavam preocupados.

[[p: "É {V}" — explicou um pequeno duende —. "Esta manhã ele entrou em {ea} e bagunçou tudo sem querer. Confundiu o norte com o sul, e agora ninguém sabe onde fica nada!" | e: "É por causa de {V}" — explicou um pequeno duende —. "Esta manhã ele chegou a {ea} e bagunçou tudo. O vento soprou tão forte que confundiu o norte com o sul, e agora ninguém sabe onde fica nada!" ]]

{P} encontrou [[p: {V} tentando freneticamente consertar as coisas, tropeçando numa coisa enquanto tentava endireitar outra. Era adoravelmente atrapalhado, a ponto de {P} não poder evitar uma gargalhada calorosa. | e: a área por onde {V} tinha passado, com rastros de folhas e areia por toda parte. ]]

Juntos, com a ajuda de {oa_art} que esperava na entrada da terra, colocaram {E} em ordem em tempo recorde. Cada objeto voltou ao seu lugar com um pequeno brilho de magia e um pequeno tinido.

Quando tudo estava perfeito, [[p: {V} se virou para {P} com bochechas coradas: "Obrigado. Nunca ninguém tinha me ajudado sem rir de mim." | e: o ar em {E} voltou a ser fresco e tranquilo. ]]

[[p: "Ah, eu ri sim!" — admitiu {P} com um sorriso —. "But só porque você é encantador." | e: ]]

Daquele dia em diante, {P} tornou-se o guardião de {E} [[p: e {V} seu assistente mais fiel — embora um pouco atrapalhado. | e: cuidando para que o clima fosse sempre agradável para todos. ]] E viveram felizes por muitas e muitas noites. 🌙⭐💤`
      },
      {
        titulo: "🎭 {P} e o Grande Festival de {E}",
        cuerpo: `Tudo estava pronto para a maior festa do ano em {E}! {P} havia passado semanas preparando cordões de luzes, balões coloridos e um enorme bolo de vários andares. Esta noite era o Grande Festival.

Mas com apenas uma hora para o início, algo terrível aconteceu: a música havia desaparecido. Sem música, não havia festa!

A culpada era {V}, que havia escondido todos os instrumentos porque queria tocá-los sozinha antes que os convidados chegassem — mas não sabia tocar nenhum deles, e agora estava rodeada de instrumentos e chorando de vergonha.

{P} não a repreendeu. Em vez disso, sentou-se ao lado dela e lhe ensinou algo simples: como fazer música apenas com as mãos. Palmas, estalos de dedos, batidinhas suaves nos joelhos.

Então {P} se lembrou de {oa_art}. Ao tocá-lo(a), uma doce e perfeita melodia preencheu cada canto de {E}, fazendo até as flores e nuvens quererem dançar.

{V} se juntou à música com suas palmas, e logo todos os convidados chegaram e começaram a dançar. Foi o melhor festival que {E} já viveu.

"Obrigado(a) por trazer a harmonia de volta!" todos aplaudiram. E {V}, cujas palmas eram o batimento secreto de tudo, recebeu a maior salva de palmas da noite.

Exausto(a) de tanta diversão, {P} adormeceu com um sorriso de orelha a orelha. 🌜✨`
      },
      {
        titulo: "🎁 Um presente das estrelas para {P}",
        cuerpo: `Era uma noite extraordinariamente tranquila em {E} quando algo derivou do céu como um floco de neve brilhante. Ao pousar, descobriu-se que era {oa_art}, brilhando com a luz de mil galáxias.

{P} o(a) segurou com cuidado. Ao tocá-lo(a), sentiu que poderia transformar os medos mais profundos em belos sonhos coloridos.

"{pe} É um presente muito especial!" exclamou {P}.

Mas então {V} apareceu, com olhos que mostravam que havia chorado. Explicou que o presente havia caído exatamente onde morava, e que realmente havia acreditado que era para ele(a).

{P} pensou por um momento e teve uma ideia maravilhosa: "E se a gente compartilhar? Você tem medo à noite, e eu quero ajudar todos em {E}. Podemos fazer as duas coisas ao mesmo tempo!"

{V} piscou, espantado(a). Ninguém jamais havia oferecido compartilhar algo assim com ele(a).

Naquela noite, {P} e {V} usaram juntos a magia de {oa_art} para que todos em {E} tivessem belos sonhos: as crianças sonharam com aventuras, os adultos com memórias felizes, e {V} sonhou — pela primeira vez — sem nenhum medo.

{P} fechou os olhos, grato(a), sabendo que a generosidade é a magia mais poderosa de todas. 🌟💤`
      },
      {
        titulo: "🐾 {P} ao resgate em {E}",
        cuerpo: `Era uma tarde calma em {E} quando {P} ouviu um som peculiar: algo entre um gemido e uma risadinha, que vinha dos arbustos. Aproximando-se, encontrou um pequeno animal perdido — e bem ao lado, {V}.

{V} havia tentado ajudar a criaturinha a encontrar o caminho de volta para casa, mas sendo tão distraído(a) quanto era, os dois acabaram perdidos juntos num canto de {E} que nenhum dos dois havia visto antes.

"{pe} Que bagunça engraçada a gente fez!" admitiu {V}, se coçando.

{P} não pôde evitar rir, mas rapidamente produziu {oa_art}. O objeto começou a brilhar com uma luz quente e constante, traçando no ar um caminho luminoso que levava diretamente à casa do pequeno animal.

Pelo caminho, {P} explicou a {V} como se orientar com as estrelas e as flores. "As flores da floresta sempre ficam de frente para o sol, então se você sabe onde o sol está ao meio-dia, nunca vai se perder."

{V} escutou com atenção, anotando mentalmente cada dica. Quando o pequeno animal chegou em casa são e salvo, sua família o recebeu com tanto amor que as lágrimas de alegria eram visíveis ao redor.

"{pe} Você é tão corajoso(a)" sussurrou o pequeno animal para {P}. "E você, {V} — mesmo se perdendo, nunca me abandonou!"

{V} corou de felicidade. Havia falhado em guiar, mas triunfado no que realmente importava: estar presente.

Com o coração em paz e uma lição bem aprendida, todos fizeram o caminho de volta para descansar sob as estrelas de {E}. 🌛💨`
      },
      {
        titulo: "🌸 {P} e a mudança de estação em {E}",
        cuerpo: `A primavera deveria ter chegado a {E}, mas algo a retinha. Os campos ainda estavam cobertos de neve e as flores se recusavam a acordar. Todos em {E} estavam intrigados.

O(A) culpado(a) — embora completamente sem intenção — era {V}, que havia encontrado um botão mágico em forma de floco de neve e o havia apertado muitas, muitas vezes, pois era simplesmente adorável demais para resistir. E a cada aperto, um pouco mais de inverno chegava!

"Eu não sabia que isso ia acontecer" confessou {V} com uma voz bem pequenina.

{P} pegou {oa_art} com delicadeza e soprou suavemente sobre as flores adormecidas. Uma a uma, como se acordassem de um longo sonho doce, elas abriram suas pétalas: primeiro algumas tímidas, depois todas de uma vez, numa grande cascata de cores.

"Isso é lindo!" gritou {V}, que nunca havia visto flores desabrochando de verdade, pois sempre chegava quando tudo já estava aberto.

{P} explicou que certos momentos especiais na natureza precisam ser aguardados com paciência — que não se pode forçar as flores a florescer, assim como não se pode forçar um sonho a se realizar.

Todo o {E} se encheu de cores, perfumes doces e o alegre zumbido das abelhas. A partir daquele dia, {V} cuidou muito bem do botão floco de neve e só o apertava no verão, para trazer um pouco de frescor.

E {P}, com um coração tão leve quanto uma pétala ao vento, se preparou para um dia de brincadeiras sem fim. 🌼🌜`
      },
      {
        titulo: "🎶 A melodia perdida de {E}",
        cuerpo: `Um estranho e pesado silêncio havia se instalado sobre {E}. Nenhum pássaro cantava, nenhum vento movia as folhas, nenhum riacho murmurava. Como se a música do mundo tivesse simplesmente desaparecido.

{P} decidiu encontrar os sons perdidos. Andou, procurou e fez perguntas até chegar à caverna mais profunda de todo o {E}, onde encontrou {V} sentado(a) alegremente, rodeado(a) de milhares de sons — cada um preso numa pequena bolha de sabão flutuante.

"Eu coleciono sons" explicou {V} alegremente. "Já tenho o canto do primeiro pássaro da manhã, o som da chuva nas folhas e três variedades diferentes de silêncio!"

{P} entendeu que {V} não era nem um pouco mau(má) — apenas incrivelmente curioso(a). Propôs um acordo: {V} libertaria todos os sons se {P} o(a) ajudasse a aprender a fazer música de verdade.

{V} aceitou com enorme entusiasmo. Quando as bolhas foram libertas, {E} explodiu numa magnífica sinfonia: todos os sons do mundo tocando ao mesmo tempo, criando a melodia mais bonita que alguém jamais ouvira.

Em seguida, {P} tocou {oa_art} e criou algo novo: uma pequena canção especial só para {V} — uma melodia que carregava seu nome, que ele(a) podia ouvir sempre que quisesse.

"{pe} A música voltou!" gritou {P}, "e temos uma canção novinha em folha!"

Naquela noite, {E} estava cheio de vida, e {P} adormeceu embalado(a) pelo feliz batimento do coração da terra. 🎵💤`
      },
      {
        titulo: "🚀 {P} e o visitante do espaço",
        cuerpo: `Um foguete prateado pousou em {E} com uma suave explosão de luz azul. Dele saiu um visitante do espaço: pequeno e redondo, com olhos enormes como luas cheias e um sorriso que ocupava todo o seu rosto.

Todos em {E} se reuniram curiosos, mas ninguém conseguia entender o que o visitante dizia. Suas palavras soavam como música distante, como pequenos sinos tilintando debaixo d'água.

Então {V} se adiantou, absolutamente convicto(a) de que podia falar o idioma espacial — porque uma vez havia sonhado que conseguia. Plantou-se na frente do visitante e começou a dizer coisas sem sentido em voz muito alta. O visitante parecia cada vez mais confuso!

{P} sorriu com paciência e pegou {oa_art}. Com sua magia, o objeto traduziu os pensamentos do visitante em bolhas de luz que todos podiam ver e entender.

O visitante vinha de um planeta onde as histórias haviam acabado. Havia viajado por toda a galáxia em busca de um lugar onde as histórias nunca terminassem, e havia encontrado {E}.

{P} fez uma promessa maravilhosa: toda noite, antes de dormir, alguém de {E} contaria uma história nova. O visitante colocaria essas histórias em seu foguete e as levaria de volta ao seu planeta, para que as crianças de lá também pudessem sonhar.

"{pe} Agora somos amigos intergalácticos!" disse {P}. E {V}, que havia tentado ajudar à sua maneira, foi nomeado(a) Embaixador(a) das Palavras Maravilhosamente Confusas — que se revelaram absolutamente perfeitas para fazer todos rirem.

Quando o visitante partiu, {P} olhou para as estrelas e soube: nenhuma história é perdida para sempre. 🌌✨`
      },
      {
        titulo: "🏆 {P} e o show de talentos",
        cuerpo: `Hoje era o dia do Grande Show de Talentos de {E}. Havia flautistas do vento, domadores de nuvens, pintores de arco-íris e dançarinos de raios de sol. {P} assistia a tudo com admiração — e um leve friozinho na barriga.

Mas quando chegou a vez de {P}, algo inesperado aconteceu: {V} havia subido ao palco primeiro, achando que o show começava mais tarde, e agora fazia malabarismo com frutas silvestres na frente de todo o público. Ninguém tinha coragem de dizer que não era sua vez!

{P} observou por um momento. {V} era adoravelmente desastroso(a): deixando cair metade das frutas, tropeçando nos próprios pés e ainda assim exibindo um sorriso enorme. O público, embora desconcertado, começava a rir com genuíno carinho.

Então {P} teve uma ideia brilhante. Subiu ao palco ao lado de {V} e ergueu {oa_art}. Com sua magia, criou figuras de luz que dançavam junto com o malabarismo de {V}, transformando cada tropeço em um movimento artístico e cada frutinha derrubada em uma estrela brilhante.

A apresentação foi como nenhuma outra: metade mágica, metade belo caos, completamente única.

"{pe} São os vencedores!" todos aplaudiram quando terminou — pois haviam feito algo que ninguém esperava: transformar um acidente em arte.

{P} aprendeu que seu maior talento não era a perfeição, mas a capacidade de encontrar magia onde os outros só veem bagunça. E dormiu profundamente naquela noite, sonhando com manhãs cheias de possibilidades. 🏅🌟`
      },
      {
        titulo: "📚 {P} na Biblioteca dos Sonhos",
        cuerpo: `Em {E} havia uma biblioteca muito especial: seus livros não eram lidos, eram vividos. Quando se abria um, mergulhava-se de cabeça na história e a vivia por dentro. As pessoas podiam passar tardes inteiras explorando outros mundos sem nunca sair do prédio.

Uma tarde, {P} chegou cheio(a) de curiosidade — e encontrou {V} preso(a) dentro de um livro. Havia entrado em "O Grande Labirinto dos Sonhos" e não conseguia achar a saída. Estava dando voltas em círculos há horas.

"{pe} {P}, por favor, estou procurando há uma eternidade!" veio a voz de {V} das páginas.

{P} ergueu {oa_art}. Sua magia iluminou as páginas, revelando o caminho correto pelo labirinto. Mas {P} teve uma ideia melhor do que simplesmente mostrar o caminho: em vez de dar a resposta diretamente a {V}, deu pistas.

"Olhe os desenhos nas paredes do labirinto. As setinhas sempre apontam para o coração do livro, nunca para a saída."

{V} seguiu as pistas uma a uma — e quando finalmente saiu do livro, seus olhos brilhavam de emoção.

"{pe} Resolvi sozinho(a)! Bem... com as suas dicas."

{P} explicou que era exatamente para isso que serviam os livros: não para dar as respostas, mas para dar as ferramentas para encontrá-las por conta própria.

Sentaram-se juntos na biblioteca e {P} escolheu um livro dourado com páginas em branco. Começaram a escrever nele a história daquela tarde — porque as melhores histórias são sempre as que você mesmo(a) vive.

Cada dia é uma nova página. E enquanto você encontrar amigos como {V}, nenhuma página estará em branco. 📖✨`
      },
      {
        titulo: "🎨 {P} e o dia em que as cores desapareceram",
        cuerpo: `{E} acordou diferente. O céu estava cinza, as flores haviam perdido sua cor, os pássaros eram preto e branco e até o arco-íris parecia uma pálida linha cinza. Alguém havia roubado todas as cores.

{P} investigou, seguindo um rastro de pequenas manchas cinzas até encontrar {V}, sentado(a) no meio de uma enorme poça de... cores misturadas. Havia querido criar a cor perfeita, pegando um pouquinho de cada coisa, e havia misturado tão bem que todas as cores tinham se tornado cinza.

"{V}... o que você fez?" perguntou {P}, sem conseguir acreditar.

"Queria criar a cor mais bonita do mundo" respondeu {V} com uma voz bem pequenina. "Uma que contivesse tudo."

{P} entendeu. {V} não havia querido destruir as cores — estava tentando fazer o oposto: encontrar a beleza na união de todas as coisas. Havia apenas esquecido que o segredo das cores é que elas brilham mais quando estão separadas.

{P} ergueu {oa_art} e, como o pincel mais mágico do universo, começou a separar as cores da poça. Uma a uma, elas voltaram aos seus lugares: azul para o céu, verde para as folhas, amarelo para o sol, vermelho para as rosas.

{V} ajudou com muito entusiasmo — embora colocando algumas cores em lugares inesperados: uma nuvem laranja aqui, uma árvore lilás ali. E acontece que {E} ficou mais colorido e alegre do que jamais havia sido.

"Você conseguiu de novo!" disse {V} admirado(a). "Você transformou minha bagunça em algo bonito!"

{P} sorriu. "Nós fizemos juntos."

Naquela noite, {P} olhou para {E} lá de cima e pensou: não há erro tão grande que não possa se tornar, com ajuda e criatividade, mais bonito que o original. 🌈😴`
      },
      {
        titulo: "🕯️ A promessa do amanhã",
        cuerpo: `{P} estava sentado(a) sob a grande árvore centenária de {E} — aquela que as pessoas diziam ser tão velha que se lembrava do primeiro dia do mundo. Havia sido um dia difícil: as coisas não tinham saído como planejado, e o coração de {P} estava um pouco pesado.

Foi então que {V} chegou. {V} tinha um dom peculiar: a capacidade de cheirar a tristeza. Não era uma habilidade muito útil em geral, mas em momentos como aquele, ela o(a) levava exatamente até onde alguém precisava de companhia.

"O que está acontecendo?" perguntou {V} sentando-se ao lado.

{P} compartilhou suas preocupações, enquanto {oa_art} começou a brilhar suavemente por conta própria, com uma luz quente e gentil — como se também quisesse ajudar a acalmar o momento.

{O} mostrou a {P} visões de campos cheios de flores, onde os erros do passado haviam se tornado sementes para o futuro. Mostrou risos compartilhados com amigos ainda por conhecer, e aventuras que só poderiam acontecer se {P} acordasse amanhã com esperança.

{V} não sabia o que dizer, então fez a única coisa que sabia fazer quando alguém estava triste: aconchegou-se bem pertinho e pousou a cabeça no ombro de {P} — como um pequeno girassol que sempre busca a luz.

"{pe} Amanhã vai ser incrível" prometeu {P} em voz baixa — e desta vez acreditou de verdade.

Porque na vida, os dias difíceis são o preço que pagamos pelos dias maravilhosos. E quando se tem alguém que fica ao seu lado nos difíceis, os maravilhosos brilham ainda mais.

A brisa suave de {E} embalalou os dois até adormeceram, lado a lado, enquanto as estrelas faziam a guarda sobre eles durante toda a longa noite. 🌜💤`
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

  // Elegir villano al azar
  const villanos = data.elementos.villanos || [];
  const villano = villanos.length > 0 ? villanos[Math.floor(Math.random() * villanos.length)] : null;
  
  // Español gramática
  const isEs = currentLang.startsWith('es');
  const gP = isEs ? (data.generoMap[personajeId] || 'm') : 'm';
  const gO = isEs ? (data.generoObj[objetoId] || 'm') : 'm';

  const reps = {
    // Personaje: {P}, {p}, {p_base}
    '{P}': isEs ? data.artPers(personajeId) : personaje.nombre, 
    '{p}': isEs ? data.artPers(personajeId).toLowerCase() : personaje.nombre.toLowerCase(),
    '{p_base}': personaje.nombre.toLowerCase(),
    '{pe}': personaje.emoji,

    // Escenario: {E}, {ea}, {ee}
    '{E}': isEs ? data.artEscDef(escenarioId) : escenario.nombre, 
    '{ea}': isEs ? data.artEscDef(escenarioId) : (data.artEsc[escenarioId] || escenario.nombre),
    '{ee}': escenario.emoji,

    // Objeto: {O}, {oa_art}, {oe}
    '{O}': isEs ? data.artObj(objetoId) : objeto.nombre, 
    '{oa_art}': data.artObj(objetoId),
    '{oe}': objeto.emoji,
    
    // Villano: {V} (nombre + emoji)
    '{V}': villano ? `${villano.emoji} ${villano.nombre}` : '✨ el misterioso visitante',
    
    // Solo relevante para español
    '{un_p}': isEs ? (gP === 'f' ? 'una' : 'un') : 'a',
    '{un_o}': isEs ? (gO === 'f' ? 'una' : 'un') : 'a',
    '{O_base}': objeto.nombre.toLowerCase(),
    '{oa}': gP === 'f' ? 'a' : 'o',
    '{ao}': gO === 'f' ? 'a' : 'o',
    '{lola}': gO === 'f' ? 'la' : 'lo',
    '{oa_obj}': gO === 'f' ? 'a' : 'o',
    '{oa_esc}': 'o', 
  };

  let titulo = tpl.titulo;
  let cuerpo = tpl.cuerpo;

  // Manejo de bloques condicionales [[p: texto personaje | e: texto entorno ]]
  const tipo = villano ? (villano.tipo || 'personaje') : 'personaje';
  const blockRegex = /\[\[p:\s*([\s\S]*?)\|\s*e:\s*([\s\S]*?)\]\]/g;
  titulo = titulo.replace(blockRegex, (match, pPart, ePart) => (tipo === 'personaje' ? pPart.trim() : ePart.trim()));
  cuerpo = cuerpo.replace(blockRegex, (match, pPart, ePart) => (tipo === 'personaje' ? pPart.trim() : ePart.trim()));

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
    villano: villano ? villano.nombre : null,
    villanoEmoji: villano ? villano.emoji : null,
    villanoTipo: villano ? (villano.tipo || 'personaje') : null,
    fecha: new Date().toISOString(), templateId: selectedIdx, lang: currentLang
  };
}

