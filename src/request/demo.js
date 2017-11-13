import xhr from '_utils/xhr';

export default class DemoRequest {
    getApi1() {
        return xhr({
            method: 'post',
            url: '/api'
        });
    }
}
