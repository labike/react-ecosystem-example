import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Add, Reduce, AsyncAdd } from './index.redux'

class App extends Component{
    render(){
        return(
            <div>
                <h2>now is {this.props.num}</h2>
                <button onClick={this.props.Add}>点我加</button>
                <button onClick={this.props.Reduce}>点我减</button>
                <button onClick={this.props.AsyncAdd}>异步</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {num: state.counter}
}

const actionCreators = {Add, Reduce, AsyncAdd}

export default connect(mapStateToProps, actionCreators)(App)