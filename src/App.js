import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOne, removeOne, addOneAsync } from './index.redux'

// const mapStateToProps = (state) => {
//   return { num: state }
// }
//
// const actionCreators = { addOne, removeOne, addOneAsync }

@connect(
  state => ({ num: state.counter }),
  { addOne, removeOne, addOneAsync }
)
class App extends Component{
  render(){
    return(
      <div>
        <h1>now has {this.props.num}</h1>
        <button onClick={this.props.addOne}>点击+</button>
        <button onClick={this.props.removeOne}>点击-</button>
        <button onClick={this.props.addOneAsync}>async 点击</button>
      </div>
    )
  }
}



export default App
