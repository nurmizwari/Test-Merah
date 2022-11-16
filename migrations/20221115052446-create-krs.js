'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KRS', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MataKuliahId: {
        type: Sequelize.INTEGER,
        references: {
          model: "MataKuliahs",
          
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      MahasiswaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Mahasiswas",
         
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
    await queryInterface.dropTable('KRS');
  }
};