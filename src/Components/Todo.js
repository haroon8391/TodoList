import React, { useEffect, useState } from 'react'
import Createtask from '../Modals/Createtask'
import Card from './Card';

export default function Todo() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList");
        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    })

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(taskList));
        setTaskList(tempList);
        window.location.reload();
    }

    const saveTask = (taskObj) => {
        let temp = taskList;
        temp.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(temp));
        setTaskList(temp);
        setModal(false);
    }

    return (
        <>
            <div className='header text-center'>
                <h3>Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={() => { setModal(true) }}>Create Task</button>
            </div>
            <div className="listItems">
                {taskList.map((obj, index) => {
                    return (
                        <Card taskObj={obj} index={index} deleteTask={deleteTask} />
                    )
                })}
            </div>
            <Createtask modal={modal} saveTask={saveTask} />
        </>
    )
}
