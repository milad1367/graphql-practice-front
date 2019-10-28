import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../style/App.css';
import Comments from './Comments';
import Posts from './Posts';
import Header from './Header';
class App extends React.Component {
  render() {
    return (
      <div className="App">
           <Header />
          <div className="d-flex justify-content-center">
            <Switch>
              <Route exact path="/">
                  <Posts />
              </Route>
              <Route path="/posts/:id/comments">
                  <Comments />
              </Route>
            </Switch>
          </div>
      </div>
    );
  }
}
export default App;

