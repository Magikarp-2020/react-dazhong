import xhr from '_utils/xhr';
import {getAdList, getHomeList} from '_config/apiPath';

export default new class {
    getAdList() {
        return xhr({
            url: getAdList,
            type: 'get'
        });
    }

    getListData(data) {
        return xhr({
            url: getHomeList + '/' + encodeURIComponent(data.city.toString()) + '/' + encodeURIComponent(data.page.toString()),
            type: 'get'
        })
    }
}();
