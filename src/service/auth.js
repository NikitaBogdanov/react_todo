import ApiService from './Api'

export default {
    login(params) {
        return ApiService.post('/users/login', params);
    },
    registration(params) {
        return ApiService.post('/users/registration', params);
    }
}
