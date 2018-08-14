import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { login, getUserData } from './Auth.redux'

// @connect(
//     state => state.auth,
//     {login}
// )

class Auth extends Component{
    state = {
        data: {}
    }
    componentDidMount(){
        this.props.getUserData()
        // axios.get('/data')
        //     .then(res => {
        //         if(res.status === 200){
        //             this.setState({
        //                 data: res.data[0]
        //             })   
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }
    handleClickLogin(){
        this.props.login()
    }
    render(){
        return(
            <div>
                <h2>my name is {this.props.name}, age is {this.props.age}</h2>
                {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
                <p>你没有权限查看,需要登录</p>
                <button onClick={() => this.handleClickLogin()}>登录</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        name: state.auth.name,
        age: state.auth.age
    }
}

const authCreators = {login, getUserData}

export default connect(mapStateToProps, authCreators)(Auth)

// export default Auth