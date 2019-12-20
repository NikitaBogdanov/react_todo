import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
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
            return  { ...state, login: { isLoading : false , error: action.payload}};
        case REGISTRATION:
            return  { ...state, registration: { isLoading : true }};
        case REGISTRATION_SUCCESS:
            return  { ...state, registration: { isLoading : false }};
        case REGISTRATION_FAILURE:
            return  { ...state, registration: { isLoading : false }};
        default:
        {
            return state
        }
    }
}
