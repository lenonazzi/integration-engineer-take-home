import { useState } from "react"
import Button from "./button"
import Input from "./input"
import { CirclePlus, LoaderCircle } from "lucide-react"
import { useTasks } from "../providers/tasks"
import { toast } from "react-toastify"

function Form() {
  const { setTasks } = useTasks()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ title: '', description: '' })

  const resetForm = () => setFormData({ title: '', description: '' })

  const createTask = async () => {
    setLoading(true)

    const tasks = await fetch('http://localhost:8000/api/tasks', {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify({
        title: formData.title,
        description: formData.description
      }),
    })
      .then(async data => await data.json())

    setLoading(false)

    if (tasks.error) {
      toast.error(tasks.error)
      return
    }

    resetForm()

    toast.success("Task successfully added")
    setTasks(tasks)
  }

  return (
    <div className="flex flex-col gap-2">
      <Input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
      />

      <Input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={e => setFormData({ ...formData, description: e.target.value })}
      />

      <Button
        className="gap-x-2 ml-auto text-sm"
        onClick={createTask}
        disabled={loading}
      >
        Create
        {loading
          ? <LoaderCircle size={16} className="animate-spin" />
          : <CirclePlus size={16} />
        }
      </Button>
    </div>
  )
}

export default Form
