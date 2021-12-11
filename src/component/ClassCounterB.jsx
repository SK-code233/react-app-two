import React from 'react'
import '../App.css';




// class ClassCounter extends React.Component {
//     constructor() {
//       super();
  
//       this.state = {count: 0};
//     }
  
//     handleIncrease = () => {
//         this.setState({ count: this.state.count + 1 });
//       }

//       handleDecrease = () => {
//         this.setState({ count: this.state.count - 1 });
//       }
  
//     render(){
//       return (
//         <div className="App">
//           <h1>{this.state.count}</h1>
//           <button onClick={this.handleIncrease}>Increase Count</button>
//           <button onClick={this.handleDecrease}>Decrease Count</button>
//         </div>
//       );
//     }
//   }

function FunctionCounter() {
      const [count, setCount] = React.useState(0);
    
      const addOne = () => {
        setCount(count + 1);
      };

      const minusOne = () => {
            setCount(count - 1);
          };
    
      return (
        <div className="App">
           <h1>{count}</h1>
           <button onClick={addOne}>Increase</button>
           <h3> or </h3>
           <button onClick={minusOne}>Decrease</button>
        </div>
      );
    }

  export default FunctionCounter;