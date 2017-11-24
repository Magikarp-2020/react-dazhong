import React, {Component} from 'react';

import './style.scss';

class CurrentCity extends Component {
    static defaultProps = {
        cityName: ''
    };

    render() {
        return (
            <div className="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        );
    }
}

export default CurrentCity;
