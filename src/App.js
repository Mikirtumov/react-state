import React, {useState} from 'react';
import './App.css';
import LeftHand from "./LeftHand";
import RightHand from "./RightHand";

function App() {

    const [count, setCount] = useState(10);

    const clickerPlus = () => {
        setCount(count + 1)
    }
    const clickerMinus = () => {
        setCount(count - 1)
    }

    return (
        <div className="App">
            <LeftHand plus={clickerPlus} minus={clickerMinus}/>
            <RightHand counter={count}/>
        </div>
    );
}

export default App;
