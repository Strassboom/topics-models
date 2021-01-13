const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const session = sequelize.define('session', {
    id: { type: Sequelize.INTEGER, allowNull: false },
    dateTime: { type: Sequelize.DATE, allowNull: false },
    shipId: { type: Sequelize.INTEGER, allowNull: false }
  });
  return session;
}