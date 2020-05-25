import React from 'react';
import './App.css';

function LeftHand(props) {

    return (
        <div className="App">
            <h1>Hook useState</h1>

            <button type="button" className="btn btn-danger mr-2" onClick={props.plus}>PLUS</button>
            <button type="button" className="btn btn-success" onClick={props.minus}>MINUS</button>

        </div>
    );
}

export default LeftHand;
