import React from 'react';
import Media from 'react-bootstrap/Media';
function Comment({comment}) {
   const _comment = comment;   
   return (
       <div className="Comment">
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://source.unsplash.com/random/500*500/?fruit/64x64"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>{_comment.name}</h5>
                    <p>
                        {_comment.content}
                    </p>
                </Media.Body>
            </Media>
       </div>
   )

}
export default Comment