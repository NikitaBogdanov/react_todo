import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import CustomButton, {ButtonColors} from "../Button";

class ListPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {filter, handleClickFilterAll, handleClickFilterOpen, handleClickFilterCompleted} = this.props;

        return (
            <div className="todo-panel">
                <div className="filter-panel-buttons">
                    <CustomButton title="All" type={filter==="all" ? ButtonColors.blue : ButtonColors.light} handleClick={handleClickFilterAll}/>
                    <CustomButton title="Open" type={filter==="open" ? ButtonColors.blue : ButtonColors.light} handleClick={handleClickFilterOpen} />
                    <CustomButton title="Completed" type={filter==="completed" ? ButtonColors.blue : ButtonColors.light} handleClick={handleClickFilterCompleted} />
                </div>
            </div>
        )
    }
}

export default ListPanel;