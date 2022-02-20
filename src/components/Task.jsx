import React from "react";
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory} from "react-router-dom";

import '../cssComponents/Task.css'

const Task = ({task , handleTaskClick, handleTaskDeletion }) =>{
    const history = useHistory()

    const handleTaskDetalesClick = () =>{
        history.push(`/${task.title}`)
    }

    return (
        <div 
            className="task-container" 
            style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
        >
            <div className="task-title" onClick={()=> handleTaskClick(task.id)}>
                {task.title}
            </div> 
            <div className="container-button">
                <button 
                    className="task-detalhes-button" 
                    onClick={handleTaskDetalesClick}
                >
                    <CgInfo />
                </button>
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