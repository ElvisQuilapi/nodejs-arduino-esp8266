const Report = require('../models/Report')

module.exports = {
    async findAll(req, res) {
        await Report.find(req.body)
            .then(reports => res.json(reports))
            .catch(err => res.status(422).json(err))
    },

    async findById(req, res) {
        await Report.findById(req.params.id)
            .then(report => res.json(report))
            .catch(err => res.status(422).json(err))
    },

    async create(req, res) {
        await Report.create(req.body)
            .then(res.json({status: 'Report added.'}))
            .catch(err => res.status(422).json(err))
    },

    async update(req, res) {
        await Report.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(res.json({status: 'Report Shipment.'}))
            .catch(err => res.status(422).json(err))
    },

    async remove(req, res) {
        await Report.findByIdAndRemove({ _id: req.params.id })
            .then(res.json({status: 'Report removed.'}))
            .catch(err => res.status(422).json(err))
    },

    async identifierId(req, res) {
        await Report.find({ identifier: req.params.identifier }, req.body)
            .then(report => res.json(report))
            .catch(err => res.status(422).json(err))
    },

}