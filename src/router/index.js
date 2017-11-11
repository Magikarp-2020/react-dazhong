import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '_containers/Home/index';
import Detail from '_containers/Detail/index';
import List from '_containers/List/index';

class BaseRouter extends Component {
    render() {
        return (
            <HashRouter>
                {/*只渲染出第一个与当前访问地址匹配的 <Route> 或 <Redirect>。*/}
                <Switch id="router-wrap">
                    <Route exact path="/" component={Home}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/list" component={List}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default BaseRouter;
