import React from 'react'

function Comment({comment}) {
   const _comment = comment;   
   return (
       <div>
           <h1>username:{_comment.name}</h1>
           <p>{_comment.content}</p>
       </div>
   )

}
export default Comment