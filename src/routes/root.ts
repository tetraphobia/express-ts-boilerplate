import express, { Request, Response } from 'express'

// Initialize router
const router = express.Router()

// Define handlers
function rootHandler (req: Request, res: Response): void {
  res.sendStatus(200)
}

// Setup route
router.get('/', rootHandler)

export default router
