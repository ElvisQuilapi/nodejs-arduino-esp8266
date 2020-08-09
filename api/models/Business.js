const mongoose = require('mongoose')

const {
    Schema
} = mongoose

const Business = new Schema({
    store: {
        type: String,
        required: true
    },
    agent: {
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
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Business', Business)