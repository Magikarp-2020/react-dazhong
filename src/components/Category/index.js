import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

import './style.scss';

class Category extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            index: 0
        }
    }

    render() {
        let opt = {
            auto: 10000,
            callback: (index) => {
                this.setState({
                    index: index
                });
            }
        };
        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clearfix">
                            <li className="fll jingdian">景点</li>
                            <li className="fll ktv">KTV</li>
                            <li className="fll gouwu">购物</li>
                            <li className="fll shenghuofuwu">生活服务</li>
                            <li className="fll jianshenyundong">健身运动</li>
                            <li className="fll meifa">美发</li>
                            <li className="fll qinzi">亲子</li>
                            <li className="fll xiaochikuaican">小吃快餐</li>
                            <li className="fll zizhucan">自助餐</li>
                            <li className="fll jiuba">酒吧</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clearfix">
                            <li className="fll meishi">美食</li>
                            <li className="fll dianying">电影</li>
                            <li className="fll jiudian">酒店</li>
                            <li className="fll xuixianyule">休闲娱乐</li>
                            <li className="fll waimai">外卖</li>
                            <li className="fll huoguo">火锅</li>
                            <li className="fll liren">丽人</li>
                            <li className="fll dujiachuxing">度假出行</li>
                            <li className="fll zuliaoanmo">足疗按摩</li>
                            <li className="fll zhoubianyou">周边游</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clearfix">
                            <li className="fll ribencai">日本菜</li>
                            <li className="fll SPA">SPA</li>
                            <li className="fll jiehun">结婚</li>
                            <li className="fll xuexipeixun">学习培训</li>
                            <li className="fll xican">西餐</li>
                            <li className="fll huochejipiao">火车机票</li>
                            <li className="fll shaokao">烧烤</li>
                            <li className="fll jiazhuang">家装</li>
                            <li className="fll chongwu">宠物</li>
                            <li className="fll quanbufenlei">全部分类</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}/>
                        <li className={this.state.index === 1 ? "selected" : ''}/>
                        <li className={this.state.index === 2 ? "selected" : ''}/>
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }
}

export default Category;
