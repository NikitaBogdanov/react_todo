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
            validation: {
                isEmailIncorrect: false,
                isPwIncorrect: false,
                isPwTooShort: false,
                isPwMismatched: false,
                isPwEmpty: true
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClickRegistration = this.handleClickRegistration.bind(this);
    }

    handleChange(value, field) {
        this.setState({[field]: value}, this.validationCheck) // .THEN ...
    }
    //
    // handleChangeEmail(event) {
    //     this.setState({email: event.target.value}, this.emailCheck)
    // }
    // handleChangePw(event) {
    //     this.setState({pw: event.target.value}, this.pwCheck);
    // }
    // handleChangeConfirm(event) {
    //     this.setState({pwConfirm: event.target.value}, this.pwCheck);
    // }
    handleClickRegistration() {
        //validation first
        this.props.registration({email: this.state.email, pw: this.state.pw})
    }

    validationCheck() {
        this.setState({validation: {
                isEmailIncorrect: !this.state.email.match(/.+@.+\..+/),
                isPwIncorrect: (this.state.pw.match(/[^\d\w]/)),
                isPwTooShort: (this.state.pw.length<5),
                isPwMismatched: (this.state.pw !== this.state.pwConfirm),
                isPwEmpty: (this.state.pw === "")
        }});
    }

    render() {
        return (
            <div>
                <div className="title">
                    <span>Registration</span>
                    {/*<span className="notice">{ this.props.error ? "Something wrong" :*/}
                    {/*    this.props.payload ? "Registration completed!" : "ᅠ"}</span>*/}
                </div>
                <div className="inputs">
                    <CustomInput
                        value={this.state.email}
                        title="Enter email:"
                        notice = {this.state.validation.isEmailIncorrect && "Email is incorrect"}
                        includeNotice = {true}
                        handleChange={(e) => this.handleChange(e.target.value, 'email')}
                        placeholder="sobaka@gmail.com"
                    />
                    {/*<span className="notice">{ this.state.EmailValidation.isEmailIncorrect ? "Email is incorrect" : "ᅠ"}</span>*/}
                    <CustomInput
                        value={this.state.pw}
                        title="Enter password:"
                        handleChange={(e) => this.handleChange(e.target.value, 'pw')}
                        placeholder="***"
                    />
                    <CustomInput
                        value={this.state.pwConfirm}
                        title="Confirm password:"
                        handleChange={(e) => this.handleChange(e.target.value, 'pwConfirm')}
                        placeholder="***"
                        disabled={this.state.validation.isPwEmpty}
                    />
                    {/*<span className="notice">{ this.state.validation.isPwIncorrect ? "Password is incorrect" :*/}
                    {/*    this.state.PwValidation.isPwMismatched ? "Passwords dont match" : "ᅠ"}</span>*/}
                </div>
                <div className="auth-btn-container">
                    <CustomButton
                        className={'registration-btn-big'}
                        title="Switch to login"
                        type={ButtonColors.light}
                        handleClick={this.props.onSwitch}
                        disabled={this.props.isLoading || this.props.payload}
                    />
                    <CustomButton
                        className={'registration-btn'}
                        title="Registration"
                        type={ButtonColors.blue}
                        handleClick={this.handleClickRegistration}
                        disabled={this.props.isLoading || this.props.payload || this.state.validation.isPwEmpty ||
                                  this.state.validation.isPwIncorrect || this.state.validation.isPwMismatched}
                    />
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