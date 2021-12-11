import React from 'react'
import '../App.css';




class ClassCounter extends React.Component {
    constructor() {
      super();
  
      this.state = {count: 0};
    }
  
    handleIncrease = () => {
        this.setState({ count: this.state.count + 1 });
      }

      handleDecrease = () => {
        this.setState({ count: this.state.count - 1 });
      }
  
    render(){
      return (
        <div className="App">
          <h1>{this.state.count}</h1>
          <button onClick={this.handleIncrease}>Increase Count</button>
          <button onClick={this.handleDecrease}>Decrease Count</button>
        </div>
      );
    }
  }

  export default ClassCounter;