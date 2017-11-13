import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '_containers/Home/index';
import Detail from '_containers/Detail/index';
import City from '_containers/City/index';
import User from '_containers/User/index';
import NotFound from '_containers/NotFound/index';

class BaseRouter extends Component {
    render() {
        return (
            <HashRouter>
                {/*只渲染出第一个与当前访问地址匹配的 <Route> 或 <Redirect>。*/}
                <Switch id="router-wrap">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/detail/:id" component={Detail}/>
                    <Route exact path="/city" component={City}/>
                    <Route exact path="/user" component={User}/>
                    <Route exact path="*" component={NotFound}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default BaseRouter;
