'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let data = require("../data/data.json").matkul;
     data.forEach((el) => {
     
       el.createdAt = new Date();
       el.updatedAt = new Date();
     });
     await queryInterface.bulkInsert("MataKuliahs", data);
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("MataKuliahs", null);
  }
};
