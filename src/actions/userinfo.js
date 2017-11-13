import * as actionTypes from '_constants/userinfo';

export const login = (data) => {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
};

export const updateCityName = (data) => {
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data
    }
};
