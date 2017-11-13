import React, {Component} from 'react';
import BaseRouter from '_router/index';
import LocalStore from '_utils/localStorage';
import {CITYNAME} from '_config/localStoreKey';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActionsFormOtherFile from '_actions/userinfo';

class App extends Component {
    render() {
        return (
            <div>
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
        console.log(this.props);
        this.props.userInfoActions.update({
            cityName
        });

        // 将城市存在 redux 中
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
