import React from 'react';
import {connect} from 'react-redux';
import {registration} from '../../reducers/auth/actions';
import CustomInput from '../Input'
import CustomButton, {ButtonColors} from '../Button'
import './style.css'

class AuthRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pw: "",
            pwConfirm: "",
            isLoading: false,
            EmailValidation: {
                isEmailIncorrect: false,
            },
            PwValidation: {
                isPwIncorrect: false,
                isPwTooShort: false,
                isPwMatched: true,
                isPwEmpty: true
            },
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePw = this.handleChangePw.bind(this);
        this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
        this.handleClickRegistration = this.handleClickRegistration.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value}, this.emailCheck)
    }
    handleChangePw(event) {
        this.setState({pw: event.target.value}, this.pwCheck);
    }
    handleChangeConfirm(event) {
        this.setState({pwConfirm: event.target.value}, this.pwCheck);
    }
    handleClickRegistration() {
        this.props.registration({email: this.state.email, pw: this.state.pw})
    }
    emailCheck() {
        this.setState({EmailValidation: {isEmailIncorrect: !this.state.email.match(/.+@.+\..+/)}});
    }
    pwCheck() {
        this.setState({PwValidation: {
                isPwIncorrect: (this.state.pw.match(/[^\d\w]/)),
                isPwTooShort: (this.state.pw.length<5),
                isPwMatched: (this.state.pw === this.state.pwConfirm),
                isPwEmpty: (this.state.pw === "")
        }});
    }

    render() {
        return (
            <div>
                <div className="title">
                    <span>Registration</span>
                    <span className="notice">{ this.props.error ? "Something wrong" :
                        this.props.payload ? "Registration completed!" : "ᅠ"}</span>
                </div>
                <div className="inputs">
                    <CustomInput value={this.state.email} title="Enter email:" handleChange={this.handleChangeEmail} placeholder="sobaka@gmail.com" />
                    <span className="notice">{ this.state.EmailValidation.isEmailIncorrect ? "Email is incorrect" : "ᅠ"}</span>
                    <CustomInput value={this.state.pw} title="Enter password:" handleChange={this.handleChangePw} placeholder="***" />
                    <CustomInput value={this.state.pwConfirm} title="Confirm password:" handleChange={this.handleChangeConfirm} placeholder="***" disabled={this.state.PwValidation.isPwEmpty}/>
                    <span className="notice">{ this.state.PwValidation.isPwIncorrect ? "Password is incorrect" :
                        !this.state.PwValidation.isPwMatched ? "Passwords dont match" : "ᅠ"}</span>
                </div>
                <div className="buttons">
                    <CustomButton title="Switch to login" type={ButtonColors.light} handleClick={this.props.onSwitch}
                                  disabled={this.props.isLoading || this.props.payload}/>
                    <CustomButton title="Registration" type={ButtonColors.blue} handleClick={this.handleClickRegistration}
                                  disabled={this.props.isLoading || this.props.payload || this.state.PwValidation.isPwEmpty ||
                                  this.state.PwValidation.isPwIncorrect || !this.state.PwValidation.isPwMatched}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.registration.isLoading,
    error: state.auth.registration.error,
    payload: state.auth.registration.payload,
});

const mapDispatchToProps = (dispatch) => ({
    registration : (data) => dispatch(registration(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthRegistration)