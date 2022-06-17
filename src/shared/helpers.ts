// Check if NODE_ENV=development
export function development (): boolean {
  return process.env.NODE_ENV === 'development'
}
