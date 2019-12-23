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

const initialState = {
    auth : {
        form: "log",
    },
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
        case REGISTRATION:
            return  { ...state, registration: { isLoading : true, error: null }};
        case REGISTRATION_SUCCESS:
            return  { ...state, registration: { isLoading : false, payload: action.payload }};
        case REGISTRATION_FAILURE:
            return  { ...state, registration: { isLoading : false, error: action.error }};
        case SWITCH_TO_REGISTRATION:
            return  { ...state, auth: { form : "reg"}};
        case SWITCH_TO_LOGIN:
            return  { ...state, auth: { form : "log"}};
        default:
        {
            return state
        }
    }
}
