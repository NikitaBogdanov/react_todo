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
        this.handleSwitchForm = this.handleSwitchForm.bind(this);
    }

    handleSwitchForm (value) {
        this.setState({isLogin: value})
    }

    render() {
        const {onSwitch} = this.props;
        const {isLogin} = this.state;
        return (
            <div className="auth-container">
                <div className="auth-content">
                    {
                        isLogin ?
                            <Login onSwitch={() => this.handleSwitchForm(false)}/>
                        :
                            <Registration onSwitch={() => this.handleSwitchForm(true)}/>
                    }
                </div>
            </div>
        );
    }
}
 export default AuthLogin