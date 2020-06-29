import React from 'react';
import './App.css';

function LeftHand(props) {

    const clickerPlus = () => props.changeCount(props.count + props.step)
    const clickerMinus = () => props.changeCount(props.count - props.step)

    return (
        <div className="App">
            <h1>Hook useState</h1>
            <span><button type="button" className="btn btn-success" onClick={clickerPlus}>PLUS</button> </span>
                <button type="button" className="btn btn-danger" onClick={clickerMinus}>MINUS</button>



        </div>
    );
}

export default LeftHand;
