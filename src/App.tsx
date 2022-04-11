import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Create from './CreateTask';
import Header from './Header';
import List from './List';

type ITask = {
    id: number;
    title: string;
    checked: boolean
  }

export type ITasks = {
    tasks: ITask[],
  }

function App() {
    const [tasks, setTasks] = useState<ITasks>({tasks: [{id: 1, title: 'Task1', checked: false}]});
    const addTask = (title: string) => { 
        setTasks({
          tasks: [
            {title, checked: false, id: tasks.tasks.length+1}, 
            ...tasks.tasks
          ]
        });
      };

    const deleteTasks = () => {
        setTasks({
          tasks: tasks.tasks.filter(t => t.checked !== true)
        });
      };

    const checkTask = (id: number) => {
        setTasks({
          tasks: tasks.tasks.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)
        });
      }
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Navigate replace to='list-tasks' />} />
                <Route path="/create-task" element={<Create addTask={addTask} />} />
                <Route path="/list-tasks" element={<List tasks={tasks} checkTask={checkTask} deleteTasks={deleteTasks} isDelete={false} />} />
                <Route path="/bulk-delete" element={<List tasks={tasks} checkTask={checkTask} deleteTasks={deleteTasks}  isDelete={true} />} />
            </Routes>
        </Router>
    );
}

export default App;
