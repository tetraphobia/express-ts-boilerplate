import express from 'express'

// Import routes
import api from './api'
import root from './root'

// Initialize router
const router = express.Router()

// Setup routes
router.use('/api', api)
router.use('/', root)

export default router
