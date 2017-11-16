import React, {Component} from 'react';

import './style.scss';

export default class LoadMore extends Component {
    static defaultProps = {
        isLoadingMore: false,
        loadMoreFn: null
    };

    render() {
        return (
            <div className="load-more">
                {this.props.isLoadingMore ? <span>加载中...</span> :
                    <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>}
            </div>
        );
    }

    loadMoreHandle() {
        // 执行传递过来的 loadMoreData函数
        console.log('111');
        if (this.props.loadMoreFn) {
            this.props.loadMoreFn();
        }
    }
}
