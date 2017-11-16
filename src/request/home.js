import xhr from '_utils/xhr';
import {getAdList, getHomeList} from '_config/apiPath';

export default new class {
    getAdList() {
        return xhr({
            url: getAdList,
            type: 'get'
        });
    }

    getListData({city = '', page}) {
        return xhr({
            url: getHomeList + '/' + encodeURIComponent(city.toString()) + '/' + encodeURIComponent(page.toString()),
            type: 'get'
        })
    }
}();
