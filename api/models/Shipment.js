const mongoose = require('mongoose')
const getuid = require('get-uid')

const {
    Schema
} = mongoose

const Shipment = new Schema({
    destination: {
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        rut: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        address: {
            street: {
                type: String,
                required: true
            },
            number:{
                type: Number,
                required: true
            },
            region: {
                type: String,
                required: true
            },
            city:{
                type: String,
                required: true
            },
            Country:{
                type: String,
                required: true
            }
        }
    },
    origin: {
        store: {
            type: String,
            required: true
        },
        store_id: {
            type: Number,
            required: true
        },
        order_id: {
            type: String,
            required: true
        },
        createAt: {
            type: Date,
            default: Date.now()
        }
    },
    process_ship: [
        {
            status: {
                type: String,
                required: true
            },
            dateIn: {
                type: Date,
                default: Date.now()
            },
            value: {
                type: Boolean,
                default: true
            },
            _id: false
        }
    ],
    product: {
        weight: {
            type: Number,
            default: 0
        },
        width: {
            type: Number,
            default: 0
        }, 
        height: {
            type: Number,
            default: 0
        },
        priority: {
            type: String,
            required: true
        }
    },
    id_tracking: {
        type: String,
        default: getuid
    }
})

module.exports = mongoose.model('Shipment', Shipment)