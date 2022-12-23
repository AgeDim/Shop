import React, {useContext, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Pagination from "../components/Pagination";
import {Context} from "../index";
import FishList from "../components/FishList";
import {$host} from "../axiosAPI";
import {observer} from "mobx-react-lite";

const FishPage = observer(() => {
    const {fish} = useContext(Context)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(4)
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = fish.fish.slice(firstPostIndex, lastPostIndex)
    useEffect(() => {
        $host.get("/fish").then((response) => {
            fish.setFish(response.data)
        })
    }, [])

    return (<Row className="g-0">
        <Col md={12} className="align-self-center">
            <Pagination totalPosts={fish.fish.length} postsPerPages={postsPerPage}
                        setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <FishList fish={currentPosts}></FishList>
        </Col>
    </Row>);
});

export default FishPage;