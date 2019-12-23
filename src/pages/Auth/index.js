import React from 'react';
import {connect} from 'react-redux';
import Login from '../../components/Login'
import './style.css'

class AuthLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className="auth">
                    <Login/>
                </div>
            </div>
        );
    }
}
 export default AuthLogin