import React from 'react';
import { connect } from 'react-redux';
import { increaseNum, decreaseNum, resetNum } from '../reducers/counter/actions';

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        counterNum: state.counterNum
    }
};

const mapDispatchToProps = { increaseNum, decreaseNum, resetNum };

class Counter extends React.Component {
  render() {
    return (
      <div>
        <a>Counter: {this.props.counterNum} </a>
        <button onClick={dispatch(increaseNum)}>
          +1
        </button>
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)