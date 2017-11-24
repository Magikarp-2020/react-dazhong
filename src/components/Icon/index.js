import React, {Component} from 'react';

class Icon extends Component {
    static defaultProps = {
        iconType: '',
        className: ''
    };

    render() {
        return (
            <i className={['icon-' + this.props.iconType, this.props.className].join(' ')}/>
        );
    }
}

export default Icon;
