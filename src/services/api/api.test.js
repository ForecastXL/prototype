import 'isomorphic-fetch'
import { getJson } from './api'

describe('api service', () => {
  describe('getJson', () => {
    beforeEach(() => {
      window.fetch = jest.fn()
    })

    it('should return the destringified response if it is ok', () => {
      const expected = { data: ['data'] }
      const body = JSON.stringify(expected)
      const init = { status: 200, statusText: 'OK' }

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return getJson('endpoint').then(actual => expect(actual).toEqual(expected))
    })

    it('should return an error if the response is not ok', () => {
      const body = JSON.stringify({})
      const init = { status: 401, statusText: 'Unauthorized' }
      const error = new Error(init.statusText)

      window.fetch.mockImplementationOnce(() => Promise.resolve(new Response(body, init)))
      return getJson('endpoint').then(actual => expect(actual).toEqual(error))
    })

    it('should return an error on network errors', () => {
      const message = 'No network connection'
      const expected = new Error(message)

      window.fetch.mockImplementationOnce(() => Promise.reject(new Error(message)))
      return getJson('endpoint').then(actual => expect(actual).toEqual(expected))
    })
  })
})
