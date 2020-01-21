import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

class CustomTextarea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, handleChange} = this.props;

        return (
            <div className="custom-textarea-container">
                <textarea
                    // cols="30"
                    rows="5"
                    maxLength="120"
                    onChange={handleChange}
                >
                    {title}
                </textarea>
            </div>
        )
    }
}

// CustomTextarea.propTypes = {
//
// };

export default CustomTextarea;