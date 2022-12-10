import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {setStatus} from "../../http/orderAPI";
import {Dropdown} from "@nextui-org/react";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";

const ChangeStatus = observer(({show, onHide}) => {
    const [id, setId] = useState('')
    const [stat, setStat] = useState('Выберите статус заказа')
    const setSt = () => {
        if (id === '') {
            alert("Id can't be null")
        } else {
            setStatus(id, stat)
            onHide()
        }
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Изменить статус заказа
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setId(e.target.value)}
                        className="mt-3"
                        placeholder="Введите id заказа"
                    />
                    <hr/>
                    <Dropdown>
                        <Dropdown.Button color="secondary" shadow>
                            {stat}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="secondary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={stat}
                            onSelectionChange={setStat}>
                            <Dropdown.Item key="inProcess">inProcess</Dropdown.Item>
                            <Dropdown.Item key="done">done</Dropdown.Item>
                            <Dropdown.Item key="fail">fail</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => setSt()}>Обновить</Button>
            </Modal.Footer>
        </Modal>
    );
});


export default ChangeStatus;