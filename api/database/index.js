const mongoose = require('mongoose')
const { USER_BD, USER_PASSWORD } = require('../config')

const URI = `mongodb://${USER_BD}:${USER_PASSWORD}@ds143211.mlab.com:43211/dyship`

mongoose.connect(URI, {
        useNewUrlParser: true
    })
    .then(db => console.log('DB is connected!'))
    .catch(error => console.error(error))

module.exports = mongoose