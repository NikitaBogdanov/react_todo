import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
} from './constants';

import service from '../../service/index';

export const login = (data) => (dispatch, getState, {AuthService}) => {
    dispatch({type: LOGIN});
    AuthService.login(data)
        .then((payload) => {
            dispatch({type: LOGIN_SUCCESS, payload});
            localStorage.setItem("sessionId", JSON.stringify(payload.sessionId));
        })
        .catch((error) => {
            dispatch({type: LOGIN_FAILURE, error});
            localStorage.removeItem("sessionId");
        });
};

export const logout = () => (dispatch) => {
    dispatch({type: LOGOUT});
    localStorage.removeItem("sessionId");
};

export const registration = (data) => {
    return (dispatch) => {

        dispatch({type: REGISTRATION});
        service.AuthService.registration(data).then(payload =>
            dispatch({type: REGISTRATION_SUCCESS, payload}))
            .catch(error =>
                dispatch({type: REGISTRATION_FAILURE, error}));
    }
};
