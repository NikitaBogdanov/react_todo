import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.css'

const blue = 'blue';
const red = 'red';

export const ButtonColors = {
    blue,
    red
};

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, handleClick, type, disabled} = this.props;

        return (
            <div>
                <button className={cx("custom-button" , type)} onClick={handleClick} disabled={disabled}>{title}</button>
            </div>
        )
    }
}

CustomButton.propTypes = {
    title: PropTypes.string,
    handleClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

export default CustomButton