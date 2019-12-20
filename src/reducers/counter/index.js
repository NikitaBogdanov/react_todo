import {
    INCREASE,
    DECREASE,
    RESET
} from './constants';

const initialState = {
    counterNum: 7
};

export default function counterApp(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return  { ...state, counterNum: state.counterNum + 1};
        case DECREASE:
            return  { ...state, counterNum: state.counterNum - 1};
        case RESET:
            return  { ...state, counterNum: 0};
        default:
        {
            console.log(state)
            return state
        }
    }
}
