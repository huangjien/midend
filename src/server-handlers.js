import {rest} from 'msw'
import regeneratorRuntime from "regenerator-runtime"

const handlers = [
    rest.get('/get200', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(200, '200', false, {ok: true}))
    }),
    rest.get('/get400', async (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(400, '400', false, {ok: true}))
    }),
    rest.post('/post200', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(200, '200', false, {ok: true}))
    }),
    rest.post('/post400', async (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(400, '400', false, {ok: true}))
    }),
    rest.put('/put200', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(200, '200', false, {ok: true}))
    }),
    rest.put('/put400', async (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(400, '400', false, {ok: true}))
    })
]

export {handlers}