import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {num: 0};
  }

  handleClick() {
    this.setState({num: this.state.num+1});
  }

  render() {
    const num = this.state.num;
    return (
      <div>
        <a>Counter: {num} </a>
        <button onClick={this.handleClick}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;