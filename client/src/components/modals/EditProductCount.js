import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Radio, Dropdown} from "@nextui-org/react";
import {getProductFromSos, getSoS, setNewAmount} from "../../http/EditProductCount";

const EditProductCount = observer(({show, onHide}) => {
    const [checked, setChecked] = useState('Shop');
    const [selectedSos, setSelectedSos] = React.useState('');
    const [selectedProd, setSelectedProd] = React.useState([]);
    const [sos, setSos] = useState([])
    const [product, setProduct] = useState([])
    const [amount, setAmount] = useState()

    const submit = () => {
        let prod = selectedProd
        prod.amount = amount
        setSelectedProd(prod)
        setNewAmount(checked, selectedSos.currentKey, selectedProd.currentKey, amount).then(data => onHide())
    }

    useEffect(() => {
        console.log(selectedSos)
        getProductFromSos(checked, selectedSos.currentKey, setProduct)
    }, [selectedSos])

    useEffect(() => {
        getSoS(checked, setSos)
    }, [checked])
    useEffect(()=>{
        product.map(prod => {if(prod.id == selectedProd.currentKey){setAmount(prod.amount)}})
        console.log(amount)
    },[selectedProd])
    console.log(selectedProd)
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
                            {checked} {selectedSos}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="primary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedSos}
                            onSelectionChange={setSelectedSos}
                        >
                            {sos.map(build => (
                                <Dropdown.Item key={build}>{checked} {build}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Button color={"primary"} shadow>
                            ID {selectedProd}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="primary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedProd}
                            onSelectionChange={setSelectedProd}
                        >
                            {product.map(prod => (
                                <Dropdown.Item key={prod.id}>Продукт №{prod.id}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        className="mt-3"
                        placeholder={amount}
                        type="number"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={() => submit()}>Обновить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default EditProductCount;