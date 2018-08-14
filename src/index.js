import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Auth from './Auth'
import Dashboard from './Dashboard'

import reducers from './reducer'
import './config'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
//console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={Auth} />
                <Route path='/dashboard' component={Dashboard} />
                <Redirect to='/dashboard' />
            </Switch>
            
            
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)