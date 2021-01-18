const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const session = sequelize.define('session', {
    id: { type: Sequelize.STRING(64), primaryKey: true, allowNull: false },
    dateTime: { type: Sequelize.DATE, allowNull: false },
    shipId: { type: Sequelize.STRING(64), allowNull: false }
  });
  return session;
}