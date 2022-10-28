import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Checkbox} from '@nextui-org/react'

const TypeBar = observer(() => {
    const {product} = useContext(Context)
    return (<Checkbox.Group
            color="primary"
            label="Категории" size="sm">
            {
                product.types.map(type => <Checkbox onClick={()=> product.setSelectedType(type)} value={type.name} key={type.name}>{type.name}</Checkbox>)
            }

        </Checkbox.Group>

    );
});

export default TypeBar;