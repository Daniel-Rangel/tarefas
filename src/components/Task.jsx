import React from "react";
import { CgClose } from 'react-icons/cg';

import '../cssComponents/Task.css'

const Task = ({task , handleTaskClick, handleTaskDeletion }) =>{
    return (
        <div 
            className="task-container" 
            style={task.completo ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className="task-titulo" onClick={()=> handleTaskClick(task.id)}>
                {task.titulo}
            </div> 
            <div className="container-button">
                <button 
                    className="remove-task-button" 
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose />
                </button>
            </div>
        </div>
    )
}

export default Task