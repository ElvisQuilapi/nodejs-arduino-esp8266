const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')

router

    .get('/employees', async (req, res) => {
        const employees = await Employee.find()
        res.json(employees)
    })

module.exports = router