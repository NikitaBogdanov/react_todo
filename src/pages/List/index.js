import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../reducers/auth/actions';
import {getPoints, addPoint} from '../../reducers/list/actions';
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
            list: []
        };
        this.handleClickReturn = this.handleClickReturn.bind(this);
        this.handleClickFilter = this.handleClickFilter.bind(this);
        this.handleClickAddPoint = this.handleClickAddPoint.bind(this);

        this.filterList = this.filterList.bind(this);
        this.createPoint = this.createPoint.bind(this);
    }

    componentDidMount() {
        this.props.getPoints()
    }

    componentDidUpdate(prevProps, prevStates, ss) {
        if (this.props.points.payload !== prevProps.points.payload) {
            this.filterList();
        }
        if (this.state.filter !== prevStates.filter) {
            this.filterList();
        }
    }

    filterList() {
        this.setState({list:
            this.props.points.payload.filter((point) => {
                if (this.state.filter === "all" || this.state.filter === "open" && !point['completed'] || this.state.filter === "completed" && point['completed']) return point;
            })
        });
    }

    handleClickReturn() {
        this.props.logout();
        this.props.history.goBack();
    }

    handleClickFilter(value) {
        this.setState({filter: value});
    }

    handleClickAddPoint() {
        this.props.addPoint({title: "added point", completed: false}).then(() => {});
    }

//region Empty region

//endregion

    createPoint(id, title, completed, isEdit) {
        return (
            <Point
                id={id}
                title={title}
                completed={completed}
                isEdit={isEdit}
            />
        );
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

                            <CustomButton title="Add point" type={ButtonColors.light} handleClick={this.handleClickAddPoint} disabled={this.props.points.isLoading}/>
                        </div>
                        <ListPanel
                            filter = {this.state.filter}
                            handleClickReturn = {this.handleClickReturn}
                            handleClickFilterAll = {() => this.handleClickFilter("all")}
                            handleClickFilterOpen = {() => this.handleClickFilter("open")}
                            handleClickFilterCompleted = {() => this.handleClickFilter("completed")}
                        />
                        <div className="todo-list">
                            {this.state.list && !this.state.list.empty && this.state.list.map((point) => {
                                return this.createPoint(point['_id'], point['title'], point['completed'], point['isEdit']);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    points: state.list.points
});

const mapDispatchToProps = (dispatch) => ({
    logout : () => dispatch(logout()),
    getPoints : () => dispatch(getPoints()),
    addPoint : (data) => dispatch(addPoint(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))