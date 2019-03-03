import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import store from './store'
import { connect } from 'react-redux'
import { add, minus, addTwo, asyncAdd } from './reducers/counter.redux'

import { Route, Link } from 'react-router-dom'

import DisplayNum from './DisplayNum'

// @connect(
//   state=>({num: state}),
//   dispatch=>({
//     add:()=>dispatch({type: 'add'}),
//     minus: ()=>dispatch({type: 'minus'})
//   })
// )
@connect(
  state => ({ num: state }),
  // {
  //   add:()=>({type: 'add',step: 1}),
  //   addTwo:()=>({type: 'add',step: 2}),
  //   minus: ()=>({type: 'minus',step: 1}),
  //   asyncAdd: ()=>dispatch=>{
  //     console.log('dispatch',dispatch)
  //     setTimeout(()=>{
  //       dispatch({type: 'add', step: 3})
  //     },2000)
  //   }
  // }
  { add, minus, addTwo, asyncAdd }
)
class Counter extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.num}</p>
        <button onClick={() => { this.props.add() }}>+</button>
        <button onClick={() => { this.props.addTwo() }}>+2</button>
        <button onClick={() => { this.props.asyncAdd() }}>Async +3</button>
        <button onClick={() => this.props.minus()}>-</button>

        <DisplayNum></DisplayNum>

      </div>

    );
  }
}

class App extends React.Component {
  render() {
    return <div>
      <h2>开课吧</h2>

      <Link to="/" >首页</Link>|
       <Link to="/about" >About</Link>|
        <Link to="/detail">Detail</Link>|
        <Link to="/about/aboutdetail">AboutDetail</Link>|
        <Link to="/detail/react">React</Link>|
        <Link to="/detail/vue">Vue</Link>

      <Route path="/" exact component={Counter}></Route>
      <Route path="/about"   component={About}></Route>
      <Route path="/detail/:name" component={Detail}></Route>
    </div>
  }
}

function About() {
  return <div>
    about
    <Route exact  path="/about/aboutdetail" component={AboutDetail}></Route>
  </div>
}

function AboutDetail(){
  return <h2>About Detail Page</h2>
}

function Detail(props) {
  return <h2>
    detail:{props.match.params.name}
  </h2>
}

// const mapStatetoProps = (state)=>{
//   return {
//     num: state
//   }
// }

// const mapDispatchtoProps = (dispatch)=>{
//   return {
//     add:()=>dispatch({type: 'add'}),
//     minus:()=>dispatch({type: 'minus'})
//   }
// }

// App = connect(mapStatetoProps,mapDispatchtoProps)(App);

export default App;
