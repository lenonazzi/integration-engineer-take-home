import { useState } from "react";
import Task from "./task";

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: Date.now(),
      title: "Test",
      description: "Simple task description"
    }
  ]);

  const deleteTask = async (id: string) => {
  };

  return (
    <ul>
      {tasks.map(task => (
        <Task task={task} />
      ))}
    </ul>
  )
}

export default TaskList
