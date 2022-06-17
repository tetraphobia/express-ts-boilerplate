import logger from 'jet-logger'
import server from './server'

// Consts
const port = process.env.PORT || 3000
const msg = `Express server started on ${port}`

// Start Express server
server.listen(port, () => logger.info(msg))
