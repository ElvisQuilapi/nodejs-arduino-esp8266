const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    PORT_DEV: process.env.PORT_DEV,
    USER_BD: process.env.USER_BD,
    USER_PASSWORD: process.env.USER_PASSWORD
}