import React from 'react';
import {observer} from "mobx-react-lite";
import {Checkbox} from '@nextui-org/react'
import {Card, Container} from "react-bootstrap";
import {useSelector} from "react-redux";
import {setSelectedType} from "../store/ProductStore";

const TypeBar = observer(() => {
    const productState = useSelector(state => state.products)
    return (
            <Card style={{width: 230, boxShadow: "6px 5px 18px 15px rgba(34, 60, 80, 0.2)", position:"fixed", left: 0, marginLeft: 10}} >
        <Checkbox.Group
            color="primary"
            label="Категории" size="md">
            {
                productState.types.map(type => <Checkbox className="m-2" onClick={()=> setSelectedType(type)} value={type.name} key={type.name}>{type.name}</Checkbox>)
            }

        </Checkbox.Group>
            </Card>
    );
});

export default TypeBar;