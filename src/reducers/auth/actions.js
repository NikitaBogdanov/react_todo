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

export const login = (data) => (dispatch, getState, {AuthService, TokenApi}) => {
    dispatch({type: LOGIN});
     return AuthService.login(data)
        .then((payload) => {
            TokenApi.setToken(payload.sessionId);
            dispatch({type: LOGIN_SUCCESS, payload});
        })
        .catch((error) => {
            TokenApi.removeToken();
            dispatch({type: LOGIN_FAILURE, error});
        });
};

export const logout = () => (dispatch, getState, {TokenApi}) => {
    dispatch({type: LOGOUT});
    TokenApi.removeToken();
};

export const registration = (data) => (dispatch, getState, {AuthService}) => {
    dispatch({type: REGISTRATION});
    return AuthService.registration(data)
        .then((payload) => {
            dispatch({type: REGISTRATION_SUCCESS, payload})
        })
        .catch((error) => {
            dispatch({type: REGISTRATION_FAILURE, error})
        });
};
