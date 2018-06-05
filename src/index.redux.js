const ADD = 'ADD'
const REMOVE = 'REMOVE'

// const initState = {
//   state: 10
// }

export function counter(state = 10, action){
  //console.log(state)
  switch(action.type){
    case ADD:
      return state + 1
    case REMOVE:
      return state - 1
    default:
      return state
  }
}

export function addOne(){
  return {type: ADD}
}

export function removeOne(){
  return {type: REMOVE}
}

export function addOneAsync(){
  return dispatch => {
    setTimeout(() => {
      dispatch(addOne())
    }, 2000)
  }
}
