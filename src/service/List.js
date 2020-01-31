import ApiService from './Api'

export default {
    getPoints() {
        return ApiService.post('/points/getPoints', {});
    },
    updatePoint(params) {
        return ApiService.post('/points/updatePoint', params);
    },
    addPoint(params) {
        // return ApiService.post('/lists/addList', params);
        return ApiService.post('/points/addPoint', params);
    }
}
