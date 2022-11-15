import React from 'react';
import {Accordion, Card, Tab, Tabs} from "react-bootstrap";
import "./css/123.css"
import {Collapse, Text} from "@nextui-org/react"
import {Map, Placemark, YMaps} from "react-yandex-maps"

// accordion item bootstrap with
const DeliveryPage = () => {
    return (
        <Tabs defaultActiveKey="delivery" className="md-2 justify-content-center" style={{background: "white"}}
              variant={"pills"}>
            <Tab eventKey="delivery" title="Доставка" className="justify-content-center">
                <Card>
                    HUY
                </Card>
            </Tab>
            <Tab eventKey="delivery1" title="Самовывоз" className="justify-content-center">
                <Card>
                    <h1 style={{marginLeft: 25}}>Самовывоз</h1>
                    <h4 style={{marginLeft: 25}}>«Fish up» предлагает Вам выгодную услугу — самовывоз товара из
                        розничного магазина или прямо из
                        отделения «Почты России».</h4>
                    <Collapse.Group>
                        <Collapse bordered={true} shadow={true} style={{margin: 10}} title="Как оформить заказ">
                            <h5>Оформить заказ на самовывоз Вы можете на сайте, придя в розничный магазин, либо позвонив
                                по телефону контактного центра:
                                <a href="tel:+79992151627"
                                   style={{fontSize: 20, textDecoration: "none"}}> +79992151627</a>
                            </h5>
                            <h5 style={{marginTop: 35, marginBottom: 35}}>При
                                заказе на сайте выбираете удобный Вам розничный магазин или «Другие пункты» – «Почта
                                России»
                                или удаленный склад*, где хотите самостоятельно забрать заказ.
                            </h5>
                            <h5 style={{marginBottom: 35}}>
                                О готовности заказа Вы будете уведомлены по электронной почте и SMS. Также Вы всегда
                                самостоятельно можете проверить статус заказа в Личном кабинете на сайте.
                            </h5>
                            <b style={{fontSize: 20}}>Важно!</b>
                            <h5 style={{marginBottom: 35, marginTop: 15}}>
                                Если Вы хотите забрать заказ из магазина «Пятерочка», то учитывайте, что заказы
                                принимаются только на те товары, габариты которых не превышают 40,1х36,1х55,1 см. Для
                                получения заказа через отделение «Почты России» таких ограничений нет.
                            </h5>
                        </Collapse>
                        <Collapse bordered={true} shadow={true} style={{margin: 10}}
                                  title="Как получить заказ">
                            <YMaps>
                                <Map defaultState={{center: [59.955082954524386, 30.312194873201275], zoom: 14}}>
                                    <Placemark geometry={[59.95718036273237, 30.30831813812256]}/></Map>
                            </YMaps>
                            {/*Можно сделать карту но я чет пока не понял как это*/}
                        </Collapse>
                        <Collapse bordered={true} shadow={true} style={{margin: 10}}
                                  title="Способы оплаты">
                            <ul style={{fontSize: 20}}>
                                <li>Наличный расчет (кроме самовывоза из пунктов «Почта России»)</li>
                                <li>Банковской картой</li>
                                <li>В кредит (услуга невозможна для пунктов выдачи «Почта России»)</li>
                            </ul>
                            <h5>Неоплаченный заказ хранится 3 дня.</h5>
                            <h5>Оплаченные на сайте заказы хранятся 5 дней.</h5>
                            <h5>Если Вам понадобится доставка, Вы можете заказать ее на месте после оплаты заказа.</h5>
                        </Collapse>
                    </Collapse.Group>
                </Card>
            </Tab>
        </Tabs>);
};

export default DeliveryPage;