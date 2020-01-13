import React from 'react';
import {connect} from 'react-redux';
import Point from '../../components/Point'
import CustomInput from '../../components/Input'
import CustomButton, {ButtonColors} from '../../components/Button'
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
            <div className="todo-container">
                <div className="todo-content">
                    <div className="title">
                        <span>My todo-list</span>
                    </div>
                    <div className="todo-panel">
                        <div className="left-panel-buttons">
                            <CustomButton title="<" type={ButtonColors.light} handleClick={this.handleClickReturn}/>
                            {this.state.isReturning && <Redirect to={"/"}/>}
                            {/*<CustomButton title="rename" type={ButtonColors.light} />*/}
                            <CustomButton title="+" type={ButtonColors.light} />
                        </div>
                        <div className="right-panel-buttons">
                            <CustomButton title="All" type={this.state.filter==="all" ? ButtonColors.blue : ButtonColors.light} handleClick={() => this.handleClickFilter("all")}/>
                            <CustomButton title="Open" type={this.state.filter==="open" ? ButtonColors.blue : ButtonColors.light} handleClick={() => this.handleClickFilter("open")} />
                            <CustomButton title="Completed" type={this.state.filter==="completed" ? ButtonColors.blue : ButtonColors.light} handleClick={() => this.handleClickFilter("completed")} />
                        </div>
                    </div>
                    <div className="todo-list">
                        <Point title="Point 1" />
                        <Point title="Point 2" />
                        <Point title="Point 3" />
                    </div>
                </div>
            </div>
        );
    }
}
export default TodoList