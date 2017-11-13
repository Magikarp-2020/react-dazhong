import axios from 'axios';

export default ({url = '', method = 'get', params = {}, data = {}}) => {
    return axios({
        url,
        method,
        baseURL: 'http://localhost:8080/',
        params,
        data,
        header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        },
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
    });
}