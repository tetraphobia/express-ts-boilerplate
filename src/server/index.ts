import express from 'express'
import morgan from 'morgan'

import router from '../routes'
import { development } from '../shared/helpers'

const dev = development()

// Initialize the express app
const app = express()

// Setup middleware
if (dev) app.use(morgan('dev'))

// Setup router
app.use('/', router)

export default app
