import React, {Component} from 'react';
import HomeHeader from '_components/HomeHeader/index';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
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

