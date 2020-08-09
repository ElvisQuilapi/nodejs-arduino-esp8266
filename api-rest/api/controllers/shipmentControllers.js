const Shipment = require('../models/Shipment')

module.exports = {
    async findAll(req, res) {
        await Shipment.find(req.body)
            .then(shipments => res.json(shipments))
            .catch(err => res.status(422).json(err))
    },

    async findById(req, res) {
        await Shipment.findById(req.params.id)
            .then(shipment => res.json(shipment))
            .catch(err => res.status(422).json(err))
    },

    async trackingId(req, res) {
        await Shipment.find({ id_tracking: req.params.id_tracking }, req.body)
            .then(shipment => res.json(shipment))
            .catch(err => res.status(422).json(err))
    },

    async create(req, res) {
        await Shipment.create(req.body)
            .then(res.json({status: 'Shipment added.'}))
            .catch(err => res.status(422).json(err))
    },

    async update(req, res) {
        await Shipment.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(res.json({status: 'Update Shipment.'}))
            .catch(err => res.status(422).json(err))
    },

    async remove(req, res) {
        await Shipment.findByIdAndRemove({ _id: req.params.id })
            .then(res.json({status: 'Shipment removed.'}))
            .catch(err => res.status(422).json(err))
    }
}