import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import App from './App'
import {logout} from './Auth.redux'

function Two(){
    return <h2>two</h2>
}

function Three(){
    return <h2>Three</h2>
}

// @connect(
//     state => state.auth,
//     {logout}
// )
class Dashboard extends Component{
    handleClickLogout(){
        this.props.logout()
    }
    render(){
        const match = this.props.match
        const redirectLogin = <Redirect to='/login'/>
        const app = (
            <div>
                {this.props.isAuth ? <button onClick={() => this.handleClickLogout()}>注销</button> : null}
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>one</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/two`}>two</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/three`}>three</Link>
                    </li>
                </ul>
                <Route exact path={`${match.url}/`} component={App}></Route>    
                <Route path={`${match.url}/two`} component={Two}></Route>
                <Route path={`${match.url}/three`} component={Three}></Route>
            </div>
        )
        return this.props.isAuth ? app : redirectLogin
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

const actionCreators = {logout}

export default connect(mapStateToProps, actionCreators)(Dashboard)