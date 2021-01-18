const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const gunType = sequelize.define('gunType', {
    id: { type: Sequelize.STRING(64), primaryKey: true, allowNull: false },
    name: { type: Sequelize.STRING(64), allowNull: false },
    version: { type: Sequelize.INTEGER, allowNull: false },
    shipTypeId: { type: Sequelize.STRING(64), allowNull: false },
    structure: { type: Sequelize.STRING(128), allowNull: false },
  });
  return gunType;
}