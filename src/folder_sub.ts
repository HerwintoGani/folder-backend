import { Elysia, t } from 'elysia'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient() 

export const folder_sub = new Elysia()
    .post(
      '/folder_sub/:folder_main_id',
      async ({ params }) => db.folder_Sub.findMany({
        where: {
          folder_main_id: parseInt(params.folder_main_id)
        }
      })
    )