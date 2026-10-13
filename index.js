require('dotenv').config() // ettől létezik process.env.ENV_VAR_ ... 

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = 8080

app.get('/', (req, res)=> res.status(200).json('Hello dictator!') )

app.listen(PORT, (error)=>{
    if (error) {
        console.warn(error)
    } else {
        console.log('Express backend server is running on port ', PORT)
    }
})