import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p><Link to="/detail">detail</Link></p>
                <p><Link to="/detail/2">detail -- 2</Link></p>

                <p><Link to="/list">List</Link></p>
            </div>
        );
    }
}

export default App;
