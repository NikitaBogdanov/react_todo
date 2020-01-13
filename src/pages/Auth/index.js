import React from 'react';
import {connect} from 'react-redux';
import Login from '../../components/Login'
import Registration from '../../components/Registration'
import './style.css'

class AuthLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
        };
        this.handleSwitchLogin = this.handleSwitchLogin.bind(this);
    }

    handleSwitchLogin(value) {
        this.setState({isLogin: value})
    }

    render() {
        const {isLogin} = this.state;

        return (
            <div className="auth-container">
                <div className="auth-content">
                    {isLogin ?
                        <Login onSwitch={() => this.handleSwitchLogin(false)}/> :
                        <Registration onSwitch={() => this.handleSwitchLogin(true)}/>
                    }
                </div>
            </div>
        );
    }
}

export default AuthLogin