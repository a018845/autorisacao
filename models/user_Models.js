const Sequelize = require('sequelize');
const database = require('../database/db');
const config = require("../service/config");

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,//podemos colocar limite STRING(8)
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    }
});
//vereficar se DEV
if (config.ENV === 'dev') {
    User.sync({ force: true }).then(() => {
        User.create({
            username: "admin1",
            password: "1234562",
            firstName: "Jane1",
            lastName: "Doe3"
        });
        User.create({
            username: "admin2",
            password: "123456",
            firstName: "Jane",
            lastName: "Doe"
        });
    });
} else {
    User.sync();
}

module.exports = User;

