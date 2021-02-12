const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b9a655e8f717a3',
    database: 'heroku_9f3e67f39dffa79',
    password: 'bd9ae5c6'
})

conection.connect(err => {
    if (err) {
        console.log(err)
        return err;
    }
    else {
        console.log('Database ----- OK')
    }
})

let query = "SELECT * FROM heroku_9f3e67f39dffa79.data;"

conection.query(query, (err, result, fieldId) => {
    // console.log(err)
    console.log(result)
    // console.log(fieldId)
})