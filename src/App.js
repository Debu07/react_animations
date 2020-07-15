import React, { Component } from 'react'
import {Transition} from 'react-spring/renderprops'
import Comp1 from './components/comp1'
import Comp2 from './components/comp2'
import Comp3 from './components/comp3'
import './App.css'
import { animated } from 'react-spring/renderprops-universal'


export default class App extends Component {
  state={
    showComponent3: false
  }
  
  toggle = e=> this.setState({showComponent3:!this.state.showComponent3});
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Comp1/>
        <Comp2 toggle={this.toggle}/>
        <Transition 
        native
        items={this.state.showComponent3}
        from={{opacity:0}}
        enter={{opacity:1}}
        leave={{opacity:0}}>

          {show=>show && (props =>(
            <animated.div style={props}>
              <Comp3/>
            </animated.div>
          ))}

        </Transition>
        <Comp3/>

      </div>
    )
  }
}
