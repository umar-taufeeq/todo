import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { TodoContext } from './Todocontext';

const Read = () => {
  // const { todos, settodos } = props
  const [todos,settodos] = useContext(TodoContext)

  const deleteHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    toast.error("Todo Deleted Successfully")
    settodos(newTodos)
  }

  return (
    <div className="sm:w-[35%] w-full h-screen  text-white py-4  ">
      <h1 className="text-2xl font-semibold mb-2 text-center "> Todo Tasks</h1>
      <ol className="list-decimal sm:pl-5 p-4 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-start bg-gray-800 text-white p-4 rounded-xl shadow-md">
            <span>{todo.title}</span>
            <button
              onClick={() => deleteHandler(todo.id)}
              className="text-red-400 hover:text-red-600 transition duration-200"
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Read
