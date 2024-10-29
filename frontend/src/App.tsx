import Form from './components/form';
import TaskList from './components/taskList';

function App() {
  return (
    <main className="flex flex-col max-w-prose m-auto gap-12 py-12 self-center overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Task Management App</h1>

      <Form />
      <TaskList />
    </main>
  );
}

export default App;
