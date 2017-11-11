/**
 * Created by lichao on 2017/10/21.
 */
import React, {Component} from 'react';
import '_assets/styles/index.css';

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                this is detail -> {this.props.match.params.number}
            </div>
        );
    }
}

export default App;
