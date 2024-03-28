import {http} from 'msw'
import regeneratorRuntime from "regenerator-runtime"

const handlers = [
    http.get('/get200', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(200, '200', false, {ok: true}))
    }),
    http.get('/get400', async (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(400, '400', false, {ok: true}))
    }),
    http.post('/post200', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(200, '200', false, {ok: true}))
    }),
    http.post('/post400', async (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(400, '400', false, {ok: true}))
    }),
    http.put('/put200', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(200, '200', false, {ok: true}))
    }),
    http.put('/put400', async (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(400, '400', false, {ok: true}))
    })
]

export {handlers}