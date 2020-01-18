import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
//import Contact from './Contact.js';
import Topics from './Topics.js';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: ''
      }
   };
   render() {
      return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch>
        </div>
      </Router>
    );
   }
}
export default App;