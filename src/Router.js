import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Counter from "./components/Counter.js";
class Router extends React.Component {

  render() {
  <Router>
    <Route path="/counter" component={Counter} />
    <Route path="/counter2" component={Counter} />
  </Router>);
  }
}

export default Router;

