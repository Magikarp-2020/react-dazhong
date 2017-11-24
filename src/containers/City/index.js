/**
 * Created by lichao on 2017/10/21.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoActionsFromOtherFile from '_actions/userinfo'

import Header from '_components/Header/index';
import CurrentCity from '_components/CurrentCity/index';
import CityList from '_components/CityList/index';

import LocalStorage from '_utils/localStorage';
import * as localStoreKey from '_config/localStoreKey';

class City extends Component {
    render() {
        return (
            <div>
                <Header history={this.props.history} title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList onCityChange={this.changeCity.bind(this)}/>
            </div>
        );
    }

    changeCity(newCity) {
        if (!newCity) {
            throw new Error('new city is undefined');
        }
        // 修改 redux
        this.props.userInfoActions.update({
            cityName: newCity
        });
        // 更改 LocalStorage
        LocalStorage.setItem(localStoreKey.CITYNAME, newCity);
        // goback
        this.props.history.goBack();
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);
