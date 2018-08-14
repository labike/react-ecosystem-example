const ADD = 'add'
const REDUCE = 'reduce'

export function counter(state = 0, action){
    //console.log(state)
    switch(action.type){
        case ADD:
            return state + 1
        case REDUCE:
            return state - 1
        default:
            return 1
    }
}

export function Add(){
    return {type: ADD}
}

export function Reduce(){
    return {type: REDUCE}
}

export function AsyncAdd(){
    return dispatch => {
        setTimeout(() => {
            dispatch(Add())
        }, 2000)
    }
}