import express from 'express'

// Import API routes
import example from '../api/example'

// Initialize router
const router = express.Router()

// Setup route
router.use('/example', example)

export default router
