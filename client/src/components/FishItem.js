import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import fishImg from "../assets/fish.webp"
import {Card, Col, Image, Row} from "react-bootstrap";
import {$host} from "../axiosAPI";
import {PRODUCT_ROUTE} from "../utils/const";
import {useHistory} from "react-router-dom";
import {Text} from "@nextui-org/react";

const FishItem = observer(({fish}) => {
    const [prod, setProd] = useState({})
    const history = useHistory()
    useEffect(() => {
        $host.get('/fish/' + fish.id).then((response) => {
            setProd(response.data)
        })
    }, [])
    const list = Object.entries(prod)
    return (<Col md={4} style={{width: 500, margin: 1}}>
        <Row className="g-0">
            <div id="productCard">
                <Card style={{width: 500, borderRadius: "7% 7% 7% 7%", padding: 7}}>
                    <Row md={12}><Col md={4}><h3>{fish.name}</h3><Image
                        style={{borderRadius: "10% 10% 10% 10%", width: 150, height: 150}}
                        src={fishImg}/></Col><Col md={8}><h5>length_max:{fish.lengthMax}</h5>
                        <h5>length_min:{fish.lengthMin}</h5><h5>weight_max:{fish.weightMax}</h5>
                        <h5>weight_min:{fish.weightMin}</h5><h5>habitat:{fish.habitat}</h5>
                        {list.map((key) => (<Text h6 size="$md" style={{cursor: "pointer", color: "blue"}}
                                                  onClick={() => history.push(PRODUCT_ROUTE + '/' + key[0])}>{key[1]}</Text>))}
                    </Col></Row>
                </Card>
            </div>
        </Row>
    </Col>);
});

export default FishItem;