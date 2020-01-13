import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

class CustomCheckbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {value, handleClick, disabled} = this.props;

        return (
            <div className="custom-checkbox">
                <input
                    type="checkbox"
                    className="default-checkbox"
                    checked={value}
                    disabled={disabled}
                />
                <div className="new-checkbox" onClick={!disabled && handleClick}/>
            </div>
        )
    }
}

export default CustomCheckbox;