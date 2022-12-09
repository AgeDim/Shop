import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {setStatus} from "../../http/orderAPI";
import {Dropdown} from "@nextui-org/react";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {addFish} from "../../http/fishAPI";

const AddFish = observer(({show, onHide}) => {
    const [name,setName]= useState('')
    const [lengthMax,setLengthMax]= useState('')
    const [lengthMin,setLengthMin]= useState('')
    const [weightMax,setWeightMax]= useState('')
    const [weightMin,setWeightMin]= useState('')
    const [habitat,setHabitat]= useState('')

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить Рыбу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите имя рыбы"
                        type="text"
                    />
                    <hr/><Form.Control
                        onChange={e => setLengthMax(e.target.value)}
                        className="mt-3"
                        placeholder="Введите максимальную длину"
                        type="number"
                    />
                    <hr/><Form.Control
                        onChange={e => setLengthMin(e.target.value)}
                        className="mt-3"
                        placeholder="Введите минимальную длину"
                        type="number"
                    />
                    <hr/><Form.Control
                        onChange={e => setWeightMax(e.target.value)}
                        className="mt-3"
                        placeholder="Введите максимальный вес"
                        type="number"
                    />
                    <hr/><Form.Control
                        onChange={e => setWeightMin(e.target.value)}
                        className="mt-3"
                        placeholder="Введите минимальный вес"
                        type="number"
                    />
                    <hr/><Form.Control
                        onChange={e => setHabitat(e.target.value)}
                        className="mt-3"
                        placeholder="Введите среду обитания"
                        type="text"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={()=>{addFish(name, lengthMax,lengthMin,weightMax,weightMin,habitat)}}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});


export default AddFish;