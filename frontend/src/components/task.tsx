import { memo, useState } from "react"
import {
  LoaderCircle,
  Pencil,
  Square,
  SquareCheckBig,
  Trash2
} from "lucide-react"
import { toast } from "react-toastify"

import { cn } from "../utils/cn"
import { useTasks } from "../providers/tasks"
import { API_URL } from "../constants"
import TaskDialog from "./TaskDialog"

function Task({ task }: { task: Task }) {
  const { setTasks } = useTasks()
  const [loading, setLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const toggleTask = async (id: Task['id']) => {
    setLoading(true)

    const tasks = await fetch(`${API_URL}/api/tasks/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: 'PATCH',
      body: JSON.stringify({
        complete: !task.complete
      }),
    })
      .then(async data => await data.json())

    setLoading(false)

    if (tasks.error) {
      toast.error(tasks.error)
      return
    }

    toast.success("Task successfully updated")
    setTasks(tasks)
  }

  const deleteTask = async (id: Task['id']) => {
    setLoading(true)

    const tasks = await fetch(`${API_URL}/api/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(async data => await data.json())

    setLoading(false)

    if (tasks.error) {
      toast.error(tasks.error)
      return
    }

    toast.success("Task successfully deleted")
    setTasks(tasks)
  }

  return (
    <>
      <li
        className={cn(
          "flex flex-row gap-4 rounded-lg border border-input p-4 text-left text-sm transition-all hover:bg-input items-center justify-start shadow-sm relative",
          { 'line-through bg-green-500/10': task.complete }
        )}
      >
        {loading && (
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            <LoaderCircle size={16} className="animate-spin" />
          </div>
        )}

        <button
          onClick={() => toggleTask(task.id)}
          disabled={loading}
        >
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
          <button
            onClick={() => setOpenDialog(true)}
            disabled={loading}
          >
            <Pencil size={16} />
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            disabled={loading}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </li>

      {openDialog && (
        <TaskDialog
          task={task}
          closeDialog={() => setOpenDialog(false)}
        />
      )}
    </>
  )
}

export default memo(Task)
