import express from 'express'
import * as Example from './controllers/example.controller'

// Initialize router
const router = express.Router()

// Setup route
router.get('/', Example.getAll)
router.get('/:id', Example.getOne)
router.post('/', Example.create)
router.put('/:id', Example.update)
router.delete('/:id', Example.deleteOne)

export default router
