import React, {Component} from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import store from "../Router";
import {connect} from "react-redux";
import {logout} from "../reducers/auth/actions";
import {addLogoutCallback} from '../service/Api'

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        addLogoutCallback(this.props.logout)
    }

    render() {
        const Component = this.props.component;
        return <Route render={(props) => this.props.payload ? <Component {...props}/>  : <Redirect to={"/"}/>} />;
    }
}

const mapStateToProps = (state) => ({
    payload: state.auth.login.payload,
});

const mapDispatchToProps = (dispatch) => ({
    logout : () => dispatch(logout()),
});

// export default PrivateRoute;
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)