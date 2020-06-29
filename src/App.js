import React, { useState } from 'react';
import './App.css';
import LeftHand from "./LeftHand";
import RightHand from "./RightHand";
import StepConfig from "./StepConfig";
import Random from "./Random";
import TimesTen from "./TimesTen";

function App() {

    const [count, setCount] = useState(0);
    const [step, stepCount] = useState(0);
    const [randomCount, setRandomCount] = useState(0)
    const [timesTen, setTimesTen] = useState(0)


    const handler = (newValue) => setCount(newValue);

    const onStepChange = (newValue) => stepCount(newValue);

    const reset = () => {
        setTimesTen(0);
        setCount(0);
        setTimesTen(0);
        setRandomCount(0);
    }




    return (
        <div className="App">
            <LeftHand changeCount={handler} count={count} step={step} />
            <RightHand count={count} />
            <StepConfig onStepChange={onStepChange} />
            <Random setRandomCount={setRandomCount} randomCount={randomCount} />
            <TimesTen timesTen={timesTen} setTimesTen={setTimesTen}/>
            <button  type="button" className="btn btn-light" onClick={reset}>Reset</button>
        </div>
    );
}

export default App;
