import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { note } from './note'
import { folder_main } from './folder_main'
import { folder_sub } from './folder_sub'
import { file } from './file'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
    .use(swagger())
    .use(cors())
    .use(note)
    .use(folder_main)
    .use(folder_sub)
    .use(file)
    .listen(3000)