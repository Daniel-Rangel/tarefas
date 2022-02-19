import React, { useState } from "react"

import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import './App.css'

const App = () => {
  /* const messagem = 'Olaa mundo2' */
  const [tasks , setTasks] = useState([
    {
      id:'1',
      titulo: 'Estudar programação',
      completo: false,
    },
    {
      id:'2',
      titulo: 'Estudar SEO',
      completo: true,
    },
    {
      id:'2',
      titulo: 'Lavar a casa',
      completo: true,
    }
  ])

  return (
    <>
      <div className="container">
        <AddTask/>
        <Tasks tasks={tasks}/>
      </div>

    </>
  )
}

export default App