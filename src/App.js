import React, { useState } from "react"

import Tasks from "./components/Tasks"
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
    }
  ])

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks}/>
      </div>

    </>
  )
}

export default App