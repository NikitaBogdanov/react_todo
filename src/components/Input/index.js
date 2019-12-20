import React from 'react'
import {connect} from 'react-redux';

class CustomInput extends React.Component {
    render() {
        const {
            input: { value, onChange }
        } = this.props
        return (
            <div>

            </div>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CustomInput)