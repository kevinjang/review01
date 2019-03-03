import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const counterReducer = (state = 0, action) =>{
    const step = action.step
    switch(action.type){
        case 'add':
        return state + step;
        case "minus":
        return state - step;
        default:
        return state;
    }
}

let mids
if("测试环境"){
    mids = [logger,thunk]
}else{
    mids= [thunk]
}

const store = createStore(counterReducer, applyMiddleware(...mids))

export default store