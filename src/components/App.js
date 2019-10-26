import React from 'react';
import Home from './Home';
import '../style/App.css';
//import 'bootstrap/dist/style/bootstrap.min.css';
import {Container,Row} from 'react-bootstrap'
class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div className="d-flex justify-content-center">
            <Home />
          </div>
      </div>
    );
  }
}
export default App;

