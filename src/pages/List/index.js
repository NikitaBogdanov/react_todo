import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {logout} from '../../reducers/auth/actions';
import {getPoints, addPoint, updatePoint} from '../../reducers/list/actions';
import {withRouter} from "react-router-dom";
import history from '../../boot/history';

import Point from '../../components/Point'
import CustomButton, {ButtonColors} from '../../components/Button'
import ListPanel from '../../components/ListPanel'
import './style.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all",
            points: []
        };
        this.handleClickReturn = this.handleClickReturn.bind(this);
        this.handleClickFilter = this.handleClickFilter.bind(this);
        this.handleClickAddPoint = this.handleClickAddPoint.bind(this);
        this.findPoint = this.findPoint.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.createPoints = this.createPoints.bind(this);
        this.createPoint = this.createPoint.bind(this);
    }

    componentDidMount() {
        this.props.getPoints().then((points) => {
            this.setState({points: JSON.parse(points)})
        });
    }

    handleClickReturn() {
        this.props.logout();
        this.props.history.goBack();
    }

    handleClickFilter(value) {
        console.log(this.state.filter);
        this.setState({filter: value});
        console.log(this.state.points)
    }

    handleClickAddPoint() {
        this.props.getPoints().then((points) => {
            this.setState({points: JSON.parse(points)})
        });
        // this.props.addPoint({title: "added point", completed: false});
    }

//region Point actions
    findPoint(id){
        const pointsUpdated = this.state.points;

        const pointUpdated = pointsUpdated.find((currentValue) => {
            return currentValue['_id'] === id;
        });
        return {
            pointsUpdated,
            pointUpdated
        }
    }

    handleChangeComplete(id){
        const points = this.findPoint(id);
        points.pointUpdated.completed = !points.pointUpdated.completed;
        this.props.updatePoint(points.pointUpdated);
        this.setState({points: points.pointsUpdated});
    }
    handleClickEdit(id){
        const points = this.findPoint(id);
        points.pointUpdated['isEdit'] = true;
        this.setState({points: points.pointsUpdated});
    }
    handleClickSave(id){
        const points = this.findPoint(id);
        points.pointUpdated.isEdit = false;
        this.props.updatePoint(points.pointUpdated);
        this.setState({points: points.pointsUpdated});
    }
    handleChange(id, value){
        const points = this.findPoint(id);
        points.pointUpdated.title = value;
        this.setState({points: points.pointsUpdated});
    }
    handleClickDelete(id){
        const points = this.findPoint(id);
        // points.pointsUpdated.delete(points.pointUpdated);
        this.setState({points: points.pointsUpdated});
        console.log("DELETE");
    }
//endregion

    createPoint(id, title, completed) {
        console.log(title);
        return (
            <Point
                id={id}
                title={title}
                completed={completed}
                isEdit={this.findPoint(id).pointUpdated.isEdit || false}
                handleChangeComplete={(id)=>this.handleChangeComplete(id)}
                handleClickEdit={(id)=>this.handleClickEdit(id)}
                handleClickSave={(id)=>this.handleClickSave(id)}
                handleClickDelete={(id)=>this.handleClickDelete(id)}
                handleChange={(id, value)=>this.handleChange(id, value)}
            />
        );
    }
    createPoints(points) {
        // console.log(this.state.points);
        return points.map((point) => {
            return this.createPoint(point['_id'], point['title'], point['completed'])
        })
    }

    render() {
        return (
            <div className="todo-bg">
                <div className="todo-container">
                    <div className="todo-content">
                        <div className="todo-top">
                            <CustomButton title={"Logout"} type={ButtonColors.light} handleClick={this.handleClickReturn}/>
                            <div className="title">
                                <span>My todo-list</span>
                            </div>

                            <CustomButton title="Add point" type={ButtonColors.light} handleClick={this.handleClickAddPoint}/>
                        </div>
                        <ListPanel
                            filter = {this.state.filter}
                            handleClickReturn = {this.handleClickReturn}
                            handleClickFilterAll = {() => this.handleClickFilter("all")}
                            handleClickFilterOpen = {() => this.handleClickFilter("open")}
                            handleClickFilterCompleted = {() => this.handleClickFilter("completed")}
                        />
                        <div className="todo-list">
                            {this.createPoints(this.state.points)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    payload: state.auth.login.payload,
});

const mapDispatchToProps = (dispatch) => ({
    logout : () => dispatch(logout()),
    getPoints : () => dispatch(getPoints()),
    updatePoint : (data) => dispatch(updatePoint(data)),
    addPoint : (data) => dispatch(addPoint(data)),
});

// export default TodoList
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))