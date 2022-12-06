import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Radio, Dropdown} from "@nextui-org/react";
import {getProductFromSos, getSoS, setNewAmount} from "../../http/EditProductCount";

const EditProductCount = observer(({show, onHide}) => {
    const [checked, setChecked] = useState('Shop');
    const [selectedSos, setSelectedSos] = React.useState('');
    const [selectedProd, setSelectedProd] = React.useState('');
    const [sos, setSos] = useState(getSoS(checked))
    const [product, setProduct] = useState('')
    const [amount, setAmount] = useState()

    const submit = () => {
        let prod = selectedProd
        prod.amount = amount
        setSelectedProd(prod)
        setNewAmount(selectedProd).then(data => onHide())
    }

    useEffect(() => {
        setProduct(getProductFromSos(checked, selectedSos))
    }, [selectedSos])

    useEffect(() => {
        setSos(getSoS(checked))
    }, [checked])
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Изменить количество продукта
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Radio.Group orientation="horizontal" defaultValue={"Shop"} value={checked} onChange={setChecked}
                                 className={"mb-2"}>
                        <Radio value={"Shop"}>Shop</Radio>
                        <Radio value={"Storage"}>Storage</Radio>
                    </Radio.Group>
                    <Dropdown>
                        <Dropdown.Button color={"primary"} shadow>
                            {checked} номер
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="primary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedSos}
                            onSelectionChange={setSelectedSos}
                        >
                            {sos.map(build => {
                                <Dropdown.Item key={build.id}>{checked} {build.id}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Button color={"primary"} shadow>
                            Номер продукта
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="primary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedProd}
                            onSelectionChange={setSelectedProd}
                        >
                            {product.map(prod => {
                                <Dropdown.Item key={prod.id}>Продукт №{prod.id}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={selectedProd.amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите Кол-во продукта"
                        type="number"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={submit()}>Обновить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default EditProductCount;