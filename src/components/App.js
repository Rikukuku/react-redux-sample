import React, { Component} from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

const App = (props) => {
  console.log(props)
  return (
    <React.Fragment>
    <div>count: { props.value }</div>
    <button onClick={props.increment}>+1</button>
    <button onClick={props.decrement}>-1</button>
    <App2 />
  </React.Fragment>
  )
}

class App2 extends Component {
  render() {
    const props = this.props
    console.log(props)
    return (
      <React.Fragment>
      <div>count: { props.count }</div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)