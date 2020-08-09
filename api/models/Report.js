const mongoose = require('mongoose')

const {
    Schema
} = mongoose

const Report = new Schema({
    identifier: {
        type: Number,
        default: 0
    },
    temperature: {
        type: Number,
        default: 0
    },
    humidity: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Report', Report)