import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import {Context} from "../index";
import axios from "../axiosAPI";
import {Row} from "react-bootstrap";


const ProductList = observer(({}) => {
    const {product} = useContext(Context)
    let type = product.selectedType
    const getProducts = () => {
        axios.get("/product/" + type.id).then(res => {
            if (res.status === 200) {
                console.log(res)
                console.log("done /product")
                product.setProduct(res.data)
            }
        }).catch((e) => {
            console.log(e)
            console.log("error with post /product")
        })
    }
    // getTopProducts()
    return (<Row className="me-auto" style={{display: 'flex'}}>
        {product.products.map(product => <ProductItem key={product.id} product={product}/>)}
    </Row>);
});

export default ProductList;