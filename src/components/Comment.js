import React from 'react';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';

function Comment({comment}) {
   const _comment = comment;   
    return (
        <Card>
            <Card.Body>            
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
            </Card.Body>
        </Card>
    )

}
export default Comment