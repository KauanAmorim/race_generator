'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Races', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cep_inicial: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cep_final: {
        allowNull: false,
        type: Sequelize.STRING
      },
      preco: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ativo: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Races');
  }
};