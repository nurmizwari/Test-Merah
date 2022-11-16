'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KRS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KRS.belongsTo(models.MataKuliah)
    }
  }
  KRS.init({
    matkulId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KRS',
  });
  return KRS;
};