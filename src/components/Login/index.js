import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../reducers/auth/actions';
import {withRouter} from "react-router-dom";
import history from '../../boot/history';

import CustomInput from '../Input'
import CustomButton, {ButtonColors} from '../Button'
import './style.css'

class AuthLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pw: "",
            isLoading: false,
        };
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.props.payload) this.props.history.push('/list')
    }

    handleChange(value, field) {
        this.setState({[field]: value})
    }

    handleClickLogin() {
        this.props.login({email: this.state.email, pw: this.state.pw})
            .then(() => {
                if (this.props.payload) this.props.history.push('/list')
            });
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                <div className="title">
                    <span>Login</span>
                    {/*<li><Link to="/list">Login</Link></li>*/}
                    <span className="notice">
                        {this.props.error && "Something wrong, check email and password"}
                        {this.props.payload && "You are login in!"}
                    </span>
                    {/*{this.props.payload && <Redirect to={"/list"}/>}*/}
                </div>
                <div className="inputs">
                    <CustomInput
                        value={this.state.email}
                        title="Enter email:"
                        handleChange={(e) => this.handleChange(e.target.value, "email")}
                        placeholder="sobaka@gmail.com"
                    />
                    {/*
                    LOGIN NOTICE FONT!!!
                    */}
                    <CustomInput
                        value={this.state.pw}
                        title="Enter password:"
                        handleChange={(e) => this.handleChange(e.target.value, "pw")}
                        placeholder="***"
                    />
                </div>
                <div className="auth-btn-container">
                    <CustomButton
                        className={"login-btn-big"}
                        title="Switch to register"
                        type={ButtonColors.light}
                        handleClick={this.props.onSwitch}
                        disabled={this.props.isLoading || this.props.payload}
                    />
                    <CustomButton
                        className={"login-btn"}
                        title="Login"
                        type={ButtonColors.blue}
                        handleClick={this.handleClickLogin}
                        disabled={this.props.isLoading || this.props.payload}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.login.isLoading,
    error: state.auth.login.error,
    payload: state.auth.login.payload,
});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthLogin))