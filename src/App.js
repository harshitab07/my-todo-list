import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import getTodo from './utils/getTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [update, setUpdate] = useState(true);

  const [todo, setTodo] = useState([]);

  useEffect(()=>{
     const data = getTodo();
     setTodo(data);
     setUpdate(false);
  }, [update]);

  return (
    <>
    <ToastContainer />
      <div className=' w-full bg-zinc-900 min-h-screen'>
        <div className=' container mx-auto flex flex-col p-16 justify-center items-center max-w-5xl' >
          <h1 className=' text-white text-3xl font-bold pb-8'>My Todo List</h1>
          <AddTodo setUpdate={setUpdate} update={update} />
          <TodoList setUpdate={setUpdate} update={update} todo={todo} />
        </div>
      </div>

    </>
  );
}

export default App;
