'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('libros', [

     {
      id: 1,
      created_at: "2021-09-05 19:50:00",
      updated_at: "2021-09-05 19:50:00",
      imagen: "16284602382551984.jpg",
      titulo: "1984",
      valoracion: 4.5,
      precio: 1500,
      oferta: 10,
      descripcion: "En el año 1984 Londres es una ciudad lúgubre en la que la Policía del Pensamiento controla de forma asfixiante la vida de los ciudadanos. Winston Smith es un peón de este engranaje perverso y su cometido es reescribir la historia para adaptarla a lo que el Partido considera la versión oficial de los hechos. Hasta que decide replantearse la verdad del sistema que los gobierna y somete. La presente edición, avalada por The Orwell Estate, sigue fielmente el texto definitivo de las obras completas del autor, fijado por el profesor Peter Davison. Incluye un epílogo del novelista Thomas Pynchon, \r\nque aporta al análisis del libro su personal visión de los totalitarismos y la paranoia en el mundo moderno.Miguel Temprano García firma la soberbia traducción, que es la más reciente de la obra.\r\n",
      cantidad_paginas: 300,
      editorial: "DeBolsillo",
      stock: 10,
      autor_fk: 1,
      genero_fk: 2,
     },
     {
      id: 2,
      created_at: "2021-09-05 19:50:00",
      updated_at: "2021-09-05 19:50:00",
      imagen: "1628460709295Harry-Potter1.jpg",
      titulo: "Harry Potter y la piedra filosofal (Harry Potter 1)",
      valoracion: 5,
      precio: 1000,
      oferta: 10,
      descripcion: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir con su destino.\r\nPues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un verdadero mago!",
      cantidad_paginas: 200,
      editorial: "Salamandra",
      stock: 200,
      autor_fk:2,
      genero_fk:3,
     },
     {
      id: 3,
      created_at: "2021-09-05 19:50:00",
      updated_at: "2021-09-05 19:50:00",
      imagen: "1628460897976La-sangre-manda.jpg",
      titulo: "La sangre manda",
      valoracion: 4,
      precio: 900,
      oferta: 10,
      descripcion: "Cuanto más cruenta y violenta es una noticia, más llama la atención de la gente: «La sangre manda».Así reza la máxima periodística que hará que Holly Gibney, la detective a la que Bill Hodges legó su agencia Finders Keepers, y uno de los personajes más queridos por los fans de Stephen King, se interese por la matanza en el instituto Albert Macready y acabe enganchada a las noticias. En esta ocasión deberá luchar contra lo que más teme..., y esta vez sola. \r\nSi bien Holly, que ya apareció en la trilogía «Bill Hodges» y en El visitante, protagoniza su primer gran caso en solitario \r\nen el relato que da título a este volumen, tres historias más forman este libro. En «El teléfono del señor Harrigan» una \r\namistad entre dos personas de edades muy diferentes perdura de manera más que inquietante. \r\n«La vida de Chuck» nos ofrece una hermosa reflexión acerca de la existencia de cada uno de nosotros. Y en «La rata» un escritor desesperado se enfrenta al lado más oscuro de la ambición. Cuatro relatos en los que Stephen King sorprende nuevamente a los lectores y los conduce a lugares intrigantes.",
      cantidad_paginas: 250,
      editorial: "DeBolsillo",
      stock: 20,
      autor_fk:3,
      genero_fk: 13,
     },
     {
      id: 4,
      created_at: "2021-09-05 19:50:00",
      updated_at: "2021-09-05 19:50:00",
      imagen: "1628460967124El-alquimista.jpg",
      titulo: "El alquimista",
      valoracion: 3.5,
      precio: 2000,
      oferta: 20,
      descripcion: "El Alquimista relata el viaje del pastor Santiago en busca de un tesoro que le había sido revelado a través \r\n de un sueño repetitivo que le mostraba un tesoro cerca de las pirámides de Egipto. Santiago recurre a una gitana para \r\n que interprete su sueño pero, a pesar de que ella le recomienda seguir el sueño, el protagonista no le hace caso y \r\n compra un gran libro para leer. Mientras Santiago descansa, el rey de Salem, quien en un principio no revela su identidad,\r\n le explica que dice que todos tenemos una “leyenda personal”. Después, el rey le regala dos piedras de adivinación para \r\n alquimistas llamadas Urim y Tumim.",
      cantidad_paginas: 200,
      editorial: "DeBolsillo",
      stock: 25,
      autor_fk: 4,
      genero_fk: 3,
     },
     {
      id: 5,
      created_at: "2021-09-05 19:50:00",
      updated_at: "2021-09-05 19:50:00",
      imagen: "1628461268311Las-aventuras-de-SherlockHolmes.jpg",
      titulo: "Sherlock Holmes",
      valoracion: 4,
      precio: 2000,
      oferta: 0,
      descripcion: "Las aventuras de Sherlock Holmes es una colección de una docena de historias, escritas por Arthur Conan Doyle, y la primera fue publicada el 14 de octubre de 1892. Contiene los primeros cuentos con el detective privado Sherlock Holmes, que fueron publicadas en doce números mensuales de The Strand Magazine de julio de 1891 a junio de 1892.",
      cantidad_paginas: 400,
      editorial: "Alma",
      stock: 35,
      autor_fk: 5,
      genero_fk:5,
     },
     {
      id: 6,
      created_at: "2021-09-05 19:50:00",
      updated_at: "2021-09-05 19:50:00",
      imagen: "1628462162900juego-de-tronoss.jpg",
      titulo: "Juego de tronos",
      valoracion: 5,
      precio: 3000,
      oferta: 20,
      descripcion: "En el legendario mundo de los Siete Reinos, donde el verano puede durar décadas y el invierno toda una vida, y donde rastros de una magia inmemorial surgen de los rincones más sombríos, la tierra del norte, Invernalia, está resguardada por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales",
      cantidad_paginas: 500,
      editorial: "HarperCollins",
      stock: 5,
      autor_fk: 6,
      genero_fk:3,
     }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('libros', null, {});
  }
};
