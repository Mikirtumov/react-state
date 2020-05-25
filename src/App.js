import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(10);

  const clickerPlus = () => {
    setCount (count + 1)
  }

  return (
    <div className="App">
  <button type="button" className="btn btn-danger" onClick={clickerPlus}>PLUS</button>
      <hr/>
      {count}
    </div>
  );
}

export default App;
