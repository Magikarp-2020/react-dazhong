import axios from 'axios';

export default ({url = '', method = 'get', params = {}, data = {}}) => {
    return axios({
        url,
        method,
        baseURL: 'http://localhost:8080/',
        params,
        data
    });
}