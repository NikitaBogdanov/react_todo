import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginPage from "./pages/Login";
import Counter from "./components/Counter.js";
import combineReducers from './reducers';

export const store = createStore(combineReducers, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class MyRouter extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
                <Route path="/" component={LoginPage}/>
                <Route path="/counter" component={Counter}/>
            </Router>
            </Provider>
        );
    }
}

export default MyRouter;
