// ============================================
// CREA CUENTOS ÔÇö Motor de Historias v2.0
// Ahora con villanos tiernos y cuentos m├ís largos
// ============================================

const STORY_DATA = {
  es: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princesa', emoji: '­ƒæ©' },
        { id: 'caballero', nombre: 'Caballero', emoji: '­ƒøí´©Å' },
        { id: 'dragon', nombre: 'Drag├│n', emoji: '­ƒÉë' },
        { id: 'hada', nombre: 'Hada', emoji: '­ƒºÜ' },
        { id: 'pirata', nombre: 'Pirata', emoji: '­ƒÅ┤ÔÇìÔÿá´©Å' },
        { id: 'unicornio', nombre: 'Unicornio', emoji: '­ƒªä' },
        { id: 'robot', nombre: 'Robot', emoji: '­ƒñû' },
        { id: 'sirena', nombre: 'Sirena', emoji: '­ƒº£ÔÇìÔÖÇ´©Å' },
        { id: 'conejito', nombre: 'Conejito', emoji: '­ƒÉ░' },
        { id: 'bruja_buena', nombre: 'Bruja Buena', emoji: '­ƒºÖÔÇìÔÖÇ´©Å' },
      ],
      escenarios: [
        { id: 'castillo', nombre: 'Castillo Encantado', emoji: '­ƒÅ░' },
        { id: 'bosque', nombre: 'Bosque M├ígico', emoji: '­ƒî│' },
        { id: 'isla', nombre: 'Isla del Tesoro', emoji: '­ƒÅØ´©Å' },
        { id: 'nube', nombre: 'Nube Gigante', emoji: 'Ôÿü´©Å' },
        { id: 'mar', nombre: 'Fondo del Mar', emoji: '­ƒîè' },
        { id: 'montana', nombre: 'Monta├▒a Nevada', emoji: '­ƒÅö´©Å' },
        { id: 'jardin', nombre: 'Jard├¡n Secreto', emoji: '­ƒîÀ' },
        { id: 'estrellas', nombre: 'Ciudad de Estrellas', emoji: '­ƒîƒ' },
      ],
      objetos: [
        { id: 'espada', nombre: 'Espada de Luz', emoji: 'ÔÜö´©Å' },
        { id: 'corona', nombre: 'Corona M├ígica', emoji: '­ƒææ' },
        { id: 'mapa', nombre: 'Mapa del Tesoro', emoji: '­ƒù║´©Å' },
        { id: 'varita', nombre: 'Varita M├ígica', emoji: 'Ô£¿' },
        { id: 'pocion', nombre: 'Poci├│n Brillante', emoji: '­ƒº¬' },
        { id: 'llave', nombre: 'Llave Dorada', emoji: '­ƒöæ' },
        { id: 'libro', nombre: 'Libro Encantado', emoji: '­ƒôû' },
        { id: 'amuleto', nombre: 'Amuleto Protector', emoji: '­ƒö«' },
      ],
      villanos: [
        // Personajes villanos tiernos
        { id: 'dragoncillo', nombre: 'Dragoncillo Dormil├│n', emoji: '­ƒÿ¬­ƒÉ▓', tipo: 'personaje', genero: 'm' },
        { id: 'brujita', nombre: 'Brujita del Fr├¡o', emoji: '­ƒÑÂ­ƒºÖÔÇìÔÖÇ´©Å', tipo: 'personaje', genero: 'f' },
        { id: 'duende', nombre: 'Duende Goloso', emoji: '­ƒì¡­ƒæ║', tipo: 'personaje', genero: 'm' },
        { id: 'ratoncito', nombre: 'Ratoncito Revoltoso', emoji: '­ƒÉ¡­ƒÆ¿', tipo: 'personaje', genero: 'm' },
        { id: 'honguito', nombre: 'Honguito Parlante', emoji: '🍄💬', tipo: 'personaje', genero: 'm'},
        { id: 'caracol',  nombre: 'Caracol Baboso',      emoji: '🐌💧', tipo: 'personaje', genero: 'm'},
        // Conflictos del entorno
        { id: 'tormenta', nombre: 'una tormenta repentina', emoji: 'Ôøê´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'viento', nombre: 'un viento curioso y revoltoso', emoji: '­ƒî¼´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'arena', nombre: 'una nube de arena viajera', emoji: '­ƒî¬´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'niebla', nombre: 'una niebla espesa que todo lo ocultaba', emoji: '­ƒî½´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'nieve', nombre: 'una tormenta de nieve traviesa', emoji: 'ÔØä´©Å­ƒî¿´©Å', tipo: 'entorno', genero: 'f' },
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
        castillo:'el Castillo Encantado', bosque:'el Bosque M├ígico',
        isla:'la Isla del Tesoro', nube:'la Nube Gigante',
        mar:'el Fondo del Mar', montana:'la Monta├▒a Nevada',
        jardin:'el Jard├¡n Secreto', estrellas:'la Ciudad de Estrellas',
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
        cuerpo: `Hab├¡a una vez, en {ea}, {un_p} peque├▒{oa} {p_base} que so├▒aba con vivir una gran aventura. Cada ma├▒ana miraba el horizonte con los ojos llenos de esperanza, imaginando mundos incre├¡bles m├ís all├í de lo que pod├¡a ver.

Una ma├▒ana dorada, mientras exploraba los rincones m├ís escondidos del lugar, algo brill├│ entre las hojas: ┬í{oa_art}! Al tocar{lola}, sinti├│ un cosquilleo m├ígico que le sub├¡a por los dedos hasta el coraz├│n.

"┬í{pe} Qu├® maravilla!" ÔÇö exclam├│ {P} con los ojos bien abiertos.

Pero justo en ese momento [[p: apareci├│ {V}, el villano m├ís... sorprendente de {E}. {V} no era malvado de verdad: era tan peque├▒o y despistado que sin querer tropez├│ con {oa_art} y lo escondi├│ debajo de su enorme almohada de nubes. | e: las cosas cambiaron en {E} y se desat├│ {V}. No era algo malo de verdad, pero era tan fuerte que sin querer movi├│ {oa_art} y lo ocult├│ en un rinc├│n profundo. ]]

[[p: "┬íEso es m├¡o!" ÔÇö dijo {V} bostezando ÔÇö. "┬íNecesito algo suave para dormir!" | e: ]]

{P} no se enoj├│. [[p: En vez de eso, se sent├│ junto a {V} y le pregunt├│ con dulzura: "┬┐Por qu├® no puedes dormir?" Y as├¡ descubri├│ que {V} ten├¡a miedo de la oscuridad. | e: En su lugar, busc├│ con paciencia una soluci├│n y descubri├│ que el lugar necesitaba un poco de luz y calma para que todo volviera a la normalidad. ]]

{P} us├│ el poder de {oa_art} para crear una peque├▒a luz suave y c├ílida que ilumin├│ [[p: el rinc├│n de {V}. Desde ese momento, {V} ya no necesitaba robar nada porque ten├¡a su propia luz m├ígica... ┬íy un nuevo amigo! | e: cada rinc├│n de {E}. Desde ese momento, la fuerza de {V} se calm├│ y se convirti├│ en una suave brisa que acompa├▒aba los sue├▒os de todos. ]]

Juntos hicieron de {E} el lugar m├ís bonito y acogedor del mundo. Antes de dormir, {P} susurr├│: "La magia m├ís grande no est├í en los objetos, sino en el coraz├│n de quienes los comparten." ­ƒîÖÔ£¿`
      },
      {
        titulo: "Ô£¿ La gran aventura de {P} en {E}",
        cuerpo: `En un lugar muy especial llamado {E}, viv├¡a {un_p} valiente {p_base} que ten├¡a un sue├▒o enorme: encontrar {oa_art} legendari{ao}. Todo el mundo dec├¡a que ese objeto ten├¡a el poder de hacer realidad los sue├▒os m├ís bonitos.

Un d├¡a, {P} emprendi├│ el viaje con el coraz├│n lleno de valent├¡a. Cruz├│ puentes de arco├¡ris, camin├│ por caminos de polvo de estrellas y atraves├│ jardines donde las flores susurraban canciones.

Pero entonces [[p: apareci├│ {V}. Este peculiar personaje hab├¡a llegado antes a {E} y, sin mala intenci├│n, hab├¡a enredado todos los caminos mientras intentaba jugar. | e: se produjo {V}. Este fen├│meno natural lleg├│ de repente a {E} y, sin querer, revolvi├│ todos los caminos y senderos. ]] ┬íLos senderos estaban mezclados y nadie sab├¡a por d├│nde ir!

[[p: "{V} ┬íAy, lo siento mucho!" ÔÇö dijo {V} poni├®ndose muy colorado ÔÇö. "Solo quer├¡a hacer un laberinto para jugar..." | e: ]]

{P} respir├│ hondo y sonri├│. [[p: "No te preocupes. ┬íPodemos resolverlo juntos!" Y los dos pasaron una tarde entera desenredando caminos, riendo y cont├índose historias. | e: Con calma y paciencia, se puso a trabajar para ordenar el lugar. Pas├│ una tarde entera desenredando caminos y devolviendo la armon├¡a a {E}. ]]

Al final, cuando todo estaba en orden, {P} encontr├│ {oa_art} brillando en el centro de {E}. Pero lo m├ís valioso del d├¡a no fue el objeto m├ígico: fue haber aprendido que la paciencia [[p: y la amistad son el mayor tesoro. | e: es el mayor tesoro para superar cualquier dificultad. ]]

Se acurrucaron juntos viendo las estrellas, y {P} comprendi├│ que cada aventura es m├ís bonita cuando se comparte. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒîÖ {P} y {O} bajo las estrellas",
        cuerpo: `Cuando el sol se escond├¡a detr├ís de {E} y el cielo empezaba a llenarse de puntitos brillantes, la magia comenzaba. Nadie lo sab├¡a mejor que {P}, quien cada noche miraba el firmamento y ped├¡a un deseo diferente.

Una noche muy especial, algo cay├│ con un suave destello justo frente a {P}. Era {oa_art}, que brillaba con todos los colores del arco├¡ris a la vez.

"┬í{pe} ┬┐Qu├® haces aqu├¡, peque├▒{ao} {O_base}?" ÔÇö pregunt├│ {P} asombrad{oa}.

Pero antes de que {O} pudiera responder, [[p: lleg├│ {V} corriendo. Hab├¡a estado persiguiendo {oa_art} toda la noche porque pensaba que era una estrella ca├¡da y quer├¡a regode├írsela al cielo. ┬íPobre {V}, estaba agotad{ao} de tanto correr! | e: se sinti├│ la fuerza de {V}. Este fen├│meno hab├¡a estado envolviendo {oa_art} toda la noche, como si quisiera llevarlo de vuelta al cielo. ]]

{P} le explic├│ con cari├▒o [[p: que {oa_art} no era una estrella sino algo mucho m├ís especial: un objeto capaz de hacer realidad los sue├▒os de quien lo necesita. Y {V} necesitaba algo en realidad: un amigo que le acompa├▒ara por las noches, porque se sent├¡a muy sol{ao}. | e: al viento y a las estrellas que {oa_art} era un objeto especial capaz de traer calma y sue├▒os bonitos a quien m├ís lo necesitara. ]]

Esa noche, {P} us├│ el poder de {oa_art} para que [[p: {V} pudiera entender el idioma de las estrellas. Y as├¡, mientras {P} escuchaba sus secretos brillantes, {V} aprendi├│ que nunca m├ís estar├¡a sol{ao}. | e: la paz regresara a {E}. El cielo se volvi├│ sereno y las estrellas brillaron con m├ís fuerza que nunca. ]]

Los tres ÔÇö{P}, [[p: {V} | e: la calma ]] y las estrellas de {E}ÔÇö se convirtieron en los mejores amigos del universo. ­ƒîÖ­ƒîƒ`
      },
      {
        titulo: "{pe} {P}, {O} y el misterio de {E}",
        cuerpo: `Todo comenz├│ un martes de lo m├ís normal cuando {P} encontr├│ una nota misteriosa pegada en la puerta de {E}: "Alguien ha robado la alegr├¡a del lugar. Sigue las huellas brillantes y descubre qui├®n fue."

┬í{P} no lo dud├│ ni un segundo! Sigui├│ las huellas de polvo de estrellas que serpenteaban por {E} hasta llegar a un claro escondido entre ├írboles enormes.

All├¡ estaba [[p: {V}, rodeado de toda la alegr├¡a de {E}: risas en frasquitos, colores en bolsitas y melod├¡as en cajitas peque├▒as. Pero {V} no estaba riendo; estaba sentad{ao} en el suelo, muy triste. | e: el efecto de {V}, que hab├¡a atrapado toda la alegr├¡a de {E}: las risas, los colores y las melod├¡as estaban envueltos en un torbellino de confusi├│n. ]]

[[p: "┬┐Por qu├® recogiste todo esto?" ÔÇö pregunt├│ {P} con voz dulce. | e: ]]

[[p: {V} explic├│ entre sollozos que hab├¡a querido guardar la alegr├¡a de {E} porque ten├¡a miedo de que se acabara. "Me da tanto p├ínico que un d├¡a no haya m├ís cosas bonitas..." | e: Parec├¡a que el entorno hab├¡a atrapado la alegr├¡a por temor a perderla, creando un clima de melancol├¡a en todo el lugar. ]]

{P} sac├│ {oa_art} y con su magia cre├│ algo incre├¡ble: una fuente de alegr├¡a inagotable en el coraz├│n de {E}, una que nunca se acabar├¡a mientras hubiera alguien que quiera compartir.

[[p: {V} abri├│ todos los frasquitos, bolsitas y cajitas, y la alegr├¡a inund├│ {E} de colores. | e: El torbellino de {V} se disip├│ suavemente, liberando toda la alegr├¡a acumulada, y los colores inundaron {E}. ]] Fue el d├¡a m├ís bonito que nadie en ese lugar recordaba.

Esa noche, {P} se acurruc├│ bajo las estrellas sabiendo que la alegr├¡a, cuando se comparte, no disminuye: ┬íse multiplica! ­ƒî£­ƒÆ½`
      },
      {
        titulo: "­ƒÆ½ El gran viaje de {P} a {E}",
        cuerpo: `{P} siempre hab├¡a so├▒ado con visitar {E}. En su habitaci├│n ten├¡a dibujos, mapas y postales de ese lugar m├ígico. Y un buen d├¡a, finalmente, decidi├│ que era el momento de emprender el viaje.

El camino fue largo pero lleno de maravillas. {P} vio cascadas de chocolate, puentes hechos de nubes esponjosas y p├íjaros que cantaban melod├¡as conocidas.

Cuando por fin lleg├│ a {E}, se qued├│ sin palabras. Era incluso m├ís hermoso de lo que hab├¡a imaginado. Pero algo pasaba: todos los habitantes del lugar estaban preocupados.

[[p: "Es {V}" ÔÇö explic├│ un peque├▒o duende ÔÇö. "Esta ma├▒ana se ha metido en {ea} y sin querer ha revuelto todo. ┬íHa confundido el norte con el sur y ahora nadie sabe d├│nde est├í nada!" | e: "Es por {V}" ÔÇö explic├│ un peque├▒o duende ÔÇö. "Esta ma├▒ana ha llegado a {ea} y lo ha revuelto todo. El viento sopl├│ tan fuerte que ha confundido el norte con el sur y ahora nadie sabe d├│nde est├í nada." ]]

{P} encontr├│ a [[p: {V} intentando arreglarlo todo fren├®ticamente, tropezando con una cosa al intentar ordenar otra. Era tan torpemente adorable que {P} no pudo evitar re├¡r con ternura. | e: la zona donde {V} hab├¡a pasado, con rastros de hojas y arena por todos lados. ]]

Juntos, con la ayuda de {oa_art} que esperaba en la entrada del lugar, ordenaron {E} en tiempo r├®cord. Cada objeto regres├│ a su sitio con un destello m├ígico y una peque├▒a melod├¡a.

Cuando todo estuvo perfecto, [[p: {V} se volvi├│ hacia {P} con las mejillas rojas: "Gracias. Nunca hab├¡a tenido a alguien que me ayudara sin re├¡rse de m├¡." | e: el aire en {E} se volvi├│ fresco y tranquilo. ]]

[[p: "┬íS├¡ que me he re├¡do!" ÔÇö admiti├│ {P} sonriendo ÔÇö. "Pero solo porque eres encantador{a}." | e: ]]

Desde ese d├¡a, {P} se convirti├│ en el guardi├ín de {E} [[p: y {V} en su ayudante m├ís leal ÔÇöaunque algo torpeÔÇö. | e: cuidando que el clima fuera siempre agradable para todos. ]] Y vivieron felices muchas, muchas noches. ­ƒîÖÔ¡É­ƒÆñ`
      },
      {
        titulo: "­ƒÄ¡ {P} y el Gran Festival de {E}",
        cuerpo: `┬íTodo estaba listo para la fiesta m├ís grande del a├▒o en {E}! {P} hab├¡a pasado semanas preparando guirnaldas de luces, globos de colores y una tarta enorme de varios pisos. Era la noche del Gran Festival.

Pero cuando faltaba una hora para que empezara, ocurri├│ algo inesperado: la m├║sica hab├¡a desaparecido. Sin m├║sica, ┬íno hab├¡a fiesta!

[[p: Y la culpable era {V}, que hab├¡a escondido todos los instrumentos porque quer├¡a tocarlos ella sola antes de que nadie llegara... pero no sab├¡a tocar ninguno, y ahora estaba rodeada de instrumentos y llorando de verg├╝enza. | e: Resulta que {V} hab├¡a soplado tan fuerte que los instrumentos se hab├¡an dispersado por todo {E}, quedando atrapados en lugares insospechados. ]]

{P} no la rega├▒├│. En su lugar, [[p: se sent├│ a su lado y le ense├▒├│ algo sencillo: c├│mo hacer m├║sica con las manos. Palmadas, chasquidos, golpes suaves en las rodillas. | e: busc├│ una forma creativa de recuperar la armon├¡a. ]]

Luego record├│ que hab├¡a guardado {oa_art}. Al tocarlo, una melod├¡a dulce y perfecta llen├│ cada rinc├│n de {E}, haciendo bailar incluso a las flores y a las nubes.

[[p: {V} se uni├│ a la m├║sica con sus palmadas, y pronto todos los invitados llegaron y comenzaron a bailar. | e: El efecto de {V} se suaviz├│ y los instrumentos regresaron a sus sitios como por arte de magia. ]] Fue la mejor fiesta que {E} hab├¡a tenido jam├ís.

"┬í{pe} {P}, gracias por traer la armon├¡a!" ÔÇö dijeron todos. [[p: Y {V}, que ya no era un secreto torpe, fue ovacionada por sus palmadas perfectas. | e: ]]

Cansad{oa} de tanta diversi├│n, {P} se fue a dormir con una sonrisa de oreja a oreja. ­ƒî£Ô£¿`
      },
      {
        titulo: "­ƒÄü Un regalo de las estrellas para {P}",
        cuerpo: `Era una noche tremendamente tranquila en {E} cuando algo cay├│ suavemente del cielo como un copo de nieve brillante. Al aterrizar, result├│ ser {oa_art} con el brillo de mil galaxias.

{P} lo sostuvo con cuidado. Al tocarlo, sinti├│ que pod├¡a convertir los miedos m├ís oscuros en sue├▒os bonitos y coloridos.

"┬í{pe} Es un regalo especial!" ÔÇö exclam├│ {P}.

Pero entonces [[p: apareci├│ {V}, con cara de haber estado llorando. Explic├│ que esse regalo hab├¡a ca├¡do exactamente donde ├®l viv├¡a y que, en realidad, creia que era para ├®l. | e: se desat├│ {V} en la zona. Parec├¡a que el clima tambi├®n quer├¡a reclamar ese brillo para calmar su propia fuerza. ]]

{P} pens├│ un momento y luego tuvo una idea maravillosa: "┬┐Y si lo compartimos? [[p: T├║ tienes miedo por las noches, y yo quiero ayudar a todos en {E}. ┬íPodemos hacer las dos cosas a la vez!" | e: Yo quiero ayudar a todos en {E}, y as├¡ la calma llegar├í a cada rinc├│n del lugar." ]]

[[p: {V} parpade├│ sorprendido. Nunca nadie le hab├¡a propuesto compartir algo as├¡. | e: ]]

Esa noche, {P} [[p: y {V} usaron juntos la magia de {oa_art} para que todos en {E} tuvieran sue├▒os bonitos: los ni├▒os so├▒aron con aventuras, los mayores con recuerdos felices y {V} so├▒├│, por primera vez, sin ning├║n miedo. | e: us├│ la magia de {oa_art} para que todos en {E} tuvieran sue├▒os bonitos. La fuerza de {V} se convirti├│ en un arrullo constante y todos so├▒aron, por primera vez, con una paz absoluta. ]]

{P} cerr├│ los ojos agradecid{oa}, sabiendo que la generosidad es la magia m├ís poderosa de todas. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒÉ¥ {P} al rescate en {E}",
        cuerpo: `Era una tarde tranquila en {E} cuando {P} escuch├│ un sonido extra├▒o: una mezcla entre gemido y risita que ven├¡a de entre los matorrales. Al acercarse, encontr├│ a un peque├▒o animalito perdido [[p: ... y junto a ├®l, a {V}. | e: en medio de {ea}. ]]

[[p: {V} hab├¡a intentado ayudar al animalito a encontrar su camino, pero siendo tan despistado como era, hab├¡an terminado los dos perdidos en un rinc├│n de {E} que ninguno de los dos conoc├¡a. | e: Resulta que {V} hab├¡a envuelto el lugar con su fuerza y el peque├▒o animalito no pod├¡a encontrar la salida. ]]

[[p: "┬í{pe} Qu├® l├¡o tan gracioso hemos armado!" ÔÇö admiti├│ {V} rasc├índose la cabeza. | e: ]]

{P} no pudo evitar re├¡r, pero r├ípidamente sac├│ {oa_art}. El objeto empez├│ a brillar con una luz c├ílida y constante, trazando en el aire un camino luminoso que llevaba directo al hogar del peque├▒o animalito.

Mientras caminaban, {P} le explic├│ [[p: a {V} | e: ]] c├│mo orientarse con las estrellas y las flores: "Las flores del bosque siempre miran al sol, as├¡ que si sabes d├│nde est├í el sol al mediod├¡a, nunca te perder├ís."

[[p: {V} escuchaba con atenci├│n, tomando nota mental de cada consejo. | e: ]] Cuando el animalito lleg├│ a casa sano y salvo, su familia lo recibi├│ con tanto amor que las l├ígrimas de alegr├¡a eran visibles.

"{pe} {P} eres muy valiente" ÔÇö susurr├│ el animalito [[p: ÔÇö. "Y t├║, {V}, aunque te perdiste, ┬ínunca me abandonaste!" | e: . ]]

[[p: {V} se sonroj├│ de felicidad. Hab├¡a fallado en lo de guiar, pero hab├¡a triunfado en lo que de verdad importaba: estar ah├¡. | e: ]]

Con paz en el coraz├│n y la lecci├│n aprendida, todos regresaron a descansar bajo las estrellas de {E}. ­ƒîø­ƒÆ¿`
      },
      {
        titulo: "­ƒî© {P} y el cambio de estaci├│n en {E}",
        cuerpo: `La primavera estaba a punto de llegar a {E}, pero algo la reten├¡a: los campos segu├¡an cubiertos de nieve y las flores se negaban a despertar. Todos en {E} estaban intrigados.

[[p: La culpable, aunque sin mala intenci├│n, era {V}, que hab├¡a encontrado un bot├│n m├ígico con forma de copo de nieve y lo hab├¡a apretado muchas, much├¡simas veces porque le parec├¡a adorable. ┬íY con cada apret├│n, llegaba un poco m├ís de invierno! | e: Todo era por causa de {V}, que se hab├¡a instalado en {E} y no quer├¡a dejar paso al sol. El fr├¡o era tan intenso que parec├¡a que el invierno no quer├¡a terminar nunca. ]]

[[p: "No sab├¡a que eso pasar├¡a" ÔÇö confes├│ {V} con la voz muy peque├▒a. | e: ]]

{P} tom├│ {oa_art} con delicadeza y sopl├│ suavemente sobre las flores dormidas. Una a una, como si despertaran de un largo sue├▒o, fueron abriendo sus p├®talos: primero unos pocos t├¡midos y luego, en cascada, todos a la vez.

"┬íEsto es precioso!" [[p: ÔÇö exclam├│ {V}, que nunca hab├¡a visto florecer a las flores de verdad porque siempre llegaba cuando ya estaban abiertas. | e: ]]

{P} le ense├▒├│ [[p: | e: al mundo ]] que hay momentos especiales en la naturaleza que hay que esperar con paciencia, sin apresurar ni que las cosas florezcan ni que los sue├▒os se cumplan.

Todo {E} se llen├│ de colores, perfumes y el zumbido alegre de las abejas. [[p: {V} cuid├│ el bot├│n de copo de nieve con mucho m├ís cuidado desde ese d├¡a, y solo lo apretaba en verano para que hubiera un poquito de fresco. | e: La fuerza de {V} se disip├│, dejando que el sol calentara cada rinc├│n. ]]

Y {P}, con el coraz├│n ligero como una flor al viento, se prepar├│ para un d├¡a de juegos interminables. ­ƒî╝­ƒî£`
      },
      {
        titulo: "­ƒÄÂ La melod├¡a perdida de {E}",
        cuerpo: `Hab├¡a un gran y extra├▒o silencio en {E}. No hab├¡a p├íjaros cantando, ni viento entre las hojas, ni riachuelos murmurando. Era como si la m├║sica del mundo hubiera desaparecido de golpe.

{P} decidi├│ encontrar el sonido perdido. Camin├│, busc├│ y pregunt├│ hasta que lleg├│ a la cueva m├ís profunda de {E}, donde encontr├│ [[p: a {V} rodeado de miles de sonidos que hab├¡a capturado en peque├▒as burbujas de jab├│n. | e: que {V} hab├¡a atrapado todos los sonidos en peque├▒as burbujas de aire que flotaban por todos lados. ]]

[[p: "Colecciono sonidos" ÔÇö explic├│ {V} feliz ÔÇö. "┬íYa tengo el canto del primer p├íjaro del d├¡a, el sonido de la lluvia en las hojas y tres tipos diferentes de silencio!" | e: Parec├¡a que el entorno hab├¡a decidido guardar silencio, atrapando cada nota musical en el aire. ]]

{P} entendi├│ que [[p: {V} no era maldadoso, solo era muy curioso. Le propuso un trato: {V} soltar├¡a todos los sonidos si {P} le ayudaba a aprender m├║sica de verdad. | e: era necesario liberar esos sonidos para que {E} recuperara su vida. ]]

[[p: {V} acept├│ emocionado. | e: ]] Cuando [[p: solt├│ las burbujas | e: las burbujas estallaron ]], {E} explot├│ en una sinfon├¡a maravillosa: todos los sonidos del mundo sonando a la vez, creando la melod├¡a m├ís hermosa que nadie hab├¡a escuchado.

Luego {P} tom├│ {oa_art} y con ├®l cre├│ una peque├▒a canci├│n especial [[p: solo para {V}: una melod├¡a que llevaba su nombre y que pod├¡a escuchar siempre que quisiera. | e: para el lugar: una melod├¡a que resonar├¡a en {E} siempre que alguien necesitara alegr├¡a. ]]

"{pe} ┬íLa m├║sica ha vuelto!" ÔÇö grit├│ {P} [[p: ÔÇö, "┬íy adem├ís tenemos una canci├│n nueva!" | e: . ]]

Esa noche, {E} se llen├│ de vida y {P} se durmi├│ mecido por el latido feliz del lugar. ­ƒÄÁ­ƒÆñ`
      },
      {
        titulo: "­ƒÜÇ {P} y el visitante gal├íctico",
        cuerpo: `Un cohete plateado aterriz├│ en {E} con una suave explosi├│n de luz azul. De su interior sali├│ un visitante del espacio: peque├▒o, redondo, con ojos enormes como lunas llenas y una sonrisa que ocupaba toda su cara.

Todos en {E} se asomaron curiosos, pero nadie pod├¡a entender lo que el visitante dec├¡a. Sus palabras sonaban como m├║sica lejana, como campanillas bajo el agua.

Entonces [[p: apareci├│ {V}, convencido de que pod├¡a hablar el idioma espacial porque una vez hab├¡a so├▒ado que lo hac├¡a. Se plant├│ delante del visitante y empez├│ a decir cosas sin sentido en voz muy alta. ┬íEl visitante parec├¡a cada vez m├ís confundido! | e: se escuch├│ la fuerza de {V}. El ruido era tan intenso que las palabras del visitante se perd├¡an en el aire, y el pobre viajero parec├¡a cada vez m├ís confundido. ]]

{P} sonri├│ con paciencia y sac├│ {oa_art}. Con su magia, el objeto tradujo los deseos del visitante en burbujas de luz que todos pod├¡an ver y entender.

El visitante ven├¡a de un planeta donde ya no quedaban historias. Hab├¡a viajado por toda la galaxia buscando un lugar donde las historias nunca se acabaran, y hab├¡a encontrado {E}.

{P} le prometi├│ algo maravilloso: cada noche, antes de dormir, alguien de {E} le contar├¡a una historia nueva. El visitante pondr├¡a esas historias en su nave y las llevar├¡a a su planeta para que los ni├▒os de all├í tambi├®n pudieran so├▒ar.

"{pe} ┬íAhora somos amigos intergal├ícticos!" ÔÇö dijo {P}. [[p: Y {V}, que hab├¡a intentado ayudar a su manera, fue nombrado embajador de las palabras confusas, que resultaron ser perfectas para hacer re├¡r a todos. | e: ]]

Cuando el visitante parti├│, {P} mir├│ las estrellas y supo que ninguna historia se pierde jam├ís. ­ƒîîÔ£¿`
      },
      {
        titulo: "­ƒÅå {P} y el concurso de talentos",
        cuerpo: `Hoy era el d├¡a del Gran Concurso de Talentos de {E}. Hab├¡a flautistas de viento, domadores de nubes, pintores de arco├¡ris y bailarines de rayos de sol. {P} observaba todo con admiraci├│n y un poco de nervios.

Pero cuando lleg├│ el turno de {P}, algo pas├│: [[p: {V} hab├¡a entrado antes al escenario pensando que el concurso empezaba m├ís tarde, y ahora estaba haciendo malabares con frutos del bosque delante de todo el p├║blico. ┬íNadie quer├¡a decirle que no era su turno! | e: de repente se desat├│ {V} justo sobre el escenario. Las hojas y frutos del bosque empezaron a volar por los aires delante de todo el p├║blico, ┬íparec├¡a un caos total! ]]

{P} observ├│ la escena un momento. [[p: {V} era adorablemente desastroso: dejaba caer la mitad de los frutos, tropezaba con sus propios pies y sin embargo ten├¡a una sonrisa enorme. El p├║blico, aunque confundido, empezaba a re├¡r con cari├▒o. | e: Todo era un desorden inesperado, pero los frutos volaban de una forma casi r├¡tmica. El p├║blico observaba con asombro aquel espect├ículo natural. ]]

Entonces {P} tuvo una idea brillante. Subi├│ al escenario [[p: junto a {V} | e: ]] y sac├│ {oa_art}. Con ├®l, cre├│ figuras de luz que acompa├▒aban [[p: los malabares de {V} | e: el movimiento de {V} ]], convirtiendo cada tropiezo en un movimiento art├¡stico y cada frutico ca├¡do en una estrella brillante.

La actuaci├│n fue un espect├ículo sin igual: parte magia, parte caos, completamente ├║nico.

"{pe} ┬íSon los ganadores!" ÔÇö exclamaron cuando terminaron, porque hab├¡an hecho algo que nadie esperaba: hab├¡an convertido un accidente en arte.

{P} aprendi├│ que su mayor talento no era la perfecci├│n, sino la capacidad de ver la magia donde otros solo ven caos. Y durmi├│ pl├ícidamente, so├▒ando con ma├▒anas llenas de posibilidades. ­ƒÅà­ƒîƒ`
      },
      {
        titulo: "­ƒôÜ {P} en la Biblioteca de los Sue├▒os",
        cuerpo: `En {E} hab├¡a una biblioteca muy especial: sus libros no se le├¡an, sino que se viv├¡an. Cuando abr├¡as uno, te met├¡as de cabeza dentro de la historia y la viv├¡as desde adentro. La gente pod├¡a pasar tardes enteras explorando otros mundos sin salir de la biblioteca.

{P} entr├│ una tarde con mucha curiosidad... y encontr├│ [[p: a {V} atascado dentro de un libro. Hab├¡a entrado en "El Gran Laberinto de los Sue├▒os" y no encontraba la salida. Llevaba horas dando vueltas. | e: que el efecto de {V} se hab├¡a colado entre las p├íginas de un libro. El cuento de "El Gran Laberinto de los Sue├▒os" estaba todo revuelto por el viento y la niebla. ]]

[[p: "┬í{pe} {P} por favor, hace horas que busco!" ÔÇö lleg├│ la voz de {V} desde las p├íginas. | e: ]]

{P} sac├│ {oa_art} y con su magia, las p├íginas del libro se iluminaron mostrando el camino correcto del laberinto. Pero {P} tuvo una idea mejor: en vez de darle directamente la soluci├│n [[p: a {V} | e: al misterio ]], le dio pistas.

"Mira los dibujos en las paredes del laberinto. Las flechas peque├▒as se├▒alan siempre hacia el coraz├│n del libro, no hacia la salida."

[[p: {V} sigui├│ las pistas una a una, y cuando por fin sali├│ del libro, ten├¡a los ojos brillantes de emoci├│n. | e: Siguiendo las pistas, el aire se calm├│ y las p├íginas volvieron a su lugar una a una. ]]

"{pe} ┬íLo resolv├¡ yo solo! [[p: Bueno... con tus pistas. | e: ]] "

{P} le explic├│ que ese era exactamente el prop├│sito de los libros: no darte las respuestas, sino darte las herramientas para encontrarlas t├║ mism{oa}.

Se sentaron juntos en la biblioteca y {P} eligi├│ un libro dorado con p├íginas vac├¡as. Empezaron a escribir en ├®l la historia de esa tarde, porque las mejores historias son las que vives t├║ mismo.

Cada d├¡a es una p├ígina nueva, y mientras encuentres [[p: amigos como {V} | e: momentos m├ígicos ]], ninguna p├ígina estar├í vac├¡a. ­ƒôûÔ£¿`
      },
      {
        titulo: "­ƒÄ¿ {P} y el d├¡a que {E} perdi├│ sus colores",
        cuerpo: `Amaneci├│ diferente en {E}: el cielo era gris, las flores hab├¡an perdido su color, los p├íjaros eran blancos y negros y hasta el arco├¡ris se ve├¡a como una l├¡nea de gris claro. Alguien hab├¡a robado todos los colores.

{P} investig├│ y sigui├│ un rastro de peque├▒as manchas grises hasta encontrar [[p: a {V}, que estaba sentad{ao} en medio de un charco enorme de color... mezclado. | e: que {V} hab├¡a pasado por all├¡, dejando un charco enorme de color... mezclado. ]] Hab├¡a querido crear el color perfecto, tomando un poquito de cada cosa, y sin querer hab├¡a mezclado tanto que todos los colores se hab├¡an convertido en gris.

[[p: "{V} ...┬┐Qu├® hiciste?" ÔÇö pregunt├│ {P} sin poder creerlo. | e: ]]

[[p: "Quer├¡a crear el color m├ís bonito del mundo" ÔÇö respondi├│ {V} en voz muy baja ÔÇö. "Uno que lo contuviera todo." | e: Parec├¡a que la naturaleza hab├¡a intentado unir todas sus tonalidades en una sola, pero el resultado era una nube gris que lo cubr├¡a todo. ]]

{P} entendi├│. [[p: {V} no buscaba destruir los colores, buscaba lo opuesto: quer├¡a encontrar la belleza en la uni├│n de todos. | e: No era un intento de quitar la belleza, sino de encontrarla en la uni├│n de todo. ]] Solo que hab├¡a olvidado que el secreto de los colores es que brillan cuando est├ín separados.

Sac├│ {oa_art} y, como si fuera el pincel m├ís m├ígico del universo, empez├│ a separar los colores del charco. Uno a uno fueron regresando a su lugar: el azul al cielo, el verde a las hojas, el amarillo al sol, el rojo a las rosas.

[[p: {V} ayud├│ con entusiasmo, aunque poniendo algunos colores en lugares inesperados: una nube naranja aqu├¡, un ├írbol morado all├í. | e: La fuerza de {V} ayud├│ a esparcir los colores de nuevo, aunque algunos terminaron en lugares inesperados: una nube naranja aqu├¡, un ├írbol morado all├í. ]] Y result├│ que {E} qued├│ m├ís colorido y alegre que nunca.

[[p: "┬íLo hiciste de nuevo!" ÔÇö dijo {V} admirad{ao}. "┬íConvertiste mi l├¡o en algo hermoso!" | e: ]]

{P} sonri├│. [[p: "Lo hicimos los dos." | e: ]]

Esa noche {P} mir├│ {E} desde lo alto y pens├│: no hay error tan grande que no pueda convertirse, con ayuda y creatividad, en algo m├ís bonito que lo original. ­ƒîê­ƒÿ┤`
      },
      {
        titulo: "­ƒò»´©Å La promesa del ma├▒ana",
        cuerpo: `{P} estaba sentad{oa} bajo el gran ├írbol centenario de {E}, el que dec├¡an que era tan viejo que recordaba el primer d├¡a del mundo. Hab├¡a tenido un d├¡a dif├¡cil: las cosas no hab├¡an salido como planeaba y el coraz├│n le pesaba un poco.

Fue entonces cuando [[p: lleg├│ {V}, que ten├¡a una habilidad peculiar: pod├¡a oler la tristeza. No era una habilidad muy ├║til en general, pero en momentos como ese, le llevaba exactamente donde alguien necesitaba compa├▒├¡a. | e: se sinti├│ llegar a {V}. No era un viento fuerte, sino una brisa suave que parec├¡a entender el silencio del momento. ]]

[[p: "┬┐Qu├® ocurre?" ÔÇö pregunt├│ {V} sent├índose a su lado. | e: ]]

{P} explic├│ sus preocupaciones mientras {oa_art} empezaba a brillar sola con una luz c├ílida y suave, como si quisiera calmar el ambiente.

[[p: {O} | e: El amuleto ]] le mostr├│ visiones de campos llenos de flores donde los errores del pasado se convert├¡an en semillas para el futuro. Le mostr├│ risas de amigos a├║n por conocer y aventuras que solo podr├¡an vivirse si se levantaba ma├▒ana con esperanza.

[[p: {V} no sab├¡a qu├® decir, as├¡ que hizo lo ├║nico que sab├¡a hacer cuando alguien estaba triste: se acurruc├│ muy cerca y puso la cabeza en el hombro de {P} como un peque├▒o girasol que siempre busca el sol. | e: El entorno se volvi├│ tan pac├¡fico que {P} sinti├│ como si {E} mismo le estuviera dando un abrazo. ]]

"{pe} El ma├▒ana ser├í incre├¡ble" ÔÇö prometi├│ {P} en voz baja, y esta vez lo cre├¡a de verdad.

Porque en la vida, los d├¡as dif├¡ciles son el precio que pagamos por los d├¡as maravillosos. Y cuando tienes [[p: a alguien que se queda a tu lado | e: momentos de paz ]] en los dif├¡ciles, los maravillosos son a├║n m├ís brillantes.

La brisa suave de {E} los arrull├│ hasta que [[p: ambos se quedaron dormidos, uno junto al otro, | e: {P} se qued├│ dormid{oa}, ]] mientras las estrellas montaban guardia toda la noche. ­ƒî£­ƒÆñ`
      }
    ]
  },
  en: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princess', emoji: '­ƒæ©' },
        { id: 'caballero', nombre: 'Knight', emoji: '­ƒøí´©Å' },
        { id: 'dragon', nombre: 'Dragon', emoji: '­ƒÉë' },
        { id: 'hada', nombre: 'Fairy', emoji: '­ƒºÜ' },
        { id: 'pirata', nombre: 'Pirate', emoji: '­ƒÅ┤ÔÇìÔÿá´©Å' },
        { id: 'unicornio', nombre: 'Unicorn', emoji: '­ƒªä' },
        { id: 'robot', nombre: 'Robot', emoji: '­ƒñû' },
        { id: 'sirena', nombre: 'Mermaid', emoji: '­ƒº£ÔÇìÔÖÇ´©Å' },
        { id: 'conejito', nombre: 'Bunny', emoji: '­ƒÉ░' },
        { id: 'bruja_buena', nombre: 'Good Witch', emoji: '­ƒºÖÔÇìÔÖÇ´©Å' },
      ],
      escenarios: [
        { id: 'castillo', nombre: 'Enchanted Castle', emoji: '­ƒÅ░' },
        { id: 'bosque', nombre: 'Magic Forest', emoji: '­ƒî│' },
        { id: 'isla', nombre: 'Treasure Island', emoji: '­ƒÅØ´©Å' },
        { id: 'nube', nombre: 'Giant Cloud', emoji: 'Ôÿü´©Å' },
        { id: 'mar', nombre: 'Bottom of the Sea', emoji: '­ƒîè' },
        { id: 'montana', nombre: 'Snowy Mountain', emoji: '­ƒÅö´©Å' },
        { id: 'jardin', nombre: 'Secret Garden', emoji: '­ƒîÀ' },
        { id: 'estrellas', nombre: 'City of Stars', emoji: '­ƒîƒ' },
      ],
      objetos: [
        { id: 'espada', nombre: 'Sword of Light', emoji: 'ÔÜö´©Å' },
        { id: 'corona', nombre: 'Magic Crown', emoji: '­ƒææ' },
        { id: 'mapa', nombre: 'Treasure Map', emoji: '­ƒù║´©Å' },
        { id: 'varita', nombre: 'Magic Wand', emoji: 'Ô£¿' },
        { id: 'pocion', nombre: 'Glowing Potion', emoji: '­ƒº¬' },
        { id: 'llave', nombre: 'Golden Key', emoji: '­ƒöæ' },
        { id: 'libro', nombre: 'Enchanted Book', emoji: '­ƒôû' },
        { id: 'amuleto', nombre: 'Protective Amulet', emoji: '­ƒö«' },
      ],
      villanos: [
        // Character villains (cute)
        { id: 'grumpling', nombre: 'Sleepy Grumpling', emoji: '­ƒÿ¬­ƒæ╣', tipo: 'personaje', genero: 'm' },
        { id: 'frostitwitch', nombre: 'Frostie the Forgetful', emoji: '­ƒÑÂ­ƒºÖ', tipo: 'personaje', genero: 'f' },
        { id: 'snackgoblin', nombre: 'Snack Goblin', emoji: '­ƒì¡­ƒæ║', tipo: 'personaje', genero: 'm' },
        { id: 'scramblerat', nombre: 'Scramble Rat', emoji: '­ƒÉ¡­ƒÆ¿', tipo: 'personaje', genero: 'm' },
        { id: 'talkingmushroom', nombre: 'Talking Mushroom', emoji: '🍄💬', tipo: 'personaje', genero: 'm'},
        { id: 'slimysnail',       nombre: 'Slimy Snail',      emoji: '🐌💧', tipo: 'personaje', genero: 'm'},
        // Environmental conflicts
        { id: 'storm', nombre: 'a sudden wild storm', emoji: 'Ôøê´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'wind', nombre: 'a curious, restless wind', emoji: '­ƒî¼´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'sandcloud', nombre: 'a wandering sand cloud', emoji: '­ƒî¬´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'mist', nombre: 'a thick mist that hid everything', emoji: '­ƒî½´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'snowstorm', nombre: 'a mischievous snowstorm', emoji: 'ÔØä´©Å­ƒî¿´©Å', tipo: 'entorno', genero: 'f' },
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

But just then, [[p: {V} appearedÔÇöthe most surprising character in all of {E}. {V} wasn't truly wicked: they were just so small and absentminded that they tripped right over {oa_art} and accidentally hid it under an enormous cloud pillow. | e: the weather changed in {E} and {V} broke out. It wasn't truly bad, but it was so strong that it accidentally moved {oa_art} and hid it in a deep corner. ]]

[[p: "That's mine!" said {V}, yawning. "I need something soft to sleep on!" | e: ]]

{P} didn't get angry. [[p: Instead, they sat beside {V} and asked gently: "Why can't you sleep?" And so they discovered that {V} was afraid of the dark. | e: Instead, they patiently looked for a solution and discovered that the place needed a bit of light and calm for everything to return to normal. ]]

{P} used the power of {oa_art} to create a small, warm, soft light that glowed in [[p: {V}'s corner. From that moment on, {V} no longer needed to steal anything, because they had their own magical lightÔÇöand a brand new friend! | e: every corner of {E}. From that moment on, the force of {V} calmed down and turned into a gentle breeze that accompanied everyone's dreams. ]]

Together, they made {E} the most beautiful and welcoming place in the world. Before drifting off to sleep, {P} whispered: "The greatest magic isn't in objectsÔÇöit's in the hearts of those who share them." ­ƒîÖÔ£¿`
      },
      {
        titulo: "Ô£¿ The Grand Adventure of {P} in {E}",
        cuerpo: `In the wonderful land of {E}, there lived a brave {p} with one enormous dream: to find the legendary {oa_art}. Everyone said that this magical object had the power to make the most beautiful dreams come true.

One day, {P} set out on the journey with a heart full of courage. They crossed rainbow bridges, walked along paths of stardust, and passed through gardens where flowers whispered songs.

But then [[p: {V} appeared. This rather peculiar character had arrived in {E} first and, without meaning any harm, had tangled all the paths while trying to play. | e: {V} occurred. This natural phenomenon suddenly arrived in {E} and, without meaning to, scrambled all the paths and trails. ]] The trails were all mixed up and nobody knew which way to go!

[[p: "{pe} Oh, I'm so sorry!" cried {V}, turning red. "I just wanted to build a maze to play in..." | e: ]]

{P} took a deep breath and smiled. [[p: "Don't worry. We can sort it out together!" And the two of them spent the whole afternoon untangling paths, laughing and swapping stories. | e: With calm and patience, they set to work to put the place in order. They spent the whole afternoon untangling paths and returning harmony to {E}. ]]

At the end of the day, when everything was in order, {P} spotted {oa_art} glowing at the heart of {E}. But the most precious thing they found that day wasn't the magical objectÔÇöit was learning that patience [[p: and friendship are the greatest treasure of all. | e: is the greatest treasure to overcome any difficulty. ]]

They curled up together beneath the stars, and {P} understood that every adventure becomes more beautiful when it's shared. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒîÖ {P} and {O} beneath the Stars",
        cuerpo: `When the sun hid behind {E} and the sky began to fill with tiny, sparkling dots, the magic would begin. Nobody knew this better than {P}, who wished on a different star every single night.

On one very special evening, something fell with a gentle gleam right before {P}'s eyes. It was {oa_art}, glowing with every color of the rainbow all at once.

"{pe} What are you doing here, little {O}?" asked {P}, astonished.

But before {O} could answer, [[p: {V} came running over. They'd been chasing {oa_art} all night, thinking it was a fallen star and wanting to return it to the sky. Poor {V} was exhausted from all that running! | e: the force of {V} was felt. This phenomenon had been enveloping {oa_art} all night, as if it wanted to carry it back to the sky. ]]

{P} gently explained [[p: that {oa_art} wasn't a star at all, but something far more special: an object that could make the deepest wishes come true for whoever needed it most. And what {V} needed was simple: a friend to keep them company at night, because they were terribly lonely. | e: to the wind and the stars that {oa_art} was a special object capable of bringing calm and beautiful dreams to whoever needed it most. ]]

That evening, {P} used the power of {oa_art} so that [[p: {V} could understand the language of the stars. And as {P} listened to their glittering secrets, {V} discovered they would never be alone again. | e: peace returned to {E}. The sky became serene and the stars shone brighter than ever. ]]

The three of themÔÇö{P}, [[p: {V} | e: the calm ]] and the stars of {E}ÔÇö became the best friends in the entire universe. ­ƒîÖ­ƒîƒ`
      },
      {
        titulo: "{pe} {P}, {O} and the Mystery of {E}",
        cuerpo: `It all started one perfectly ordinary Tuesday when {P} found a mysterious note pinned to the gate of {E}: "Someone has stolen the joy from this place. Follow the glowing footprints and discover who."

{P} didn't hesitate for even a second! They followed the trails of stardust that wound through {E} until they arrived at a hidden clearing, deep among enormous ancient trees.

There was [[p: {V}, surrounded by all the joy of {E}: laughter bottled in tiny jars, colours packed in little pouches, and melodies tucked inside small boxes. But {V} wasn't smilingÔÇöthey were sitting on the ground, looking very sad. | e: the effect of {V}, which had trapped all the joy of {E}: laughter, colours and melodies were wrapped in a whirlwind of confusion. ]]

[[p: "Why did you take all of this?" asked {P} with a gentle voice. | e: ]]

[[p: {V} explained through sniffles that they had wanted to keep {E}'s joy safe, because they were terrified it might someday run out. "I'm so afraid that one day there will be nothing beautiful left..." they whispered. | e: It seemed that the environment had trapped the joy for fear of losing it, creating an atmosphere of melancholy throughout the place. ]]

{P} held up {oa_art} and its magic created something extraordinary: an endless spring of joy at the heart of {E}, one that would never dry up as long as someone was willing to share.

[[p: {V} opened every jar, pouch and box, and joy flooded {E} in a cascade of colour. | e: The whirlwind of {V} gently dissipated, releasing all the accumulated joy, and colours flooded {E}. ]] It was the most beautiful day anyone in that place could ever remember.

That night, {P} nestled under the stars, knowing that joy, when shared, doesn't grow smallerÔÇöit multiplies. ­ƒî£­ƒÆ½`
      },
      {
        titulo: "­ƒÆ½ {P}'s Journey to {E}",
        cuerpo: `{P} had always dreamed of visiting {E}. Their bedroom walls were covered in drawings, maps and postcards of that magical place. And one fine day, they finally decided the time had come to set off.

The journey was long but filled with wonders. {P} saw waterfalls of chocolate, bridges made of fluffy clouds, and birds singing melodies that felt like old familiar friends.

When they finally arrived at {E}, they were completely speechless. It was even more beautiful than they had ever imagined. But something was wrongÔÇöall the inhabitants were worried.

[[p: "It's {V}," explained a tiny sprite. "This morning they wandered into {ea} and muddled everything without meaning to. They mixed up north and south, and now nobody knows where anything is!" | e: "It's because of {V}," explained a tiny sprite. "This morning it arrived in {ea} and muddled everything. The wind blew so hard that it mixed up north and south, and now nobody knows where anything is!" ]]

{P} found [[p: {V} frantically trying to fix things, tripping over one object while trying to set right another. They were so endearingly clumsy that {P} couldn't help letting out a warm laugh. | e: the area where {V} had passed, with traces of leaves and sand everywhere. ]]

Together, helped by {oa_art} that was waiting at the entrance of the land, they put {E} back in order in record time. Every object returned to its place with a little flash of magic and a tiny chime.

When everything was perfect, [[p: {V} turned to {P} with rosy cheeks: "Thank you. No one has ever helped me without laughing at me." | e: the air in {E} became fresh and calm. ]]

[[p: "Oh, I did laugh!" {P} admitted with a smile. "But only because you're absolutely wonderful." | e: ]]

From that day on, {P} became the guardian of {E} [[p: and {V} their most loyalÔÇöif somewhat clumsyÔÇöhelper. | e: making sure the weather was always pleasant for everyone. ]] And they lived happily for many, many nights. ­ƒîÖÔ¡É­ƒÆñ`
      },
      {
        titulo: "­ƒÄ¡ {P} and the Grand Festival of {E}",
        cuerpo: `Everything was ready for the biggest celebration of the year in {E}! {P} had spent weeks preparing strings of lights, colourful balloons and a towering, multi-tiered cake. Tonight was the Grand Festival.

But with just one hour to go, something dreadful happened: the music had vanished. Without music, there was no party!

[[p: The culprit was {V}, who had hidden all the instruments because they wanted to play them alone before the guests arrivedÔÇöbut didn't know how to play any of them, and was now surrounded by instruments and crying with embarrassment. | e: The culprit was the effect of {V}, which had blown so hard that the instruments had scattered all over {E}, getting trapped in unexpected places. ]]

{P} didn't scold. Instead, [[p: they sat beside {V} and taught them something simple: how to make music with just their hands. Clapping, snapping fingers, soft taps on their knees. | e: they looked for a creative way to restore the harmony. ]]

Then {P} remembered {oa_art}. Touching it caused a sweet, perfect melody to fill every corner of {E}, making even the flowers and clouds want to dance.

[[p: {V} joined in with their hand-clapping, and soon all the guests arrived and started dancing. | e: The effect of {V} softened and the instruments returned to their places as if by magic. ]] It was the best festival {E} had ever seen.

"Thank you for bringing the harmony back!" everyone cheered. [[p: And {V}, whose clapping was the secret heartbeat of it all, was given the loudest applause of the night. | e: ]]

Tired out from so much fun, {P} drifted off to sleep with a smile that reached from ear to ear. ­ƒî£Ô£¿`
      },
      {
        titulo: "­ƒÄü A Gift from the Stars for {P}",
        cuerpo: `It was an extraordinarily peaceful night in {E} when something drifted down from the sky like a brilliant snowflake. When it landed, it turned out to be {oa_art}, shining with the light of a thousand galaxies.

{P} held it carefully. Touching it, they felt they could transform the deepest fears into beautiful, colourful dreams.

"{pe} It's a very special gift!" exclaimed {P}.

But then [[p: {V} appeared, with eyes that showed they'd been crying. They explained that the gift had fallen right where they lived, and they had truly believed it was meant for them. | e: the force of {V} broke out in the area. It seemed the weather also wanted to claim that glow to calm its own force. ]]

{P} thought for a moment, then had a wonderful idea: "What if we share it? [[p: You're afraid at night, and I want to help everyone in {E}. We can do both at the same time!" | e: I want to help everyone in {E}, and in doing so, calm will reach every corner of the land." ]]

[[p: {V} blinked, astonished. Nobody had ever offered to share something like this with them before. | e: ]]

That night, {P} [[p: and {V} used the magic of {oa_art} together so that everyone in {E} would have beautiful dreams: the children dreamed of adventures, the grown-ups dreamed of happy memories, and {V} dreamedÔÇöfor the very first timeÔÇöwithout a single fear. | e: used the magic of {oa_art} to ensure everyone in {E} had beautiful dreams. The force of {V} turned into a constant lullaby and everyone dreamt, for the very first time, with absolute peace. ]]

{P} closed their eyes, grateful, knowing that generosity is the most powerful magic of all. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒÉ¥ {P} to the Rescue in {E}",
        cuerpo: `It was a calm afternoon in {E} when {P} heard a peculiar sound: somewhere between a whimper and a little giggle, coming from behind the bushes. Moving closer, they found a tiny lost animalÔÇöand right beside it, [[p: {V}. | e: {ea}. ]]

[[p: {V} had tried to help the little creature find its way home, but being as scatterbrained as they were, the two of them had ended up lost together in a corner of {E} that neither of them had ever seen before. | e: It turned out that {V} had enveloped the place with its force and the little animal couldn't find the way out. ]]

[[p: "{pe} What a funny muddle we've made!" admitted {V}, scratching their head. | e: ]]

{P} couldn't help laughing, but quickly produced {oa_art}. The object began to glow with a warm, steady light, drawing a shining path through the air that led directly to the little animal's home.

Along the way, {P} explained [[p: to {V} | e: ]] how to find direction using stars and flowers. "The forest flowers always face the sun, so if you know where the sun is at midday, you'll never be lost."

[[p: {V} listened carefully, making a mental note of every tip. | e: ]] When the little animal arrived home safe and sound, their family greeted them with such fierce love that tears of joy were visible all around.

"{pe} You're so brave," whispered the little animal to {P}. [[p: "And you, {V}ÔÇöeven though you got lost, you never left me on my own!" | e: . ]]

[[p: {V} flushed with happiness. They had failed at guiding, but triumphed at what truly mattered: being there. | e: ]]

With hearts at peace and a lesson well learned, everyone made their way back to rest under the stars of {E}. ­ƒîø­ƒÆ¿`
      },
      {
        titulo: "­ƒî© {P} and the Changing of the Season",
        cuerpo: `Spring was supposed to arrive in {E}, but something was holding it back. The fields were still covered in snow and the flowers refused to wake up. Everyone in {E} was puzzled.

[[p: The culpritÔÇöthough quite by accidentÔÇöwas {V}, who had found a magical button shaped like a snowflake and pressed it many, many times, because it was simply too adorable to resist. And with every press, a little more winter arrived! | e: It was all because of {V}, which had settled in {E} and didn't want to let the sun through. The cold was so intense that it seemed winter would never end. ]]

[[p: "I didn't know that would happen," confessed {V} in a very small voice. | e: ]]

{P} gently picked up {oa_art} and blew softly over the sleeping flowers. One by one, as if waking from a long, sweet dream, they opened their petals: first a few shy ones, then all of them at once, in a great rushing cascade of colour.

"This is beautiful!" [[p: cried {V}, who had never actually seen flowers blooming, since they always arrived after everything was already open. | e: ]]
{P} explained [[p: to them | e: to the world ]] that some special moments in nature must be waited for with patienceÔÇöthat you can't rush flowers into blooming any more than you can rush a dream into coming true.

All of {E} filled with colours, sweet scents and the cheerful hum of bees. [[p: From that day on, {V} took very good care of the snowflake button and only pressed it in summer, just to bring a tiny bit of cool breeze. | e: The force of {V} dissipated, letting the sun warm every corner. ]]

And {P}, with a heart as light as a petal in the wind, got ready for a day of endless play. ­ƒî╝­ƒî£`
      },
      {
        titulo: "­ƒÄÂ The Lost Melody of {E}",
        cuerpo: `A strange and heavy silence had settled over {E}. No birds sang, no wind stirred the leaves, no streams trickled and murmured. It was as if the music of the world had simply vanished.

{P} understood that {V} wasn't wicked at allÔÇöjust incredibly curious. They suggested a deal: {V} would release all the sounds if {P} would help them learn to make real music.

{V} accepted with enormous excitement. When the bubbles were released, {E} burst into a magnificent symphony: every sound in the world playing at once, creating the most beautiful melody anyone had ever heard.

Then {P} touched {oa_art} and created something new: a small, special song just for {V}ÔÇöa melody that carried their name, one they could listen to whenever they wished.

"{pe} Music is back!" cried {P}, "and we have a brand new song!"

That night, {E} was full of life, and {P} fell asleep rocked by the happy heartbeat of the land. ­ƒÄÁ­ƒÆñ`
      },
      {
        titulo: "­ƒÜÇ {P} and the Visitor from Space",
        cuerpo: `A silver rocket landed in {E} with a soft explosion of blue light. Out stepped a space visitor: small and round, with enormous eyes like full moons and a smile that took up their whole face.

Everyone in {E} peeked out with curiosity, but no one could understand a single word the visitor was saying. Their speech sounded like distant music, like little bells ringing underwater.

Then [[p: {V} appeared, absolutely convinced they could speak the language of space because they'd once had a dream about doing so. They marched right up to the visitor and began shouting nonsense at the top of their lungs. The visitor looked more confused than ever! | e: the force of {V} was heard. The noise was so intense that the visitor's words were lost in the air, and the poor traveler seemed more confused than ever. ]]

{P} smiled patiently and produced {oa_art}. With its magic, the object translated the visitor's wishes into bubbles of light that everyone could see and understand.

The visitor came from a planet where all the stories had run out. They had travelled across the entire galaxy searching for a place where stories never end, and they had found {E}.

{P} made a wonderful promise: every night before bedtime, someone from {E} would tell the visitor a new story. The visitor would store these stories in their ship and take them back to their home planet, so the children there could dream too.

"{pe} We're intergalactic friends now!" said {P}. [[p: And {V}, who had tried to help in their own unique way, was named the Ambassador of Muddled WordsÔÇöwhich turned out to be perfect for making everyone laugh. | e: ]]

As the visitor departed, {P} looked up at the stars, knowing that no story is ever truly lost. ­ƒîîÔ£¿`
      },
      {
        titulo: "­ƒÅå {P} and the Talent Show",
        cuerpo: `Today was the day of the Great Talent Show in {E}. There were wind flautists, cloud tamers, rainbow painters and sunshine dancers. {P} watched it all with admirationÔÇöand just a flutter of nerves.

But when {P}'s turn arrived, something happened: [[p: {V} had wandered onto the stage earlier, thinking the contest started later, and was now juggling forest berries in front of the entire audience. No one had the heart to tell them it wasn't their turn! | e: suddenly {V} broke out right over the stage. Forest leaves and berries began flying through the air in front of the entire audienceÔÇöit looked like total chaos! ]]

{P} watched the scene for a moment. [[p: {V} was endearingly disastrous: dropping half the berries, tripping over their own feet, yet wearing an enormous grin. The audience, though confused, began to laugh with genuine affection. | e: It was all an unexpected mess, but the berries flew in an almost rhythmic way. The audience watched in awe at this natural spectacle. ]]

Then {P} had a brilliant idea. They stepped onto the stage [[p: alongside {V} | e: ]] and produced {oa_art}. With it, they created figures of light that followed [[p: {V}'s juggling | e: the movement of {V} ]], turning every fumble into an artistic movement and every dropped berry into a shining star.

The performance was like nothing anyone had ever seen: part magic, part chaos, and completely unique.

"{pe} They're the winners!" everyone cried when they finished, because they had done something nobody expected: they had turned an accident into art.

{P} learned that their greatest talent wasn't perfection, but the ability to see magic where others only saw chaos. And they slept peacefully, dreaming of mornings filled with possibility. ­ƒÅà­ƒîƒ`
      },
      {
        titulo: "­ƒôÜ {P} in the Library of Dreams",
        cuerpo: `In {E} there was a very special library: its books weren't read, they were lived. When you opened one, you tumbled straight into the story and experienced it from the inside. People could spend entire afternoons exploring other worlds without ever leaving the building.

{P} entered one afternoon, full of curiosity, and found [[p: {V} stuck inside a book. They had wandered into "The Great Dream Labyrinth" and couldn't find the way out. They'd been going in circles for hours! | e: that the effect of {V} had seeped between the pages of a book. The story of "The Great Dream Labyrinth" was all scrambled by wind and mist. ]]

[[p: "{pe} {P}, please help! I've been searching for hours!" came {V}'s voice from between the pages. | e: ]]

{P} produced {oa_art}, and with its magic, the book's pages lit up, showing the correct path through the labyrinth. But {P} had a better idea: instead of giving [[p: {V} | e: the mystery ]] the answer directly, they gave out clues.

"Look at the drawings on the labyrinth walls. The tiny arrows always point toward the heart of the book, not toward the exit."

[[p: {V} followed the clues one by one, and when they finally emerged from the book, their eyes were bright with excitement. | e: Following the clues, the air calmed and the pages returned to their places one by one. ]]

"{pe} I solved it myself! [[p: Well... with your clues. | e: ]] "

{P} explained that this was exactly what books were for: not to give you the answers, but to give you the tools to find them for yourself.

They sat together in the library, and {P} chose a golden book with blank pages. They began to write the story of that afternoon, because the best stories are the ones you live yourself.

Every day is a new page, and as long as you find [[p: friends like {V} | e: magical moments ]], no page will ever be empty. ­ƒôûÔ£¿`
      },
      {
        titulo: "­ƒÄ¿ {P} and the Day the Colours Vanished",
        cuerpo: `{E} woke up different. The sky was grey, the flowers had lost their colour, the birds were black and white, and even the rainbow looked like a pale grey line. Someone had stolen all the colours.

{P} investigated, following a trail of tiny grey spots until they found [[p: {V}, who was sitting in the middle of an enormous puddle of... mixed-up colour. | e: that {V} had passed through, leaving an enormous puddle of... mixed-up colour. ]] They had wanted to create the perfect colour by taking a little bit of everything, but they had mixed so much that all the colours had turned into grey.

[[p: "{V}... What have you done?" asked {P}, hardly able to believe it. | e: ]]

[[p: "I wanted to create the most beautiful colour in the world," {V} replied in a very small voice. "One that had everything inside it." | e: It seemed that nature had tried to unite all its shades into one, but the result was a grey cloud covering everything. ]]

{P} understood. [[p: {V} wasn't trying to destroy the colours; they wanted the oppositeÔÇöthey wanted to find the beauty in bringing everything together. | e: It wasn't an attempt to take away the beauty, but to find it in the union of everything. ]] They had just forgotten that the secret of colours is that they shine brightest when they're separate.

They produced {oa_art} and, as if it were the most magical paintbrush in the universe, began to separate the colours from the puddle. One by one, they returned to their places: blue to the sky, green to the leaves, yellow to the sun, red to the roses.

[[p: {V} helped with great enthusiasm, though they put some colours in unexpected placesÔÇöan orange cloud here, a purple tree there. | e: The force of {V} helped to spread the colours again, though some ended up in unexpected placesÔÇöan orange cloud here, a purple tree there. ]] And as it turned out, {E} was more colourful and cheerful than ever before.

[[p: "You did it again!" said {V}, full of admiration. "You turned my muddle into something beautiful!" | e: ]]

{P} smiled. [[p: "We both did." | e: ]]

That night, {P} looked out over {E} from high above and thought: there is no mistake so big that it can't be turned, with help and creativity, into something more beautiful than the original. ­ƒîê­ƒÿ┤`
      },
      {
        titulo: "­ƒò»´©Å The Promise of Tomorrow",
{P} shared their worries, while {oa_art} began to glow softly on its own, with a warm, gentle lightÔÇöas if it, too, wanted to help calm the moment.

{O} showed {P} visions of fields full of flowers, where the mistakes of the past had become seeds for the future. It showed laughter shared with friends not yet met, and adventures that could only happen if {P} woke up tomorrow with hope.

{V} didn't know what to say, so they did the only thing they knew how to do when someone was sad: they curled up very close and rested their head on {P}'s shoulderÔÇölike a small sunflower that always turns towards the light.

"{pe} Tomorrow will be incredible," {P} promised quietlyÔÇöand this time, they truly believed it.

Because in life, the hard days are the price we pay for the wonderful ones. And when you have someone who stays beside you through the hard ones, the wonderful ones shine even brighter.

The gentle breeze of {E} rocked them both until they fell asleep, side by side, while the stars kept watch over them through the whole long night. ­ƒî£­ƒÆñ`
      }
    ]
  },
  fr: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princesse', emoji: '­ƒæ©' },
        { id: 'caballero', nombre: 'Chevalier', emoji: '­ƒøí´©Å' },
        { id: 'dragon', nombre: 'Dragon', emoji: '­ƒÉë' },
        { id: 'hada', nombre: 'F├®e', emoji: '­ƒºÜ' },
        { id: 'pirata', nombre: 'Pirate', emoji: '­ƒÅ┤ÔÇìÔÿá´©Å' },
        { id: 'unicornio', nombre: 'Licorne', emoji: '­ƒªä' },
        { id: 'robot', nombre: 'Robot', emoji: '­ƒñû' },
        { id: 'sirena', nombre: 'Sir├¿ne', emoji: '­ƒº£ÔÇìÔÖÇ´©Å' },
        { id: 'conejito', nombre: 'Lapin', emoji: '­ƒÉ░' },
        { id: 'bruja_buena', nombre: 'Bonne Sorci├¿re', emoji: '­ƒºÖÔÇìÔÖÇ´©Å' },
      ],
      escenarios: [
        { id: 'castillo', nombre: 'Ch├óteau Enchant├®', emoji: '­ƒÅ░' },
        { id: 'bosque', nombre: 'For├¬t Magique', emoji: '­ƒî│' },
        { id: 'isla', nombre: '├Äle au Tr├®sor', emoji: '­ƒÅØ´©Å' },
        { id: 'nube', nombre: 'Nuage G├®ant', emoji: 'Ôÿü´©Å' },
        { id: 'mar', nombre: 'Fond de la Mer', emoji: '­ƒîè' },
        { id: 'montana', nombre: 'Montagne Enneig├®e', emoji: '­ƒÅö´©Å' },
        { id: 'jardin', nombre: 'Jardin Secret', emoji: '­ƒîÀ' },
        { id: 'estrellas', nombre: 'Ville des ├ëtoiles', emoji: '­ƒîƒ' },
      ],
      objetos: [
        { id: 'espada', nombre: '├ëp├®e de Lumi├¿re', emoji: 'ÔÜö´©Å' },
        { id: 'corona', nombre: 'Couronne Magique', emoji: '­ƒææ' },
        { id: 'mapa', nombre: 'Carte au Tr├®sor', emoji: '­ƒù║´©Å' },
        { id: 'varita', nombre: 'Baguette Magique', emoji: 'Ô£¿' },
        { id: 'pocion', nombre: 'Potion Brillante', emoji: '­ƒº¬' },
        { id: 'llave', nombre: "Cl├® d'Or", emoji: '­ƒöæ' },
        { id: 'libro', nombre: 'Livre Enchant├®', emoji: '­ƒôû' },
        { id: 'amuleto', nombre: 'Amulette', emoji: '­ƒö«' },
      ],
      villanos: [
        // Personnages mignons
        { id: 'somne', nombre: 'Petit Dormeur', emoji: '­ƒÿ¬­ƒæ╣', tipo: 'personaje', genero: 'm' },
        { id: 'gelfroide', nombre: 'F├®e Frissonnante', emoji: '­ƒÑÂ­ƒºÜ', tipo: 'personaje', genero: 'f' },
        { id: 'gobgourmand', nombre: 'Glouton Lutin', emoji: '­ƒì¡­ƒæ║', tipo: 'personaje', genero: 'm' },
        { id: 'sourischao', nombre: 'Souriceau Espi├¿gle', emoji: '­ƒÉ¡­ƒÆ¿', tipo: 'personaje', genero: 'm' },
        { id: 'champiparlant', nombre: 'Champignon Parlant', emoji: '🍄💬', tipo: 'personaje', genero: 'm'},
        { id: 'limaconbaveux', nombre: 'Limaçon Baveux', emoji: '🐌💧', tipo: 'personaje', genero: 'm'},
        { id: 'orage', nombre: 'un orage soudain', emoji: 'Ôøê´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'vent', nombre: 'un vent curieux et espi├¿gle', emoji: '­ƒî¼´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'sable', nombre: 'un nuage de sable voyageur', emoji: '­ƒî¬´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'brouillard', nombre: 'un ├®pais brouillard qui cachait tout', emoji: '­ƒî½´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'tempeteneige', nombre: 'une temp├¬te de neige espi├¿gle', emoji: 'ÔØä´©Å­ƒî¿´©Å', tipo: 'entorno', genero: 'f' },
      ]
    },
    artEsc: {
      castillo:'un Ch├óteau Enchant├®', bosque:'une For├¬t Magique',
      isla:"une ├Äle au Tr├®sor", nube:'un Nuage G├®ant',
      mar:'le Fond de la Mer', montana:'une Montagne Enneig├®e',
      jardin:'un Jardin Secret', estrellas:'la Ville des ├ëtoiles',
    },
    artObj: function(id) {
      const o = this.elementos.objetos.find(x => x.id === id);
      return 'la/le ' + o.nombre;
    },
    plantillas: [
      {
        titulo: "{pe} {P} et le secret de {E}",
        cuerpo: `Il ├®tait une fois, dans {ea}, un(e) courageux(se) {p} qui r├¬vait des plus belles aventures. Chaque matin, il(elle) regardait l'horizon avec des yeux remplis d'espoir, imaginant des mondes magiques au-del├á de tout ce qu'on pouvait voir.

Un matin dor├®, en explorant les recoins cach├®s du lieu, quelque chose brilla entre les feuilles : {oa_art} ! [[p: Mais ├á cet instant pr├®cis, {V} apparut ÔÇö le personnage le plus surprenant de {E}. {V} n'├®tait pas vraiment m├®chant(e) : il/elle ├®tait si petit(e) et distrait(e) qu'il/elle tr├®bucha sur {oa_art} et le/la cacha accidentellement sous son ├®norme oreiller de nuages. | e: Mais soudain, {V} se d├®cha├«na dans {E}. Ce n'├®tait pas vraiment malveillant, mais c'├®tait si fort que cela d├®pla├ºa sans le vouloir {oa_art} et le cacha dans un recoin profond. ]]

[[p: "C'est ├á moi !" dit {V} en b├óillant. "J'ai besoin de quelque chose de doux pour dormir !" | e: ]]

{P} ne se f├ócha pas. [[p: Au contraire, il(elle) s'assit ├á c├┤t├® de {V} et demanda doucement : "Pourquoi tu n'arrives pas ├á dormir ?" Et ainsi il(elle) d├®couvrit que {V} avait peur du noir. | e: Au lieu de cela, il(elle) chercha patiemment une solution et d├®couvrit que l'endroit avait besoin d'un peu de lumi├¿re et de calme pour que tout revienne ├á la normale. ]]

{P} utilisa le pouvoir de {oa_art} pour cr├®er une petite lumi├¿re douce et chaude qui ├®claira [[p: le coin de {V}. D├¿s lors, {V} n'eut plus besoin de rien voler, car il/elle avait sa propre lumi├¿re magique ÔÇö et un tout nouvel ami(e) ! | e: chaque recoin de {E}. D├¿s lors, la force de {V} se calma et se transforma en une brise l├®g├¿re qui accompagnait les r├¬ves de tous. ]]

Ensemble, ils firent de {E} l'endroit le plus beau et accueillant du monde. Avant de s'endormir, {P} murmura : "La plus grande magie n'est pas dans les objets, mais dans le c┼ôur de ceux qui les partagent." ­ƒîÖÔ£¿`
      },
      {
        titulo: "Ô£¿ La grande aventure de {P} dans {E}",
        cuerpo: `Dans le merveilleux pays de {E}, vivait un(e) courageux(se) {p} avec un r├¬ve immense : trouver le l├®gendaire {oa_art}. Tout le monde disait que cet objet magique avait le pouvoir de faire r├®aliser les plus beaux r├¬ves.

Un jour, {P} se mit en route avec un c┼ôur plein de courage. Il(elle) traversa des ponts en arc-en-ciel, marcha le long de sentiers de poussi├¿re d'├®toiles et traversa des jardins o├╣ les fleurs chuchotaient des chansons.

Mais alors [[p: {V} apparut. Ce personnage singulier ├®tait arriv├® avant ├á {E} et, sans mauvaise intention, avait emm├¬l├® tous les chemins en essayant de jouer. | e: {V} se produisit. Ce ph├®nom├¿ne naturel arriva soudainement ├á {E} et, sans le vouloir, brouilla tous les chemins et sentiers. ]] Les sentiers ├®taient m├®lang├®s et personne ne savait par o├╣ aller !

[[p: "{pe} Oh, je suis vraiment d├®sol├® !" ÔÇö dit {V} en devenant tout rouge ÔÇö. "Je voulais juste faire un labyrinthe pour jouer..." | e: ]]

{P} respira profond├®ment et sourit. [[p: "Ne t'inqui├¿te pas. Nous pouvons r├®soudre cela ensemble !" Et tous les deux pass├¿rent une apr├¿s-midi enti├¿re ├á d├®m├¬ler les chemins, en riant et en se racontant des histoires. | e: Avec calme et patience, il se mit au travail pour ordonner l'endroit. Il passa une apr├¿s-midi enti├¿re ├á d├®m├¬ler les chemins et ├á redonner l'harmonie ├á {E}. ]]

├Ç la fin de la journ├®e, quand tout fut en ordre, {P} aper├ºut {oa_art} brillant au c┼ôur de {E}. Mais la chose la plus pr├®cieuse trouv├®e ce jour-l├á n'├®tait pas l'objet magique ÔÇö c'├®tait d'avoir appris que la patience [[p: et l'amiti├® sont le plus grand tr├®sor. | e: est le plus grand tr├®sor pour surmonter toute difficult├®. ]]

Ils se blottirent ensemble sous les ├®toiles, et {P} comprit que chaque aventure est plus belle quand elle est partag├®e. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒîÖ {P} et {O} sous les ├®toiles",
        cuerpo: `Quand le soleil se cachait derri├¿re {E} et que le ciel commen├ºait ├á se remplir de petits points brillants, la magie commen├ºait. Personne ne le savait mieux que {P}, qui faisait un v┼ôu sur une ├®toile diff├®rente chaque soir.

Par une nuit tr├¿s sp├®ciale, quelque chose tomba avec un doux ├®clat juste devant les yeux de {P}. C'├®tait {oa_art}, brillant de toutes les couleurs de l'arc-en-ciel ├á la fois.

Mais avant que {O} ne puisse r├®pondre, [[p: {V} arriva en courant. Il avait poursuivi {oa_art} toute la nuit car il pensait que c'├®tait une ├®toile filante et voulait la rendre au ciel. Pauvre {V}, il ├®tait ├®puis├® d'avoir tant couru ! | e: on sentit la force de {V}. Ce ph├®nom├¿ne avait envelopp├® {oa_art} toute la nuit, comme s'il voulait le ramener au ciel. ]]

{P} lui expliqua avec affection [[p: que {oa_art} n'├®tait pas une ├®toile mais quelque chose de bien plus sp├®cial : un objet capable de r├®aliser les r├¬ves de celui qui en a besoin. Et {V} avait vraiment besoin de quelque chose : un ami pour l'accompagner la nuit, car il se sentait tr├¿s seul. | e: au vent et aux ├®toiles que {oa_art} ├®tait un objet sp├®cial capable d'apporter le calme et de beaux r├¬ves ├á celui qui en avait le plus besoin. ]]

Cette nuit-l├á, {P} utilisa le pouvoir de {oa_art} pour que [[p: {V} puisse comprendre la langue des ├®toiles. Et ainsi, pendant que {P} ├®coutait leurs secrets brillants, {V} apprit qu'il ne serait plus jamais seul. | e: la paix revienne ├á {E}. Le ciel redevint serein et les ├®toiles brill├¿rent plus fort que jamais. ]]

Tous les trois ÔÇö {P}, [[p: {V} | e: le calme ]] et les ├®toiles de {E} ÔÇö devinrent les meilleurs amis de l'univers tout entier. ­ƒîÖ­ƒîƒ`
      },
      {
        titulo: "{pe} {P}, {O} et le myst├¿re de {E}",
        cuerpo: `Tout commen├ºa un mardi parfaitement ordinaire quand {P} trouva une note myst├®rieuse coll├®e ├á la porte de {E} : "Quelqu'un a vol├® la joie de cet endroit. Suis les empreintes lumineuses et d├®couvre qui."

{P} n'h├®sita pas une seule seconde ! Il(elle) suivit les traces de poussi├¿re d'├®toiles qui serpentaient ├á travers {E} jusqu'├á arriver dans une clairi├¿re cach├®e, au c┼ôur des grands arbres anciens.

L├á ├®tait [[p: {V}, entour├® de toute la joie de {E} : des rires dans des petits flacons, des couleurs dans des petits sachets et des m├®lodies dans de petites bo├«tes. Mais {V} ne riait pas ; il ├®tait assis par terre, tr├¿s triste. | e: l'effet de {V}, qui avait pi├®g├® toute la joie de {E} : les rires, les couleurs et les m├®lodies ├®taient envelopp├®s dans un tourbillon de confusion. ]]

[[p: "Pourquoi as-tu ramass├® tout cela ?" ÔÇö demanda {P} d'une voix douce. | e: ]]

[[p: {V} expliqua entre deux sanglots qu'il avait voulu garder la joie de {E} car il avait peur qu'elle ne s'├®puise. "J'ai tellement peur qu'un jour il n'y ait plus de jolies choses..." | e: Il semblait que l'environnement avait pi├®g├® la joie par peur de la perdre, cr├®ant un climat de m├®lancolie dans tout l'endroit. ]]

{P} sortit {oa_art} et, avec sa magie, cr├®a quelque chose d'incroyable : une source de joie in├®puisable au c┼ôur de {E}, qui ne s'arr├¬terait jamais tant qu'il y aurait quelqu'un pour partager.

[[p: {V} ouvrit tous les flacons, sachets et bo├«tes, et la joie inonda {E} de couleurs. | e: Le tourbillon de {V} se dissipa doucement, lib├®rant toute la joie accumul├®e, et les couleurs inond├¿rent {E}. ]] Ce fut le plus beau jour dont on se souvenait dans cet endroit.

Cette nuit-l├á, {P} se blottit sous les ├®toiles, sachant que la joie, quand elle est partag├®e, ne diminue pas : elle se multiplie ! ­ƒî£­ƒÆ½`
      },
      {
        titulo: "­ƒÆ½ Le voyage de {P} vers {E}",
        cuerpo: `{P} avait toujours r├¬v├® de visiter {E}. Les murs de sa chambre ├®taient couverts de dessins, de cartes et de cartes postales de cet endroit magique. Et un beau jour, il(elle) d├®cida enfin que le moment ├®tait venu de partir.

Le voyage fut long mais plein de merveilles. {P} vit des cascades de chocolat, des ponts faits de nuages moelleux et des oiseaux qui chantaient des m├®lodies semblables ├á de vieux amis familiers.

Quand il(elle) arriva enfin ├á {E}, il(elle) fut compl├¿tement sans voix. C'├®tait encore plus beau qu'il(elle) n'avait jamais imagin├®. Mais quelque chose n'allait pas ÔÇö tous les habitants ├®taient inquiets.

"C'est {V}" expliqua un petit lutin. "Ce matin, il/elle s'est aventur├®(e) dans {ea} et a tout embrouill├® sans le faire expr├¿s. Il/elle a confondu le nord et le sud, et maintenant personne ne sait o├╣ se trouve quoi que ce soit !"

{P} trouva {V} en train d'essayer fr├®n├®tiquement de tout arranger, tr├®buchant sur un objet tout en essayant d'en redresser un autre. Il/elle ├®tait si maladroitement adorable que {P} ne put s'emp├¬cher de rire chaleureusement.

Ensemble, aid├®s par {oa_art} qui attendait ├á l'entr├®e du pays, ils remirent {E} en ordre en un temps record. Chaque objet retrouva sa place avec un petit ├®clair de magie et une petite m├®lodie.

Quand tout fut parfait, {V} se tourna vers {P} avec les joues roses : "Merci. Personne ne m'avait jamais aid├® sans se moquer de moi."

"Oh, si, je me suis moqu├®(e) !" admit {P} avec un sourire. "Mais seulement parce que tu es absolument merveilleux(se)."

D├¿s ce jour, {P} devint le gardien de {E} et {V} son assistant le plus loyal ÔÇö m├¬me si un peu maladroit. Et ils v├®curent heureux pendant de nombreuses, nombreuses nuits. ­ƒîÖÔ¡É­ƒÆñ`
      },
      {
        titulo: "­ƒÄ¡ {P} et le Grand Festival de {E}",
        cuerpo: `Tout ├®tait pr├¬t pour la plus grande f├¬te de l'ann├®e ├á {E} ! {P} avait pass├® des semaines ├á pr├®parer des guirlandes lumineuses, des ballons color├®s et un magnifique g├óteau ├á plusieurs ├®tages. Ce soir, c'├®tait le Grand Festival.

Mais avec ├á peine une heure avant le d├®but, quelque chose de terrible se produisit : la musique avait disparu. Sans musique, pas de f├¬te !

La coupable ├®tait {V}, qui avait cach├® tous les instruments parce qu'elle voulait en jouer seule avant l'arriv├®e des invit├®s ÔÇö mais elle ne savait en jouer aucun, et se retrouvait maintenant entour├®e d'instruments ├á pleurer de honte.

{P} ne la gronda pas. Au lieu de ├ºa, il(elle) s'assit ├á c├┤t├® d'elle et lui apprit quelque chose de simple : faire de la musique avec ses propres mains. Des applaudissements, des claquements de doigts, des petits tapotements sur les genoux.

Puis {P} se souvint de {oa_art}. En le/la touchant, une douce m├®lodie parfaite emplit chaque recoin de {E}, faisant m├¬me danser les fleurs et les nuages.

{V} se joignit ├á la musique avec ses applaudissements, et bient├┤t tous les invit├®s arriv├¿rent et commenc├¿rent ├á danser. Ce fut le meilleur festival que {E} ait jamais connu.

"Merci d'avoir ramen├® l'harmonie !" applaudirent tous. Et {V}, dont les applaudissements ├®taient le battement de c┼ôur secret du tout, re├ºut les acclamations les plus fortes de la nuit.

├ëpuis├®(e) de tant de plaisir, {P} s'endormit avec un sourire qui allait d'une oreille ├á l'autre. ­ƒî£Ô£¿`
      },
      {
        titulo: "­ƒÄü Un cadeau des ├®toiles pour {P}",
        cuerpo: `C'├®tait une nuit extraordinairement paisible ├á {E} quand quelque chose d├®riva du ciel comme un flocon de neige brillant. En atterrissant, il s'av├®ra que c'├®tait {oa_art}, brillant de la lumi├¿re de mille galaxies.

{P} le/la tint avec pr├®caution. En le/la touchant, il(elle) sentit qu'il/elle pouvait transformer les peurs les plus profondes en beaux r├¬ves color├®s.

"{pe} C'est un cadeau tr├¿s sp├®cial !" s'exclama {P}.

Mais alors {V} apparut, avec des yeux qui montraient qu'il/elle avait pleur├®. Il/elle expliqua que le cadeau ├®tait tomb├® exactement l├á o├╣ il/elle vivait, et qu'il/elle avait vraiment cru qu'il ├®tait pour lui/elle.

{P} r├®fl├®chit un moment, puis eut une merveilleuse id├®e : "Et si on le partageait ? Tu as peur la nuit, et moi je veux aider tout le monde ├á {E}. On peut faire les deux en m├¬me temps !"

{V} cligna des yeux, stup├®fait(e). Personne ne lui avait jamais propos├® de partager quelque chose comme ├ºa auparavant.

Cette nuit-l├á, {P} et {V} utilis├¿rent ensemble la magie de {oa_art} pour que tout le monde ├á {E} ait de beaux r├¬ves : les enfants r├¬v├¿rent d'aventures, les grands de souvenirs heureux, et {V} r├¬va ÔÇö pour la toute premi├¿re fois ÔÇö sans aucune peur.

{P} ferma les yeux, reconnaissant(e), sachant que la g├®n├®rosit├® est la magie la plus puissante qui soit. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒÉ¥ {P} au secours dans {E}",
        cuerpo: `C'├®tait un calme apr├¿s-midi ├á {E} quand {P} entendit un son particulier : quelque part entre un g├®missement et un petit rire, qui provenait des buissons. En s'approchant, il(elle) trouva un petit animal perdu ÔÇö et juste ├á c├┤t├®, {V}.

{V} avait essay├® d'aider la petite cr├®ature ├á trouver son chemin, mais ├®tant aussi t├¬te-en-l'air qu'il/elle l'├®tait, les deux s'├®taient retrouv├®s perdus ensemble dans un coin de {E} qu'aucun des deux ne connaissait.

"{pe} On a fait une belle pagaille !" admit {V} en se grattant la t├¬te.

{P} ne put s'emp├¬cher de rire, mais produisit rapidement {oa_art}. L'objet commen├ºa ├á briller d'une lumi├¿re chaude et constante, tra├ºant dans l'air un chemin lumineux menant directement ├á la maison du petit animal.

En chemin, {P} expliqua ├á {V} comment s'orienter avec les ├®toiles et les fleurs. "Les fleurs de la for├¬t font toujours face au soleil, donc si tu sais o├╣ est le soleil ├á midi, tu ne seras jamais perdu(e)."

{V} ├®coutait attentivement, prenant mentalement note de chaque conseil. Quand le petit animal arriva chez lui sain et sauf, sa famille l'accueillit avec un amour si fort que les larmes de joie ├®taient visibles tout autour.

"{pe} Tu es si courageux(se)" chuchota le petit animal ├á {P}. "Et toi, {V} ÔÇö m├¬me si tu t'es perdu(e), tu ne m'as jamais abandonn├®(e) !"

{V} rougit de bonheur. Il/elle avait ├®chou├® ├á guider, mais avait triomph├® dans ce qui comptait vraiment : ├¬tre l├á.

Le c┼ôur en paix et la le├ºon bien apprise, tout le monde rentra se reposer sous les ├®toiles de {E}. ­ƒîø­ƒÆ¿`
      },
      {
        titulo: "­ƒî© {P} et le changement de saison ├á {E}",
        cuerpo: `Le printemps ├®tait cens├® arriver ├á {E}, mais quelque chose le retenait. Les champs ├®taient encore couverts de neige et les fleurs refusaient de se r├®veiller. Tout le monde ├á {E} ├®tait perplexe.

Le coupable ÔÇö sans mauvaise intention ÔÇö ├®tait {V}, qui avait trouv├® un bouton magique en forme de flocon de neige et l'avait appuy├® de nombreuses, tr├¿s nombreuses fois, car il ├®tait tout simplement trop adorable pour r├®sister. Et ├á chaque appui, un peu plus d'hiver arrivait !

"Je ne savais pas que ├ºa se passerait comme ├ºa" avoua {V} d'une toute petite voix.

{P} prit doucement {oa_art} et souffla d├®licatement sur les fleurs endormies. Une par une, comme si elles se r├®veillaient d'un long r├¬ve doux, elles ouvrirent leurs p├®tales : d'abord quelques-uns timides, puis tous ├á la fois, dans un grand flot de couleurs.

"C'est magnifique !" s'├®cria {V}, qui n'avait jamais vraiment vu fleurir des fleurs, arrivant toujours quand tout ├®tait d├®j├á ouvert.

{P} expliqua que certains moments sp├®ciaux dans la nature doivent ├¬tre attendus avec patience ÔÇö qu'on ne peut pas forcer les fleurs ├á s'├®panouir, pas plus qu'on ne peut forcer un r├¬ve ├á se r├®aliser.

Tout {E} se remplit de couleurs, de doux parfums et du joyeux bourdonnement des abeilles. ├Ç partir de ce jour, {V} prit tr├¿s soin du bouton flocon de neige et ne l'appuya qu'en ├®t├®, juste pour apporter un peu de fra├«cheur.

Et {P}, avec un c┼ôur aussi l├®ger qu'un p├®tale dans le vent, se pr├®para pour une journ├®e de jeux sans fin. ­ƒî╝­ƒî£`
      },
      {
        titulo: "­ƒÄÂ La m├®lodie perdue de {E}",
        cuerpo: `Un ├®trange et lourd silence s'├®tait pos├® sur {E}. Aucun oiseau ne chantait, aucun vent ne remuait les feuilles, aucun ruisseau ne murmurait. Comme si la musique du monde avait simplement disparu.

{P} d├®cida de retrouver les sons perdus. Il(elle) marcha, chercha et posa des questions jusqu'├á atteindre la grotte la plus profonde de tout {E}, o├╣ il(elle) trouva {V} assis(e) joyeusement entour├®(e) de milliers de sons ÔÇö chacun emprisonn├® dans une petite bulle de savon flottante.

"Je collectionne les sons" expliqua {V} gaiement. "J'ai d├®j├á le chant du tout premier oiseau du matin, le son de la pluie sur les feuilles et trois vari├®t├®s diff├®rentes de silence !"

{P} comprit que {V} n'├®tait pas du tout m├®chant(e) ÔÇö juste incroyablement curieux(se). Il(elle) proposa un accord : {V} lib├®rerait tous les sons si {P} l'aidait ├á apprendre ├á faire de la vraie musique.

{V} accepta avec un immense enthousiasme. Quand les bulles furent lib├®r├®es, {E} ├®clata en une magnifique symphonie : tous les sons du monde jouant ├á la fois, cr├®ant la plus belle m├®lodie que quiconque ait jamais entendue.

Ensuite {P} toucha {oa_art} et cr├®a quelque chose de nouveau : une petite chanson sp├®ciale juste pour {V} ÔÇö une m├®lodie qui portait son pr├®nom, qu'il/elle pouvait ├®couter chaque fois qu'il/elle le souhaitait.

"{pe} La musique est de retour !" s'├®cria {P}, "et nous avons une toute nouvelle chanson !"

Cette nuit-l├á, {E} ├®tait plein de vie, et {P} s'endormit berc├®(e) par le joyeux battement de c┼ôur du pays. ­ƒÄÁ­ƒÆñ`
      },
      {
        titulo: "­ƒÜÇ {P} et le visiteur de l'espace",
        cuerpo: `Une fus├®e argent├®e atterrit dans {E} avec une douce explosion de lumi├¿re bleue. En sortit un visiteur de l'espace : petit et rond, avec d'immenses yeux comme des pleines lunes et un sourire qui occupait tout son visage.

Tout le monde ├á {E} se rassembla, curieux, mais personne ne comprenait ce que disait le visiteur. Ses mots sonnaient comme une musique lointaine, comme de petites cloches tintant sous l'eau.

Puis {V} s'avan├ºa, absolument convaincu(e) de pouvoir parler le langage spatial ÔÇö parce qu'il/elle avait une fois r├¬v├® qu'il/elle en ├®tait capable. Il/elle se planta devant le visiteur et commen├ºa ├á dire des absurdit├®s ├á tue-t├¬te. Le visiteur avait l'air de plus en plus confus !

{P} sourit patiemment et sortit {oa_art}. Gr├óce ├á sa magie, l'objet traduisit les pens├®es du visiteur en bulles de lumi├¿re que tout le monde put voir et comprendre.

Le visiteur venait d'une plan├¿te o├╣ les histoires s'├®taient ├®puis├®es. Il/elle avait voyag├® ├á travers toute la galaxie ├á la recherche d'un endroit o├╣ les histoires ne finissaient jamais, et il/elle avait trouv├® {E}.

{P} fit une merveilleuse promesse : chaque soir, avant de dormir, quelqu'un de {E} raconterait une nouvelle histoire. Le visiteur collerait ces histoires dans sa fus├®e et les emporterait sur sa plan├¿te, pour que les enfants l├á-bas puissent aussi r├¬ver.

"{pe} Maintenant nous sommes des amis intergalactiques !" dit {P}. Et {V}, qui avait essay├® d'aider ├á sa fa├ºon, fut nomm├®(e) Ambassadeur(rice) des Mots Merveilleusement Confus ÔÇö qui s'av├®r├¿rent parfaits pour faire rire tout le monde.

Quand le visiteur repartit, {P} leva les yeux vers les ├®toiles et sut : aucune histoire n'est jamais vraiment perdue. ­ƒîîÔ£¿`
      },
      {
        titulo: "­ƒÅå {P} et le spectacle de talents",
        cuerpo: `Aujourd'hui, c'├®tait le jour du Grand Spectacle de Talents de {E}. Il y avait des fl├╗tistes de vent, des dompteurs de nuages, des peintres d'arc-en-ciel et des danseurs de rayons de soleil. {P} regardait tout avec admiration ÔÇö et un tout petit fr├®missement de nervosit├®.

Mais quand vint le tour de {P}, quelque chose d'inattendu se produisit : {V} ├®tait mont├®(e) sur sc├¿ne avant lui(elle), pensant que le spectacle commen├ºait plus tard, et jonglait maintenant avec des petits fruits devant tout le public. Personne n'osait vraiment lui dire que ce n'├®tait pas son tour !

{P} observa la sc├¿ne un moment. {V} ├®tait adorablement d├®sastreux(se) : laissant tomber la moiti├® des fruits, tr├®buchant sur ses propres pieds, et pourtant arborant un immense sourire. Le public, bien que perplexe, commen├ºait ├á rire avec une vraie tendresse.

Alors {P} eut une id├®e brillante. Il(elle) monta sur sc├¿ne ├á c├┤t├® de {V} et sortit {oa_art}. Avec sa magie, il(elle) cr├®a des figures de lumi├¿re qui dansaient avec le jonglage de {V}, transformant chaque faux pas en un mouvement artistique et chaque petit fruit tomb├® en une ├®toile brillante.

Le spectacle fut comme aucun autre : mi-magie, mi-beau chaos, compl├¿tement unique.

"{pe} Ce sont les gagnants !" applaudirent tous quand ce fut termin├® ÔÇö parce qu'ils avaient fait quelque chose que personne n'attendait : transformer un accident en art.

{P} apprit que son plus grand talent n'├®tait pas la perfection, mais la capacit├® ├á trouver la magie l├á o├╣ les autres ne voient que du d├®sordre. Et il(elle) dormit paisiblement cette nuit-l├á, r├¬vant de matins remplis de possibilit├®s. ­ƒÅà­ƒîƒ`
      },
      {
        titulo: "­ƒôÜ {P} dans la Biblioth├¿que des R├¬ves",
        cuerpo: `├Ç {E}, il y avait une biblioth├¿que tr├¿s sp├®ciale : ses livres ne se lisaient pas, ils se vivaient. Quand on en ouvrait un, on plongeait t├¬te la premi├¿re dans l'histoire et on la vivait de l'int├®rieur. Les gens pouvaient passer des apr├¿s-midis entiers ├á explorer d'autres mondes sans jamais quitter le b├ótiment.

Un apr├¿s-midi, {P} arriva, plein(e) de curiosit├® ÔÇö et trouva {V} coinc├®(e) dans un livre. Il/elle s'├®tait aventur├®(e) dans "Le Grand Labyrinthe des R├¬ves" et ne trouvait pas la sortie. Il/elle tournait en rond depuis des heures.

"{pe} {P}, s'il te pla├«t, ├ºa fait une ├®ternit├® que je cherche !" parvint la voix de {V} depuis les pages.

{P} leva {oa_art}. Sa magie illumina les pages, r├®v├®lant le bon chemin ├á travers le labyrinthe. Mais {P} eut une meilleure id├®e que de simplement montrer la voie : au lieu de donner direktement la r├®ponse ├á {V}, il(elle) donna des indices.

"Regarde les dessins sur les murs du labyrinthe. Les petites fl├¿ches pointent toujours vers le c┼ôur du livre, jamais vers la sortie."

{V} suivit les indices un par un ÔÇö et quand il/elle sortit enfin du livre, ses yeux brillaient d'excitation.

"{pe} J'ai r├®solu tout seul(e) ! Enfin... avec tes indices."

{P} expliqua que c'├®tait pr├®cis├®ment ├á ├ºa que servaient les livres : pas ├á te donner les r├®ponses, mais ├á te donner les outils pour les trouver toi-m├¬me.

Ils s'assirent ensemble dans la biblioth├¿que et {P} choisit un livre dor├® aux pages vierges. Ils commenc├¿rent ├á y ├®crire l'histoire de cet apr├¿s-midi m├¬me ÔÇö parce que les meilleures histoires sont toujours celles qu'on vit soi-m├¬me.

Chaque jour est une nouvelle page. Et tant qu'on trouve des amis comme {V}, pas une seule page ne sera jamais vide. ­ƒôûÔ£¿`
      },
      {
        titulo: "­ƒÄ¿ {P} et le jour o├╣ les couleurs disparurent",
        cuerpo: `{E} se r├®veilla diff├®rent. Le ciel ├®tait gris, les fleurs avaient perdu leur couleur, les oiseaux ├®taient noirs et blancs et m├¬me l'arc-en-ciel ressemblait ├á une p├óle ligne grise. Quelqu'un avait vol├® toutes les couleurs.

{P} mena l'enqu├¬te, suivant une piste de petites taches grises jusqu'├á trouver {V}, assis(e) au milieu d'une immense flaque de... couleur m├®lang├®e. Il/elle avait voulu cr├®er la couleur parfaite, en prenant un tout petit peu de chaque chose, et avait fini par tout m├®langer au point que toutes les couleurs ├®taient devenues grises.

"{V}... qu'est-ce que tu as fait ?" demanda {P}, n'en croyant pas ses yeux.

"Je voulais cr├®er la plus belle couleur du monde" r├®pondit {V} d'une toute petite voix. "Une qui contiendrait tout."

{P} comprit. {V} n'avait pas voulu d├®truire les couleurs du tout ÔÇö il/elle avait essay├® de faire le contraire : trouver la beaut├® dans l'union de toutes choses. Il/elle avait simplement oubli├® que le secret des couleurs est qu'elles brillent le mieux quand elles sont distinctes.

{P} leva {oa_art} et, comme le pinceau le plus magique de l'univers, commen├ºa ├á s├®parer les couleurs de la flaque. L'une apr├¿s l'autre, elles retrouv├¿rent leur place : le bleu pour le ciel, le vert pour les feuilles, le jaune pour le soleil, le rouge pour les roses.

{V} aida avec beaucoup d'enthousiasme ÔÇö bien qu'en pla├ºant quelques couleurs dans des endroits inattendus : un nuage orange ici, un arbre violet l├á. Et il s'av├®ra que {E} se retrouva plus color├® et joyeux que jamais.

"Tu as encore r├®ussi !" dit {V} dans l'admiration. "Tu as transform├® mon d├®sordre en quelque chose de beau !"

{P} sourit. "Nous l'avons fait ensemble."

Cette nuit-l├á, {P} regarda {E} d'en haut et pensa : il n'y a pas d'erreur si grande qu'elle ne puisse pas devenir, avec de l'aide et de la cr├®ativit├®, plus belle que l'original. ­ƒîê­ƒÿ┤`
      },
      {
        titulo: "­ƒò»´©Å La promesse de demain",
        cuerpo: `{P} ├®tait assis(e) sous le grand arbre centenaire de {E} ÔÇö celui dont on disait qu'il ├®tait si vieux qu'il se souvenait du tout premier jour du monde. C'avait ├®t├® une journ├®e difficile : les choses ne s'├®taient pas pass├®es comme pr├®vu, et le c┼ôur de {P} ├®tait un peu lourd.

C'est alors qu'arriva {V}, qui avait un don particulier : celui de renifler la tristesse. Ce n'├®tait pas une capacit├® tr├¿s utile en g├®n├®ral, mais dans des moments comme celui-l├á, elle le/la menait exactement l├á o├╣ quelqu'un avait besoin de compagnie.

"Qu'est-ce qui se passe ?" demanda {V} en s'asseyant ├á c├┤t├®.

{P} partagea ses inqui├®tudes, tandis que {oa_art} commen├ºa ├á briller doucement tout seul(e), d'une lumi├¿re chaude et douce ÔÇö comme si lui aussi voulait aider ├á apaiser l'atmosph├¿re.

{O} montra ├á {P} des visions de champs remplis de fleurs, o├╣ les erreurs du pass├® ├®taient devenues des graines pour l'avenir. Il lui montra des rires partag├®s avec des amis pas encore rencontr├®s, et des aventures qui ne pouvaient n'avoir lieu que si {P} se r├®veillait demain avec de l'espoir.

{V} ne savait pas quoi dire, alors il/elle fit la seule chose qu'il/elle savait faire quand quelqu'un ├®tait triste : il/elle se blottit tout pr├¿s et posa sa t├¬te sur l'├®paule de {P} ÔÇö comme un petit tournesol qui cherche toujours la lumi├¿re.

"{pe} Demain sera incroyable" promit {P} doucement ÔÇö et cette fois, il(elle) y croyait vraiment.

Car dans la vie, les jours difficiles sont le prix que l'on paie pour les jours merveilleux. Et quand on a quelqu'un qui reste ├á nos c├┤t├®s dans les difficiles, les merveilleux brillent encore plus fort.

La douce brise de {E} les ber├ºa tous les deux jusqu'├á ce qu'ils s'endorment, c├┤te ├á c├┤te, tandis que les ├®toiles montaient la garde sur eux toute la longue nuit. ­ƒî£­ƒÆñ`
      }
    ]
  },
  de: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Prinzessin', emoji: '­ƒæ©' },
        { id: 'caballero', nombre: 'Ritter', emoji: '­ƒøí´©Å' },
        { id: 'dragon', nombre: 'Drache', emoji: '­ƒÉë' },
        { id: 'hada', nombre: 'Fee', emoji: '­ƒºÜ' },
        { id: 'pirata', nombre: 'Pirat', emoji: '­ƒÅ┤ÔÇìÔÿá´©Å' },
        { id: 'unicornio', nombre: 'Einhorn', emoji: '­ƒªä' },
        { id: 'robot', nombre: 'Roboter', emoji: '­ƒñû' },
        { id: 'sirena', nombre: 'Meerjungfrau', emoji: '­ƒº£ÔÇìÔÖÇ´©Å' },
        { id: 'conejito', nombre: 'Hase', emoji: '­ƒÉ░' },
        { id: 'bruja_buena', nombre: 'Gute Hexe', emoji: '­ƒºÖÔÇìÔÖÇ´©Å' },
      ],
      escenarios: [
        { id: 'castillo', nombre: 'Verzaubertes Schloss', emoji: '­ƒÅ░' },
        { id: 'bosque', nombre: 'Magischer Wald', emoji: '­ƒî│' },
        { id: 'isla', nombre: 'Schatzinsel', emoji: '­ƒÅØ´©Å' },
        { id: 'nube', nombre: 'Riesige Wolke', emoji: 'Ôÿü´©Å' },
        { id: 'mar', nombre: 'Grund des Meeres', emoji: '­ƒîè' },
        { id: 'montana', nombre: 'Verschneiter Berg', emoji: '­ƒÅö´©Å' },
        { id: 'jardin', nombre: 'Geheimer Garten', emoji: '­ƒîÀ' },
        { id: 'estrellas', nombre: 'Stadt der Sterne', emoji: '­ƒîƒ' },
      ],
      objetos: [
        { id: 'espada', nombre: 'Lichtschwert', emoji: 'ÔÜö´©Å' },
        { id: 'corona', nombre: 'Magische Krone', emoji: '­ƒææ' },
        { id: 'mapa', nombre: 'Schatzkarte', emoji: '­ƒù║´©Å' },
        { id: 'varita', nombre: 'Zauberstab', emoji: 'Ô£¿' },
        { id: 'pocion', nombre: 'Leuchtender Trank', emoji: '­ƒº¬' },
        { id: 'llave', nombre: 'Goldener Schl├╝ssel', emoji: '­ƒöæ' },
        { id: 'libro', nombre: 'Verzaubertes Buch', emoji: '­ƒôû' },
        { id: 'amuleto', nombre: 'Schutzamulett', emoji: '­ƒö«' },
      ],
      villanos: [
        // Niedliche Figuren
        { id: 'nickerchen', nombre: 'Kleiner Schl├ñfer', emoji: '­ƒÿ¬­ƒæ╣', tipo: 'personaje', genero: 'm' },
        { id: 'frostst├Ârer', nombre: 'Frostige St├Ârerin', emoji: '­ƒÑÂ­ƒºÖ', tipo: 'personaje', genero: 'f' },
        { id: 'naschelch', nombre: 'Naschhafter Kobold', emoji: '­ƒì¡­ƒæ║', tipo: 'personaje', genero: 'm' },
        { id: 'wirrimaus', nombre: 'Wirre Maus', emoji: '­ƒÉ¡­ƒÆ¿', tipo: 'personaje', genero: 'f' },
        { id: 'sprechpilz',      nombre: 'Sprechender Pilz',   emoji: '🍄💬', tipo: 'personaje', genero: 'm'},
        { id: 'schleimschnecke', nombre: 'Schleimige Schnecke', emoji: '🐌💧', tipo: 'personaje', genero: 'f'},
        // Nat├╝rliche Konflikte
        { id: 'gewitter', nombre: 'ein pl├Âtzliches Gewitter', emoji: 'Ôøê´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'windboee', nombre: 'ein neugieriger, unruhiger Wind', emoji: '­ƒî¼´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'sandwolke', nombre: 'eine wandernde Sandwolke', emoji: '­ƒî¬´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'nebel', nombre: 'ein dichter Nebel, der alles versteckte', emoji: '­ƒî½´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'schneesturm', nombre: 'ein frecher Schneesturm', emoji: 'ÔØä´©Å­ƒî¿´©Å', tipo: 'entorno', genero: 'm' },
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
        cuerpo: `Es war einmal, in {ea}, ein mutiges kleines {p}, das von den sch├Ânsten Abenteuern tr├ñumte. Jeden Morgen blickte es mit hoffnungsvollen Augen auf den Horizont und stellte sich magische Welten jenseits von allem vor, was man sehen konnte.

An einem goldenen Morgen, w├ñhrend es die versteckten Winkel des Landes erkundete, leuchtete etwas zwischen den Bl├ñttern: {oa_art}! [[p: Aber genau in diesem Moment erschien {V}, der... ├╝berraschendste B├Âsewicht von {E}. {V} war eigentlich gar nicht b├Âse: Er war nur so klein und zerstreut, dass er aus Versehen ├╝ber {oa_art} stolperte und es unter seinem riesigen Wolkenkissen versteckte. | e: Aber genau in diesem Moment ├ñnderte sich das Wetter in {E} und {V} brach los. Es war eigentlich nichts Schlimmes, aber es war so stark, dass es aus Versehen {oa_art} bewegte und in einem tiefen Winkel versteckte. ]]

[[p: "Das geh├Ârt mir!" ÔÇö sagte {V} g├ñhnend ÔÇö. "Ich brauche etwas Weiches zum Schlafen!" | e: ]]

{P} wurde nicht w├╝tend. [[p: Stattdessen setzte er sich zu {V} und fragte ihn sanft: "Warum kannst du nicht schlafen?" Und so entdeckte er, dass {V} Angst vor der Dunkelheit hatte. | e: Stattdessen suchte er geduldig nach einer L├Âsung und entdeckte, dass der Ort ein wenig Licht und Ruhe brauchte, damit alles wieder normal wurde. ]]

{P} nutzte die Kraft von {oa_art}, um ein kleines, sanftes und warmes Licht zu erschaffen, das [[p: die Ecke von {V} erhellte. Von diesem Moment an musste {V} nichts mehr stehlen, weil er sein eigenes magisches Licht hatte... und einen neuen Freund! | e: jeden Winkel von {E} erhellte. Von diesem Moment an beruhigte sich die Kraft von {V} und verwandelte sich in eine sanfte Brise, die die Tr├ñume aller begleitete. ]]

Gemeinsam machten sie {E} zum sch├Ânsten und gem├╝tlichsten Ort der Welt. Vor dem Einschlafen fl├╝sterte {P}: "Die gr├Â├ƒte Magie steckt nicht in den Dingen, sondern im Herzen derer, die sie teilen." ­ƒîÖÔ£¿`
      },
      {
        titulo: "Ô£¿ {P}s gro├ƒes Abenteuer in {E}",
        cuerpo: `Es war einmal im wundervollen Land {E}, da lebte ein mutiges {p} mit einem riesigen Traum: das legend├ñre {oa_art} zu finden. Alle sagten, dieser magische Gegenstand h├ñtte die Macht, die sch├Ânsten Tr├ñume wahr werden zu lassen.

Eines Tages machte sich {P} mit mutigem Herzen auf den Weg. Er ├╝berquerte Regenbogenbr├╝cken, wanderte auf Sternenstaubpfaden und durchquerte G├ñrten, in denen die Blumen Lieder fl├╝sterten.

Doch dann [[p: erschien {V}. Diese eigenartige Figur war schon vorher in {E} angekommen und hatte ohne b├Âse Absicht beim Versuch zu spielen alle Wege durcheinandergebracht. | e: geschah {V}. Dieses Naturph├ñnomen kam pl├Âtzlich ├╝ber {E} und wirbelte ohne Absicht alle Wege und Pfade durcheinander. ]] Die Pfade waren vermischt und niemand wusste mehr, wo es langging!

[[p: "{pe} Oh, das tut mir so leid!" ÔÇö sagte {V} und wurde ganz rot ÔÇö. "Ich wollte doch nur ein Labyrinth zum Spielen bauen..." | e: ]]

{P} atmete tief durch und l├ñchelte. [[p: "Mach dir keine Sorgen. Wir k├Ânnen das gemeinsam l├Âsen!" Und die beiden verbrachten einen ganzen Nachmittag damit, die Wege zu entwirren, zu lachen und sich Geschichten zu erz├ñhlen. | e: Mit Ruhe und Geduld machte er sich an die Arbeit, den Ort zu ordnen. Er verbrachte einen ganzen Nachmittag damit, die Wege zu entwirren und die Harmonie in {E} wiederherzustellen. ]]

Am Ende des Tages, als alles wieder in Ordnung war, fand {P} {oa_art}, das im Herzen von {E} leuchtete. Aber das Wertvollste an diesem Tag war nicht der magische Gegenstand: Es war die Erkenntnis, dass Geduld [[p: und Freundschaft der gr├Â├ƒte Schatz sind. | e: der gr├Â├ƒte Schatz ist, um jede Schwierigkeit zu ├╝berwinden. ]]

Sie kuschelten sich zusammen und beobachteten die Sterne, und {P} begriff, dass jedes Abenteuer sch├Âner ist, wenn man es teilt. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒîÖ {P} und {O} unter den Sternen",
        cuerpo: `Wenn die Sonne hinter {E} verschwand und der Himmel sich mit kleinen funkelnden Punkten f├╝llte, begann die Magie. Niemand wusste das besser als {P}, der sich jeden Abend bei einem anderen Stern etwas w├╝nschte.

An einem ganz besonderen Abend fiel etwas mit einem sanften Schimmer direkt vor {P}s Augen. Es war {oa_art}, das in allen Farben des Regenbogens gleichzeitig leuchtete.

Doch bevor {O} antworten konnte, [[p: kam {V} herbeigelaufen. Er hatte die ganze Nacht {oa_art} gejagt, weil er dachte, es sei ein Stern, der vom Himmel gefallen war, und er wollte ihn dorthin zur├╝ckbringen. Der arme {V} war ganz ersch├Âpft vom vielen Laufen! | e: war die Kraft von {V} zu sp├╝ren. Dieses Ph├ñnomen hatte {oa_art} die ganze Nacht eingeh├╝llt, als wollte es ihn zur├╝ck zum Himmel tragen. ]]

{P} erkl├ñrte ihm liebevoll, [[p: dass {oa_art} kein Stern war, sondern etwas viel Besondereres: ein Gegenstand, der die Tr├ñume derer wahr machen kann, die sie brauchen. Und {V} brauchte wirklich etwas: einen Freund, der ihn nachts begleitet, weil er sich sehr einsam f├╝hlte. | e: dem Wind und den Sternen, dass {oa_art} ein besonderer Gegenstand war, der Ruhe und sch├Âne Tr├ñume bringen konnte, wo sie am meisten gebraucht wurden. ]]

In dieser Nacht nutzte {P} die Kraft von {oa_art}, damit [[p: {V} die Sprache der Sterne verstehen konnte. Und w├ñhrend {P} ihren leuchtenden Geheimnissen lauschte, lernte {V}, dass er nie wieder allein sein w├╝rde. | e: der Frieden in {E} einkehrte. Der Himmel wurde heiter und die Sterne leuchteten heller als je zuvor. ]]

Alle drei ÔÇö {P}, [[p: {V} | e: die Ruhe ]] und die Sterne von {E} ÔÇö wurden die besten Freunde im ganzen Universum. ­ƒîÖ­ƒîƒ`
      },
      {
        titulo: "{pe} {P}, {O} und das R├ñtsel von {E}",
        cuerpo: `Alles begann an einem ganz normalen Dienstag, als {P} einen geheimnisvollen Zettel am Tor von {E} fand: "Jemand hat die Freude von diesem Ort gestohlen. Folge den leuchtenden Spuren und finde heraus, wer."

{P} z├Âgerte keine Sekunde! Er folgte den Sternenstaubspuren, die sich durch {E} schl├ñngelten, bis er zu einer versteckten Lichtung im Herzen der gro├ƒen, alten B├ñume kam.

Dort war [[p: {V}, umgeben von der ganzen Freude von {E}: Lachen in kleinen Fl├ñschchen, Farben in S├ñckchen und Melodien in winzigen Schachteln. Aber {V} lachte nicht; er sa├ƒ ganz traurig auf dem Boden. | e: die Wirkung von {V}, die die ganze Freude von {E} eingefangen hatte: Das Lachen, die Farben und die Melodien waren in einen Wirbel der Verwirrung geh├╝llt. ]]

[[p: "Warum hast du das alles eingesammelt?" ÔÇö fragte {P} mit sanfter Stimme. | e: ]]

[[p: {V} erkl├ñrte unter Schluchzen, dass er die Freude von {E} aufbewahren wollte, weil er Angst hatte, dass sie ausgehen k├Ânnte. "Ich habe so gro├ƒe Angst, dass es eines Tages keine sch├Ânen Dinge mehr gibt..." | e: Es schien, als h├ñtte die Umgebung die Freude aus Angst vor ihrem Verlust eingefangen, was eine melancholische Stimmung im ganzen Ort verbreitete. ]]

{P} holte {oa_art} hervor und erschuf mit seiner Magie etwas Unglaubliches: eine unersch├Âpfliche Quelle der Freude im Herzen von {E}, die niemals versiegen w├╝rde, solange es jemanden gibt, der teilen m├Âchte.

[[p: {V} ├Âffnete alle Fl├ñschchen, S├ñckchen und Schachteln, und die Freude ├╝berflutete {E} mit Farben. | e: Der Wirbel von {V} l├Âste sich sanft auf und lie├ƒ die ganze angestaute Freude frei, und die Farben ├╝berfluteten {E}. ]] Es war der sch├Ânste Tag, an den sich irgendjemand an diesem Ort erinnern konnte.

In dieser Nacht kuschelte sich {P} unter die Sterne, in dem Wissen, dass Freude nicht weniger wird, wenn man sie teilt: Sie vervielfacht sich! ­ƒî£­ƒÆ½`
      },
      {
        titulo: "­ƒÆ½ {P}s Reise nach {E}",
        cuerpo: `{P} hatte schon immer davon getr├ñumt, {E} zu besuchen. Die W├ñnde seines/ihres Zimmers waren mit Zeichnungen, Karten und Postkarten dieses magischen Ortes bedeckt. Und eines sch├Ânen Tages beschloss er/sie endlich, dass es Zeit war aufzubrechen.

Die Reise war lang, aber voller Wunder. {P} sah Schokoladenwasserf├ñlle, Br├╝cken aus fluffigen Wolken und V├Âgel, die Melodien sangen, die sich wie alte vertraute Freunde anf├╝hlten.

Als er/sie schlie├ƒlich in {E} ankam, war er/sie v├Âllig sprachlos. Es war noch sch├Âner, als er/sie es sich je vorgestellt hatte. Aber irgendetwas stimmte nicht ÔÇö alle Bewohner waren besorgt.

[[p: "Es ist {V}", erkl├ñrte ein kleines Gnomen. "Heute Morgen ist er/sie in {ea} gewandert und hat alles durcheinandergebracht. Er/sie hat Norden und S├╝den verwechselt, und jetzt wei├ƒ niemand mehr, wo irgendetwas ist!" | e: "Es liegt an {V}", erkl├ñrte ein kleines Gnomen. "Heute Morgen ist er ├╝ber {ea} hereingebrochen und hat alles durcheinandergewirbelt. Der Wind blies so stark, dass er Norden und S├╝den verwechselt hat, und jetzt wei├ƒ niemand mehr, wo irgendetwas ist!" ]]

{P} fand [[p: {V}, der/die fieberhaft versuchte, alles zu reparieren, ├╝ber einen Gegenstand stolperte, w├ñhrend er/sie einen anderen aufzurichten versuchte. Er/sie war so entz├╝ckend tollpatschig, dass {P} nicht umhin konnte, herzlich zu lachen. | e: den Bereich, den {V} durchquert hatte, mit Spuren von Bl├ñttern und Sand ├╝berall. ]]

Zusammen, mit der Hilfe von {oa_art}, das am Eingang des Landes wartete, brachten sie {E} in Rekordzeit wieder in Ordnung. Jeder Gegenstand kehrte mit einem kleinen Zauberschimmer und einem kleinen Gl├Âckchen an seinen Platz zur├╝ck.

Als alles perfekt war, [[p: drehte sich {V} mit roten Wangen zu {P}: "Danke. Niemand hat mir je geholfen, ohne mich auszulachen." | e: wurde die Luft in {E} wieder frisch und ruhig. ]]

[[p: "Oh, ich habe gelacht!" gab {P} l├ñchelnd zu. "Aber nur, weil du absolut wunderbar bist." | e: ]]

Von da an wurde {P} der W├ñchter von {E} [[p: und {V} sein/ihr treuester ÔÇö wenn auch etwas tolpatschiger ÔÇö Helfer. | e: und sorgte daf├╝r, dass das Wetter f├╝r alle immer angenehm war. ]] Und sie lebten gl├╝cklich f├╝r viele, viele N├ñchte. ­ƒîÖÔ¡É­ƒÆñ`
      },
      {
        titulo: "­ƒÄ¡ {P} und das Gro├ƒe Fest in {E}",
        cuerpo: `Alles war bereit f├╝r das gr├Â├ƒte Fest des Jahres in {E}! {P} hatte Wochen damit verbracht, Lichterketten, bunte Luftballons und einen riesigen, mehrst├Âckigen Kuchen vorzubereiten. Heute Nacht war das Gro├ƒe Fest.

Aber mit nur einer Stunde bis zum Beginn geschah etwas Unerwartetes: Die Musik war verschwunden. Ohne Musik kein Fest!

[[p: Und die Schuldige war {V}, die alle Instrumente versteckt hatte, weil sie sie allein spielen wollte, bevor die G├ñste ankamen... aber keines davon spielen konnte, und nun umgeben von Instrumenten und weinend dasa├ƒ. | e: Es stellte sich heraus, dass {V} so stark geblasen hatte, dass die Instrumente in ganz {E} verstreut waren und an unerwarteten Stellen feststeckten. ]]

{P} schimpfte nicht. Stattdessen [[p: setzte er sich neben sie und brachte ihr etwas Einfaches bei: Musik nur mit den H├ñnden zu machen. Klatschen, Schnippen der Finger, sanftes Klopfen auf die Knie. | e: suchte er nach einer kreativen M├Âglichkeit, die Harmonie wiederherzustellen. ]]

Dann erinnerte sich {P} an {oa_art}. Beim Ber├╝hren erf├╝llte eine s├╝├ƒe, perfekte Melodie jeden Winkel von {E} und lie├ƒ sogar die Blumen und Wolken tanzen.

[[p: {V} machte mit ihren H├ñnden mit, und bald kamen alle G├ñste an und begannen zu tanzen. | e: Die Kraft von {V} wurde sanfter und die Instrumente kehrten wie durch Zauberei an ihren Platz zur├╝ck. ]] Es war das beste Fest, das {E} je erlebt hatte.

"Danke, dass du die Harmonie zur├╝ckgebracht hast!" jubelten alle. [[p: Und {V}, deren Klatschen der geheime Herzschlag von allem war, bekam den lautesten Applaus der Nacht. | e: ]]

Ersch├Âpft von so viel Spa├ƒ schlief {P} mit einem L├ñcheln ein, das von einem Ohr zum anderen reichte. ­ƒî£Ô£¿`
      },
      {
        titulo: "­ƒÄü Ein Geschenk der Sterne f├╝r {P}",
        cuerpo: `Es war eine au├ƒerordentlich friedliche Nacht in {E}, als etwas wie eine leuchtende Schneeflocke vom Himmel schwebte. Als es landete, stellte sich heraus, dass es {oa_art} war, das mit dem Licht von tausend Galaxien leuchtete.

{P} hielt es vorsichtig. Beim Ber├╝hren sp├╝rte er, dass er die tiefsten ├ängste in wundersch├Âne, bunte Tr├ñume verwandeln konnte.

"{pe} Es ist ein ganz besonderes Geschenk!" ÔÇö rief {P}.

Doch dann [[p: erschien {V} mit Augen, die zeigten, dass er geweint hatte. Er erkl├ñrte, dass das Geschenk genau dort gefallen war, wo er lebte, und dass er wirklich geglaubt hatte, es sei f├╝r ihn bestimmt. | e: brach {V} in der Gegend los. Es schien, als wollte auch das Wetter dieses Leuchten beanspruchen, um seine eigene Kraft zu beruhigen. ]]

{P} dachte einen Moment nach und hatte dann eine wundervolle Idee: "Was, wenn wir es teilen? [[p: Du hast nachts Angst, und ich m├Âchte allen in {E} helfen. Wir k├Ânnen beides gleichzeitig tun!" | e: Ich m├Âchte allen in {E} helfen, und so wird die Ruhe in jeden Winkel des Ortes einkehren." ]]

[[p: {V} blinzelte erstaunt. Niemand hatte ihm jemals angeboten, etwas so zu teilen. | e: ]]

In dieser Nacht nutzte {P} [[p: und {V} gemeinsam die Magie von {oa_art}, damit alle in {E} sch├Âne Tr├ñume haben w├╝rden: Die Kinder tr├ñumten von Abenteuern, die Erwachsenen von gl├╝cklichen Erinnerungen, und {V} tr├ñumte ÔÇö zum allerersten Mal ÔÇö ohne jegliche Angst. | e: die Magie von {oa_art}, damit alle in {E} sch├Âne Tr├ñume haben w├╝rden. Die Kraft von {V} verwandelte sich in ein stetiges Schlaflied und alle tr├ñumten zum ersten Mal in absolutem Frieden. ]]

{P} schloss die Augen, dankbar, in dem Wissen, dass Gro├ƒz├╝gigkeit die m├ñchtigste Magie von allen ist. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒÉ¥ {P} zu Hilfe in {E}",
        cuerpo: `Es war ein ruhiger Nachmittag in {E}, als {P} ein eigenartiges Ger├ñusch h├Ârte: irgendwo zwischen einem Wimmern und einem kleinen Kichern, das aus den B├╝schen kam. N├ñhertretend fand er ein kleines verlorenes Tier [[p: ... und direkt daneben {V}. | e: in der Mitte von {ea}. ]]

[[p: {V} hatte versucht, dem kleinen Wesen den Weg nach Hause zu zeigen, aber so zerstreut wie er war, hatten beide sich gemeinsam in einem Winkel von {E} verloren, den keiner von beiden kannte. | e: Es stellte sich heraus, dass {V} den Ort mit seiner Kraft eingeh├╝llt hatte und das kleine Tier den Ausgang nicht finden konnte. ]]

[[p: "{pe} Was f├╝r ein lustiges Durcheinander haben wir gemacht!" ÔÇö gab {V} zu, sich am Kopf kratzend. | e: ]]

{P} konnte nicht umhin zu lachen, brachte aber schnell {oa_art} hervor. Der Gegenstand begann mit einem warmen, gleichm├ñ├ƒigen Licht zu gl├╝hen und zeichnete in der Luft einen leuchtenden Weg, der direkt zum Zuhause des kleinen Tieres f├╝hrte.

Unterwegs erkl├ñrte {P} [[p: {V} | e: ]] wie man sich mit Sternen und Blumen orientiert. "Die Waldblumen richten sich immer nach der Sonne aus, also wenn du wei├ƒt, wo die Sonne mittags steht, wirst du dich nie verirren."

[[p: {V} h├Ârte aufmerksam zu und merkte sich jeden Ratschlag. | e: ]] Als das kleine Tier sicher und wohlbehalten zu Hause ankam, begr├╝├ƒte es seine Familie mit so viel Liebe, dass Freudentr├ñnen f├╝r alle sichtbar waren.

"{pe} Du bist so mutig" ÔÇö fl├╝sterte das kleine Tier zu {P}. [[p: "Und du, {V} ÔÇö obwohl du dich verlaufen hast, hast du mich nie allein gelassen!" | e: ]]

[[p: {V} strahlte vor Gl├╝ck. Er hatte beim F├╝hren versagt, aber in dem triumphiert, was wirklich z├ñhlte: da zu sein. | e: ]]

Mit einem friedlichen Herzen und einer gut gelernten Lektion machten sich alle auf den Weg unter die Sterne von {E}, um sich auszuruhen. ­ƒîø­ƒÆ¿`
      },
      {
        titulo: "­ƒî© {P} und der Jahreszeitenwechsel in {E}",
        cuerpo: `Der Fr├╝hling sollte eigentlich in {E} ankommen, aber irgendetwas hielt ihn zur├╝ck. Die Felder waren noch mit Schnee bedeckt und die Blumen weigerten sich aufzuwachen. Alle in {E} waren verwundert.

[[p: Die Schuldige ÔÇö wenn auch ganz ohne b├Âse Absicht ÔÇö war {V}, die einen magischen Knopf in Form einer Schneeflocke gefunden und ihn viele, viele Male gedr├╝ckt hatte, weil er einfach zu entz├╝ckend war, um dem zu widerstehen. Und mit jedem Druck kam ein bisschen mehr Winter! | e: Das alles lag an {V}, der sich in {E} festgesetzt hatte und die Sonne nicht durchlassen wollte. Die K├ñlte war so intensiv, dass es schien, als w├╝rde der Winter niemals enden. ]]

[[p: "Ich wusste nicht, dass das passieren w├╝rde" ÔÇö gestand {V} mit einer ganz kleinen Stimme. | e: ]]

{P} nahm {oa_art} sanft und pustete zart ├╝ber die schlafenden Blumen. Eine nach der anderen, als w├╝rden sie sich aus einem langen, s├╝├ƒen Schlaf erwecken, ├Âffneten sie ihre Bl├╝tenbl├ñtter: erst ein paar sch├╝chterne, dann alle auf einmal in einem gro├ƒen Schwall Farben.

"Das ist wundersch├Ân!" [[p: ÔÇö rief {V}, die Blumen noch nie wirklich bl├╝hen gesehen hatte, da sie immer ankam, wenn alles schon offen war. | e: ]]

{P} erkl├ñrte [[p: ihr | e: der Welt ]], dass manche besonderen Momente in der Natur mit Geduld abgewartet werden m├╝ssen ÔÇö dass man Blumen nicht zum Bl├╝hen zwingen kann, genau wie man einen Traum nicht zum Wahr-werden zwingen kann.

Ganz {E} f├╝llte sich mit Farben, s├╝├ƒen D├╝ften und dem fr├Âhlichen Summen der Bienen. [[p: Von da an k├╝mmerte sich {V} sehr sorgf├ñltig um den Schneeflockenknopf und dr├╝ckte ihn nur im Sommer, um ein bisschen k├╝hle Brise zu bringen. | e: Die Kraft von {V} verflog und lie├ƒ die Sonne jeden Winkel erw├ñrmen. ]]

Und {P}, mit einem Herzen so leicht wie ein Bl├╝tenblatt im Wind, machte sich bereit f├╝r einen Tag voller endlosem Spiel. ­ƒî╝­ƒî£`
      },
      {
        titulo: "­ƒÄÂ Die verlorene Melodie von {E}",
        cuerpo: `Eine seltsame und schwere Stille hatte sich ├╝ber {E} gelegt. Kein Vogel sang, kein Wind bewegte die Bl├ñtter, kein Bach rauschte und murmelte. Als ob die Musik der Welt einfach verschwunden w├ñre.

{P} beschloss, die verlorenen Kl├ñnge zu finden. Er wanderte, suchte und stellte Fragen, bis er die tiefste H├Âhle in ganz {E} erreichte, wo er [[p: {V} fr├Âhlich fand, umgeben von Tausenden von Kl├ñngen ÔÇö jeder in einer kleinen, schwebenden Seifenblase gefangen. | e: feststellte, dass {V} alle Kl├ñnge in kleinen Luftblasen eingefangen hatte, die ├╝berall umherflogen. ]]

[[p: "Ich sammle Kl├ñnge" ÔÇö erkl├ñrte {V} fr├Âhlich ÔÇö. "Ich habe schon das Lied des allerersten Vogels des Morgens, den Klang von Regen auf Bl├ñttern und drei verschiedene Sorten von Stille!" | e: Es schien, als h├ñtte die Umgebung beschlossen, Stille zu bewahren und jede Musiknote in der Luft einzufangen. ]]

{P} verstand, dass [[p: {V} ├╝berhaupt nicht b├Âse war ÔÇö nur unglaublich neugierig. Er schlug einen Deal vor: {V} w├╝rde alle Kl├ñnge freigeben, wenn {P} ihm helfen w├╝rde, echte Musik zu machen. | e: es notwendig war, diese Kl├ñnge zu befreien, damit {E} sein Leben zur├╝ckgewann. ]]

[[p: {V} akzeptierte mit riesiger Begeisterung. | e: ]] Als [[p: die Blasen freigegeben wurden | e: die Blasen platzten ]], brach {E} in eine pr├ñchtige Sinfonie aus: alle Kl├ñnge der Welt spielten gleichzeitig und schufen die sch├Ânste Melodie, die je jemand geh├Ârt hatte.

Dann ber├╝hrte {P} {oa_art} und schuf mit ihm etwas Neues: ein kleines, besonderes Lied [[p: nur f├╝r {V} ÔÇö eine Melodie, die seinen Namen trug und die er h├Âren konnte, wann immer er wollte. | e: f├╝r den Ort ÔÇö eine Melodie, die in {E} jedes Mal erklingen w├╝rde, wenn jemand Freude braucht. ]]

"{pe} Die Musik ist zur├╝ck!" ÔÇö rief {P} [[p: , "und wir haben ein brandneues Lied!" | e: . ]]

In dieser Nacht war {E} voller Leben, und {P} schlief im fr├Âhlichen Herzschlag des Landes gewiegt ein. ­ƒÄÁ­ƒÆñ`
      },
      {
        titulo: "­ƒÜÇ {P} und der Besucher aus dem Weltraum",
        cuerpo: `Eine silberne Rakete landete in {E} mit einer sanften Explosion aus blauem Licht. Heraus trat ein Besucher aus dem All: klein und rund, mit riesigen Augen wie Vollmonde und einem L├ñcheln, das sein ganzes Gesicht einnahm.

Alle in {E} versammelten sich neugierig, aber niemand konnte verstehen, was der Besucher sagte. Seine Worte klangen wie ferne Musik, wie kleine Glocken, die unter Wasser klingelten.

Dann [[p: trat {V} vor, absolut ├╝berzeugt, die Weltraumsprache sprechen zu k├Ânnen ÔÇö weil er einmal getr├ñumt hatte, es zu k├Ânnen. Er pflanzte sich vor den Besucher und begann, kompletten Unsinn in voller Lautst├ñrke zu sagen. Der Besucher sah immer verwirrter aus! | e: war die Kraft von {V} zu h├Âren. Das Ger├ñusch war so intensiv, dass die Worte des Besuchers in der Luft verloren gingen, und der arme Reisende sah immer verwirrter aus. ]]

{P} l├ñchelte geduldig und holte {oa_art} hervor. Mit seiner Magie ├╝bersetzte der Gegenstand die Gedanken des Besuchers in Lichtblasen, die alle sehen und verstehen konnten.

Der Besucher kam von einem Planeten, auf dem Geschichten ausgegangen waren. Er hatte die gesamte Galaxie auf der Suche nach einem Ort durchreist, an dem Geschichten niemals enden, und hatte {E} gefunden.

{P} machte ein wunderbares Versprechen: Jeden Abend, bevor alle schlafen gehen, w├╝rde jemand aus {E} eine neue Geschichte erz├ñhlen. Der Besucher w├╝rde diese Geschichten in seiner Rakete sammeln und sie auf seinen Planeten bringen, damit die Kinder dort auch tr├ñumen k├Ânnten.

"{pe} Jetzt sind wir intergalaktische Freunde!" ÔÇö sagte {P}. [[p: Und {V}, der auf seine Weise versucht hatte zu helfen, wurde zum Botschafter der Wundersam Verwirrten Worte ernannt ÔÇö die sich als absolut perfekt herausstellten, um alle zum Lachen zu bringen. | e: ]]

Als der Besucher abreiste, blickte {P} zu den Sternen und wusste: Keine Geschichte geht jemals wirklich verloren. ­ƒîîÔ£¿`
      },
      {
        titulo: "­ƒÅå {P} und die Talentshow",
        cuerpo: `Heute war der Tag der Gro├ƒen Talentshow in {E}. Es gab Windfl├Âtisten, Wolkenb├ñndiger, Regenbogenmaler und Sonnenstrahlt├ñnzer. {P} schaute mit Bewunderung zu ÔÇö und einem kleinen Flattern der Nerven.

Aber als {P}s Auftritt kam, geschah etwas Unerwartetes: [[p: {V} war zuvor auf die B├╝hne gewandert, da er dachte, die Show beginne sp├ñter, und jonglierte nun mit wilden Beeren vor dem gesamten Publikum. Niemand hatte wirklich das Herz, ihm zu sagen, dass es nicht sein Platz war! | e: pl├Âtzlich brach {V} direkt ├╝ber der B├╝hne los. Waldbl├ñtter und Beeren wirbelten vor dem gesamten Publikum durch die Luft ÔÇö es sah nach totalem Chaos aus! ]]

{P} beobachtete einen Moment. [[p: {V} war entz├╝ckend desastr├Âs: lie├ƒ die H├ñlfte der Beeren fallen, stolperte ├╝ber die eigenen F├╝├ƒe und trug dennoch ein riesiges L├ñcheln. Das Publikum, obwohl verbl├╝fft, begann mit echter W├ñrme zu lachen. | e: Es war alles ein unerwartetes Durcheinander, aber die Beeren flogen auf eine fast rhythmische Weise. Das Publikum beobachtete dieses Naturschauspiel voller Staunen. ]]

Dann hatte {P} eine brillante Idee. Er trat [[p: neben {V} | e: ]] auf die B├╝hne und holte {oa_art} hervor. Mit seiner Magie zauberte er Lichtfiguren, die [[p: zusammen mit {V}s Jonglieren | e: der Bewegung von {V} ]] tanzten und jeden Patzer in eine elegante Bewegung und jede fallengelassene Beere in einen glitzernden Stern verwandelten.

Die Darbietung war wie keine andere: halb Magie, halb wundersch├Ânes Chaos, vollst├ñndig einzigartig.

"{pe} Sie sind die Gewinner!" ÔÇö jubelten alle, als es vorbei war ÔÇö denn sie hatten etwas getan, das niemand erwartet hatte: einen Unfall in Kunst zu verwandeln.

{P} lernte, dass sein gr├Â├ƒtes Talent nicht Perfektion war, sondern die F├ñhigkeit, Magie dort zu finden, wo andere nur ein Durcheinander sehen. Und er schlief in dieser Nacht tief und fest, von M├Âglichkeiten tr├ñumend. ­ƒÅà­ƒîƒ`
      },
      {
        titulo: "­ƒôÜ {P} in der Bibliothek der Tr├ñume",
        cuerpo: `In {E} gab es eine ganz besondere Bibliothek: Ihre B├╝cher wurden nicht gelesen, sie wurden erlebt. Wenn man eines ├Âffnete, tauchte man kopf├╝ber in die Geschichte ein und erlebte sie von innen. Die Leute konnten ganze Nachmittage damit verbringen, andere Welten zu erkunden, ohne das Geb├ñude je zu verlassen.

An einem Nachmittag kam {P} voller Neugier an ÔÇö und fand [[p: {V} in einem Buch gefangen. Er war in "Das Gro├ƒe Labyrinth der Tr├ñume" geraten und fand den Ausgang nicht. Er lief seit Stunden im Kreis. | e: dass die Wirkung von {V} zwischen die Seiten eines Buches gesickert war. Die Geschichte von "Das Gro├ƒe Labyrinth der Tr├ñume" war durch Wind und Nebel ganz durcheinandergeraten. ]]

[[p: "{pe} {P}, bitte, ich suche schon eine Ewigkeit!" ÔÇö kam die Stimme von {V} von den Seiten. | e: ]]

{P} hielt {oa_art} hoch. Ihre Magie beleuchtete die Seiten und zeigte den richtigen Weg durch das Labyrinth. Aber {P} hatte eine bessere Idee als einfach den Weg zu zeigen: Anstatt [[p: {V} | e: dem R├ñtsel ]] die Antwort direkt zu geben, gab er Hinweise.

"Schau dir die Zeichnungen auf den Labyrinthmauern an. Die kleinen Pfeile zeigen immer zum Herzen des Buches, nie zum Ausgang."

[[p: {V} folgte den Hinweisen einen nach dem anderen ÔÇö und als er das Buch schlie├ƒlich verlie├ƒ, leuchteten seine Augen vor Aufregung. | e: Den Hinweisen folgend, beruhigte sich die Luft und die Seiten kehrten nacheinander an ihren Platz zur├╝ck. ]]

"{pe} Ich hab's selbst gel├Âst! [[p: Na ja... mit deinen Hinweisen. | e: ]] "

{P} erkl├ñrte, dass das genau der Zweck von B├╝chern war: nicht die Antworten zu geben, sondern die Werkzeuge, um sie selbst zu finden.

Sie sa├ƒen zusammen in der Bibliothek und {P} w├ñhlte ein goldenes Buch mit leeren Seiten. Sie begannen, die Geschichte dieses Nachmittags hineinzuschreiben ÔÇö denn die besten Geschichten sind immer die, die man selbst erlebt.

Jeder Tag ist eine neue Seite. Und solange man [[p: Freunde wie {V} | e: magische Momente ]] findet, wird keine einzige Seite jemals leer sein. ­ƒôûÔ£¿`
      },
      {
        titulo: "­ƒÄ¿ {P} und der Tag, an dem die Farben verschwanden",
        cuerpo: `{E} erwachte anders. Der Himmel war grau, die Blumen hatten ihre Farbe verloren, die V├Âgel waren schwarz-wei├ƒ und sogar der Regenbogen sah wie eine blasse graue Linie aus. Jemand hatte alle Farben gestohlen.

{P} ermittelte und folgte einer Spur kleiner grauer Flecken, bis er [[p: {V} fand, der mitten in einer riesigen Lache aus... gemischten Farben sa├ƒ. | e: feststellte, dass {V} vorbeigezogen war und eine riesige Lache aus... gemischten Farben hinterlassen hatte. ]] Er hatte versucht, die perfekte Farbe zu erschaffen, indem er ein kleines bisschen von allem nahm, und hatte so gr├╝ndlich gemischt, dass alle Farben grau geworden waren.

[[p: "{V}... was hast du getan?" ÔÇö fragte {P}, die Augen ungl├ñubig. | e: ]]

[[p: "Ich wollte die sch├Ânste Farbe der Welt erschaffen", antwortete {V} mit einer ganz kleinen Stimme. "Eine, die alles enthalten w├╝rde." | e: Es schien, als h├ñtte die Natur versucht, all ihre Schattierungen zu vereinen, aber das Ergebnis war eine graue Wolke, die alles bedeckte. ]]

{P} verstand. [[p: {V} wollte die Farben ├╝berhaupt nicht zerst├Âren ÔÇö er hatte versucht, das Gegenteil zu tun: Sch├Ânheit in der Vereinigung aller Dinge zu finden. | e: Es war kein Versuch, die Sch├Ânheit zu nehmen, sondern sie in der Vereinigung von allem zu finden. ]] Er hatte nur vergessen, dass das Geheimnis der Farben darin liegt, dass sie am hellsten leuchten, wenn sie getrennt sind.

{P} hob {oa_art} auf und begann wie der magischste Pinsel des Universums, die Farben aus der Lache zu trennen. Eine nach der anderen kehrten sie an ihren Platz zur├╝ck: Blau f├╝r den Himmel, Gr├╝n f├╝r die Bl├ñtter, Gelb f├╝r die Sonne, Rot f├╝r die Rosen.

[[p: {V} half mit gro├ƒer Begeisterung ÔÇö wenn auch ein paar Farben an unerwarteten Stellen platzierend: eine orangene Wolke hier, einen lila Baum dort. | e: Die Kraft von {V} half, die Farben wieder zu verteilen, obwohl einige an unerwarteten Stellen landeten: eine orangene Wolke hier, einen lila Baum dort. ]] Und es stellte sich heraus, dass {E} bunter und freudiger als je zuvor wurde.

[[p: "Du hast es wieder geschafft!" ÔÇö sagte {V} bewundernd. "Du hast mein Durcheinander in etwas Sch├Ânes verwandelt!" | e: ]]

{P} l├ñchelte. [[p: "Wir haben es zusammen getan." | e: ]]

In dieser Nacht blickte {P} von oben auf {E} und dachte: Es gibt keinen Fehler, der so gro├ƒ ist, dass er nicht mit Hilfe und Kreativit├ñt sch├Âner werden k├Ânnte als das Original. ­ƒîê­ƒÿ┤`
      },
      {
        titulo: "­ƒò»´©Å Das Versprechen von Morgen",
        cuerpo: `{P} sa├ƒ unter dem gro├ƒen, alten Baum von {E} ÔÇö dem, von dem man sagte, er sei so alt, dass er sich an den allerersten Tag der Welt erinnerte. Es war ein schwieriger Tag gewesen: Die Dinge hatten sich nicht wie geplant entwickelt, und {P}s Herz f├╝hlte sich ein bisschen schwer an.

Da kam {V} an. {V} hatte eine besondere Gabe: die F├ñhigkeit, Traurigkeit zu riechen. Eine nicht sehr n├╝tzliche F├ñhigkeit im Allgemeinen, aber in Momenten wie diesem f├╝hrte sie ihn/sie genau dorthin, wo jemand Gesellschaft brauchte.

"Was ist los?" fragte {V} und setzte sich daneben.

{P} teilte seine/ihre Sorgen, w├ñhrend {oa_art} von selbst mit einem warmen, sanften Licht zu leuchten begann ÔÇö als ob auch er/sie helfen wollte, die Atmosph├ñre zu beruhigen.

{O} zeigte {P} Visionen von Wiesen voller Blumen, wo die Fehler der Vergangenheit zu Samen f├╝r die Zukunft geworden waren. Es zeigte Lachen, das mit noch nicht getroffenen Freunden geteilt wurde, und Abenteuer, die nur m├Âglich w├ñren, wenn {P} morgen mit Hoffnung aufwachte.

{V} wusste nicht, was er/sie sagen sollte, also tat er/sie das Einzige, was er/sie wusste, wenn jemand traurig war: Er/sie kuschelte sich ganz nah heran und legte den Kopf auf {P}s Schulter ÔÇö wie eine kleine Sonnenblume, die sich immer dem Licht zuwendet.

"{pe} Morgen wird unglaublich", versprach {P} leise ÔÇö und diesmal glaubte er/sie es wirklich.

Denn im Leben sind die schwierigen Tage der Preis, den wir f├╝r die wundervollen zahlen. Und wenn jemand in den schwierigen bei dir bleibt, leuchten die wundervollen noch heller.

Die sanfte Brise von {E} wiegte sie beide, bis sie nebeneinander einschliefen, w├ñhrend die Sterne die ganze lange Nacht ├╝ber sie wachten. ­ƒî£­ƒÆñ`
      }
    ]
  },
  pt: {
    elementos: {
      personajes: [
        { id: 'princesa', nombre: 'Princesa', emoji: '­ƒæ©' },
        { id: 'caballero', nombre: 'Cavaleiro', emoji: '­ƒøí´©Å' },
        { id: 'dragon', nombre: 'Drag├úo', emoji: '­        cuerpo: `Era uma vez, em {ea}, um(a) corajoso(a) {p} que sonhava com as mais belas aventuras. A cada manh├ú, ele(a) olhava para o horizonte com olhos cheios de esperan├ºa, imaginando mundos m├ígicos al├®m de tudo o que se podia ver.

Numa manh├ú dourada, enquanto explorava os cantos mais escondidos do lugar, algo brilhou entre as folhas: {oa_art}! Ao toc├í-lo(a), um formigamento m├ígico subiu dos dedos at├® o cora├º├úo.

"{pe} Que maravilha!" exclamou {P} com os olhos bem abertos.

Mas exatamente nesse momento [[p: apareceu {V}, o vil├úo mais... surpreendente de {E}. {V} n├úo era mau de verdade: era t├úo pequeno e distra├¡do que trope├ºou sem querer em {oa_art} e o escondeu debaixo do seu enorme travesseiro de nuvens. | e: o tempo mudou em {E} e {V} se desatou. N├úo era algo mau de verdade, mas foi t├úo forte que moveu sem querer {oa_art} e o escondeu em um recanto profundo. ]]

[[p: "├ë meu!" ÔÇö disse {V} bocejando ÔÇö. "Preciso de algo fofinho para dormir!" | e: ]]

{P} n├úo ficou zangado. [[p: Em vez disso, sentou-se ao lado de {V} e perguntou com do├ºura: "Por que voc├¬ n├úo consegue dormir?" e assim descobriu que {V} tinha medo do escuro. | e: Em vez disso, procurou pacientemente uma solu├º├úo e descobriu que o lugar precisava de um pouco de luz e calma para que tudo voltasse ao normal. ]]

{P} usou o poder de {oa_art} para criar uma luzinha suave e quente que iluminou [[p: o cantinho de {V}. A partir desse momento, {V} n├úo precisou mais roubar nada porque tinha sua pr├│pria luz m├ígica... e um novo amigo! | e: cada recanto de {E}. A partir desse momento, a for├ºa de {V} se acalmou e se transformou em uma brisa suave que acompanhava os sonhos de todos. ]]

Juntos, fizeram de {E} o lugar mais lindo e acolhedor do mundo. Antes de dormir, {P} sussurrou: "A maior magia n├úo est├í nos objetos, mas no cora├º├úo de quem os compartilha." ­ƒîÖÔ£¿`ero: 'f' },
        { id: 'duendegolosobt', nombre: 'Duende Guloso', emoji: '­ƒì¡­ƒæ║', tipo: 'personaje', genero: 'm' },
        { id: 'ratinhobag', nombre: 'Ratinho Bagun├ºeiro', emoji: '­ƒÉ¡­ƒÆ¿', tipo: 'personaje', genero: 'm' },
        { id: 'cogumfalante', nombre: 'Cogumelo Falante', emoji: '🍄💬', tipo: 'personaje', genero: 'm'},
        { id: 'caracolbab',   nombre: 'Caracol Babento',  emoji: '🐌💧', tipo: 'personaje', genero: 'm'},
        { id: 'tempestade', nombre: 'uma tempestade repentina', emoji: 'Ôøê´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'ventocurioso', nombre: 'um vento curioso e inquieto', emoji: '­ƒî¼´©Å', tipo: 'entorno', genero: 'm' },
        { id: 'nuvemareia', nombre: 'uma nuvem de areia viajante', emoji: '­ƒî¬´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'nevoa', nombre: 'uma n├®voa espessa que escondia tudo', emoji: '­ƒî½´©Å', tipo: 'entorno', genero: 'f' },
        { id: 'nevasca', nombre: 'uma nevasca travessa', emoji: 'ÔØä´©Å­ƒî¿´©Å', tipo: 'entorno', genero: 'f' },
      ]
    },
    artEsc: {
      castillo:'um Castelo Encantado', bosque:'uma Floresta M├ígica',
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
        cuerpo: `Era uma vez, em {ea}, um(a) corajoso(a) {p} que sonhava com as mais belas aventuras. A cada manh├ú, ele(a) olhava para o horizonte com olhos cheios de esperan├ºa, imaginando mundos m├ígicos al├®m de tudo o que se podia ver.

Numa manh├ú dourada, enquanto explorava os cantos mais escondidos do lugar, algo brilhou entre as folhas: {oa_art}! Ao toc├í-lo(a), um formigamento m├ígico subiu dos dedos at├® o cora├º├úo.

"{pe} Que maravilha!" exclamou {P} com os olhos bem abertos.

Mas exatamente nesse momento [[p: apareceu {V}, o vil├úo mais... surpreendente de {E}. {V} n├úo era mau de verdade: era t├úo pequeno e distra├¡do que trope├ºou sem querer em {oa_art} e o escondeu debaixo do seu enorme travesseiro de nuvens. | e: o tempo mudou em {E} e {V} se desatou. N├úo era algo mau de verdade, mas foi t├úo forte que moveu sem querer {oa_art} e o escondeu em um recanto profundo. ]]

[[p: "├ë meu!" ÔÇö disse {V} bocejando ÔÇö. "Preciso de algo fofinho para dormir!" | e: ]]

{P} n├úo ficou zangado. [[p: Em vez disso, sentou-se ao lado de {V} und perguntou com do├ºura: "Por que voc├¬ n├úo consegue dormir?" E assim descobriu que {V} tinha medo do escuro. | e: Em vez disso, procurou pacientemente uma solu├º├úo und descobriu que o lugar precisava de um pouco de luz und calma para que tudo voltasse ao normal. ]]

{P} usou o poder de {oa_art} para criar uma luzinha suave e quente que iluminou [[p: o cantinho de {V}. A partir desse momento, {V} n├úo precisou mais roubar nada porque tinha sua pr├│pria luz m├ígica... e um novo amigo! | e: cada recanto de {E}. A partir desse momento, a for├ºa de {V} se acalmou e se transformou em uma brisa suave que acompanhava os sonhos de todos. ]]

Juntos, fizeram de {E} o lugar mais lindo e acolhedor do mundo. Antes de dormir, {P} sussurrou: "A maior magia n├úo est├í nos objetos, mas no cora├º├úo de quem os compartilha." ­ƒîÖÔ£¿`
      },
      {
        titulo: "Ô£¿ A grande aventura de {P} em {E}",
        cuerpo: `Na maravilhosa terra de {E}, vivia um(a) corajoso(a) {p} com um sonho enorme: encontrar o lend├írio {oa_art}. Todos diziam que esse objeto m├ígico tinha o poder de realizar os mais belos sonhos.

Um dia, {P} partiu em jornada com um cora├º├úo cheio de coragem. Atravessou pontes de arco-├¡ris, caminhou por trilhos de poeira de estrelas e passou por jardins onde as flores sussurravam can├º├Áes.

Mas ent├úo [[p: apareceu {V}. Esse personagem singular tinha chegado antes a {E} e, sem m├í inten├º├úo, tinha emaranhado todos os caminhos ao tentar brincar. | e: ocorreu {V}. Esse fen├┤meno natural chegou de repente a {E} e, sem querer, confundiu todos os caminhos e trilhas. ]] As trilhas estavam misturadas e ningu├®m sabia mais por onde ir!

[[p: "{pe} Oh, sinto muito mesmo!" ÔÇö disse {V} ficando todo vermelho ÔÇö. "Eu s├│ queria fazer um labirinto para brincar..." | e: ]]

{P} respirou fundo e sorriu. [[p: "N├úo se preocupe. Podemos resolver isso juntos!" E os dois passaram uma tarde inteira desembara├ºando os caminhos, rindo e contando hist├│rias um ao outro. | e: Com calma e paci├¬ncia, p├┤s-se a trabalhar para ordenar o lugar. Passou uma tarde inteira desembara├ºando os caminhos e devolvendo a harmonia a {E}. ]]

No final do dia, quando tudo estava em ordem, {P} avistou {oa_art} brilhando no cora├º├úo de {E}. Mas a coisa mais preciosa encontrada naquele dia n├úo foi o objeto m├ígico ÔÇö foi aprender que a paci├¬ncia [[p: e a amizade s├úo o maior tesouro. | e: ├® o maior tesouro para superar qualquer dificuldade. ]]

Aconchegaram-se juntos sob as estrelas, e {P} entendeu que cada aventura se torna mais bonita quando ├® compartilhada. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒîÖ {P} e {O} sob as estrelas",
        cuerpo: `Quando o sol se escondia atr├ís de {E} e o c├®u come├ºava a se encher de pontinhos brilhantes, a magia come├ºava. Ningu├®m sabia isso melhor do que {P}, que fazia um pedido a uma estrela diferente a cada noite.

Numa noite muito especial, algo caiu com um suave brilho bem diante dos olhos de {P}. Era {oa_art}, resplandecendo em todas as cores do arco-├¡ris ao mesmo tempo.

"{pe} O que voc├¬ est├í fazendo aqui, pequeno(a) {O}?" perguntou {P}, espantado(a).

Mas antes que {O} pudesse responder, [[p: chegou {V} correndo. Ele tinha perseguido {oa_art} a noite toda porque achava que era uma estrela cadente e queria devolv├¬-la ao c├®u. Coitado do {V}, estava exausto de tanto correr! | e: sentiu-se a for├ºa de {V}. Esse fen├┤meno tinha envolvido {oa_art} a noite toda, como se quisesse lev├í-lo de volta ao c├®u. ]]

{P} explicou-lhe com carinho [[p: que {oa_art} n├úo era uma estrela, mas algo muito mais especial: um objeto capaz de realizar os sonhos de quem precisa. E {V} precisava muito de algo: um amigo para acompanh├í-lo ├á noite, pois se sentia muito sozinho. | e: ao vento e ├ás estrelas que {oa_art} era um objeto especial capaz de trazer calma e bons sonhos a quem mais precisava. ]]

Nesta noite, {P} usou o poder de {oa_art} para que [[p: {V} pudesse entender a l├¡ngua das estrelas. E assim, enquanto {P} escutava seus segredos brilhantes, {V} aprendeu que nunca mais estaria sozinho. | e: a paz voltasse a {E}. O c├®u ficou sereno novamente e as estrelas brilharam mais forte do que nunca. ]]

Os tr├¬s ÔÇö {P}, [[p: {V} | e: a calma ]] e as estrelas de {E} ÔÇö tornaram-se os melhores amigos de todo o universo. ­ƒîÖ­ƒîƒ`
      },
      {
        titulo: "{pe} {P}, {O} e o mist├®rio de {E}",
        cuerpo: `Tudo come├ºou numa ter├ºa-feira perfeitamente comum quando {P} encontrou um bilhete misterioso na porta de {E}: "Algu├®m roubou a alegria deste lugar. Siga as pegadas luminosas e descubra quem foi."

{P} n├úo hesitou nem por um segundo! Seguiu os rastros de poeira de estrelas que serpenteavam por {E} at├® chegar a uma clareira escondida, fundo entre grandes ├írvores antigas.

L├í estava [[p: {V}, rodeado de toda a alegria de {E}: risos engarrafados em pequenos frascos, cores embaladas em pequenas bolsinhas e melodias guardadas em pequenas caixinhas. Mas {V} n├úo estava rindo ÔÇö estava sentado no ch├úo, com uma express├úo muito triste. | e: o efeito de {V}, que tinha aprisionado toda a alegria de {E}: as risadas, as cores e as melodias estavam envoltas em um redemoinho de confus├úo. ]]

[[p: "Por que voc├¬ pegou tudo isso?" ÔÇö perguntou {P} com voz gentil. | e: ]]

[[p: {V} explicou entre solu├ºos que queria guardar a alegria de {E} em seguran├ºa, pois tinha um medo terr├¡vel de que um dia ela acabasse. "Tenho tanto medo que um dia n├úo reste mais nada bonito..." sussurrou. | e: Parecia que o ambiente tinha aprisionado a alegria por medo de perd├¬-la, criando um clima de melancolia em todo o lugar. ]]

{P} ergueu {oa_art} e sua magia criou algo extraordin├írio: uma fonte inesgot├ível de alegria no cora├º├úo de {E}, uma que nunca secaria enquanto algu├®m quisesse compartilhar.

[[p: {V} abriu todos os frascos, as bolsinhas e as caixinhas, e a alegria inundou {E} numa cascata de cores. | e: O redemoinho de {V} se dissipou suavemente, libertando toda a alegria acumulada, e as cores inundaram {E}. ]] Foi o dia mais bonito de que qualquer pessoa naquele lugar j├í se lembrava.

Naquela noite, {P} se aninhou sob as estrelas, sabendo que a alegria, quando compartilhada, n├úo diminui ÔÇö se multiplica. ­ƒî£­ƒÆ½`
      },
      {
        titulo: "­ƒÆ½ A jornada de {P} para {E}",
        cuerpo: `{P} sempre sonhou em visitar {E}. As paredes do seu quarto estavam cheias de desenhos, mapas e cart├Áes-postais daquele lugar m├ígico. E um belo dia, finalmente, decidiu que era hora de partir.

A jornada foi longa, mas cheia de maravilhas. {P} viu cachoeiras de chocolate, pontes feitas de nuvens fofas e p├íssaros que cantavam melodias que pareciam velhos amigos familiares.

Quando finalmente chegou a {E}, ficou completamente sem palavras. Era ainda mais bonito do que havia imaginado. Mas algo estava errado ÔÇö todos os habitantes estavam preocupados.

[[p: "├ë {V}" ÔÇö explicou um pequeno duende ÔÇö. "Esta manh├ú ele entrou em {ea} e bagun├ºou tudo sem querer. Confundiu o norte com o sul, e agora ningu├®m sabe onde fica nada!" | e: "├ë por causa de {V}" ÔÇö explicou um pequeno duende ÔÇö. "Esta manh├ú ele chegou a {ea} e bagun├ºou tudo. O vento soprou t├úo forte que confundiu o norte com o sul, e agora ningu├®m sabe onde fica nada!" ]]

{P} encontrou [[p: {V} tentando freneticamente consertar as coisas, trope├ºando numa coisa enquanto tentava endireitar outra. Era adoravelmente atrapalhado, a ponto de {P} n├úo poder evitar uma gargalhada calorosa. | e: a ├írea por onde {V} tinha passado, com rastros de folhas e areia por toda parte. ]]

Juntos, com a ajuda de {oa_art} que esperava na entrada da terra, colocaram {E} em ordem em tempo recorde. Cada objeto voltou ao seu lugar com um pequeno brilho de magia e um pequeno tinido.

Quando tudo estava perfeito, [[p: {V} se virou para {P} com bochechas coradas: "Obrigado. Nunca ningu├®m tinha me ajudado sem rir de mim." | e: o ar em {E} voltou a ser fresco e tranquilo. ]]

[[p: "Ah, eu ri sim!" ÔÇö admitiu {P} com um sorriso ÔÇö. "But s├│ porque voc├¬ ├® encantador." | e: ]]

Daquele dia em diante, {P} tornou-se o guardi├úo de {E} [[p: e {V} seu assistente mais fiel ÔÇö embora um pouco atrapalhado. | e: cuidando para que o clima fosse sempre agrad├ível para todos. ]] E viveram felizes por muitas e muitas noites. ­ƒîÖÔ¡É­ƒÆñ`
      },
      {
        titulo: "­ƒÄ¡ {P} e o Grande Festival de {E}",
        cuerpo: `Tudo estava pronto para a maior festa do ano em {E}! {P} havia passado semanas preparando cord├Áes de luzes, bal├Áes coloridos e um enorme bolo de v├írios andares. Esta noite era o Grande Festival.

Mas com apenas uma hora para o in├¡cio, algo terr├¡vel aconteceu: a m├║sica havia desaparecido. Sem m├║sica, n├úo havia festa!

A culpada era {V}, que havia escondido todos os instrumentos porque queria toc├í-los sozinha antes que os convidados chegassem ÔÇö mas n├úo sabia tocar nenhum deles, e agora estava rodeada de instrumentos e chorando de vergonha.

{P} n├úo a repreendeu. Em vez disso, sentou-se ao lado dela e lhe ensinou algo simples: como fazer m├║sica apenas com as m├úos. Palmas, estalos de dedos, batidinhas suaves nos joelhos.

Ent├úo {P} se lembrou de {oa_art}. Ao toc├í-lo(a), uma doce e perfeita melodia preencheu cada canto de {E}, fazendo at├® as flores e nuvens quererem dan├ºar.

{V} se juntou ├á m├║sica com suas palmas, e logo todos os convidados chegaram e come├ºaram a dan├ºar. Foi o melhor festival que {E} j├í viveu.

"Obrigado(a) por trazer a harmonia de volta!" todos aplaudiram. E {V}, cujas palmas eram o batimento secreto de tudo, recebeu a maior salva de palmas da noite.

Exausto(a) de tanta divers├úo, {P} adormeceu com um sorriso de orelha a orelha. ­ƒî£Ô£¿`
      },
      {
        titulo: "­ƒÄü Um presente das estrelas para {P}",
        cuerpo: `Era uma noite extraordinariamente tranquila em {E} quando algo derivou do c├®u como um floco de neve brilhante. Ao pousar, descobriu-se que era {oa_art}, brilhando com a luz de mil gal├íxias.

{P} o(a) segurou com cuidado. Ao toc├í-lo(a), sentiu que poderia transformar os medos mais profundos em belos sonhos coloridos.

"{pe} ├ë um presente muito especial!" exclamou {P}.

Mas ent├úo {V} apareceu, com olhos que mostravam que havia chorado. Explicou que o presente havia ca├¡do exatamente onde morava, e que realmente havia acreditado que era para ele(a).

{P} pensou por um momento e teve uma ideia maravilhosa: "E se a gente compartilhar? Voc├¬ tem medo ├á noite, e eu quero ajudar todos em {E}. Podemos fazer as duas coisas ao mesmo tempo!"

{V} piscou, espantado(a). Ningu├®m jamais havia oferecido compartilhar algo assim com ele(a).

Naquela noite, {P} e {V} usaram juntos a magia de {oa_art} para que todos em {E} tivessem belos sonhos: as crian├ºas sonharam com aventuras, os adultos com mem├│rias felizes, e {V} sonhou ÔÇö pela primeira vez ÔÇö sem nenhum medo.

{P} fechou os olhos, grato(a), sabendo que a generosidade ├® a magia mais poderosa de todas. ­ƒîƒ­ƒÆñ`
      },
      {
        titulo: "­ƒÉ¥ {P} ao resgate em {E}",
        cuerpo: `Era uma tarde calma em {E} quando {P} ouviu um som peculiar: algo entre um gemido e uma risadinha, que vinha dos arbustos. Aproximando-se, encontrou um pequeno animal perdido ÔÇö e bem ao lado, {V}.

{V} havia tentado ajudar a criaturinha a encontrar o caminho de volta para casa, mas sendo t├úo distra├¡do(a) quanto era, os dois acabaram perdidos juntos num canto de {E} que nenhum dos dois havia visto antes.

"{pe} Que bagun├ºa engra├ºada a gente fez!" admitiu {V}, se co├ºando.

{P} n├úo p├┤de evitar rir, mas rapidamente produziu {oa_art}. O objeto come├ºou a brilhar com uma luz quente e constante, tra├ºando no ar um caminho luminoso que levava diretamente ├á casa do pequeno animal.

Pelo caminho, {P} explicou a {V} como se orientar com as estrelas e as flores. "As flores da floresta sempre ficam de frente para o sol, ent├úo se voc├¬ sabe onde o sol est├í ao meio-dia, nunca vai se perder."

{V} escutou com aten├º├úo, anotando mentalmente cada dica. Quando o pequeno animal chegou em casa s├úo e salvo, sua fam├¡lia o recebeu com tanto amor que as l├ígrimas de alegria eram vis├¡veis ao redor.

"{pe} Voc├¬ ├® t├úo corajoso(a)" sussurrou o pequeno animal para {P}. "E voc├¬, {V} ÔÇö mesmo se perdendo, nunca me abandonou!"

{V} corou de felicidade. Havia falhado em guiar, mas triunfado no que realmente importava: estar presente.

Com o cora├º├úo em paz e uma li├º├úo bem aprendida, todos fizeram o caminho de volta para descansar sob as estrelas de {E}. ­ƒîø­ƒÆ¿`
      },
      {
        titulo: "­ƒî© {P} e a mudan├ºa de esta├º├úo em {E}",
        cuerpo: `A primavera deveria ter chegado a {E}, mas algo a retinha. Os campos ainda estavam cobertos de neve e as flores se recusavam a acordar. Todos em {E} estavam intrigados.

O(A) culpado(a) ÔÇö embora completamente sem inten├º├úo ÔÇö era {V}, que havia encontrado um bot├úo m├ígico em forma de floco de neve e o havia apertado muitas, muitas vezes, pois era simplesmente ador├ível demais para resistir. E a cada aperto, um pouco mais de inverno chegava!

"Eu n├úo sabia que isso ia acontecer" confessou {V} com uma voz bem pequenina.

{P} pegou {oa_art} com delicadeza e soprou suavemente sobre as flores adormecidas. Uma a uma, como se acordassem de um longo sonho doce, elas abriram suas p├®talas: primeiro algumas t├¡midas, depois todas de uma vez, numa grande cascata de cores.

"Isso ├® lindo!" gritou {V}, que nunca havia visto flores desabrochando de verdade, pois sempre chegava quando tudo j├í estava aberto.

{P} explicou que certos momentos especiais na natureza precisam ser aguardados com paci├¬ncia ÔÇö que n├úo se pode for├ºar as flores a florescer, assim como n├úo se pode for├ºar um sonho a se realizar.

Todo o {E} se encheu de cores, perfumes doces e o alegre zumbido das abelhas. A partir daquele dia, {V} cuidou muito bem do bot├úo floco de neve e s├│ o apertava no ver├úo, para trazer um pouco de frescor.

E {P}, com um cora├º├úo t├úo leve quanto uma p├®tala ao vento, se preparou para um dia de brincadeiras sem fim. ­ƒî╝­ƒî£`
      },
      {
        titulo: "­ƒÄÂ A melodia perdida de {E}",
        cuerpo: `Um estranho e pesado sil├¬ncio havia se instalado sobre {E}. Nenhum p├íssaro cantava, nenhum vento movia as folhas, nenhum riacho murmurava. Como se a m├║sica do mundo tivesse simplesmente desaparecido.

{P} decidiu encontrar os sons perdidos. Andou, procurou e fez perguntas at├® chegar ├á caverna mais profunda de todo o {E}, onde encontrou {V} sentado(a) alegremente, rodeado(a) de milhares de sons ÔÇö cada um preso numa pequena bolha de sab├úo flutuante.

"Eu coleciono sons" explicou {V} alegremente. "J├í tenho o canto do primeiro p├íssaro da manh├ú, o som da chuva nas folhas e tr├¬s variedades diferentes de sil├¬ncio!"

{P} entendeu que {V} n├úo era nem um pouco mau(m├í) ÔÇö apenas incrivelmente curioso(a). Prop├┤s um acordo: {V} libertaria todos os sons se {P} o(a) ajudasse a aprender a fazer m├║sica de verdade.

{V} aceitou com enorme entusiasmo. Quando as bolhas foram libertas, {E} explodiu numa magn├¡fica sinfonia: todos os sons do mundo tocando ao mesmo tempo, criando a melodia mais bonita que algu├®m jamais ouvira.

Em seguida, {P} tocou {oa_art} e criou algo novo: uma pequena can├º├úo especial s├│ para {V} ÔÇö uma melodia que carregava seu nome, que ele(a) podia ouvir sempre que quisesse.

"{pe} A m├║sica voltou!" gritou {P}, "e temos uma can├º├úo novinha em folha!"

Naquela noite, {E} estava cheio de vida, e {P} adormeceu embalado(a) pelo feliz batimento do cora├º├úo da terra. ­ƒÄÁ­ƒÆñ`
      },
      {
        titulo: "­ƒÜÇ {P} e o visitante do espa├ºo",
        cuerpo: `Um foguete prateado pousou em {E} com uma suave explos├úo de luz azul. Dele saiu um visitante do espa├ºo: pequeno e redondo, com olhos enormes como luas cheias e um sorriso que ocupava todo o seu rosto.

Todos em {E} se reuniram curiosos, mas ningu├®m conseguia entender o que o visitante dizia. Suas palavras soavam como m├║sica distante, como pequenos sinos tilintando debaixo d'├ígua.

Ent├úo {V} se adiantou, absolutamente convicto(a) de que podia falar o idioma espacial ÔÇö porque uma vez havia sonhado que conseguia. Plantou-se na frente do visitante e come├ºou a dizer coisas sem sentido em voz muito alta. O visitante parecia cada vez mais confuso!

{P} sorriu com paci├¬ncia e pegou {oa_art}. Com sua magia, o objeto traduziu os pensamentos do visitante em bolhas de luz que todos podiam ver e entender.

O visitante vinha de um planeta onde as hist├│rias haviam acabado. Havia viajado por toda a gal├íxia em busca de um lugar onde as hist├│rias nunca terminassem, e havia encontrado {E}.

{P} fez uma promessa maravilhosa: toda noite, antes de dormir, algu├®m de {E} contaria uma hist├│ria nova. O visitante colocaria essas hist├│rias em seu foguete e as levaria de volta ao seu planeta, para que as crian├ºas de l├í tamb├®m pudessem sonhar.

"{pe} Agora somos amigos intergal├ícticos!" disse {P}. E {V}, que havia tentado ajudar ├á sua maneira, foi nomeado(a) Embaixador(a) das Palavras Maravilhosamente Confusas ÔÇö que se revelaram absolutamente perfeitas para fazer todos rirem.

Quando o visitante partiu, {P} olhou para as estrelas e soube: nenhuma hist├│ria ├® perdida para sempre. ­ƒîîÔ£¿`
      },
      {
        titulo: "­ƒÅå {P} e o show de talentos",
        cuerpo: `Hoje era o dia do Grande Show de Talentos de {E}. Havia flautistas do vento, domadores de nuvens, pintores de arco-├¡ris e dan├ºarinos de raios de sol. {P} assistia a tudo com admira├º├úo ÔÇö e um leve friozinho na barriga.

Mas quando chegou a vez de {P}, algo inesperado aconteceu: {V} havia subido ao palco primeiro, achando que o show come├ºava mais tarde, e agora fazia malabarismo com frutas silvestres na frente de todo o p├║blico. Ningu├®m tinha coragem de dizer que n├úo era sua vez!

{P} observou por um momento. {V} era adoravelmente desastroso(a): deixando cair metade das frutas, trope├ºando nos pr├│prios p├®s e ainda assim exibindo um sorriso enorme. O p├║blico, embora desconcertado, come├ºava a rir com genu├¡no carinho.

Ent├úo {P} teve uma ideia brilhante. Subiu ao palco ao lado de {V} e ergueu {oa_art}. Com sua magia, criou figuras de luz que dan├ºavam junto com o malabarismo de {V}, transformando cada trope├ºo em um movimento art├¡stico e cada frutinha derrubada em uma estrela brilhante.

A apresenta├º├úo foi como nenhuma outra: metade m├ígica, metade belo caos, completamente ├║nica.

"{pe} S├úo os vencedores!" todos aplaudiram quando terminou ÔÇö pois haviam feito algo que ningu├®m esperava: transformar um acidente em arte.

{P} aprendeu que seu maior talento n├úo era a perfei├º├úo, mas a capacidade de encontrar magia onde os outros s├│ veem bagun├ºa. E dormiu profundamente naquela noite, sonhando com manh├ús cheias de possibilidades. ­ƒÅà­ƒîƒ`
      },
      {
        titulo: "­ƒôÜ {P} na Biblioteca dos Sonhos",
        cuerpo: `Em {E} havia uma biblioteca muito especial: seus livros n├úo eram lidos, eram vividos. Quando se abria um, mergulhava-se de cabe├ºa na hist├│ria e a vivia por dentro. As pessoas podiam passar tardes inteiras explorando outros mundos sem nunca sair do pr├®dio.

Uma tarde, {P} chegou cheio(a) de curiosidade ÔÇö e encontrou {V} preso(a) dentro de um livro. Havia entrado em "O Grande Labirinto dos Sonhos" e n├úo conseguia achar a sa├¡da. Estava dando voltas em c├¡rculos h├í horas.

"{pe} {P}, por favor, estou procurando h├í uma eternidade!" veio a voz de {V} das p├íginas.

{P} ergueu {oa_art}. Sua magia iluminou as p├íginas, revelando o caminho correto pelo labirinto. Mas {P} teve uma ideia melhor do que simplesmente mostrar o caminho: em vez de dar a resposta diretamente a {V}, deu pistas.

"Olhe os desenhos nas paredes do labirinto. As setinhas sempre apontam para o cora├º├úo do livro, nunca para a sa├¡da."

{V} seguiu as pistas uma a uma ÔÇö e quando finalmente saiu do livro, seus olhos brilhavam de emo├º├úo.

"{pe} Resolvi sozinho(a)! Bem... com as suas dicas."

{P} explicou que era exatamente para isso que serviam os livros: n├úo para dar as respostas, mas para dar as ferramentas para encontr├í-las por conta pr├│pria.

Sentaram-se juntos na biblioteca e {P} escolheu um livro dourado com p├íginas em branco. Come├ºaram a escrever nele a hist├│ria daquela tarde ÔÇö porque as melhores hist├│rias s├úo sempre as que voc├¬ mesmo(a) vive.

Cada dia ├® uma nova p├ígina. E enquanto voc├¬ encontrar amigos como {V}, nenhuma p├ígina estar├í em branco. ­ƒôûÔ£¿`
      },
      {
        titulo: "­ƒÄ¿ {P} e o dia em que as cores desapareceram",
        cuerpo: `{E} acordou diferente. O c├®u estava cinza, as flores haviam perdido sua cor, os p├íssaros eram preto e branco e at├® o arco-├¡ris parecia uma p├ílida linha cinza. Algu├®m havia roubado todas as cores.

{P} investigou, seguindo um rastro de pequenas manchas cinzas at├® encontrar {V}, sentado(a) no meio de uma enorme po├ºa de... cores misturadas. Havia querido criar a cor perfeita, pegando um pouquinho de cada coisa, e havia misturado t├úo bem que todas as cores tinham se tornado cinza.

"{V}... o que voc├¬ fez?" perguntou {P}, sem conseguir acreditar.

"Queria criar a cor mais bonita do mundo" respondeu {V} com uma voz bem pequenina. "Uma que contivesse tudo."

{P} entendeu. {V} n├úo havia querido destruir as cores ÔÇö estava tentando fazer o oposto: encontrar a beleza na uni├úo de todas as coisas. Havia apenas esquecido que o segredo das cores ├® que elas brilham mais quando est├úo separadas.

{P} ergueu {oa_art} e, como o pincel mais m├ígico do universo, come├ºou a separar as cores da po├ºa. Uma a uma, elas voltaram aos seus lugares: azul para o c├®u, verde para as folhas, amarelo para o sol, vermelho para as rosas.

{V} ajudou com muito entusiasmo ÔÇö embora colocando algumas cores em lugares inesperados: uma nuvem laranja aqui, uma ├írvore lil├ís ali. E acontece que {E} ficou mais colorido e alegre do que jamais havia sido.

"Voc├¬ conseguiu de novo!" disse {V} admirado(a). "Voc├¬ transformou minha bagun├ºa em algo bonito!"

{P} sorriu. "N├│s fizemos juntos."

Naquela noite, {P} olhou para {E} l├í de cima e pensou: n├úo h├í erro t├úo grande que n├úo possa se tornar, com ajuda e criatividade, mais bonito que o original. ­ƒîê­ƒÿ┤`
      },
      {
        titulo: "­ƒò»´©Å A promessa do amanh├ú",
        cuerpo: `{P} estava sentado(a) sob a grande ├írvore centen├íria de {E} ÔÇö aquela que as pessoas diziam ser t├úo velha que se lembrava do primeiro dia do mundo. Havia sido um dia dif├¡cil: as coisas n├úo tinham sa├¡do como planejado, e o cora├º├úo de {P} estava um pouco pesado.

Foi ent├úo que {V} chegou. {V} tinha um dom peculiar: a capacidade de cheirar a tristeza. N├úo era uma habilidade muito ├║til em geral, mas em momentos como aquele, ela o(a) levava exatamente at├® onde algu├®m precisava de companhia.

"O que est├í acontecendo?" perguntou {V} sentando-se ao lado.

{P} compartilhou suas preocupa├º├Áes, enquanto {oa_art} come├ºou a brilhar suavemente por conta pr├│pria, com uma luz quente e gentil ÔÇö como se tamb├®m quisesse ajudar a acalmar o momento.

{O} mostrou a {P} vis├Áes de campos cheios de flores, onde os erros do passado haviam se tornado sementes para o futuro. Mostrou risos compartilhados com amigos ainda por conhecer, e aventuras que s├│ poderiam acontecer se {P} acordasse amanh├ú com esperan├ºa.

{V} n├úo sabia o que dizer, ent├úo fez a ├║nica coisa que sabia fazer quando algu├®m estava triste: aconchegou-se bem pertinho e pousou a cabe├ºa no ombro de {P} ÔÇö como um pequeno girassol que sempre busca a luz.

"{pe} Amanh├ú vai ser incr├¡vel" prometeu {P} em voz baixa ÔÇö e desta vez acreditou de verdade.

Porque na vida, os dias dif├¡ceis s├úo o pre├ºo que pagamos pelos dias maravilhosos. E quando se tem algu├®m que fica ao seu lado nos dif├¡ceis, os maravilhosos brilham ainda mais.

A brisa suave de {E} embalalou os dois at├® adormeceram, lado a lado, enquanto as estrelas faziam a guarda sobre eles durante toda a longa noite. ­ƒî£­ƒÆñ`
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
  
  // Anti-repetici├│n: Obtener ├¡ndice del historial local
  let selectedIdx = 0;
  
  // Clave ├║nica por combinaci├│n y lenguaje
  const key = `cc_history_${currentLang}_${personajeId}_${escenarioId}_${objetoId}`;
  let used = [];
  try {
    used = JSON.parse(localStorage.getItem(key)) || [];
  } catch(e) { used = []; }

  // Encontrar ├¡ndices disponibles
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
  
  // Espa├▒ol gram├ítica
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
    '{V}': villano ? `${villano.emoji} ${villano.nombre}` : 'Ô£¿ el misterioso visitante',
    
    // Solo relevante para espa├▒ol
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
