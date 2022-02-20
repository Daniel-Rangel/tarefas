import React, { useEffect, useState } from "react"
import axios from "axios"
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route} from "react-router-dom"

import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import TaskDetalhes from "./components/TaskDetalhe"

import './App.css'

const App = () => {
  const [tasks , setTasks] = useState([
    {
      id:'14',
      title: 'Estudar programação',
      completed: true,
    },
    {
      id:'13',
      title: 'Estudar SEO',
      completed: false,
    },
    {
      id:'12',
      title: 'Lavar a casa',
      completed: false,
    },
    {
      id:'11',
      title: 'teste',
      completed: false,
    }
  ])

  useEffect(()=>{
    const fetchTacks = async () =>{
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=8')
      setTasks(data)
    }    

    fetchTacks()
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId ) return {...task, completed : !task.completed}

      return task
    }) 

    setTasks(newTasks)
  }

  const handleTaskadd = (taskTitulo) => {
    const newTasks = [...tasks,{
        title: taskTitulo,
        id: uuidv4(),
        completed: false
      }
    ]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) =>{
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">

        <Header />
        
        <Route 
          path='/' 
          exact  
          render={()=>(
            <>
              <AddTask handleTaskadd={handleTaskadd}/>
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          )}
        />
        <Route 
          path="/:taskTitulo" 
          exact 
          component={TaskDetalhes}
        />
      </div>
    </Router>
  )
}

export default App