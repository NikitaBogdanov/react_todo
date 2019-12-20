import React from 'react';
import {connect} from 'react-redux';
import {increaseNum, decreaseNum, resetNum} from '../reducers/counter/actions';

class Counter extends React.Component {
    handleClick = () => {
        this.props.hanldeIncreaseNum();
    };

    render() {
        return (
            <div>
                <a>Counter: {this.props.counterNum} </a>
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({counterNum: state.counterApp.counterNum});

const mapDispatchToProps = (dispatch) => ({
    hanldeIncreaseNum: () => dispatch(increaseNum())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)