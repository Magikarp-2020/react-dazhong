import React, {Component} from 'react';
import HomeRequest from '_request/home';

import HomeAd from '_components/HomeAd/index';

class Ad extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: []
        }
    }

    render() {
        let AdModules = <div>加载中...</div>;
        if (this.state.data.length) {
            AdModules = <HomeAd data={this.state.data}/>
        }

        return (
            <div>
                {AdModules}
            </div>
        );
    }

    componentDidMount() {
        HomeRequest.getAdList().then((resp = []) => {
            this.setState({
                data: resp
            })
        });
    }
}

export default Ad;
