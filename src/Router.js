import React from 'react';
import service from "./service";
import { BrowserRouter as Router, Route } from "react-router-dom";
import history from './boot/history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import PrivateRoute from "./boot/PrivateRoute";
import AuthPage from "./pages/Auth";
import TodoList from "./pages/List";
import thunk from 'redux-thunk';
import combineReducers from './reducers';
import auth from "./reducers/auth";


const initialState = localStorage.getItem("sessionId") ? {
    auth: {
        login : {
            payload: {
                sessionId: localStorage.getItem("sessionId")
            }
        }
    }
} : { };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combineReducers, initialState, composeEnhancers(applyMiddleware(thunk.withExtraArgument(service))));


class MyRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={AuthPage} exact/>
                    <PrivateRoute path="/list" component={TodoList} exact/>
                </Router>
            </Provider>
        );
    }
}

export default MyRouter;
