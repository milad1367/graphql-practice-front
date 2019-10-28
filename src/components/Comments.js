import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Comment from './Comment';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
function Comments() {
    let { id } = useParams();
    const GET_POST_COMMENTS = gql`{
        post(id: "${id}") {
            comments {
                name
                content
                id
                avatar
            }
        }
    }
    `;
    const { loading, error, data, refetch, networkStatus } = useQuery(
        GET_POST_COMMENTS);
    
        if (loading) return (
            <div className="text-center">
            <Spinner animation="grow" variant="danger" />
            </div>
        );
        if (error) return `Error! ${error}`;
        const comments = data.post.comments || [];
        return (
            <Col md={6} className="Comments">
                <h2>Comments</h2>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </Col>
        );
}
export default Comments