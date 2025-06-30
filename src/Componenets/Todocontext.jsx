import React, { createContext, useState } from 'react'


export const TodoContext = createContext(null)


const Todocontext = (props) => {
     const [todos, settodos] = useState([])
    return (
  <TodoContext.Provider value={[todos, settodos] }>
    {props.children}
    </TodoContext.Provider> 
    )
}

export default Todocontext