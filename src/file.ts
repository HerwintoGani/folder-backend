import { Elysia, t } from 'elysia'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient() 

export const file = new Elysia()
    .post(
      '/file/:folder_sub_id',
      async ({ params }) => db.file.findMany({
        where: {
          folder_sub_id: parseInt(params.folder_sub_id)
        }
      })
    )