'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Race.init({
    cep_inicial: DataTypes.STRING,
    cep_final: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Race',
  });
  return Race;
};