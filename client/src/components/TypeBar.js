import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, ListGroup} from "react-bootstrap";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (<Card style={{
        width: 230, boxShadow: "6px 5px 18px 15px rgba(34, 60, 80, 0.2)", left: 0, marginLeft: 10
    }}>
        <ListGroup
            id="listGroup"
            color="primary"
            label="Категории" style={{height: 500}} activeKey="0">
            {product.types.map(type =>
                <ListGroup.Item id={type.id} style={{height: 50, paddingBottom: 5, paddingTop: 5, cursor: "pointer"}}
                                active={type.id === product.selectedType.id}
                                onClick={() => product.setSelectedType(type)}
                                value={type.name}
                                key={type.name}>{type.name}</ListGroup.Item>)}

        </ListGroup>
    </Card>);
});

export default TypeBar;