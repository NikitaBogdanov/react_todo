import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, value, placeholder, notice, includeNotice, handleChange, disabled} = this.props;

        return (
            <div className="custom-input-container">
                <p className="custom-input-title">{title}</p>
                <input
                    className="custom-input-field"
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    disabled={disabled}
                />
                {includeNotice && <p className="custom-input-notice">{notice || "ᅠ"}</p>}
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