import { createStore } from './kaikeba-redux'

const counterReducer = (state = 0, action) => {
    const step = action.step || 1
    switch (action.type) {
        case "add":
            return state + step;
        case "minus":
            return state - step;
        default:
            return state;
    }    
}

const store = createStore(counterReducer)

export default store