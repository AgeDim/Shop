import React, {useContext, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getProductByType} from "../http/productAPI";
import Pagination from "../components/Pagination";

const ShopPage = observer(() => {
    const {product} = useContext(Context)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(8)
    useEffect(() => {
        getProductByType(product.selectedType).then(data => {
            product.setProduct(data)
        })
    }, [product.selectedType])

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = product.products.slice(firstPostIndex,lastPostIndex)


    return (<Row className="g-0">
        <Col md={1} className="mt-2" style={{width: 250}}>
            <TypeBar/>
        </Col>
        <Col md={10} >
            <Pagination totalPosts={product.products.length} postsPerPages={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <ProductList product={currentPosts}></ProductList>
        </Col>
    </Row>);
});

export default ShopPage;