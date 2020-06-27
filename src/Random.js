import React from 'react';
import './App.css';


function Random(props) {

    const randomPlus = () => {
        props.setRandomCount(props.randomCount + Math.floor(Math.random() * 10)+ 1)


    };
    const randomMinus = () => {
        props.setRandomCount(props.randomCount - Math.floor(Math.random() * 10) + 1)
    };



    return (
        <div className="h2">
            <h1>Random</h1>
            <button type="button" className="btn btn-success mr-2" onClick={randomPlus}>Random +</button>
            {props.randomCount}
            <button type="button" className="btn btn-danger" onClick={randomMinus}>Random -</button>
        </div>
    );
}

export default Random;
