import React from 'react';
import Comments from './Comments';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Posts from './Posts'
function Home() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Posts />
                </Route>
                <Route path="/comments/:id">
                    <Comments />
                </Route>
            </Switch>
        </Router>
    )
}
export default Home