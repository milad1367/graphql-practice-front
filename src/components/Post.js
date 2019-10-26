import React, { useState } from 'react';

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
      <div>
        <img  src={_post.image} />
        <p>username: {_post.name}</p>
        <p>caption: {_post.content}</p>
        <span>{_post.comments.length} comments</span> <Link to={`/comments/${_post.id}`}>click to show</Link>
      </div>
    )
}
export default Post