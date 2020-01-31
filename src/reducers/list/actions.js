import {
    GETPOINTS,
    GETPOINTS_SUCCESS,
    GETPOINTS_FAILURE,
    UPDATEPOINT,
    ADDPOINT,
} from './constants';

import service from '../../service/index';

export const getPoints = () => (dispatch, getState, {ListService}) => {
    // dispatch({type: GETPOINTS});
    return ListService.getPoints()
        .then((payload) => {
            return payload;
            // console.log(payload);
            // dispatch({type: LOGIN_SUCCESS, payload});
            // localStorage.setItem("sessionId", JSON.stringify(payload.sessionId));
        })
        .catch((error) => {
            // console.log(error);
            // dispatch({type: LOGIN_FAILURE, error});
            // localStorage.removeItem("sessionId");
        });
};

export const updatePoint = (data) => (dispatch, getState, {ListService}) => {
    dispatch({type: UPDATEPOINT});
    console.log('TEST! ' + data);
    return ListService.updatePoint(data)
        .then((payload) => {
            console.log('REQ ' + payload);
            // dispatch({type: LOGIN_SUCCESS, payload});
            // localStorage.setItem("sessionId", JSON.stringify(payload.sessionId));
        })
        .catch((error) => {
            console.log('error ' + error);
            // dispatch({type: LOGIN_FAILURE, error});
            // localStorage.removeItem("sessionId");
        });
};

export const addPoint = (data) => (dispatch, getState, {ListService}) => {
    dispatch({type: ADDPOINT});
     return ListService.addPoint(data)
        .then((payload) => {
            console.log(payload);
            // dispatch({type: LOGIN_SUCCESS, payload});
            // localStorage.setItem("sessionId", JSON.stringify(payload.sessionId));
        })
        .catch((error) => {
            // dispatch({type: LOGIN_FAILURE, error});
            // localStorage.removeItem("sessionId");
        });
};
