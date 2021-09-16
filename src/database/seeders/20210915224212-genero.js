'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('generos', [

      {
        id: 1,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Terror",
      },
      {
        id: 2,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Ciencia ficción",
      },
      {
        id: 3,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Fantasía",
      },
      {
        id: 4,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Acción",
      },
      {
        id: 5,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Aventura",
      },
      {
        id: 6,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Ciencia y geografía",
      },
      {
        id: 7,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Desarrollo personal",
      },
      {
        id: 8,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Negocios y finanzas",
      },
      {
        id: 9,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Psicología",
      },
      {
        id: 10,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Religión",
      },
      {
        id: 11,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Salud",
      },
      {
        id: 12,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Tecnología",
      },
      {
        id: 13,
        created_at: "2021-09-05 19:50:00",
        updated_at: "2021-09-05 19:50:00",
        nombre: "Policial",
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('generos', null, {});
  }
};
