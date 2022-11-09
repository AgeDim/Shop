import React from 'react';
import {Card, Tab, Tabs} from "react-bootstrap";
import "./css/123.css"

// accordion item bootstrap with
const DeliveryPage = () => {
    return (<div>
            <Tabs defaultActiveKey="delivery" className="md-2 justify-content-center" style={{background: "white"}} variant={"pills"}>
                <Tab eventKey="delivery" title="Доставка" className="justify-content-center"><Card>HUY</Card></Tab>
                    <Tab eventKey="delivery1" title="Самовывоз" className="justify-content-center"><Card>PIZDA</Card></Tab>
            </Tabs>
    </div>);
};

export default DeliveryPage;