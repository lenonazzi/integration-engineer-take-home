import { useState, type FormEvent } from "react"
import { Plus, LoaderCircle, Save } from "lucide-react"
import { toast } from "react-toastify"

import { useTasks } from "../providers/tasks"
import { API_URL } from "../constants"

import Button from "./button"
import Input from "./input"

interface FormProps {
  task?: Task
  callback?: () => void
}

function Form({ task, callback }: FormProps) {
  const { setTasks } = useTasks()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: task ? task.title : '',
    description: task ? task.description : ''
  })

  const resetForm = () => setFormData({ title: '', description: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const URL = task
      ? `${API_URL}/api/tasks/${task.id}`
      : `${API_URL}/api/tasks`

    const METHOD = task
      ? 'PATCH'
      : 'POST'

    try {
      const tasks = await fetch(URL, {
        headers: { "Content-Type": "application/json" },
        method: METHOD,
        body: JSON.stringify({
          title: formData.title,
          description: formData.description
        }),
      })
        .then(async data => await data.json())

      if (tasks.error) {
        toast.error(tasks.error)
        return
      }

      resetForm()

      if (callback && typeof callback === 'function') {
        callback()
      }

      toast.success("Task successfully added")
      setTasks(tasks)
    } catch (e) {
      toast.error(String(e))
    } finally {
      setLoading(false)
    }
  }

  const ButtonIcon = () => {
    return task
      ? <Save size={16} />
      : <Plus size={16} />
  }

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
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
        disabled={loading}
        type="submit"
      >
        {task
          ? 'Save'
          : 'Create'
        }

        {loading
          ? <LoaderCircle size={16} className="animate-spin" />
          : <ButtonIcon />
        }
      </Button>
    </form>
  )
}

export default Form
