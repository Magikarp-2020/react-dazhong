import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <p><Link to="/detail/2">detail</Link></p>
                <p><Link to="/city">city</Link></p>
                <p><Link to="/user">user</Link></p>

            </div>
        );
    }
}

export default App;
