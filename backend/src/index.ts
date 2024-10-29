import express from 'express'
import bodyParser from 'body-parser'

/*
 * Create server and use PORT environment variable
 * -> if PORT is not defined, we use 8000 as default
 */

const app = express()
const PORT = process.env.PORT || 8000

const routerPrefix = '/api' // router prefix for better maintenece

app.use(bodyParser.json())

let tasks = []
let nextTaskId = 1

app.get(`${routerPrefix}/tasks`, (req, res) => {
  res.json(tasks)
})

app.post(`${routerPrefix}/tasks`, (req, res) => {
})

app.delete(`${routerPrefix}/tasks/:id`, (req, res) => {
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
