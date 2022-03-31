const mysql = require('mysql');
const Sequelize = require('sequelize');
const config = require('../service/config');

const sequelize = new Sequelize(`${config.DB_DATABASE}`, `${config.DB_USERNAME}`, `${config.DB_PASSWORD}`, {

    dialect: `${config.DB_CONNECTION}`,
    host: `${config.DB_HOST}`,
    port: `${config.DB_PORT}`
});

// const db = mysql.createConnection({
// host: 'localhost',
// user: 'root',
// database: 'lab2_db',
// password: '12345678'
// })

// db.connect();


module.exports = sequelize;