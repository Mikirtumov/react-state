import React from 'react';
import './App.css';

function StepConfig(props) {

    return (
        <div className="h2">
            <input placeholder="counter" onChange={(e) => props.onStepChange(+e.target.value)}/>
        </div>
    );
}

export default StepConfig;
