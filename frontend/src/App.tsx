import Form from './components/form';
import TaskList from './components/taskList';

function App() {
  return (
    <main className="flex flex-col overflow-y-auto gap-12 py-12">
      <h1 className="font-bold text-3xl text-center">Task Management App</h1>

      <Form />
      <TaskList />
    </main>
  );
}

export default App;
