import React from "react"
import { useParams , useHistory } from "react-router-dom";
import '../cssComponents/TaskDetalhe.css'

import Button from "./Button"

const TaskDetalhes = () => {
    const params = useParams()
    const history = useHistory()

    const handleBotaoVoltarClick = () => {
        history.goBack()
    }

    return ( 
        <>
            <div className="voltar-button-container">
                <Button onClick={handleBotaoVoltarClick}>Voltar</Button>
            </div>
            <div className="task-detalhes-container">
                <h2>{params.taskTitulo}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque minus aliquam dignissimos. Labore, corporis sunt.</p>
            </div>
        </> 
    );
}
 
export default TaskDetalhes;