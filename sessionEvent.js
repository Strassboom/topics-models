const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const sessionEvent = sequelize.define('sessionEvent', {
    id: { type: Sequelize.STRING(64), primaryKey: true, allowNull: false },
    sessionId: { type: Sequelize.STRING(64), allowNull: false },
    dateTime: { type: Sequelize.DATE, allowNull: false },
    isFiring: { type: Sequelize.BOOLEAN, allowNull: false },
    health_points: { type: Sequelize.INTEGER, allowNull: false }
  });
  return sessionEvent;
}