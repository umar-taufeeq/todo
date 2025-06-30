import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { TodoContext } from './Todocontext';

const Read = () => {
  // const { todos, settodos } = props
  const [todos,settodos] = useContext(TodoContext)
  const [expandedId, setExpandedId] = useState(null);

const toggleExpand = (id) => {
  setExpandedId(expandedId === id ? null : id);
};


  useEffect(()=>{
    settodos(JSON.parse(localStorage.getItem('task')) || []) // [] if task is not present in local storage it will return null [] this will help not breqk the app as it will return empty array to render
  },[])

//   useEffect(() => {
//   const storedTodos = JSON.parse(localStorage.getItem('task')) || [];
//   settodos(storedTodos);
// }, []);

  const deleteHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    toast.error("Todo Deleted Successfully")
    settodos(newTodos)
     localStorage.setItem("task", JSON.stringify(newTodos));
  }

  return (
    <div className="sm:w-[40%] w-full h-screen  text-white sm:py-10 sm:px-15   ">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center "> List of All Tasks</h1>
      <ol className="list-decimal sm:pl-5 p-4 space-y-2">
        {todos.map((todo) => (
          // <li key={todo.id} className="flex justify-between items-start bg-gray-800 text-white p-4 rounded-xl shadow-md">
          //   <span>{todo.title}</span>
          //   <button
          //     onClick={() => deleteHandler(todo.id)}
          //     className="text-red-400 hover:text-red-600 transition duration-200"
          //   >
          //     Delete
          //   </button>
          // </li>
          <li key={todo.id} className="flex flex-col bg-gray-800 text-white p-4 rounded-xl shadow-md">
  <div className="flex justify-between items-start">
    <span className="font-medium">{todo.title}</span>
    <div className="flex gap-3">
     {todo.isImportant && (
  <div className="text-white text-xs  px-3 py-1 bg-red-500 rounded-xl">
    IMP
  </div>
)}
      <button
        onClick={() => toggleExpand(todo.id)}
        className="text-blue-400 hover:text-blue-600 text-sm"
      >
        {expandedId === todo.id ? '↑' : '↓'}
      </button>
      <button
        onClick={() => deleteHandler(todo.id)}
        className="text-red-400 hover:text-red-600 transition duration-200 text-sm"
      >
        Delete
      </button>
    </div>
  </div>

  {expandedId === todo.id && (
    <p className="mt-2 text-gray-300 text-sm">{todo.description || "No description provided."}</p>
  )}
</li>

        ))}
      </ol>
    </div>

  )
}

export default Read
