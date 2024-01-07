const knex = require('knex');
const connectedKnex = knex({
    client: "pg",
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : '1001',
        database : 'my_db'
    }
});

module.exports = connectedKnex;
