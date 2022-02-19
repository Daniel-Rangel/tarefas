import React, { useState } from "react"
import {v4 as uuidv4} from 'uuid'

import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import './App.css'

const App = () => {
  /* const messagem = 'Olaa mundo2' */
  const [tasks , setTasks] = useState([
    {
      id:'1',
      titulo: 'Estudar programação',
      completo: true,
    },
    {
      id:'2',
      titulo: 'Estudar SEO',
      completo: false,
    },
    {
      id:'3',
      titulo: 'Lavar a casa',
      completo: false,
    }
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId ) return {... task, completo : !task.completo}

      return task

    }) 

    setTasks(newTasks)
  }

  const handleTaskadd = (taskTitulo) => {
    const newTasks = [...tasks,{
        titulo: taskTitulo,
        id: uuidv4(),
        completo: false
      }
    ]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) =>{
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskadd={handleTaskadd}/>
        <Tasks 
          tasks={tasks} 
          handleTaskClick={handleTaskClick} 
          handleTaskDeletion={handleTaskDeletion}
        />
      </div>

    </>
  )
}

export default App