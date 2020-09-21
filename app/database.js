// const {Sequelize} = require('sequelize');
// const { Client } = require('pg');

// // il faut définir les informations de connexion dans un .env
// const client = new Client();

// client.connect();

// const sequelize = new Sequelize(process.env.PG_URL,{
//     define: {
//       timestamps: true
//     },
// });

// module.exports = (client, sequelize);
const { Client } = require('pg');

// il faut définir les informations de connexion dans un .env
const client = new Client();

client.connect();

module.exports = client;