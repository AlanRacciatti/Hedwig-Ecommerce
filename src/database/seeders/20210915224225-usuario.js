'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usuarios', [{
        id: 1,
        created_at: "2021-09-05 20:47:00",
        updated_at: "2021-09-05 20:47:00", 
        email: "mazulrios@gmail.com",
        nombre: "Maria",
        imagen: "1630103804934Logo-error.png",
        fecha_nacimiento: "2021-06-18",
        contraseña: "$2a$10$kwS1jPWonVuvsTXqp.1Vn.j74qWS5jffnArAkwDubvAI7fD8TaB16",
        admin: 2
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  
  }
};
