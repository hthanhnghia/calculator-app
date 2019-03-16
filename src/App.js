import React, { Component } from 'react';
import Number from './Number'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: 0
    }
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

  render() {
    return (
      <div className="calculatorContainer">
        <div className="grid-item result">
          {this.state.result}
        </div>

        <div className="grid-item clear-calculator">
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
    );
  }
}

export default App;
