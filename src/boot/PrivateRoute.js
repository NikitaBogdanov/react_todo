import React, {Component} from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import store from "../Router";
import {connect} from "react-redux";

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Component = this.props.component;

        // console.log(this.props.payload);
        return <Route render={(props) => this.props.payload ? <Component {...props}/>  : <Redirect to={"/"}/>} />;
    }
}

const mapStateToProps = (state) => ({
    payload: state.auth.login.payload,
});

// export default PrivateRoute;
export default connect(mapStateToProps)(PrivateRoute)

//auth error from back, delete token
//...you can pass the current path as a prop to the redirect in your login component, and redirect to that path after the user is authenticated.