import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import AuthPage from "../pages/Auth";

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log("LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOG");
        return (
            <Route path={this.props.path}  component = {this.props.component}>
                {!localStorage.getItem("sessionId") && <Redirect to={"/"}/>}
            </Route>


            // <Route path = {this.props.path} render={(props) => <Redirect to={"/"}/>} component = {localStorage.getItem("sessionId") ? this.props.component : AuthPage}/>
            // <Route path={this.props.path} render={props => <Redirect to={"/"}/>}/>
        )
    }
}

export default PrivateRoute;

//auth error from back, delete token

//...you can pass the current path as a prop to the redirect in your login component, and redirect to that path after the user is authenticated.