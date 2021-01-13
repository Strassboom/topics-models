const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const ship = sequelize.define('ship', {
    id: { type: Sequelize.INTEGER, allowNull: false },
    shipTypeId: { type: Sequelize.INTEGER, allowNull: false },
    gunTypeId: { type: Sequelize.INTEGER, allowNull: false },
  });
  return ship;
}