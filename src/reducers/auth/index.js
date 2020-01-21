import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
} from './constants';

const initialState = {
    login : {
        isLoading: false,
        payload: null,
        error: null,
    },
    registration : {
        isLoading: false,
        payload: null,
        error: null,
    }
};

export default function LoginApp(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return  { ...state, login: { isLoading : true, error: null }};
        case LOGIN_SUCCESS:
            return  { ...state, login: { isLoading : false, payload: action.payload }};
        case LOGIN_FAILURE:
            return  { ...state, login: { isLoading : false, error: action.error }};
        case LOGOUT:
            return  { ...state, login: { payload: null }};
        case REGISTRATION:
            return  { ...state, registration: { isLoading : true, error: null }};
        case REGISTRATION_SUCCESS:
            return  { ...state, registration: { isLoading : false, payload: action.payload }};
        case REGISTRATION_FAILURE:
            return  { ...state, registration: { isLoading : false, error: action.error }};
        default:
        {
            return state
        }
    }
}
