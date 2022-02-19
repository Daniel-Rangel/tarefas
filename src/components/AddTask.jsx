import React, { useState } from "react"

import Button from "./Button"

import '../cssComponents/addTask.css'

const addTask = () => {
    //const [inputData, setInputData] = useState("")
    
    const handleImputChange = (e) =>  {
        setInputData(e.target.value)
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
                <Button> Adicionar</Button>
            </div>
        </div>
     )
}
 
export default addTask