import React, {Component} from 'react';
import HomeRequest from '_request/home';

import ListComponent from '_components/List/index';
import LoadMore from '_components/LoadMore/index';

class List extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [],  // 存储信息
            hasMore: false,   // 记录当前状态下还有没有更多的数据可供加载
            isLoadingMore: false,  // 记录当前状态下是加载中还是点击可加载更多
            page: 1, // 页码
        }
    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.data.length ? <ListComponent data={this.state.data}/> : <div>加载中...</div>}
                {
                    this.state.hasMore ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/> :
                        ''
                }
            </div>
        );
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        this.fetchData(this.props.cityName);
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });
        this.fetchData(this.props.cityName, this.state.page + 1);
    }

    fetchData(cityName, page = 0) {
        HomeRequest.getListData({
            city: cityName,
            page
        }).then((res) => {
            this.setState({
                hasMore: res.hasMore,
                data: this.state.data.concat(res.data),
                isLoadingMore: false,
                page: res.page
            });
        })
    }
}

export default List;
