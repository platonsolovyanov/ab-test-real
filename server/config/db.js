const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b9a655e8f717a3',
    database: 'heroku_9f3e67f39dffa79',
    password: 'bd9ae5c6'
});

module.exports = pool;