import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type PropsWithChildren
} from "react"
import { API_URL } from "../constants"
import { toast } from "react-toastify"

interface TasksContextProps {
  tasks: Task[]
  setTasks: Dispatch<React.SetStateAction<Task[]>>
}

const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  setTasks: () => void []
})

const TasksProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const fetchTasks = async () => {
    try {
      const tasks = await fetch(`${API_URL}/api/tasks`)
        .then(async data => await data.json())

      if (tasks.error) {
        toast.error(tasks.error)
        return
      }

      toast.success("Task successfully added")
      setTasks(tasks)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error("useTasks must be used within an TasksProvider")
  }

  return context
}

export default TasksProvider
