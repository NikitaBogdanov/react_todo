import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
} from './constants';

export function Login(data) {
    // dispatch({ type: LOGIN})
    // apiServ.login(data).then((payload) => return dispatch({ type: LOGIN_SUCCESS, payload})
}

export function Registration(data) {
    return { type: REGISTRATION }
}

