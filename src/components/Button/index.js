import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.css'

const blue = 'blue';
const light = 'light';

export const ButtonColors = {
    blue,
    light
};

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, handleClick, type, disabled, className} = this.props;

        return (
                <button
                    className={cx("custom-button", type, className)}
                    onClick={handleClick}
                    disabled={disabled}>
                    {title}
                </button>
        )
    }
}

CustomButton.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
};

export default CustomButton