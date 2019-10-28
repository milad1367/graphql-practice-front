import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Img from 'react-image'
import Image from 'react-bootstrap/Image'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
function Post({post}) {
    const _post = post
    return(
        <Card>
            <Card.Body>
                <Image 
                    width={32}
                    height={32}
                    className="mr-1 rounded-circle"
                    src={_post.avatar}
                    />
                <span>
                    {_post.name}
                </span>
            </Card.Body>
            <Img
                style={{maxHeight:'500px'}}
                src={_post.image}           
                loader={
                <div className="text-center">
                    <Spinner animation="grow" variant="danger" />
                </div>
                }
            />
            <Card.Body>
                <Card.Title>{_post.name}</Card.Title>
                <Card.Text>
                    {_post.content}
                </Card.Text>
                {_post.comments.length > 0 ? 
                <div>
                    <Card.Text className="d-inline">{_post.comments.length} comments </Card.Text>
                    <Link to={`/posts/${_post.id}/comments`}>[click to show]</Link>
                </div>
                : <Card.Text>No comment yet!</Card.Text> }
            </Card.Body>
        </Card>
       
    )
}
export default Post
