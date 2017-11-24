/**
 * Created by lichao on 2017/10/21.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userInfoActionsFromOtherFile from '_actions/userinfo'

import Header from '_components/Header/index';

class City extends Component {
    render() {
        return (
            <div>
                <Header history={this.props.history}/>
                City
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
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)