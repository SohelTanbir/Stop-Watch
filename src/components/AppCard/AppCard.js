import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import Title from '../Title/Title';

const AppCard = () => {
    const [activeBtn, setActiveBtn] = useState({
        start: true,
        reset: false,
        puse: true
    });
    const [time, setTime] = useState({
        hour:0,
        min:0,
        sec:0,
        mili:0
      }) 

    let output = null;
    let puseBtn = null;

    const startHandler = () => {
        setInterval(()=>{
            getMiliSecond();
        },10)
     
        const newstate = { ...activeBtn, start: false, push: true }
        setActiveBtn(newstate)
    }

    const resetHandler = () => {
        const newstate = { ...activeBtn, start: true }
        setActiveBtn(newstate);
        setTime({ })
    }
    const handlePush = (clear)=>{
        clearInterval(clear)
    }
   if(activeBtn.start === false){
         puseBtn = <div className="col">
        <button onClick={()=> handlePush()} className="btn btn-info mt-5 mb-2">Puse Count</button>
    </div>
   }
    if (activeBtn.start) {
       
        output = <div className="col">
            <button onClick={() => startHandler()} className="btn btn-success mt-5 mb-2">Start Count</button>
        </div>
    }
    else if (activeBtn.reset === false) {
        output = <div className="col">
            <button onClick={() => resetHandler()} className="btn btn-danger mt-5 mb-2">Rest Count</button>
        </div>
    }


    const getMiliSecond = ()=>{
        let newTime = {...time, mili:time.mili++}
        setTime(newTime);
          if(time.mili === 100){
            newTime = {...time, mili:time.mili = 0}
            newTime = {...time, mili:time.mili = 0, sec:time.sec++}
            setTime(newTime);
          }
          else if(time.sec === 60){
            newTime = {...time, mili:time.mili = 0, sec:time.sec = 0, min:time.min++}
            setTime(newTime);
          }
          else if(time.min === 60){
            newTime = {...time, mili:time.mili = 0, sec:time.sec = 0, min:time.min = 0, hour:time.hour++}
            setTime(newTime);
          }
          
    }   

    return (
        <div className="row">
            <div className="col-md-5 mx-auto p-5">
                <div className="shadow p-4 bg-light text-center">
                    <Title />
                    <Counter time={time}/>
                    <div className="row mt-5 mb-3">
                      {puseBtn}
                      {output}
                    </div>
                </div>
         </div>  
     </div>
    );
};

export default AppCard;