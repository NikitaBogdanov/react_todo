import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import { connect } from 'react-redux';
import { increment, decrement, reset } from './actionCreators';

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = { increment, decrement, reset }

import Counter from "./components/Counter.js";

const store = createStore(rootReducer);


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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

