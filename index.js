const dotenv = require('dotenv').config();
const express = require('express');
const session = require('express-session');
const dataMapper = require('./app/dataMapper');
const router = require('./app/router');

const server = express();

server.set('view engine', 'ejs');
server.set('views', __dirname + '/app/views');

// server.use(session({
//     secret: process.env.APP_SECRET,
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//         maxAge: (1000*60*60*5)
//     }
// }));

server.use(express.static('public'));
server.use(router);

const port = process.env.PORT || 5050;

server.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});