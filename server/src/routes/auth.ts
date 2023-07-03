/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import axios from 'axios'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    })
    const { code } = bodySchema.parse(request.body)

    const acessTokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: "application/json",
        }
      }
    )

    const { access_token } = acessTokenResponse.data;
    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        authorization: `Bearer ${access_token}`,
      }
    })

    const userSchema = z.object({
      id: z.number(),
      login: z.string(),
      avatar_url: z.string().url(),
      name: z.string(),

    })
    const user = userSchema.parse(userResponse.data)

    return{
      user,
    }
  })
}
