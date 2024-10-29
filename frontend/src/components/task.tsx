import { Pencil, Square, SquareCheck, Trash2 } from "lucide-react"
import { memo, useState } from "react"
import { cn } from "../utils/cn"

function Task({ task }: { task: Task }) {
  const [isComplete, setIsComplete] = useState(false)

  const toggleTask = (id: Pick<Task, 'id'>) => {
    setIsComplete(!isComplete)
  }

  return (
    <li
      key={task.id}
      className={cn(
        "flex flex-row gap-4 rounded-lg border border-input p-4 text-left text-sm transition-all hover:bg-input items-center justify-start shadow-sm",
        { 'line-through': isComplete }
      )}
    >
      <button onClick={() => toggleTask(task.id)}>
        {isComplete
          ? <SquareCheck />
          : <Square />
        }
      </button>

      <div>
        <h3 className={cn({ 'italic': isComplete })}>{task.title}</h3>
        <p className={cn(
          "text-xs text-neutral-400",
          { 'italic': isComplete }
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
