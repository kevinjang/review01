// const reducer = (state,action)=>{

// }

export function createStore(reducer, enhancer){
    // 定义一个存储对象
    let currentState 

    // 定义一个监听器集合
    let currentListeners = []

    // 获取当前状态的方法
    function getState(){
        return currentState;
    }

    // 订阅方法，参数是需要在获悉状态有变时需要执行的方法（这些方法的执行会更新页面，也就是订阅的初衷）
    function subscribe(listener){
        currentListeners.push(listener);
    }

    // 分发方法，当用户执行某些操作时会触发数据的变更，通过调用dispatch方法将操作知会对应的处理方法，同时分发给各个监听器
    // 以确认页面都得以更新
    function dispatch(action){
        console.log(action.type,'dispatch')
        currentState = reducer(currentState, action);
        currentListeners.forEach(v=>v())
        return action
    }

    dispatch({type:'@kaikeba/reduxisgood'})
    return {getState, subscribe, dispatch}
}
