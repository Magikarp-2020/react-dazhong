import React, {Component} from 'react';

import './style.scss';

export default class LoadMore extends Component {
    static defaultProps = {
        isLoadingMore: false,
        loadMoreFn: null
    };

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {this.props.isLoadingMore ? <span>加载中...</span> :
                    <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>}
            </div>
        );
    }

    loadMoreHandle() {
        // 执行传递过来的 loadMoreData函数
        if (this.props.loadMoreFn) {
            this.props.loadMoreFn();
        }
    }

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs['wrapper'];
        let timeoutId = null;

        const callback = () => {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        };

        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return;
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback, 50)
        }, false);
    }
}
