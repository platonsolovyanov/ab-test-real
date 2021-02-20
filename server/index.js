const express = require('express');
const db = require('./config/db');
const app = express()

const PORT = 3001;


// let query = "SELECT * FROM heroku_9f3e67f39dffa79.data;"
let query = "SELECT * FROM heroku_9f3e67f39dffa79.data;"
let formData = "SELECT DATE_FORMAT(dateRegistration, '%d/%m/%Y %k:%i:%s');"

app.get('/get', (req, res) => {
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(result)

    })
})

function handleDisconnect() {
    db.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    db.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})