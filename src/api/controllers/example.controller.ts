import { Request, Response } from 'express'

/**
 * POST request controller.
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response<any, Record<string, any>>} an Express Response
 */
export function create (req: Request, res: Response) {
  return res.status(201).send('CREATED')
}

/**
 * DELETE request controller
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response<any, Record<string, any>>} an Express Response
 */
export function deleteOne (req: Request, res: Response) {
  return res.status(200).send('OK')
}

/**
 * GET request controller for all items
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response<any, Record<string, any>>} an Express Response
 */
export function getAll (req: Request, res: Response) {
  return res.status(200).send('OK')
}

/**
 * GET request controller for single items
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response<any, Record<string, any>>} an Express Response
 */
export function getOne (req: Request, res: Response) {
  return res.status(200).send('OK')
}

/**
 * PUT request controller
 *
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {Response<any, Record<string, any>>} an Express Response
 */
export function update (req: Request, res: Response) {
  return res.status(200).send('OK')
}
