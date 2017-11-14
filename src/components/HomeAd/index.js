import React, {Component} from 'react';

import './style.scss';

class HomeAd extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {}
    }

    render() {
        const data = this.props.data;

        return (
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clearfix   ">
                    {data.map((item, index) => {
                        return <div key={index} className="ad-item fll"><a href={item.link}><img src={item.img} alt={item.title}/></a></div>
                    })}
                </div>
            </div>
        );
    }

    componentDidMount() {
    }
}

export default HomeAd;
