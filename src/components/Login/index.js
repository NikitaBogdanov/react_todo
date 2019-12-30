import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../reducers/auth/actions';
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
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePw = this.handleChangePw.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }
    handleChangePw(event) {
        this.setState({pw: event.target.value})
    }
    handleClickLogin() {
        this.props.login({email: this.state.email, pw: this.state.pw})
    }

    render() {
        return (
            <div>
                <div className="title">
                    <span>Login</span>
                    <span className="notice">{ this.props.error ? "Something wrong, check email and password" :
                        this.props.payload ? "You are login in!" : "ᅠ"}</span>
                </div>
                <div className="inputs">
                    <CustomInput value={this.state.email} title="Enter email:" handleChange={this.handleChangeEmail} placeholder="sobaka@gmail.com" />
                    <CustomInput value={this.state.pw} title="Enter password:" handleChange={this.handleChangePw} placeholder="***" />
                </div>
                <div className="buttons">
                    <CustomButton title="Switch to register" type={ButtonColors.light} handleClick={this.props.onSwitch} disabled={this.props.isLoading || this.props.payload}/>
                    <CustomButton title="Login" type={ButtonColors.blue} handleClick={this.handleClickLogin} disabled={this.props.isLoading || this.props.payload}/>
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
    login : (data) => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)