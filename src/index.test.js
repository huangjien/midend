import { setupServer } from 'msw/node'
import { handlers } from './server-handlers'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('save to storage', async () => {
    console.log("empty now")
})

test('get from storage', async () => {
    console.log("empty now")
})

test('get from rest api', async () => {
    console.log("empty now")
})

test('test interval', async () => {
    console.log("empty now")
})