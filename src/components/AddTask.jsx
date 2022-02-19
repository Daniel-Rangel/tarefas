import React, { useState } from "react"

import Button from "./Button"

import '../cssComponents/addTask.css'

const AddTask = ({handleTaskadd}) => {
    
    const [inputData, setInputData] = useState('')

    const handleImputChange = (e) =>  {
       setInputData(e.target.value)
       
    }  
    
    const handleAddTaskClick = () => {
        handleTaskadd(inputData)
        setInputData('')
    }

  

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleImputChange} 
                className="add-task-input" 
                value={inputData}
                type="text" 
            />
            <div className="add-task-button">
                <Button onClick={handleAddTaskClick}> Adicionar</Button>
            </div>
        </div>
     )
}
 
export default AddTask