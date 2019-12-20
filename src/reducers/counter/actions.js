import {
    INCREASE,
    DECREASE,
    RESET
} from './constants';

export function increaseNum() {
    return { type: INCREASE }
}

export function decreaseNum() {
    return { type: DECREASE }
}

export function resetNum() {
    return { type: RESET }
}