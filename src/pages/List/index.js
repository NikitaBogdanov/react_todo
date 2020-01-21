import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import {logout} from '../../reducers/auth/actions';

import Point from '../../components/Point'
import CustomButton, {ButtonColors} from '../../components/Button'
import ListPanel from '../../components/ListPanel'
import './style.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all",
            // isReturning: false
        };
        this.handleClickReturn = this.handleClickReturn.bind(this);
        this.handleClickFilter = this.handleClickFilter.bind(this);
    }

    handleClickReturn() {
        // this.props.logout().
    }

    handleClickFilter(value) {
        console.log(this.state.filter);
        this.setState({filter: value});
    }

    render() {

        return (
            <div className="todo-bg">
                <div className="todo-container">
                    <div className="todo-content">
                        <div className="todo-top">
                            <CustomButton title={"no"} type={ButtonColors.light} handleClick={this.handleClickReturn}/>
                            <div className="title">
                                <span>My todo-list</span>
                            </div>

                            <CustomButton title="+" type={ButtonColors.light} />
                        </div>
                        <ListPanel
                            filter = {this.state.filter}
                            handleClickReturn = {this.handleClickReturn}
                            handleClickFilterAll = {() => this.handleClickFilter("all")}
                            handleClickFilterOpen = {() => this.handleClickFilter("open")}
                            handleClickFilterCompleted = {() => this.handleClickFilter("completed")}
                        />
                        <div className="todo-list">
                            <Point title="Point 1" />
                            <Point title="fvygbhunjmk,l ctfvygsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfnghmghgvbuhnijmk,l crtvbguhinjmokl. vygbuhnijmjk,l dccrfvgybhhnbhgyvf cfcfvgbjmk dfctghnjkmjgvsgvgss" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />
                            <Point title="Point 3" />

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
    logout : () => dispatch(logout())
});

// export default TodoList
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)