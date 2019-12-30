import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

class Point extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title} = this.props;

        return (
            <div className="point-container">
                <div className="point-content">
                    <div className="point-check-box">
                        <input type = 'checkbox'>

                        </input>
                    </div>
                    <div className="point-text">
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Point