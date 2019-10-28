import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Post from './Post';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const GET_POSTS = gql`{  
  getPosts {
    id
    name
    content
    image
    avatar
    comments {
      id
    }
  }
    
}`
function Posts() {
  const { loading, error, data, refetch, networkStatus } = useQuery(
      GET_POSTS);
    if (loading) return (
      <div className="text-center">
        <Spinner animation="grow" variant="danger" />
      </div>
    );
    if (error) return `Error! ${error}`;
    const posts = data.getPosts || [];
    return (
        <Col md={6} >
            {posts.map(post => <Post key={post.id} post={post} />)}
        </Col>  
    )
}
export default Posts