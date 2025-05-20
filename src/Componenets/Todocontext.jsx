import React, { createContext, useState } from 'react'


export const TodoContext = createContext(null)


const Todocontext = (props) => {
     const [todos, settodos] = useState([{
    id:1,
    title: 'hola i am 1',
    isCompleted: false
  }])
    return (
  <TodoContext.Provider value={[todos, settodos] }>
    {props.children}
    </TodoContext.Provider> 
    )
}

export default Todocontext