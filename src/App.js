import React from 'react'
import './App.css';
import ClassCounter from './component/ClassCounter';
import FunctionCounter from './component/ClassCounterB';
// import FunctionCounter from './component/ClassCounterB';



function App() {
  return (
    <div className="App">
    {<ClassCounter />}

    {<FunctionCounter />}
    </div>
  );
}

export default App;
