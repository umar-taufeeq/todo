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
    // <div className='flex sm:flex-row flex-col bg-blue-950 text-white w-full  h-full  justify-center items-center '>
    //   <Create  />
    //   {/* <br /> */}
    //   <Read  />
    // </div>
    <div className='flex sm:flex-row flex-col bg-slate-900 text-white w-full h-full justify-center items-center'>
  <Create />
  <Read />
</div>


  )
}

export default App