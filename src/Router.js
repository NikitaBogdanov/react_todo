import React from 'react';
import Api from "./service";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import PrivateRoute from "./service/PrivateRoute"
import AuthPage from "./pages/Auth";
import TodoList from "./pages/List";
import thunk from 'redux-thunk';
import Counter from "./components/Counter";
import combineReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combineReducers,  composeEnhancers(applyMiddleware(thunk.withExtraArgument(Api))));

class MyRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path="/" component={AuthPage} exact/>
                    <PrivateRoute path="/list" component={TodoList} exact/>
                    {/*<Route path="/list" component={TodoList} exact/>*/}
                    <Route path="/counter" component={Counter} exact/>
                </Router>
            </Provider>
        );
    }
}

export default MyRouter;
