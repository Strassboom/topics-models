module.exports = {
    models: (sequelize) => {
      return {
        session: require('./session')(sequelize),
        sessionEvent: require('./sessionEvent')(sequelize),
        ship: require('./ship')(sequelize),
        shipType: require('./shipType')(sequelize),
        gunType: require('./gunType')(sequelize)
      }
    }
  }