import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from "./components/Counter.js";
import combineReducers from './reducers';

const store = createStore(combineReducers,
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class MyRouter extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
                <Route path="/" component={Counter}/>
                <Route path="/counter2" component={Counter}/>
            </Router>
            </Provider>
        );
    }
}

export default MyRouter;

