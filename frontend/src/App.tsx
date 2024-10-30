import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Form from './components/form'
import TaskList from './components/taskList'

import TasksProvider from './providers/tasks'

function App() {
  return (
    <main className="flex flex-col max-w-prose m-auto gap-12 py-12 px-2 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Task Management App</h1>

      <TasksProvider>
        <Form />
        <TaskList />
      </TasksProvider>

      <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        theme="dark"
        stacked
        className="text-xs"
      />
    </main>
  )
}

export default App
