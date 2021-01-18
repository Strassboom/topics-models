const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const ship = sequelize.define('ship', {
    id: { type: Sequelize.STRING(64), primaryKey: true, allowNull: false },
    shipTypeId: { type:Sequelize.STRING(64), allowNull: false },
    gunTypeId: { type: Sequelize.STRING(64), allowNull: false },
  });
  return ship;
}