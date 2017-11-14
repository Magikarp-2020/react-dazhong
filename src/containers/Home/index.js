import React, {Component} from 'react';
import {connect} from 'react-redux';

import HomeHeader from '_components/HomeHeader/index';
import Category from '_components/Category/index';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userinfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

