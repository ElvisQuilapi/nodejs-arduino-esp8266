const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(cors())

// Connect Database
require ('./database')

app.use(morgan('dev'))
app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json({
        message: 'Nodejs Arduino API REST'
    })
})

app.use('/api/v1/reports', require('./routes/Reports'))


module.exports = app


