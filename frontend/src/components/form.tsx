import { useEffect, useState } from "react";
import Button from "./button";
import Input from "./input";
import { CirclePlus } from "lucide-react";

function Form() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:8000/api/tasks')
    const tasks = await response.json();
    setTasks(tasks);
  };

  /* Complete the following functions to hit endpoints on your server */
  const createTask = async () => {
    const task: Task = {
      id: Date.now(),
      title: formData.title,
      description: formData.description
    }

    setTasks(prev => [task, ...prev])
  };

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
      >
        <CirclePlus size={16} />
        Add task
      </Button>
    </div>
  )
}

export default Form
