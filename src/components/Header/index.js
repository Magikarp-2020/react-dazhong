import React, {Component} from 'react';

import Icon from "_components/Icon/index";

import './style.scss';

class Header extends Component {
    static defaultProps = {
        title: 'title'
    };

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.handleBackClick.bind(this)}>
                    <Icon iconType="chevron-left"/>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }

    handleBackClick() {
        if (this.props.history) {
            this.props.history.goBack();
        } else {
            window.history.back();
        }
    }
}

export default Header;
