import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Post from './Post';

const GET_POSTS = gql`
  {  
    getPosts {
    id
    name
    content
    image
    comments {
        name
    }
    }
    
  }
`
function Posts() {
    const { loading, error, data, refetch, networkStatus } = useQuery(
        GET_POSTS);
        if (loading) return null;
        if (error) return `Error! ${error}`;
        const posts = data.getPosts || [];
        return (
            <div>
                {posts.map(post => <Post key={post.id} post={post} />)}
            </div>  
        )
}
export default Posts