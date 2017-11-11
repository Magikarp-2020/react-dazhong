# react

> version: react: 16.0.0, react-dom: 16.0.0, react-router-dom: 4.2.2

## 路由

### 路由安装

```shell
cnpm install --save react-router-dom # 不建议安装 react-router
```

### 创建路由

> src/router/index.js

```jsx
import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '_containers/Home/index';
import Detail from '_containers/Detail/index';

class BaseRouter extends Component {
    render() {
        return (
            <HashRouter>
                {/* Switch 只渲染出第一个与当前访问地址匹配的 <Route> 或 <Redirect>。*/}
                <Switch id="router-wrap">
                    <Route exact path="/" component={Home}/>
                    <Route path="/detail" component={Detail}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default BaseRouter;

```

### 嵌套路由

> src/containers/Detail/index.js

```jsx
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
            <div className="App">
                <p>this is detail ~!!!</p>
                <div>
                    {this.props.children}
                </div>
            	{/*放入需要嵌套的路由*/}
                <Route path="/:number" component={Detail2}/>
                <p>footer...</p>
            </div>
        );
    }
}

export default App;

```





