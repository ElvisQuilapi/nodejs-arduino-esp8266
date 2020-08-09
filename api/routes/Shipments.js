const express = require('express')
const router = express.Router()
const shipmentControllers = require('../controllers/shipmentControllers')

router
    .route('/all')
    .get(shipmentControllers.findAll)

router
    .route('/new')
    .post(shipmentControllers.create)

router
    .route('/:id')
    .get(shipmentControllers.findById)
    .put(shipmentControllers.update)
    .delete(shipmentControllers.remove)

router
    .route('/tracking/:id_tracking')
    .get(shipmentControllers.trackingId)
    
    // .post('/shipment/new', async (req, res) => {
    //     const shipment = new Shipment(req.body)
    //     await shipment.save()
    //     res.json({
    //         status: 'Shipment added.'
    //     })
    // })

    // .get('/shipments', async (req, res) => {
    //     const shipments = await Shipment.find()
    //     res.json(shipments)
    // })

    // // Get data by ID.
    // .get('/shipment/:id', async (req, res) => {
    //     const shipment = await Shipment.findById(req.params.id);
    //     res.json(shipment);
    // })

    // // Update.
    // .put('/shipment/:id', async (req, res) => {
    //     await Shipment.findByIdAndUpdate(req.params.id, req.body);
    //     res.json({
    //         status: 'Update Shipment.'
    //     });
    // })

    // // Deleted.
    // .delete('/shipment/:id', async (req, res) => {
    //     await Shipment.findByIdAndRemove(req.params.id)
    //     res.json({
    //         status: 'Shipment removed from the BD.'
    //     })
    // })

module.exports = router