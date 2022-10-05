'use strict';
const { ulid } = require("ulid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Veiculos', [{
      id: ulid(),
      nome: 'Honda civic',
      ano: '2020',
      cor: 'prata'
    },
    {
      id: ulid(),
      nome: 'Fiat uno',
      ano: '2003',
      cor: 'vermelho'
    },
    {
      id: ulid(),
      nome: 'Fiat Fastback',
      ano: '2022',
      cor: 'prata'
    },
    {
      id: ulid(),
      nome: 'Fusca',
      ano: '1987',
      cor: 'azul'
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

