type Task = {
  id: string,
  title: string,
  description: string
  complete: boolean
}

type TaskResponse = Task[] | { error: string }
