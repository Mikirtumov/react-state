import React from 'react';
import './App.css';

function TimesTen(props) {

    const tenPlus = () => {
        props.setTimesTen(props.timesTen + 10)


    };
    const tenMinus = () => {
        props.setTimesTen(props.timesTen - 10)
    };


    return (
        <div className="h2">

            <h1>timesTen</h1>

            <button type="button" className="btn btn-success" onClick={tenPlus}>+ 10</button>
            <span> {props.timesTen}  </span>
            <button type="button" className="btn btn-danger" onClick={tenMinus}>- 10</button>
        </div>
    );
}

export default TimesTen;
