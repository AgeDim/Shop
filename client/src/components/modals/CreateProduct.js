import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createDevice} from "../../http/productAPI";

const CreateProduct = observer(({show, onHide}) => {
    const map = new Map();
    map.set('Топ', 'top')
    map.set('Удилища', 'rod')
    map.set('Катушки', 'coil')
    map.set('Леска', 'fishing_line')
    map.set('Крючки', 'hook')
    map.set('Приманки', 'lure')
    map.set('Наживка', 'bait')
    map.set('Поводки', 'leash')
    map.set('Грузила', 'sinker')
    map.set('Кормушки', 'feeder')
    map.set('Сборки', 'pack')
    map.set('Прикормка', 'feeding_up')
    map.set('База', 'base')
    map.set('Добавки', 'additive')
    map.set('Ароматизаторы', 'flavoring')
    const {product} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState(null)


    const selectInfo = e => {
        console.log(e.target.files[0])
        setInfo(e.target.files[0])

    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('type', map.get(product.selectedType.name))
        formData.append('description', info)
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить продукт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{product.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.types.map(type =>
                                <Dropdown.Item onClick={() => product.setSelectedType(type)} key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название продукта"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость продукта"
                        type="number"
                    />
                    <hr/>
                    <Form.Group className="mb-1">
                        <Form.Label className="d-flex">Файл для картинки</Form.Label>
                        <Form.Control type="file" onChange={selectFile}/>
                    </Form.Group>
                    <hr/>
                    <Form.Group className="mb-1">
                        <Form.Label>Файл для description</Form.Label>
                        <Form.Control type="file" onChange={selectInfo}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;