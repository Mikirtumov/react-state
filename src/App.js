import React, { useState } from 'react';
import './App.css';
import LeftHand from "./LeftHand";
import RightHand from "./RightHand";
import StepConfig from "./StepConfig";
import Random from "./Random";

function App() {

    const [count, setCount] = useState(10);
    const [step, stepCount] = useState(2);
    const [randomCount, setRandomCount] = useState(1)


    const handler = (newValue) => setCount(newValue);

    const onStepChange = (newValue) => stepCount(newValue);

    const randomClick = (newValeu) => setRandomCount(newValeu);

    return (
        <div className="App">
            <LeftHand changeCount={handler} count={count} step={step} />
            <RightHand count={count} />
            <StepConfig onStepChange={onStepChange} />
            <Random randomClick={randomClick} randomCount={randomCount} />
        </div>
    );
}

export default App;
