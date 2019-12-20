import React from 'react';
import {connect} from 'react-redux';
import {Login, Registration} from '../../reducers/auth/actions';

class AuthLogin extends React.Component {
    handleClick = () => {
        this.props.hanldeIncreaseNum();
    };

    render() {
        return (
            <div>
                <a>Login: {this.props.counterNum} </a>
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    email: state.counterApp.email,
    pw: state.counterApp.pw
});

const mapDispatchToProps = (dispatch) => ({
    // hanldeIncreaseNum: () => dispatch(increaseNum())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)