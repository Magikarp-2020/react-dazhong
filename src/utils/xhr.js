import axios from 'axios';

export default ({url = '', method = 'get', params = {}, data = {}}) => {
    return new Promise((reslove, reject) => {
        axios({
            url,
            method,
            baseURL: '/',
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
        }).then((resp) => {
            reslove(resp.data);
        }).catch((resp) => {
            reject(resp);
        })
    })
}