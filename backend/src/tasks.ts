import { v4 as uuidv4 } from 'uuid'

/*
  * Create in memory an empty task array
  */

let tasks: Task[] = []

export const getAllTasksHandler = (req, res) => {
  res.json(tasks)
}

export const addTaskHandler = (req, res) => {
  const { title, description } = req.body

  /*
    * Validate if title or description are not empty
    */

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: 'Title and description must not be empty' })
  }

  /*
    * Create a new task with a unique random id
    * -> We're using the spread operator to add a new task
    *    and preserve the order based on the newest
    */

  tasks = [
    {
      id: uuidv4(),
      title,
      description,
      complete: false
    },
    ...tasks
  ]

  res.json(tasks)
}

export const updateTaskHandler = (req, res) => {
  const { id } = req.params
  const { title, description, complete } = req.body

  /*
    * Find task index in the array by id
    */

  const index = tasks.findIndex(task => task.id === id)

  /*
    * Validate if taks exists
    */

  if (index < 0) {
    return res
      .status(404)
      .json({ error: 'Task not found' })
  }

  /*
    * Validate if title or description are not empty
    */

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: 'Title and description must not be empty' })
  }

  /*
    * Update the task fields, expect the id
    * -> if a field is not set, we keep the old value
    */

  tasks[index] = {
    ...tasks[index],
    title: title ?? tasks[index].title,
    description: description ?? tasks[index].description,
    complete: complete ?? tasks[index].complete
  }

  res.json(tasks)
}

export const deleteTaskHandler = (req, res) => {
  const { id } = req.params

  /*
    * Find task index in the array by id
    */

  const index = tasks.findIndex(task => task.id === id)

  /*
    * Validate if taks exists
    */

  if (index < 0) {
    return res
      .status(404)
      .json({ error: 'Task not found' })
  }

  /*
    * Delete the task from tasks arays and return the updated array
    */

  tasks.splice(index, 1)
  return res.json(tasks)
}
