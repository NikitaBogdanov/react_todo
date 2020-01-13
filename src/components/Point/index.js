import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import CustomCheckbox from "../Checkbox";

class Point extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        };
        this.handleChangeComplete = this.handleChangeComplete.bind(this)
    }

    handleChangeComplete(){
        this.setState({completed: !this.state.completed});
    }

    render() {
        const {title} = this.props;

        return (
            <div className="point-container">
                <div className="point-content">
                    <div className="point-check-box">
                        <CustomCheckbox
                            value={this.state.completed}
                            handleClick={this.handleChangeComplete}
                            disabled={false}
                        />
                    </div>
                    <div className="point-text">
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Point;