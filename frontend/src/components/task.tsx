import { memo } from "react"
import {
  Pencil,
  Square,
  SquareCheckBig,
  Trash2
} from "lucide-react"

import { cn } from "../utils/cn"
import { useTasks } from "../providers/tasks"
import { toast } from "react-toastify"

function Task({ task }: { task: Task }) {
  const { setTasks } = useTasks()

  const editTask = async (id: Task['id']) => {
    const tasks = await fetch(`http://localhost:8000/api/tasks/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: 'PATCH',
      body: JSON.stringify({
        title: task.title,
        description: task.description,
        complete: !task.complete
      }),
    })
      .then(async data => await data.json())

    if (tasks.error) {
      toast.error(tasks.error)
      return
    }

    toast.success("Task successfully updated")
    setTasks(tasks)
  }

  const deleteTask = async (id: Task['id']) => {
    const tasks = await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(async data => await data.json())

    if (tasks.error) {
      toast.error(tasks.error)
      return
    }

    toast.success("Task successfully deleted")
    setTasks(tasks)
  }

  return (
    <li
      className={cn(
        "flex flex-row gap-4 rounded-lg border border-input p-4 text-left text-sm transition-all hover:bg-input items-center justify-start shadow-sm",
        { 'line-through bg-green-500/10': task.complete }
      )}
    >
      <button onClick={() => editTask(task.id)}>
        {task.complete
          ? <SquareCheckBig />
          : <Square />
        }
      </button>

      <div>
        <h3 className={cn({ 'italic': task.complete })}>{task.title}</h3>
        <p className={cn(
          "text-xs text-neutral-400",
          { 'italic': task.complete }
        )}>{task.description}</p>
      </div>

      <div className="ml-auto flex flex-row gap-2">
        <button onClick={() => editTask(task.id)}>
          <Pencil size={16} />
        </button>

        <button onClick={() => deleteTask(task.id)}>
          <Trash2 size={16} />
        </button>
      </div>
    </li>
  )
}

export default memo(Task)
