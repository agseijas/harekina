interface TranslatedTitles {
  presentation: string;
  analytics?: string;
  contact: {
    wantToAdopt: string;
    email: string;
    whatsapp: string;
    phone: string;
    conditions: string;
    conditions_warning: string;
    donations: string;
    socials: {
      title: string;
    }
  }
  title: string;
  sex: string;
  description: string;
  status: string;
  birthdate: string;
  age: string;
  knowme: string;
  knowme_button_info: string;
  family: string;
  furColors: string;
  breed: string;
  eyeColor: string;
  weight: string;
  personality: string;
  health: string;
  neutered: string;
  vaccinated: string;
  vaccinatedDate: string;
  vaccinatedType: string;
  unavailable: string;
  footer: {
    main: string;
    sub_text: string;
  },
  legal_warning: string;
}

export const CONTACT_ADDRESSES = {
  email: process.env.CONTACT_EMAIL || 'gfamadrid@gmail.com',
  phone: process.env.CONTACT_PHONE || '+34 612345678',
  whatsapp: process.env.CONTACT_WHATSAPP || 'https://api.whatsapp.com/send?phone=34636134928',
  instagram: process.env.CONTACT_INSTAGRAM || 'https://www.instagram.com/gfam_madrid/',
  facebook: process.env.CONTACT_FACEBOOK || 'https://www.facebook.com/GFAMadrid',
  youtube: process.env.CONTACT_YOUTUBE || 'https://www.youtube.com/@gfam_madrid',
  donations: {
    teaming: process.env.DONATIONS_TEAMING || 'https://www.teaming.net/lavegacats',
    teaming_other: process.env.DONATIONS_TEAMING_OTHER || 'https://www.teaming.net/gfam',
    amazon_wishlist: process.env.DONATIONS_AMAZON_WISHLIST || 'https://www.amazon.es/hz/wishlist/ls/3PSQCVHRI848W?ref_=wl_share',
  }
}

