import React, {Component} from 'react';
import Icon from '_components/Icon';

import './style.scss';

class HomeHeader extends Component {
    render() {
        return (
            <div id="home-header" className="clearfix">
                <div className="home-header-left fll">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <Icon iconType="angle-down"/>
                </div>
                <div className="home-header-right flr">
                    <Icon iconType="user"/>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <Icon iconType="search"/>
                        <input className="home-header-search-input" type="input" placeholder="请输入关键字"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;
