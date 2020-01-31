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
            // title: "new point",
            // completed: false,
            // isEdit: false,
        };
        // this.handleChangeComplete = this.handleChangeComplete.bind(this);
        // this.handleClickEdit = this.handleClickEdit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClickSave = this.handleClickSave.bind(this);
    }

    // handleChangeComplete(){
    //     this.props.completed = !this.props.completed;
    //     // this.setState({completed: !this.state.completed});
    // }
    // handleClickEdit(){
    //     // this.props.isEdit = true;
    //     this.setState({isEdit: true});
    // }
    // handleClickSave(){
    //     // this.props.isEdit = false;
    //     this.setState({isEdit: false});
    // }
    // handleChange(value) {
    //     this.props.title = value;
    //     // this.setState({title: value})
    // }

    render() {
        const {id, title, completed, isEdit, handleChangeComplete, handleClickEdit, handleClickSave, handleClickDelete, handleChange} = this.props;

        return (
            <div className={cx("point-container", completed && 'point-completed', isEdit && 'point-edit')}>
                <div className="point-content">
                    <div className="point-check-box">
                        <CustomCheckbox
                            value={completed}
                            handleClick={()=>handleChangeComplete(id)}
                            disabled={false}
                        />
                    </div>
                    {!isEdit && <div className="point-text">
                        <span onClick={()=>handleClickEdit(id)}>{title}</span>
                    </div>}
                    {isEdit && <div className="point-input">
                        <CustomTextarea title={title} handleChange={(e)=>handleChange(id, e.target.value)}/>
                    </div>}
                    {isEdit && <CustomButton
                        className={'save-point-btn'}
                        title="save"
                        type={ButtonColors.light}
                        handleClick={()=>handleClickSave(id)}
                        // disabled={this.props.isLoading || this.props.payload}
                    />}
                    {!isEdit && <CustomButton
                        className={'delete-point-btn'}
                        title="X"
                        type={ButtonColors.light}
                        handleClick={()=>handleClickDelete(id)}
                        // disabled={this.props.isLoading || this.props.payload}
                    />}
                </div>
            </div>
        )
    }
}

export default Point;