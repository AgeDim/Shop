import React from 'react';
import {observer} from "mobx-react-lite";
import {Col, Row} from "react-bootstrap";

import FishItem from "./FishItem";
import ProductItem from "./ProductItem";

const FishList = observer(({fish}) => {
    return (<Row className="g-0 justify-content-center" style={{display: 'flex'}}>
        {fish.map(fish => <FishItem key={fish.id} fish={fish}/>)}
    </Row>);
});

export default FishList;