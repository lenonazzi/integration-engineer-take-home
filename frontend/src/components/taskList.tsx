import { useState } from "react";
import Task from "./task";

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: Date.now(),
      title: "Test",
      description: "Simple task description"
    },
    {
      id: Date.now() + 1,
      title: "Test 2",
      description: "Simple task description 2"
    }
  ]);

  const deleteTask = async (id: string) => {
  };

  return (
    <ul className="flex flex-col gap-y-4">
      {tasks.map(task => (
        <Task task={task} />
      ))}
    </ul>
  )
}

export default TaskList
