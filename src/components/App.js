import React from 'react';
import Home from './Home';
import '../style/App.css';
import logo from '../img/logo.png';
import Col from 'react-bootstrap/Col';
import {Container,Row} from 'react-bootstrap'
class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div className="Header d-flex justify-content-center">
            <Col md={7} sm={12}  className="HeaderBody">
              <img style={{ width: '150px', height: 'auto' }} src= {logo}></img>
            </Col>
          </div>
          <div className="d-flex justify-content-center">
            <Home />
          </div>
      </div>
    );
  }
}
export default App;

