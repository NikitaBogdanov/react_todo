import {
    GET_POINTS,
    GET_POINTS_SUCCESS,
    GET_POINTS_FAILURE,
    CHECK_POINT,
    CHECK_POINT_SUCCESS,
    CHECK_POINT_FAILURE,
    EDIT_POINT,
    SAVE_POINT,
    SAVE_POINT_SUCCESS,
    SAVE_POINT_FAILURE,
    ADD_POINT,
    ADD_POINT_SUCCESS,
    ADD_POINT_FAILURE,
    DELETE_POINT,
    DELETE_POINT_SUCCESS,
    DELETE_POINT_FAILURE,
} from './constants';

import service from '../../service/index';
import list from "./index";

export const getPoints = () => (dispatch, getState, {ListService}) => {
    dispatch({type: GET_POINTS});
    return ListService.getPoints()
        .then((payload) => {
            payload = JSON.parse(payload).map((point)=>{
                point['isEdit'] = false;
                return point
            });
            dispatch({type: GET_POINTS_SUCCESS, payload});
        })
        .catch((error) => {
            dispatch({type: GET_POINTS_FAILURE, error});
        });
};

export const checkPoint = (data) => (dispatch, getState, {ListService}) => {
    const updatedPoints = [...getState().list.points.payload];
    const index = findIndex(updatedPoints, data._id);
    updatedPoints[index].completed = !updatedPoints[index].completed;
    dispatch({type: CHECK_POINT});
    return ListService.updatePoint(updatedPoints[index])
        .then(() => {
            dispatch({type: CHECK_POINT_SUCCESS, payload: updatedPoints});
        })
        .catch((error) => {
            dispatch({type: CHECK_POINT_FAILURE, error});
        });
};

export const editPoint = (data) => (dispatch, getState, {ListService}) => {
    const updatedPoints = [...getState().list.points.payload];
    const index = findIndex(updatedPoints, data._id);
    updatedPoints[index].isEdit = true;
    dispatch({type: EDIT_POINT, payload: updatedPoints});
};

export const savePoint = (data) => (dispatch, getState, {ListService}) => {
    const updatedPoints = [...getState().list.points.payload];
    const index = findIndex(updatedPoints, data._id);
    updatedPoints[index].isEdit = false;
    updatedPoints[index].title = data.title;
    dispatch({type: SAVE_POINT});
    return ListService.updatePoint(updatedPoints[index])
        .then(() => {
            dispatch({type: SAVE_POINT_SUCCESS, payload: updatedPoints});
        })
        .catch((error) => {
            dispatch({type: SAVE_POINT_FAILURE, error});
        });
};

export const addPoint = (data) => (dispatch, getState, {ListService}) => {
    dispatch({type: ADD_POINT});
    return ListService.addPoint(data)
        .then((payload) => {
            const updatedPoints = [...getState().list.points.payload];
            updatedPoints.unshift(payload);
            dispatch({type: ADD_POINT_SUCCESS, payload: updatedPoints});
        })
        .catch((error) => {
            dispatch({type: ADD_POINT_FAILURE, error});
        });
};

export const deletePoint = (data) => (dispatch, getState, {ListService}) => {
    dispatch({type: DELETE_POINT});
    return ListService.deletePoint(data)
        .then(() => {
            const updatedPoints = [...getState().list.points.payload].filter((point) => point._id !== data._id);
            dispatch({type: DELETE_POINT_SUCCESS, payload: updatedPoints});
        })
        .catch((error) => {
            dispatch({type: DELETE_POINT_FAILURE, error});
        });
};

const findIndex = (points, id) => {
    return points.findIndex((currentValue) => {
        return currentValue['_id'] === id;
    });
};