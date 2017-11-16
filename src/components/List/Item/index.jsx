import React from 'react'

import './style.scss'

class ListItem extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="list-item clearfix">
                <div className="item-img-container fll">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-container clearfix">
                        <h3 className="fll">{data.title}</h3>
                        <span className="flr">{data.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {data.subTitle}
                    </p>
                    <div className="item-price-container clearfix">
                        <span className="price fll">￥{data.price}</span>
                        <span className="mumber flr">已售{data.mumber}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem