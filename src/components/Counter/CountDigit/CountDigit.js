import React from 'react';
import './CountDigit.css'


const CountDigit = (props) => {
    const {hour, min, sec, milSec} = props
    return (
        <div className="countDigit">
            <h2><span>
            {hour<10?'0'+ hour:hour}
            {min<10?'0'+ min:min}
            {sec<10?'0'+ sec:sec}
            {milSec<10?'0'+ milSec:milSec}
            </span></h2>
        </div>
    );
};

export default CountDigit;