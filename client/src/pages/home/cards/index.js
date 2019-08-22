
import React from "react";
import HomeCard from "./card";
import axios from 'axios';
import { Row } from "react-bootstrap";

class HomeCards extends React.Component {


    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:5000/api/posts`)
        .then(res => {
            const posts = res.data;
            this.setState({ posts });
        })
    }

    render() {
        return <Row style={{ margin: '50px 0px' }}>
           {
                this.state.posts.map( post =>(
                        <HomeCard key={post.id} post={post} />
                    )
                )
            }
        </Row>
    }
}


export default HomeCards;
