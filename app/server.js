// const express = require('express');

// const app = express();
// const port = process.env.PORT || 5555;
// const router = require('./router');

// app.use('./v1', router);

// app.launch = () =>{
//     app.listen(port, () => console.log(`Running on http://localhost:${port}`
//     ));
// };


// module.exports = app;


require('dotenv').config();
const express = require('express');
const session = require('express-session');

const router = require('./router');

const server = express();

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(session({
    secret: process.env.APP_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (1000*60*60*5)
    }
}));

server.use(express.static( __dirname + '/../public' ));

server.use(router);

const port = process.env.PORT || 5050;

server.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});