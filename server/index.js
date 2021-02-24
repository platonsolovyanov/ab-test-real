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


const funcSevenDaysAgo = () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const finalDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate() + 1}`;
    return finalDate
}

const lastActivSevenDays = (arr) => {
    // dateLastActivity
    const weekAgo = new Date(funcSevenDaysAgo())
    const weekNormForm = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), weekAgo.getDate())
    console.log(weekNormForm)

    let count = 0
    arr.forEach((el) => {
        const dateLastActivity = el.dateLastActivity
        console.log(dateLastActivity)
        if (dateLastActivity >= weekNormForm) {
            ++count
        }
    })
    return count
}
// new Date(b.toDateString())
// new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

const installAppSevenDays = (arr) => {
    const weekAgo = new Date(funcSevenDaysAgo())
    const weekNormForm = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), weekAgo.getDate())
    console.log(weekNormForm)
    let count = 0
    arr.forEach((el) => {
        const dateRegistration = el.dateRegistration
        console.log(dateRegistration)
        if (dateRegistration <= weekNormForm) {
            ++count
        }
    })
    return count
}

app.get('/get_rolling_seven_days', (req, res) => {
    pool.query(query, (err, result) => {
        if (err) {
            console.log(err)
        }
        const lastActiv = lastActivSevenDays(result)
        const insallApp = installAppSevenDays(result)

        console.log(`${lastActiv}:lastActiv`)
        console.log(`${insallApp}:insallApp`)

    })
})


// console.log(sevenDaysAgo())

// var date = new Date();
// var finalDate = date.getDate()+'-'+ (date.getMonth()+1) +'-'+date.getFullYear();

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