import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
} from './constants';

import service from '../../service/index';

export const login = (data) => (dispatch, getState, {AuthService}) => {
    dispatch({type: LOGIN});
    AuthService.login(data)
        .then((payload) => dispatch({type: LOGIN_SUCCESS, payload}))
        .catch((error) => dispatch({type: LOGIN_FAILURE, error}));
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
