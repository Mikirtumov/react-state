import React from 'react';
import './App.css';

function LeftHand(props) {

    const clickerPlus = () => {
        props.changeCount(props.counter + props.step);
    }
    const clickerMinus = () => {
        props.changeCount(props.counter - props.step);
    }

    return (
        <div className="App">
            <h1>Hook useState</h1>

            <button type="button" className="btn btn-danger mr-2" onClick={clickerPlus}>PLUS</button>
            <button type="button" className="btn btn-success" onClick={clickerMinus}>MINUS</button>

        </div>
    );
}

export default LeftHand;
