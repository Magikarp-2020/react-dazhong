import React, {Component} from 'react';
import HomeRequest from '_request/home';

class List extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                list
            </div>
        );
    }

    componentDidMount() {
        HomeRequest.getListData({
            city: '北京',
            page: 1
        });
    }
}

export default List;
