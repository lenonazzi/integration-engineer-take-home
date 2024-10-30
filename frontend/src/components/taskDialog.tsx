import { X } from "lucide-react"
import Form from "./form"

interface TaskDialogProps {
  task: Task
  closeDialog: () => void
}

function TaskDialog({ task, closeDialog }: TaskDialogProps) {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/80" />

      <div
        className="fixed left-[50%] top-[50%] z-50 flex flex-col w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-input bg-background p-6 shadow-lg rounded-lg"
        tabIndex={-1}
      >
        <button
          className="absolute right-4 top-4"
          onClick={closeDialog}
        >
          <X size={20} />
        </button>

        <h2 className="text-lg font-semibold">Edit task</h2>

        <div className="py-4">
          <Form
            task={task}
            callback={closeDialog}
          />
        </div>
      </div>
    </>
  )
}

export default TaskDialog
