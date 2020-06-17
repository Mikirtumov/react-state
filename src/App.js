import React, { useState } from 'react';
import './App.css';
import LeftHand from "./LeftHand";
import RightHand from "./RightHand";
import StepConfig from "./StepConfig";

function App() {

    const [count, setCount] = useState(10);
    const [step, stepCount] = useState(2);


    const handler = (newValue) => setCount(newValue);

    const onStepChange = (newValue) => stepCount(newValue);

    return (
        <div className="App">
            <LeftHand changeCount={handler} count={count} step={step} />
            <RightHand count={count} />
            <StepConfig onStepChange={onStepChange} />
        </div>
    );
}

export default App;
