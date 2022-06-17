import { Request, Response } from 'express'
import logger from 'jet-logger'

/**
 * POST request controller.
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response} an Express Response
 */
export function create (req: Request, res: Response) {
  logger.info(req.headers)
  return res.status(201).send('OK')
}

/**
 * DELETE request controller
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response} an Express Response
 */
export function deleteOne (req: Request, res: Response) {
  logger.info(req.headers)
  return res.status(200).send('OK')
}

/**
 * GET request controller for all items
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response} an Express Response
 */
export function getAll (req: Request, res: Response) {
  logger.info(req.headers)
  return res.status(200).send('OK')
}

/**
 * GET request controller for single items
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response} an Express Response
 */
export function getOne (req: Request, res: Response) {
  logger.info(req.headers)
  return res.status(200).send('OK')
}

/**
 * PUT request controller
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response} an Express Response
 */
export function update (req: Request, res: Response) {
  logger.info(req.headers)
  return res.status(200).send('OK')
}
