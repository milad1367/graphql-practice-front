import React from 'react';
import Media from 'react-bootstrap/Media';
function Comment({comment}) {
   const _comment = comment;   
    return (
       <div className="Comment">
            <Media>
                <img
                    width={32}
                    height={32}
                    className="mr-3 rounded-circle"
                    src={_comment.avatar}
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