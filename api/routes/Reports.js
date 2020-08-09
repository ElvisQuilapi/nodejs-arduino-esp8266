const express = require('express')
const router = express.Router()
const ReportControllers = require('../controllers/ReportControllers')

router
    .route('/all')
    .get(ReportControllers.findAll)

router
    .route('/new')
    .post(ReportControllers.create)

router
    .route('/:id')
    .get(ReportControllers.findById)
    .put(ReportControllers.update)
    .delete(ReportControllers.remove)

router
    .route('/identifier/:identifier')
    .get(ReportControllers.identifierId)

module.exports = router