import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
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
}

// export function Registration(data) {
//     return { type: REGISTRATION }
// }
