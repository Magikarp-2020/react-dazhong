import React, {Component} from 'react';
import BaseRouter from '_router/index';
import LocalStore from '_utils/localStorage';
import {CITYNAME} from '_config/localStoreKey';

class App extends Component {
    render() {
        return (
            <div>123123
                <BaseRouter/>
            </div>
        );
    }

    componentDidMount() {
        // 从 localStorage 里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName === undefined || cityName === null) {
            cityName = '北京'
        }

        // 将城市存在 redux 中
    }
}

export default App;
