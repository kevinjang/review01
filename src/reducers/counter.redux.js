const counterReducer = (state = 0, action) => {
    const step = action.step || 1
    switch (action.type) {
        case 'add':
            return state + step;
        case "minus":
            return state - step;
        default:
            return state;
    }
}

const add = () => ({ type: 'add' });
const minus = () => ({ type: 'minus' });
const addTwo = () => ({ type: 'add', step: 2 });
const asyncAdd = () => dispatch => {
    setTimeout(() => {
        dispatch({ type: 'add', step: 3 })
    }, 2000)
}

export { counterReducer, add, minus, addTwo, asyncAdd }