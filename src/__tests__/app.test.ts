import request from 'supertest'
import app from '@/src/app'
import * as UserController from '@/src/controllers/users.controller'
import { apiDirectory } from '@/src/shared.constant'

describe('/', () => {
  it('should contain the home directory', async () => {
    const { body: response } = await request(app).get('/')
    expect(response).toEqual(apiDirectory)
  })
  it('should contain the home directory', async () => {
    const { body: response } = await request(app).get('/')
    expect(response).toEqual(apiDirectory)
  })
  describe('Error Handling', () => {
    it('should handle 400 statusCode errors', async () => {
      const errorMessage = 'This is 400'
      jest
        .spyOn(UserController, 'getUsers')
        .mockRejectedValue({ message: errorMessage, statusCode: 400 })

      const response = await request(app).get('/users')

      expect(response.status).toBe(400)
      expect(response.body.error).toBe(errorMessage)
    })
    it('should handle 500 statusCode errors', async () => {
      jest
        .spyOn(UserController, 'getUsers')
        .mockRejectedValue(new Error('Test error'))

      const response = await request(app).get('/users')

      expect(response.status).toBe(500)
    })
  })
})
