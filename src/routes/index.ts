import express from 'express'

// Import routes
import root from './root'

// Initialize router
const router = express.Router()

// Setup routes
router.use('/', root)

export default router