export const TEXTS: { [key: string]: TranslatedTitles } = {
  es: {
    analytics: `<script data-goatcounter="https://lavegacats.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>`,
    presentation: `
      <span class="accented">GFAM (Gestión Felina Aeroportuaria de Madrid)</span> nace de la preocupación de un grupo de trabajadores del aeropuerto
      de <span class="accented">Madrid-Barajas</span> por la creciente cantidad de gatos que aparecen en las instalaciones. <span class="accented">GFAM</span> opera sin ninguna ayuda,
      <span class="accented-other">ni de AENA ni de otras compañías</span> y con el esfuerzo económico de las fundadoras se creó el
      <span class="accented">Santuario La Vega Cats</span>, un espacio protegido en <span class="accented">Madrid</span>.
      <details>
        <summary>Quiero saber un poco más sobre el proyecto...</summary>
        <p>
          <span class="accented">GFAM</span> se funda en 2017 como asociación sin ánimo de lucro, para ocuparse de más de los 400 gatos censados en las colonias del recinto aeroportuario,
          gestionándolas con el método <span class="accented">CES</span> (captura, esterilización y suelta) y para desarrollar tareas de rescate con los
          animales que por distintas circunstancias -entornos insalubres o peligrosos, camadas en riesgo, enfermedad o heridas- hay que retirar de las instalaciones.
          <br /><br />
          En el <span class="accented">Santuario La Vega Cats</span> los gatos rescatados de las colonias del aeropuerto reciben todos los cuidados veterinarios
          y la seguridad que necesitan para llevar una vida digna.
          Hoy son unos 120 gatos los residentes y unos 100 los que viven aún en las colonias del aeropuerto.
        </p>
      </details>
      <br /><br />
      <span class="accented">¡Y nuestros gatos están buscando un hogar!</span> Si queréis dárselo, aquí puedes ver a los ...<br />
      `,
    contact: {
      wantToAdopt: '¿Queréis adoptar a ',
      email: `Email: <a href="mailto:${CONTACT_ADDRESSES.email}">${CONTACT_ADDRESSES.email}</a>`,
      donations: `
        Además puedes ayudarnos de otras muchas maneras:<br />
        <ul>
          <li><a href="${CONTACT_ADDRESSES.donations.teaming}" target="_blank">Donando 1 €urogatito al mes para el santuario</a><br /></li>
          <li><a href="${CONTACT_ADDRESSES.donations.teaming_other}" target="_blank">Donando 1 €urogatito al mes para los rescates de GFAM</a><br /></li>
          <li><a href="${CONTACT_ADDRESSES.donations.amazon_wishlist}" target="_blank">Enviando comida mediante nuestra Amazon Wishlist</a><br /></li>
          <li>Haciendo una donación puntual a nuestra cuenta: ES3400730100560505884140<br/></li>
        </ul>
        `,
      whatsapp: '¿Preparados? Escribidnos por Whatsapp',
      phone: 'Llamada/SMS',
      conditions: `
        Condiciones de adopción:<br/><br/>

        1. Contacto sólo por WhatsApp.<br/><br/>

        2. Venid a conocer nuestros gatos al Santuario.<br/><br/>

        3. Si queréis adoptar un bebé tiene que ser adoptado junto a otro bebé o tener ya otro gatito en casa.<br/><br/>

        4. Haremos visita a vuestro domicilio y os pediremos que tengais o pongais protecciones en ventanas, balcones y terrazas.<br/><br/>

        5. Hacemos contrato de preadopción y se hace cambio de chip en 6 meses si todo ha ido bien. Seguiremos siempre en contacto para que nos conteis sobre el gatito.<br/><br/>
      `,
      conditions_warning: `
        Al contactar, aceptais nuestras condiciones de adopción y protección de datos.<br/><br/>
        "Adoptar es un compromiso, no un capricho."<br/><br/>
        Si no podeis adoptar, pero quereis ayudar 🏥, podéis apadrinarlos o hacer una donación a través de nuestro
        <a href="${CONTACT_ADDRESSES.donations.teaming}" target="_blank">Teaming</a> o
        <a href="${CONTACT_ADDRESSES.donations.amazon_wishlist}" target="_blank">Amazon Lista de Deseos</a>.<br/><br/>
        También podéis ayudarnos compartiendo nuestros posts en redes sociales 🧑🏻‍🤝‍🧑🏿.<br/>
        Si queréis colaborar de otra manera, no dudéis en contactarnos
        a través de nuestras redes sociales, por email o por Whatsapp 📱.<br/><br/>
        Si estáis listos para adoptar:<br/><br/>
        <a class="expandable-header" id="expandableHeader">Haced click aquí para leer las condiciones de adopción y
        obtener el medio de contacto (WhatsApp)</a>
      `,
      socials: {
        title: 'Nuestras redes sociales:<br/>',
      },
    },
    title: 'Adoptables',
    sex: 'Sexo',
    description: 'Descripcion',
    status: 'Estado',
    birthdate: 'Fecha de nacimiento',
    age: 'Edad (años)',
    knowme: 'Conóceme',
    knowme_button_info: 'Desliza ⬇️ para conocerme un poco más',
    family: 'Familia',
    furColors: 'Colores de pelaje',
    breed: 'Raza',
    eyeColor: 'Color de ojos',
    weight: 'Peso',
    personality: 'Personalidad',
    health: 'Salud',
    neutered: 'Esterilizado/Esterilizada',
    vaccinated: 'Vacunado/Vacunada',
    vaccinatedDate: 'Fecha de vacunación',
    vaccinatedType: 'Tipo de vacuna',
    unavailable: 'No disponible',
    footer: {
      main: `©️ 2025 La Vega Cats - GFAM.<br/>Un proyecto hecho con mucho ❤️ a todos los animales. <a href="./legal-warning.html">Aviso legal.</a>`,
      sub_text: 'Si os ha gustado esta web, ¡es open source y os la podéis copiar! Si lo necesitáis podemos ayudaros a crear la vuestra también (ponéos en contacto sin problema) o si se os da bien programar, podeis hacer un fork de nuestro <a href="https://github.com/agseijas/harekina">repositorio de GitHub</a>.',
    },
    legal_warning: `
<h1>AVISO LEGAL Y CONDICIONES GENERALES DE USO</h1><br/>

lavegacats.netlify.app<br/>

I. INFORMACIÓN GENERAL<br/><br/>

En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de
la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes
datos de información general de este sitio web:

La titularidad de este sitio web, lavegacats.netlify.app, (en adelante, Sitio Web) la ostenta: Gestion Felina
Aeroportuaria de Madrid, provista de NIF: G87916169 e inscrita en: Registro de Asociaciones de la
Comunidad de Madrid con los siguientes datos registrales: , cuyo representante es: , y cuyos datos de
contacto son:<br/>

Dirección: Calle Euterpe 17, Bajo C 28022 Madrid<br/>
Teléfono de contacto:<br/>
Email de contacto: ${CONTACT_ADDRESSES.email}
<br/><br/>

<h2>II. TÉRMINOS Y CONDICIONES GENERALES DE USO</h2><br/><br/>

El objeto de las condiciones: El Sitio Web<br/><br/>
El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y
la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la
apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es
decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en
el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su
caso ofrezca a los Usuarios (en adelante, Servicios).<br/>
La Vega Cats GFAM se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la
presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar
incorporados. El Usuario reconoce y acepta que en cualquier momento La Vega Cats GFAM pueda
interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el
acceso a los mismos.<br/>
El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario
tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de
conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere
contratado el Usuario.<br/>
La utilización de alguno de los Contenidos o Servicios del Sitio Web podrá hacerse mediante la suscripción
o registro previo del Usuario.<br/>

<h3>El Usuario</h3>

El acceso, la navegación y uso del Sitio Web, así como por los espacios habilitados para interactuar entre
los Usuarios, y el Usuario y La Vega Cats GFAM, como los comentarios y/o espacios de blogging, confiere la
condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las
Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la
correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo
anterior, se recomienda al Usuario leerlas cada vez que visite el Sitio Web.<br/><br/>

El Sitio Web de La Vega Cats GFAM proporciona gran diversidad de información, servicios y datos. El
Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se
extenderá a:<br/><br/>

- Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por La Vega Cats GFAM sin que
sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que
de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo
funcionamiento del Sitio Web.<br/>
- La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos
por La Vega Cats GFAM para el acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio Web. En
todo caso, el Usuario notificará de forma inmediata a La Vega Cats GFAM acerca de cualquier hecho
que permita el uso indebido de la información registrada en dichos formularios, tales como, pero no
solo, el robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de
proceder a su inmediata cancelación.<br/><br/>


La Vega Cats GFAM se reserva el derecho de retirar todos aquellos comentarios y aportaciones que
vulneren la ley, el respeto a la dignidad de la persona, que sean discriminatorios, xenófobos, racistas,
pornográficos, spamming, que atenten contra la juventud o la infancia, el orden o la seguridad pública o
que, a su juicio, no resultaran adecuados para su publicación.<br/><br/>


En cualquier caso, La Vega Cats GFAM no será responsable de las opiniones vertidas por los Usuarios a
través de comentarios u otras herramientas de blogging o de participación que pueda haber.
El mero acceso a este Sitio Web no supone entablar ningún tipo de relación de carácter comercial entre La
Vega Cats GFAM y el Usuario.<br/><br/>

El Usuario declara ser mayor de edad y disponer de la capacidad jurídica suficiente para vincularse por las
presentes Condiciones. Por lo tanto, este Sitio Web de La Vega Cats GFAM no se dirige a menores de edad.
La Vega Cats GFAM declina cualquier responsabilidad por el incumplimiento de este requisito.
<br/><br/>
El Sitio Web está dirigido principalmente a Usuarios residentes en España. La Vega Cats GFAM no asegura
que el Sitio Web cumpla con legislaciones de otros países, ya sea total o parcialmente. Si el Usuario reside
o tiene su domiciliado en otro lugar y decide acceder y/o navegar en el Sitio Web lo hará bajo su propia
responsabilidad, deberá asegurarse de que tal acceso y navegación cumple con la legislación local que le
es aplicable, no asumiendo La Vega Cats GFAM responsabilidad alguna que se pueda derivar de dicho
acceso.<br/><br/>

<h2>III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2><br/><br/>

La Vega Cats GFAM no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los
Contenidos o Servicios. La Vega Cats GFAM hará todo lo posible por el buen funcionamiento del Sitio Web,
sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido
o que esté libre de error.<br/>

Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de
este Sitio Web, esté libre de error o cause un daño al sistema informático (software y hardware) del
Usuario. En ningún caso La Vega Cats GFAM será responsable por las pérdidas, daños o perjuicios de
cualquier tipo que surjan por el acceso, navegación y el uso del Sitio Web, incluyéndose, pero no
limitándose, a los ocasionados a los sistemas informáticos o los provocados por la introducción de virus.<br/><br/>

La Vega Cats GFAM tampoco se hace responsable de los daños que pudiesen ocasionarse a los usuarios
por un uso inadecuado de este Sitio Web. En particular, no se hace responsable en modo alguno de las
caídas, interrupciones, falta o defecto de las telecomunicaciones que pudieran ocurrir.
<br/><br/>

<h2>IV. POLÍTICA DE ENLACES</h2><br/><br/>

Se informa que el Sitio Web de La Vega Cats GFAM pone o puede poner a disposición de los Usuarios
medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que
permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros.

La instalación de estos enlaces, directorios y motores de búsqueda en el Sitio Web tiene por objeto facilitar
a los Usuarios la búsqueda de y acceso a la información disponible en Internet, sin que pueda considerarse
una sugerencia, recomendación o invitación para la visita de los mismos.

La Vega Cats GFAM ofrece contenidos patrocinados, anuncios y/o enlaces de afiliados. La información que
aparece en estos enlaces de afiliados o los anuncios insertados, son facilitados por los propios
anunciantes, por lo que La Vega Cats GFAM no se hace responsable de posibles inexactitudes o errores
que pudieran contener los anuncios, ni garantiza en modo alguno la experiencia, integridad o
responsabilidad de los anunciantes o la calidad de sus productos y/o servicios.

Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o legalidad de sitios
ajenos a su propiedad a los que se pueda acceder por medio de los enlaces.

La Vega Cats GFAM en ningún caso revisará o controlará el contenido de otros sitios web, así como
tampoco aprueba, examina ni hace propios los productos y servicios, contenidos, archivos y cualquier otro
material existente en los referidos sitios enlazados.<br/><br/>

La Vega Cats GFAM no asume ninguna responsabilidad por los daños y perjuicios que pudieran producirse
por el acceso, uso, calidad o licitud de los contenidos, comunicaciones, opiniones, productos y servicios de
los sitios web no gestionados por La Vega Cats GFAM y que sean enlazados en este Sitio Web.

El Usuario o tercero que realice un hipervínculo desde una página web de otro, distinto, sitio web al Sitio
Web de La Vega Cats GFAM deberá saber que:<br/>

No se permite la reproducción —total o parcialmente— de ninguno de los Contenidos y/o Servicios del Sitio
Web sin autorización expresa de La Vega Cats GFAM.<br/>

No se permite tampoco ninguna manifestación falsa, inexacta o incorrecta sobre el Sitio Web de La Vega
Cats GFAM, ni sobre los Contenidos y/o Servicios del mismo.<br/>

A excepción del hipervínculo, el sitio web en el que se establezca dicho hiperenlace no contendrá ningún
elemento, de este Sitio Web, protegido como propiedad intelectual por el ordenamiento jurídico español,
salvo autorización expresa de La Vega Cats GFAM.<br/>

El establecimiento del hipervínculo no implicará la existencia de relaciones entre La Vega Cats GFAM y el
titular del sitio web desde el cual se realice, ni el conocimiento y aceptación de La Vega Cats GFAM de los
contenidos, servicios y/o actividades ofrecidas en dicho sitio web, y viceversa.<br/>

<h2>V. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2><br/><br/>

La Vega Cats GFAM por sí o como parte cesionaria, es titular de todos los derechos de propiedad
intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (a título
enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o textos, marcas o logotipos,
combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador
necesarios para su funcionamiento, acceso y uso, etc.). Serán, por consiguiente, obras protegidas como
propiedad intelectual por el ordenamiento jurídico español, siéndoles aplicables tanto la normativa
española y comunitaria en este campo, como los tratados internacionales relativos a la materia y suscritos
por España.<br/><br/>

Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan
expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad
de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines
comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de La Vega Cats GFAM.
El Usuario se compromete a respetar los derechos de propiedad intelectual e industrial de La Vega Cats
GFAM. Podrá visualizar los elementos del Sitio Web o incluso imprimirlos, copiarlos y almacenarlos en el
disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, exclusivamente, para
su uso personal. El Usuario, sin embargo, no podrá suprimir, alterar, o manipular cualquier dispositivo de
protección o sistema de seguridad que estuviera instalado en el Sitio Web.<br/><br/>

En caso de que el Usuario o tercero considere que cualquiera de los Contenidos del Sitio Web suponga una
violación de los derechos de protección de la propiedad intelectual, deberá comunicarlo inmediatamente a
La Vega Cats GFAM a través de los datos de contacto del apartado de INFORMACIÓN GENERAL de este
Aviso Legal y Condiciones Generales de Uso.<br/><br/>

<h2>VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2><br/><br/>

La Vega Cats GFAM se reserva la facultad de presentar las acciones civiles o penales que considere
necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes
Condiciones.<br/><br/>

La relación entre el Usuario y La Vega Cats GFAM se regirá por la normativa vigente y de aplicación en el
territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de
estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces
y tribunales que correspondan conforme a derecho.
<br/>

<h1>POLITICA DE PRIVACIDAD DEL SITIO WEB</h1>

POLÍTICA DE PRIVACIDAD DEL SITIO WEB<br/><br/>

lavegacats.netlify.app<br/><br/>

<h2>I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>
<br/><br/>
Respetando lo establecido en la legislación vigente, La Vega Cats - GFAM (en adelante, también Sitio Web)
se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad
adecuado al riesgo de los datos recogidos.<br/>
<br/>
Leyes que incorpora esta política de privacidad
<br/><br/>
Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de
protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:
<br/><br/>
- El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo
a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la
libre circulación de estos datos (RGPD).<br/>
- La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los
derechos digitales (LOPD-GDD).<br/>
- El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo
de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal
(RDLOPD).<br/>
- La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio
Electrónico (LSSI-CE).<br/>
<br/><br/>

Identidad del responsable del tratamiento de los datos personales
<br/>
El responsable del tratamiento de los datos personales recogidos en La Vega Cats - GFAM es: Gestion
Felina Aeroportuaria Madrid, provista de NIF/CIF: G87916169 e inscrito en: Registro de Asociaciones de la
Comunidad de Madrid con los siguientes datos registrales: , cuyo representante es: (en adelante,
Responsable del tratamiento). Sus datos de contacto son los siguientes:
<br/><br/>

Dirección: Calle Euterpe 17, Bajo C 28022 Madrid
Teléfono de contacto:
Email de contacto: gfamadrid@gmail.com

<br/><br/>
Registro de Datos de Carácter Personal<br/><br/>

En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales
recabados por La Vega Cats - GFAM, mediante los formularios extendidos en sus páginas quedarán
incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los
compromisos establecidos entre La Vega Cats - GFAM y el Usuario o el mantenimiento de la relación que
se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo.
Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la
excepción prevista en el artículo 30.5 del RGPD, se mantiene un registro de actividades de tratamiento
que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás
circunstancias establecidas en el RGPD.

<br/><br/>
Principios aplicables al tratamiento de los datos personales
<br/><br/>

El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el
artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de
Protección de Datos Personales y garantía de los derechos digitales:
<br/><br/>

- Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del
Usuario previa información completamente transparente de los fines para los cuales se recogen los
datos personales.<br/>
- Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados,
explícitos y legítimos.<br/>
- Principio de minimización de datos: los datos personales recogidos serán únicamente los
estrictamente necesarios en relación con los fines para los que son tratados.<br/>
- Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.<br/>
- Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de
forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su
tratamiento.<br/>
- Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se
garantice su seguridad y confidencialidad.<br/>
- Principio de responsabilidad proactiva: el Responsable del tratamiento será responsable de asegurar
que los principios anteriores se cumplen.

<br/><br/>
Categorías de datos personales
<br/><br/>

Las categorías de datos que se tratan en La Vega Cats - GFAM son únicamente datos identificativos. En
ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.

<br/><br/>
Base legal para el tratamiento de los datos personales
<br/><br/>

La base legal para el tratamiento de los datos personales es el consentimiento. La Vega Cats - GFAM se
compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus
datos personales para uno o varios fines específicos.
<br/><br/>

El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el
consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del
Sitio Web.

<br/><br/>

En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para
realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le
informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos
sean imprescindibles para el correcto desarrollo de la operación realizada.

<br/><br/>
Fines del tratamiento a que se destinan los datos personales
<br/><br/>

Los datos personales son recabados y gestionados por La Vega Cats - GFAM con la finalidad de poder
facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento
de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o
consulta.
<br/><br/>
Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y
estadística, y actividades propias del objeto social de La Vega Cats - GFAM, así como para la extracción,
almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así
como mejorar la calidad, funcionamiento y navegación por el Sitio Web.
<br/><br/>
En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines
específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará
a la información recopilada.

<br/><br/>
Períodos de retención de los datos personales
<br/><br/>

Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su
tratamiento y, en todo caso, únicamente durante el siguiente plazo: 12, o hasta que el Usuario solicite su
supresión.
En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante
el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para
determinar este plazo.

<br/><br/>
Destinatarios de los datos personales
<br/><br/>

Los datos personales del Usuario no serán compartidos con terceros.
En cualquier caso, en el momento en que se obtengan los datos personales, se informará al Usuario acerca
de los destinatarios o las categorías de destinatarios de los datos personales.

<br/><br/>
Datos personales de menores de edad
<br/><br/>

Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre,
de Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años
podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por La Vega
Cats - GFAM. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores
para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan
autorizado.

<br/><br/>
Secreto y seguridad de los datos personales
<br/><br/>

La Vega Cats - GFAM se compromete a adoptar las medidas técnicas y organizativas necesarias, según el
nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de
los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos
personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados
a dichos datos.<br/><br/>

El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se
transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario,
y en retroalimentación, totalmente cifrada o encriptada.<br/><br/>

Sin embargo, debido a que La Vega Cats - GFAM no puede garantizar la inexpugnabilidad de internet ni la
ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable
del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación
de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y
libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por
violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la
destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o
tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.<br/><br/>

Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se
compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha
confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la
información.

<br/><br/>
Derechos derivados del tratamiento de los datos personales
<br/><br/>

El Usuario tiene sobre La Vega Cats - GFAM y podrá, por tanto, ejercer frente al Responsable del
tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre,
de Protección de Datos Personales y garantía de los derechos digitales:
<br/><br/>
- Derecho de acceso: Es el derecho del Usuario a obtener confirmación de si La Vega Cats - GFAM
está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos
concretos de carácter personal y del tratamiento que La Vega Cats - GFAM haya realizado o realice,
así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios
de las comunicaciones realizadas o previstas de los mismos.<br/>
- Derecho de rectificación: Es el derecho del Usuario a que se modifiquen sus datos personales que
resulten ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.
Derecho de supresión ("el derecho al olvido"): Es el derecho del Usuario, siempre que la legislación
vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya
no sean necesarios para los fines para los cuales fueron recogidos o tratados; el Usuario haya
retirado su consentimiento al tratamiento y este no cuente con otra base legal; el Usuario se oponga
al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales
hayan sido tratados ilícitamente; los datos personales deban suprimirse en cumplimiento de una
obligación legal; o los datos personales hayan sido obtenidos producto de una oferta directa de
servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, el
Responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su
aplicación, deberá adoptar medidas razonables para informar a los responsables que estén tratando
los datos personales de la solicitud del interesado de supresión de cualquier enlace a esos datos
personales.<br/>
- Derecho a la limitación del tratamiento: Es el derecho del Usuario a limitar el tratamiento de sus
datos personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne
la exactitud de sus datos personales; el tratamiento sea ilícito; el Responsable del tratamiento ya no
necesite los datos personales, pero el Usuario lo necesite para hacer reclamaciones; y cuando el
Usuario se haya opuesto al tratamiento.<br/>
- Derecho a la portabilidad de los datos: En caso de que el tratamiento se efectúe por medios
automatizados, el Usuario tendrá derecho a recibir del Responsable del tratamiento sus datos
personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro
responsable del tratamiento. Siempre que sea técnicamente posible, el Responsable del tratamiento
transmitirá directamente los datos a ese otro responsable.<br/>
- Derecho de oposición: Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos
de carácter personal o se cese el tratamiento de los mismos por parte de La Vega Cats - GFAM.<br/>
- Derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado,
incluida la elaboración de perfiles: Es el derecho del Usuario a no ser objeto de una decisión
individualizada basada únicamente en el tratamiento automatizado de sus datos personales,
incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.
<br/><br/>

Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable
del tratamiento con la referencia \"RGPD-lavegacats.netlify.app\", especificando:<br/><br/>

- Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será
también necesaria la identificación por el mismo medio de la persona que representa al Usuario, así
como el documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por
cualquier otro medio válido en derecho que acredite la identidad.<br/>
- Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.<br/>
- Domicilio a efecto de notificaciones.<br/>
- Fecha y firma del solicitante.<br/>
- Todo documento que acredite la petición que formula.<br/><br/>

Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:<br/>

Dirección postal: Calle Euterpe 17, Bajo C 28022 Madrid<br/>
Correo electrónico: gfamadrid@gmail.com

<br/><br/>
Enlaces a sitios web de terceros
<br/><br/>

El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros
distintos de La Vega Cats - GFAM, y que por tanto no son operados por La Vega Cats - GFAM. Los titulares
de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en
cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.

<br/><br/>
Reclamaciones ante la autoridad de control
<br/><br/>

En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la
forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a
presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su
residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad
de control es la Agencia Española de Protección de Datos (https://www.aepd.es/).

<br/><br/>
</h2>II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h2>
<br/><br/>

Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos
de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus
datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante
los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de
Privacidad del mismo.<br/><br/>

La Vega Cats - GFAM se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio
criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de
Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de
forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al
tanto de los últimos cambios o actualizaciones.<br/><br/>

Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento
Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que
respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley
Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos
digitales.<br/><br/>
    `
  },
  en: {
    analytics: `
    <script data-goatcounter="https://lavegacats.goatcounter.com/count"
      async src="//gc.zgo.at/count.js"></script>
    `,
    presentation: `
      GFAM (Feline Management of Madrid Airport) was born out of the concern of a group of Barajas airport workers regarding the increasing number of cats appearing in the facilities. In 2017, it was established as a non-profit association to care for more than 300 registered cats living in colonies within the airport grounds. The colonies are managed using the TNR (trap, neuter, return) method, and the organization also carries out rescue operations for animals that need to be removed from the facilities due to various reasons—such as unsanitary or dangerous environments, litters at risk, illness, or injuries.
      <br /><br />
      GFAM operates without any support from AENA or other companies. Through the financial effort of its founders, La Vega Cats Sanctuary was created—a protected space in Madrid. There, cats rescued from the airport colonies receive all necessary veterinary care and the safety they need to live a dignified life. Today, around 120 cats reside at the sanctuary, and more than 400 live in the airport colonies.
      <br /><br />
      Some of these cats are looking for a home! If you are interested giving a home to one of them, here you have our ...
    `,
    contact: {
      wantToAdopt: 'Do you want to adopt ',
      email: `Contact us by email: <a href="mailto:${CONTACT_ADDRESSES.email}">${CONTACT_ADDRESSES.email}</a>`,
      donations: `
        You can also help us in many other ways:<br />
        <a href="${CONTACT_ADDRESSES.donations.teaming}" target="_blank">Donating 1 eurocat per month for the sanctuary</a><br />
        <a href="${CONTACT_ADDRESSES.donations.teaming_other}" target="_blank">Donating 1 eurocat per month for GFAM rescues</a><br />
        <a href="${CONTACT_ADDRESSES.donations.amazon_wishlist}" target="_blank">Sending food via our Amazon Wishlist</a><br />
        `,
      whatsapp: 'Contact us by Whatsapp',
      phone: 'Call/SMS',
      conditions: `
        Adoption conditions:<br/><br/>

        1. Contact only via WhatsApp.<br/><br/>

        2. Come meet our cats at the Sanctuary.<br/><br/>

        3. If you want to adopt a baby kitty, it must be adopted along with another baby kitty, either that or you should already have another cat at home.<br/><br/>

        4. We will visit your home and ask you to have or install protections on windows, balconies, and terraces.<br/><br/>

        5. We make a pre-adoption contract, and the chip is changed after 6 months if everything has gone well. We will always stay in touch to hear about the cat.<br/><br/>
      `,
      conditions_warning: `
        By contacting us, you accept our adoption and data protection conditions.<br/><br/>
        Adopting is a commitment, not a whim.<br/><br/>
        If you cannot adopt but want to help 🏥, you can sponsor him/her or make a donation through our
        <a href="${CONTACT_ADDRESSES.donations.teaming}" target="_blank">Teaming</a> or
        <a href="${CONTACT_ADDRESSES.donations.amazon_wishlist}" target="_blank">Amazon Wishlist</a>.<br/><br/>
        You can also help us by sharing our posts on social media 🧑🏻‍🤝‍🧑🏽.<br/>
        If you want to collaborate in another way, do not hesitate to contact us
        through our social networks, by email, or by WhatsApp 📱.<br/><br/>
        If you are ready to adopt him/her:<br/><br/>
        <a class="expandable-header" id="expandableHeader">Click here to read the adoption conditions and
        obtain the contact method (WhatsApp)</a>
      `,
      socials: {
        title: 'Our social networks:<br/>',
      }
    },
    title: 'Adoptables',
    description: 'Description',
    sex: 'Sex',
    status: 'Status',
    birthdate: 'Birthdate',
    age: 'Age (years)',
    knowme: 'Know me',
    knowme_button_info: 'Scroll ⬇️ to know me better',
    family: 'Family',
    furColors: 'Fur colors',
    breed: 'Breed',
    eyeColor: 'Eye color',
    weight: 'Weight',
    personality: 'Personality',
    health: 'Health',
    neutered: 'Neutered',
    vaccinated: 'Vaccinated',
    vaccinatedDate: 'Vaccination date',
    vaccinatedType: 'Vaccine type',
    unavailable: 'Unavailable',
    footer: {
      main: '©️ 2025 La Vega Cats - GFAM. A project made with lots of ❤️ for all animals.',
      sub_text: 'If you liked the website and want one for yourself, we can help you create yours. If you want to know how, contact us or check out our <a href="https://github.com/agseijas/harekina">GitHub repository.</a>',
    },
    legal_warning: `Legal Warning and General Conditions of Use`,
  }
};
