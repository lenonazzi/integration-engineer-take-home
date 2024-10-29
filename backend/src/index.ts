import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {
  addTaskHandler,
  deleteTaskHandler,
  getAllTasksHandler,
  updateTaskHandler
} from './tasks'

/*
 * Create server and use PORT environment variable
 * -> if PORT is not defined, we use 8000 as default
 */

const app = express()
const PORT = process.env.PORT || 8000

const routerPrefix = '/api' // router prefix for better maintenece

app.use(cors()) // enabling CORS for any unknown origin
app.use(bodyParser.json())

/*
 * Get taks routes
 */

app.get(`${routerPrefix}/tasks`, getAllTasksHandler)
app.post(`${routerPrefix}/tasks`, addTaskHandler)
app.patch(`${routerPrefix}/tasks/:id`, updateTaskHandler)
app.delete(`${routerPrefix}/tasks/:id`, deleteTaskHandler)

/*
 * Run server
 */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
