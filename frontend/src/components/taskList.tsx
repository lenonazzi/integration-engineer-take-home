import { useTasks } from "../providers/tasks";
import Task from "./task";

function TaskList() {
  const { tasks } = useTasks()

  return (
    <ul className="flex flex-col gap-y-4">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
