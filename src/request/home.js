import xhr from '_utils/xhr';
import {getAdList} from '_config/apiPath';

export default new class {
    getAdList() {
        return xhr({
            url: getAdList,
            type: 'get'
        });
    }
}();
