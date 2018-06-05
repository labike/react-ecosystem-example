import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './Auth.redux'

function Two(){
  return <h2>two page</h2>
}
function Three(){
  return <h2>three page</h2>
}

@connect(
  state => state.auth,
  {logout}
)
// class Text extends Component{
//   render(){
//     console.log(this.props)
//     return(
//       <h2>测试组建{this.props.match.params.location}</h2>
//     )
//   }
// }

class Dashboard extends Component {
  render(){
    const match = this.props.match;
    console.log('match is:', match)
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        <h1>hahaha</h1>
        {this.props.isAuth ? <button onClick={this.props.logout}>退出</button> : null}
        {/*<ul>
          <li>
            <Link to='/dashboard/'>one page</Link>
          </li>
          <li>
            <Link to='/dashboard/two'>two page</Link>
          </li>
          <li>
            <Link to='/dashboard/three'>three page</Link>
          </li>
        </ul>*/}
        <ul>
          <li>
            <Link to={`${match.url}/`} >one page</Link>
          </li>
          <li>
            <Link to={`${match.url}/two`} >two page</Link>
          </li>
          <li>
            <Link to={`${match.url}/three`} >three page</Link>
          </li>
        </ul>
        <Route exact path={`${match.url}/`} component={App} />
        <Route path={`${match.url}/two`} component={Two} />
        <Route path={`${match.url}/three`} component={Three} />
        {/*<Route exact path='/dashboard/' component={App} />
        <Route path='/dashboard/two' component={Two} />
        <Route path='/dashboard/three' component={Three} />*/}
      </div>
    )
    return this.props.isAuth ? app : redirectToLogin
  }
}

export default Dashboard
