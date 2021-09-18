'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('autores', [
      
      {
        id: 1,
        created_at: "2021-09-05 19:50:00",
        updated_at:"2021-09-05 19:50:00",
        nombre: "George Orwell",
      },
      {
        id: 2,
        created_at: "2021-09-05 19:50:00",
        updated_at:"2021-09-05 19:50:00",
        nombre: "J.K. Rowling",
      },
      {
        id: 3,
        created_at: "2021-09-05 19:50:00",
        updated_at:"2021-09-05 19:50:00",
        nombre: "Stephen King",
      },
      {
        id: 4,
        created_at: "2021-09-05 19:50:00",
        updated_at:"2021-09-05 19:50:00",
        nombre: "Paulo Coelho",
      },
      {
        id: 5,
        created_at: "2021-09-05 19:50:00",
        updated_at:"2021-09-05 19:50:00",
        nombre: "Arthur Conan Doyle",
      },
      {
        id: 6,
        created_at: "2021-09-05 19:50:00",
        updated_at:"2021-09-05 19:50:00",
        nombre: "George RR Martin",
      },
      
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('autores', null, {});
  
  }
};
