import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, value, placeholder, handleChange, disabled} = this.props;

        return (
            <div className="custom-input-container">
                <p className="custom-input-title" >{title}</p>
                <input className="custom-input-field" value={value} onChange={handleChange} placeholder={placeholder} disabled={disabled}/>
            </div>
        )
    }
}

CustomInput.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
    handleChange: PropTypes.func
};

export default CustomInput