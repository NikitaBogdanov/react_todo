import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
    SWITCH_TO_REGISTRATION,
    SWITCH_TO_LOGIN,
} from './constants';

import service from '../../service/index';

export const login = (data) => {
    return (dispatch) => {
        dispatch({ type: LOGIN });
        service.AuthService.login(data).then(payload =>
            dispatch({ type: LOGIN_SUCCESS, payload }))
        .catch(error =>
            dispatch({ type: LOGIN_FAILURE, error }));
        }
};

export const registration = (data) => {
    return (dispatch) => {
        dispatch({ type: REGISTRATION });
        service.AuthService.registration(data).then(payload =>
            dispatch({ type: REGISTRATION_SUCCESS, payload }))
        .catch(error =>
            dispatch({ type: REGISTRATION_FAILURE, error }));
    }
};

export const authSwitch = (data) => {
    return (dispatch) => {
        switch (data) {
            case 'reg': return dispatch({ type: SWITCH_TO_REGISTRATION });
            case 'log': return dispatch({ type: SWITCH_TO_LOGIN });
            default: return;
        }
    }
};