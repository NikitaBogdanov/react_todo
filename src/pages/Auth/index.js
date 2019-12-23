import React from 'react';
import {connect} from 'react-redux';
import Login from '../../components/Login'
import Registration from '../../components/Registration'
import './style.css'

class AuthLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="frame">
                <div className="auth">
                    <div>
                        <Login />
                    </div>
                    <div className={this.props.form === "registration" ? "db" : "dn"}>
                        <Registration />
                    </div>
                </div>
            </div>
        );
    }
}
 export default AuthLogin