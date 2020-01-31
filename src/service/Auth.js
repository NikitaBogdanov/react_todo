import ApiService from './Api'
import TokenApi from './TokenApi'

export default {
    login(params) {
        return ApiService.post('/users/login', params);
    },
    registration(params) {
        return ApiService.post('/users/registration', params);
    },
    // setToken(params) {
    //     return TokenApi.setToken(params);
    // },
    // getToken() {
    //     return TokenApi.getToken();
    // },
    // removeToken() {
    //     return TokenApi.removeToken();
    // }
}
