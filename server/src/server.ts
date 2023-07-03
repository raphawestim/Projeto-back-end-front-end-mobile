/* eslint-disable prettier/prettier */
import 'dotenv/config'

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'

const app = fastify()
app.register(cors, {
  origin: true, // reflect the request origin // todas as URL`s poderao acessar a API.
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('😊 Server is running on port 3333')
  })
