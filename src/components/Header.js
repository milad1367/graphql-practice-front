import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Col from 'react-bootstrap/Col'
import logo from '../img/logo.png';
function Header() {
   return (
        <div className="Header d-flex justify-content-center">
            <Col md={7} sm={12}  className="HeaderBody">
                <Link to="/">
                    <img style={{ width: '150px', height: 'auto' }}  src= {logo}></img>
                </Link>
            </Col>
        </div>
   )
}
export default withRouter(Header)
