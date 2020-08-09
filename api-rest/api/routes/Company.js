const express = require('express')
const router = express.Router()
const Business = require('../models/Business')

router

    .get('/company', async (req, res) => {
        const business = await Business.find()
        res.json(business)
    })

module.exports = router