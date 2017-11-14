import * as actionTypes from '_constants/userinfo';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        // 登录
        case actionTypes.USERINFO_LOGIN:
            return action.data;
        case actionTypes.UPDATE_CITYNAME:
            return action.data;
        case actionTypes.USERINFO_UPDATE:
            return action.data;
        default:
            return state;
    }
}