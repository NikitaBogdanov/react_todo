import React from 'react';
import {connect} from 'react-redux';
import Point from '../../components/Point'
import CustomInput from '../../components/Input'
import CustomButton, {ButtonColors} from '../../components/Button'
import './style.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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
                            <CustomButton title="<" type={ButtonColors.light} />
                            {/*<CustomButton title="rename" type={ButtonColors.light} />*/}
                            <CustomButton title="+" type={ButtonColors.light} />
                        </div>
                        <div className="right-panel-buttons">
                            <CustomButton title="All" type={ButtonColors.blue} />
                            <CustomButton title="Open" type={ButtonColors.light} />
                            <CustomButton title="Completed" type={ButtonColors.light} />
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