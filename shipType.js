const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const shipType = sequelize.define('shipType', {
    id: { type: Sequelize.INTEGER, allowNull: false },
    name: { type: Sequelize.STRING(64), allowNull: false },
    version: { type: Sequelize.INTEGER, allowNull: false },
    gunTypeId: { type: Sequelize.INTEGER, allowNull: false },
    structure: { type: Sequelize.STRING(128), allowNull: false },
  });
  return shipType;
}