import React from 'react';
import CountDigit from './CountDigit/CountDigit';

const Counter = (props) => {

    return (
        <div className="d-flex justify-content-around">
           <CountDigit hour={props.time.hour} />
           <CountDigit min={props.time.min} />
           <CountDigit sec={props.time.sec} />
           <CountDigit milSec={props.time.mili}/>
        </div>
    );
};

export default Counter;