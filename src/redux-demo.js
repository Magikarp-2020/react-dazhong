import {createStore} from 'redux';

export default () => {
    // 第一步, 定义计算规则
    const counter = (state = 0, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default :
                return state;
        }
    };

    // 第二步 根据规则生成 store
    let store = createStore(counter);

    // 第三步 定义数据变化之后的派发规则
    store.subscribe(() => {
        console.log('fn1 -> current state', store.getState());
    });

    // 第四步 触发变化
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'DECREMENT'});
}
