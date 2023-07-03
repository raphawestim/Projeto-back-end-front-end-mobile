/* eslint-disable prettier/prettier */
import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function memoriesRoutes(app: FastifyInstance) {

  // estou usando o prisma para fazer a consulta no banco de dados e retornar os dados da tabela memories para o front-end.

  // este get esta retornando todos os dados da tabela memories.
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        creatAd: 'asc',
      },
    })

    return memories.map(memory => {
      return {
        id: memory.id,
        coverURL: memory.coverURL,
        excerpt: memory.content.substring(0, 115).concat('...'),
      }
    })
  })

  // este get esta retornando apenas um dado da tabela memories.
  app.get('/memories/:id', async (request) => {    
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      }
    })

    return memory

  })

  // este post esta criando um novo dado na tabela memories.
  app.post('/memories', async (request) => {
    const bodySchema = z.object({
      content: z.string(),
      coverURL: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, isPublic, coverURL} = bodySchema.parse(request.body)

    const memory = await prisma.memory.create({
      data: {
        content,
        isPublic,
        coverURL,
        userId: "7f0c955a-7bfb-4b00-8d16-bc2415f94ce3"
      }
    })

    return memory
  })

  // este put esta atualizando um dado da tabela memories.
  app.put('/memories/:id', async (request) => {

    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      content: z.string(),
      coverURL: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { content, isPublic, coverURL} = bodySchema.parse(request.body)

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        isPublic,
        coverURL,
      }
    })

    return memory

  })


  // este delete esta deletando um dado da tabela memories.
  app.delete('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.memory.delete({
      where: {
        id,
      }
    })
  })
}
