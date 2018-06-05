import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

import { login, getUserData } from './Auth.redux'

@connect(
  state => state.auth,
  {login, getUserData}
)
class Auth extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     data: {}
  //   }
  // }
  // componentDidMount(){
  //   axios.get('/data')
  //     .then(res => {
  //       if(res.status === 200){
  //         this.setState({
  //           data: res.data
  //         })
  //       }
  //       console.log(this.state.data)
  //     })
  // }
  // componentDidMount(){
  //   this.props.getUserData()
  // }
  render(){
    const user = this.props.user
    const age = this.props.age
    console.log(user, age)
    return(
      <div>
        <h2>my name is {this.props.user}, age is {this.props.age}</h2>
        {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
        <button onClick={this.props.login}>登陆</button>
      </div>

    )
  }
}

export default Auth
