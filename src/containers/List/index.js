/**
 * Created by lichao on 2017/10/21.
 */
import React, {Component} from 'react';
import '_assets/styles/index.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                list ~~~
                <p>to detail</p>
                <p>to detail 1</p>
                <p onClick={this.handlerClick.bind(this, 2)}>to detail 2</p>
            </div>
        );
    }

    handlerClick(value) {
        console.log(value, this);
        this.props.history.push('/detail/' + value);
    }
}

export default App;
