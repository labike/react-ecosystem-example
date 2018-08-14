import axios from 'axios'

const LOGIN = 'login'
const LOGOUT = 'logout'
const USER_DATA = 'user_data'

const initialState = {
    isAuth: false,
    name: 'ok',
    age: 10
}

export function auth(state=initialState, action){
    console.log(state, action)
    switch(action.type){
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        case USER_DATA:
            return {...state, name: action.payload.name, age: action.payload.age}
        default:
            return state
    } 
}

function userData(data){
    return {type: USER_DATA, payload: data}
}

export function getUserData(){
    return dispatch => {
        axios.get('/data')
            .then(res => {
                if(res.status === 200){
                    dispatch(userData(res.data[0]))
                }
            })
    }
}

export function login(){
    return {type: LOGIN}
}

export function logout(){
    return {type: LOGOUT}
}