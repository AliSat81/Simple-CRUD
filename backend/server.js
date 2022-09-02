const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

// Connect to MangoDB
require('./database')();

//Router
app.use('/', require('./routers'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

