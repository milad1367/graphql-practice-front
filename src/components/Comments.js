import React, { useState,useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Comment from './Comment';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function Comments() {
    let { id } = useParams();
    const GET_POST_COMMENTS = gql`
        {
            post(id: ${id}) {
            comments {
                name
                content
                id
            }
            }
        }
        `;
    const { loading, error, data, refetch, networkStatus } = useQuery(
        GET_POST_COMMENTS);
    
      if (loading) return null;
      if (error) return `Error! ${error}`;
      
      const comments = data.post.comments || [];
      return (
        <div className="Comments">
            <Link to={'/'}>back to home</Link>
            <h2 style={{marginTop:'2em'}}>Comments</h2>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
      );
}
export default Comments