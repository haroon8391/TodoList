import React from 'react'

export default function Card({ taskObj, index, deleteTask }) {

    const handleDelete = () => {
        deleteTask(index);
    }

    return (
        <div class="card-wrapper">
            <div class="task-holder">
                <span class="card-header" style={{
                    backgroundColor: "rgb(176, 176, 221)", borderRadius: "7px"
                }}>{taskObj.Name}</span>
                <p className="mt-3" style={{ backgroundColor: "papayawhip" }}>{taskObj.Description}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <i class="fas fa-trash-alt" style={{ cursor: "pointer" }} onClick={handleDelete}></i>
                </div>
            </div>
        </div>
    )
}





