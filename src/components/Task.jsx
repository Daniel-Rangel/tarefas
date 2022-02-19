import React from "react";

import '../cssComponents/Task.css'

const Task = ({task}) =>{
    return (
        <div className="task-container">
            {task.titulo}
        </div>
    )
}

export default Task