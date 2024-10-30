import type { Request, RequestHandler, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

/*
  * Create in memory an empty task array
  */

let tasks: Task[] = []

export const getAllTasksHandler: RequestHandler = (_, res: Response) => {
  res.json(tasks)
}

export const addTaskHandler = (
  req: Request<{}, {}, Partial<Task>>,
  res: Response
) => {
  const { title, description } = req.body

  /*
    * Validate if title or description are not empty
    */

  if (!title || !description) {
    res
      .status(400)
      .json({ error: 'Title and description must not be empty' })

    return
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
    } as Task,
    ...tasks
  ]

  res.json(tasks)
}

export const updateTaskHandler = (
  req: Request<{ id: Task['id'] }, {}, Partial<Task>>,
  res: Response
) => {
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
    res
      .status(404)
      .json({ error: 'Task not found' })

    return
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

export const deleteTaskHandler = (
  req: Request<{ id: Task['id'] }>,
  res: Response
) => {
  const { id } = req.params

  /*
    * Find task index in the array by id
    */

  const index = tasks.findIndex(task => task.id === id)

  /*
    * Validate if taks exists
    */

  if (index < 0) {
    res
      .status(404)
      .json({ error: 'Task not found' })

    return
  }

  /*
    * Delete the task from tasks arays and return the updated array
    */

  tasks.splice(index, 1)
  res.json(tasks)
}
