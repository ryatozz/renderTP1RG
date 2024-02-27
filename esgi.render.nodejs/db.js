const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  process.env.DB_name, // Database name
  process.env.user, // User
  process.env.password, // Password
  {
    host: 'dpg-cner6hfsc6pc73cp3fo0-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
