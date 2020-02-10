import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.css'
import CustomCheckbox from "../Checkbox";
import CustomButton, {ButtonColors} from "../Button";
import CustomTextarea from "../Textarea";
import {checkPoint, editPoint, savePoint, deletePoint} from "../../reducers/list/actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Point extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: "",
        };
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }


    handleChangeComplete(id){
        this.props.checkPoint({_id: id});
    }

    handleClickEdit(id){
        this.setState({editTitle: this.props.title});
        this.props.editPoint({_id: id});
    }

    handleClickSave(id){
        this.props.savePoint({_id: id, title: this.state.editTitle});
    }

    handleChange(value){
        this.setState({editTitle: value});
    }

    handleClickDelete(id){
        this.props.deletePoint({_id: id});
    }

    render() {
        const {id, title, completed, isEdit} = this.props;

        return (
            <div className={cx("point-container", completed && 'point-completed', isEdit && 'point-edit')}>
                <div className="point-content">
                    <div className="point-check-box">
                        <CustomCheckbox
                            value={completed}
                            handleClick={()=>this.handleChangeComplete(id)}
                            disabled={false}
                        />
                    </div>
                    {!isEdit && <div className="point-text" onClick={()=>this.handleClickEdit(id)}>
                        <span>{title}</span>
                    </div>}
                    {isEdit && <div className="point-input">
                        <CustomTextarea title={this.state.editTitle} handleChange={(e)=>this.handleChange(e.target.value)}/>
                    </div>}
                    {isEdit && <CustomButton
                        className={'save-point-btn'}
                        title="save"
                        type={ButtonColors.light}
                        handleClick={()=>this.handleClickSave(id)}
                        // disabled={this.props.isLoading || this.props.payload}
                    />}
                    {!isEdit && <CustomButton
                        className={'delete-point-btn'}
                        title="X"
                        type={ButtonColors.light}
                        handleClick={()=>this.handleClickDelete(id)}
                        // disabled={this.props.isLoading || this.props.payload}
                    />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    points: state.list.points,
});

const mapDispatchToProps = (dispatch) => ({
    checkPoint : (data) => dispatch(checkPoint(data)),
    editPoint : (data) => dispatch(editPoint(data)),
    savePoint : (data) => dispatch(savePoint(data)),
    deletePoint : (data) => dispatch(deletePoint(data)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Point))
// export default Point;