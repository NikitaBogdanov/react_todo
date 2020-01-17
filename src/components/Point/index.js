import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.css'
import CustomCheckbox from "../Checkbox";
import CustomButton, {ButtonColors} from "../Button";
import CustomInput from "../Input";
import CustomTextarea from "../Textarea";

class Point extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "new point",
            completed: false,
            isEdit: false,
        };
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
    }

    handleChangeComplete(){
        this.setState({completed: !this.state.completed});
    }
    handleClickEdit(){
        this.setState({isEdit: true});
    }
    handleClickSave(){
        this.setState({isEdit: false});
    }
    handleChange(value, field) {
        this.setState({[field]: value})
    }

    render() {

        return (
            <div className={cx("point-container", this.state.completed && 'point-completed', this.state.isEdit && 'point-edit')}>
                <div className="point-content">
                    <div className="point-check-box">
                        <CustomCheckbox
                            value={this.state.completed}
                            handleClick={this.handleChangeComplete}
                            disabled={false}
                        />
                    </div>
                    {!this.state.isEdit && <div className="point-text">
                        <span onClick={this.handleClickEdit}>{this.state.title}</span>
                    </div>}
                    {this.state.isEdit && <div className="point-input">
                        {/*<textarea cols="40" rows="5" maxlength="120">{this.state.title}</textarea>*/}
                        <CustomTextarea title={this.state.title} handleChange={()=>this.handleChange()}/>
                    </div>}
                    {this.state.isEdit && <CustomButton
                        className={'save-point-btn'}
                        title="save"
                        type={ButtonColors.light}
                        handleClick={this.handleClickSave}
                        // disabled={this.props.isLoading || this.props.payload}
                    />}
                    {!this.state.isEdit && <CustomButton
                        className={'delete-point-btn'}
                        title="X"
                        type={ButtonColors.light}
                        // handleClick={this.props.onSwitch}
                        // disabled={this.props.isLoading || this.props.payload}
                    />}
                </div>
            </div>
        )
    }
}

export default Point;