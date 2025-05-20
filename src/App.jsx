import React, { useState } from 'react'
import Create from './Componenets/Create'
import Read from './Componenets/Read'

const App = () => {

  // const [todos, settodos] = useState([{
  //   id:1,
  //   title: 'hola i am 1',
  //   isCompleted: false
  // }])
  
  return (
    <div className='flex flex-col bg-blue-950 text-white w-full  h-full  justify-center items-center '>
      <Create  />
      <br />
      <Read  />
    </div>
  )
}

export default App