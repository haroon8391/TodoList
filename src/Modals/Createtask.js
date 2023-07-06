import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Createtask(props) {

    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeName = (e) => {

        setTaskName(e.target.value);
    }

    const handleChangeDesc = (e) => {
        setDescription(e.target.value)
    }

    const handleSave = () => {
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        props.saveTask(taskObj);
    }

    const toggle = () => {
        if (props.modal === true) {
            props.modal = false;
        }
        else {
            props.modal = true;
        }
    }

    return (
        <Modal isOpen={props.modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Task Name</label>
                        <input type="text" name="taskName" id="name" className='form-control' value={taskName} onChange={handleChangeName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Task Description</label>
                        <textarea name="descript" id="desc" cols="30" rows="5" className='form-control' value={description} onChange={handleChangeDesc}></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="danger" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}
