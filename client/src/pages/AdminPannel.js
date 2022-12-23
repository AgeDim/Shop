import React, {useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import EditProductCount from "../components/modals/EditProductCount";
import ChangeStatus from "../components/modals/ChangeStatus";
import AddFish from "../components/modals/AddFish";
import "./css/admPannel.css"
const AdminPannel = () => {
    const [productVisible, setProductVisible] = useState(false)
    const [countVisible, setCountVisible] = useState(false)
    const [statusVisible, setStatusVisible] = useState(false)
    const [fishVisible, setFishVisible] = useState(false)
    return (<Container className="d-flex flex-column">
            <Row>
                <Col style={{paddingLeft: 100}}>
                    <Col>
                        <Button id="adm_button" type={"button"}
                            variant="secondary"
                            className="mt-4 p-2"
                            onClick={() => setProductVisible(true)} style={{width: 500}}
                        >
                            Добавить продукт
                        </Button>
                        <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
                    </Col>
                    <Col>
                        <Button id="adm_button" type={"button"}
                            variant="secondary"
                            className="mt-4 p-2"
                            onClick={() => setCountVisible(true)} style={{width: 500}}
                        >
                            Изменить колличество товара
                        </Button>
                        <EditProductCount show={countVisible} onHide={() => setCountVisible(false)}/></Col></Col>
                <Col style={{paddingRight: 50}}>
                    <Col>
                        <Button id="adm_button" type={"button"}
                            variant="secondary"
                            className="mt-4 p-2"
                            onClick={() => setStatusVisible(true)} style={{width: 500}}
                        >
                            Изменить статус заказа
                        </Button>
                        <ChangeStatus show={statusVisible} onHide={() => setStatusVisible(false)}/>
                    </Col>
                    <Col>
                        <Button id="adm_button" type={"button"}
                            variant="secondary"
                            className="mt-4 p-2"
                            onClick={() => setFishVisible(true)} style={{width: 500}}
                        >
                            Добавить рыбу
                        </Button>
                        <AddFish show={fishVisible} onHide={() => setFishVisible(false)}/>
                    </Col>
                </Col>
            </Row>

        </Container>

    );
};

export default AdminPannel;