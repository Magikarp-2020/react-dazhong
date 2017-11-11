/**
 * Created by lichao on 2017/10/21.
 */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Detail2 from '_containers/Detail2/index';

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>this is detail ~!!!</p>
                <div>
                    {this.props.children}
                </div>
                <Route path="/detail/:number" component={Detail2}/>
                <p>footer...</p>
            </div>
        );
    }
}

export default App;
