import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import EditProductCount from "../components/modals/EditProductCount";

const AdminPannel = () => {
    const [productVisible, setProductVisible] = useState(false)
    const [countVisible, setCountVisible] = useState(false)
    return (<Container className="d-flex flex-column">
            <Button
                variant="secondary"
                className="mt-4 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить продукт
            </Button>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>

            <Button
                variant="secondary"
                className="mt-4 p-2"
                onClick={() => setCountVisible(true)}
            >
                Изменить колличество товара
            </Button>
            <EditProductCount show={countVisible} onHide={() => setCountVisible(false)}/>
        </Container>
    );
};

export default AdminPannel;