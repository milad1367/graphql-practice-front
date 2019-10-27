import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

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
            <Card.Img style={{maxHeight:'500px'}}  variant="top" src={_post.image} />
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
