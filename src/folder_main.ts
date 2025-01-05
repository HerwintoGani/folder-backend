import { Elysia, t } from 'elysia'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient() 

export const folder_main = new Elysia()
    .post(
      '/folder_main', 
      async ({ }) => db.folder_Main.findMany({}),
    )