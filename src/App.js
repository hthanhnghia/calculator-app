import React, { Component } from 'react';
import Number from './Number'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: 0
    }
    this.clearResult = this.clearResult.bind(this)
  }

  handleClick = (number) => {
    this.setState({result: number})
  }

  createNumberDiv = () => {
      let numbers = []
      for (let i=1; i<=9; i++) {
        numbers.push(
          <div className="grid-item" key={i}>
            <Number value={i} onClick={()=>this.handleClick(i)} />
          </div>
        )
      }
      return numbers
  }

  clearResult = () => {
    this.setState({result:0})
  }

  render() {
    return (
      <body tabIndex="0"
            onKeyDown={(e)=>this.handleClick(e.keyCode)}>
        <div className="calculatorContainer">
          <div className="grid-item result">
            {this.state.result}
          </div>

          <div className="grid-item clear-calculator" onClick={this.clearResult}>
            clear
          </div>

          {this.createNumberDiv()}

          <div className="operators">
            <div className="grid-item">:</div>
            <div className="grid-item">-</div>
            <div className="grid-item">+</div>
            <div className="grid-item">=</div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
