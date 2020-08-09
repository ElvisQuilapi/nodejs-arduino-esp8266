const app = require('./api/app')
const { PORT_DEV } = require('./api/config')

// Settings PORT
const port =  process.env.PORT || PORT_DEV

// Server in listening
app.listen(port, () => console.log(`🔥🔥🔥 Server on port ${port} 🔥🔥🔥`))