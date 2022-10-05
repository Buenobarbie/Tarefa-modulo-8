const { Sequelize } = require('sequelize');
const env = require("dotenv").config().parsed;

const sequelize = new Sequelize({
    dialect: "postgres",
    database: env.DATABASE,
    host: env.HOST_DB,
    port: env.PORT_DB,
    username: env.USER_DB,
    password: env.PASS_DB,
    define: {timestamps: false}
});


sequelize.authenticate()
    .then(() => console.log("Sequelize connected"))
    .catch((err) => console.log("Error connecting sequelize..."))


module.exports = sequelize;