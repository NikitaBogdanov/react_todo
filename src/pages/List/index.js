import React from 'react';
import {connect} from 'react-redux';
import Point from '../../components/Point'
import CustomInput from '../../components/Input'
import CustomButton, {ButtonColors} from '../../components/Button'
import ListPanel from '../../components/ListPanel'
import './style.css'
import {Redirect} from "react-router-dom";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all",
            isReturning: false
        };
        this.handleClickReturn = this.handleClickReturn.bind(this);
        this.handleClickFilter = this.handleClickFilter.bind(this);
    }

    handleClickReturn() {
        console.log(this.state.isReturning);
        console.log(this.state.filter);
        this.setState({isReturning: true});
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
                            <CustomButton title="<" type={ButtonColors.light} handleClick={this.handleClickReturn}/>
                            {this.state.isReturning && <Redirect to={"/"}/>}
                            {/*<CustomButton title="rename" type={ButtonColors.light} />*/}

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
export default TodoList