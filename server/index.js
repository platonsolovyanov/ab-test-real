const express = require('express');
const cors = require('cors');
const pool = require('./config/db');
const app = express()

const PORT = 80;

app.use(cors())
app.use(express.json())

const query = "SELECT * FROM heroku_9f3e67f39dffa79.data;"
let queryPost = "INSERT INTO `heroku_9f3e67f39dffa79`.`data` (`userId`, `dateRegistration`, `dateLastActivity`) VALUES (?,?,?);"
const queryDelete = 'DELETE FROM `heroku_9f3e67f39dffa79`.`data` WHERE (`userId` != 0);'


app.get('/get', (req, res) => {
    pool.query(query, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.post('/post', (req, res) => {

    req.body.map(el => {
        console.log(el)
        const userId = el.userId
        const dateRegistration = el.dateRegistration
        const dateLastActivity = el.dateLastActivity
        pool.query(queryPost, [userId, dateRegistration, dateLastActivity], (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        })
    })
})

app.delete('/delete', (req, res) => {
    pool.query(queryDelete, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    })
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})