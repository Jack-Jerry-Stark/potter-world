const db = require('./database');

const dataMapper = {
    getAllCharacters: (callback) => {
        const queryText = `SELECT * FROM "character";`;
        db.query(queryText, (error, result) => {
            callback(error, result);
        });
    },
    // getAllCharacterByHouse: (type, callback) => {
    //     const queryText = `
    //         SELECT * 
    //         FROM "character" 
    //         JOIN school 
    //             ON character.house_id = house.id
    //         JOIN type
    //             ON pokemon_type.type_id = type.id
    //         WHERE type.name = $1
    //         ;
    //     `;
    //     db.query(queryText, [type], (error, result) => {
    //         callback(error, result);
    //     });
    // },
    getCharacterById: (id, callback) => {
        const queryText = `SELECT * FROM "character" WHERE "id" = $1;`;
        db.query(queryText, [ id ], (error, result) => {
            callback(error, result);
        });
    }//,
    // getTypes: (callback) => {
    //     // on execute qui prend un certain temps
    //     // quand query a fini il va executer la fonction qu'on lui donne en 2ème argument, on peut très bien lui passer la défintion de callback directement
    //     // db.query('SELECT * FROM "types";', callback);
    //     db.query('SELECT * FROM "type";', (error, result) => {
    //         callback(error, result);
    //     });
    // }
};

module.exports = dataMapper;