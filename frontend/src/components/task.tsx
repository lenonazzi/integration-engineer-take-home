import { Pencil, Square, Trash2 } from "lucide-react"
import { memo } from "react"

function Task({ task }: { task: Task }) {
  return (
    <li
      key={task.id}
      className="flex flex-row gap-4 rounded-lg border border-input p-4 text-left text-sm transition-all hover:bg-input items-center justify-start"
    >
      <button onClick={() => toggleTask(task.id)}>
        <Square />
      </button>

      <div>
        <h3>{task.title}</h3>
        <p className="text-xs">{task.description}</p>
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
