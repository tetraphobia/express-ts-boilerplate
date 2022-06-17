import express, { Request, Response } from 'express'

// Initialize router
const router = express.Router()

// Define handlers

/**
 * An example handler for the / endpoint
 *
 * @param {Request} req an Express Request
 * @param {Response} res an Express Response
 */
function rootHandler (req: Request, res: Response): void {
  res.sendStatus(200)
}

// Setup route
router.get('/', rootHandler)

export default router
