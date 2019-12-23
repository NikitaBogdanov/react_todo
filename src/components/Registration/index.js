import React from 'react';
import {connect} from 'react-redux';
import {registration} from '../../reducers/auth/actions';
import {authSwitch} from '../../reducers/auth/actions';
import CustomInput from '../Input'
import CustomButton, {ButtonColors} from '../Button'
import './style.css'

class AuthRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pw: "",
            isLoading: false,
            error: false
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePw = this.handleChangePw.bind(this);
        this.handleClickRegistration = this.handleClickRegistration.bind(this);
        this.handleClickSwitch = this.handleClickSwitch.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }
    handleChangePw(event) {
        this.setState({pw: event.target.value})
    }
    handleClickRegistration() {
        this.props.registration({email: this.state.email, pw: this.state.pw})
    }
    handleClickSwitch() {

    }

    render() {
        return (
            <div>
                <div className="title">
                    <p>Registration</p>
                </div>
                <div className="inputs">
                    <CustomInput value={this.state.email} title="Enter email:" handleChange={this.handleChangeEmail} placeholder="sobaka@gmail.com" />
                    <CustomInput value={this.state.pw} title="Enter password:" handleChange={this.handleChangePw} placeholder="***" />
                </div>
                <div className="buttons">
                    <CustomButton title="Switch to login" type={ButtonColors.light} handleClick={this.handleClickSwitch} disabled={this.props.isLoading || this.props.payload}/>
                    <CustomButton title="Registration" type={ButtonColors.blue} handleClick={this.handleClickRegistration} disabled={this.props.isLoading || this.props.payload}/>
                </div>
                {this.props.error && <div>Error: {this.props.error}</div>}
                {this.props.payload && <div>Registration completed!</div>}
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
    registration : (data) => dispatch(registration(data)),
    authSwitch : (data) => dispatch(authSwitch(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthRegistration)