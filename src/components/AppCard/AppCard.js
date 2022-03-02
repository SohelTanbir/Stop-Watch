import React, { useState } from 'react';
import Counter from '../Counter/Counter';
import Title from '../Title/Title';

const AppCard = () => {
    // create state to identify btn is active or not
    const [activeBtn, setActiveBtn] = useState({
        start: true,
        reset: false,
        puse: false,
        resume:false,
    });
    const [time, setTime] = useState({
        hour:0,
        min:0,
        sec:0,
        mili:0
      }) 
// pause counter
const [pause, setPause] =  useState(0)

    let output = null;
    let puseBtn = null;
    let resumeBtn = null;
    const startHandler = () => {
        const clearId = setInterval(()=>{
            getMiliSecond();
        },10)
        setPause(clearId);

        const newstate = { ...activeBtn, start: false, push: true }
        setActiveBtn(newstate)
    }

    const resetHandler = () => {
        const reset =  window.confirm("Really Do you want to Reset Counter?");
        if(reset){
            clearInterval(pause);
        const newstate = { ...activeBtn, start: true }
        setActiveBtn(newstate);
            setTime({
                hour:0,
                min:0,
                sec:0,
                mili:0
            })
            }
    }
    const handlePush = ()=>{
        clearInterval(pause);
        const newstate = { ...activeBtn, start: false, push: false, resume:true }
        setActiveBtn(newstate)
    }
    const handleResume = ()=>{
        const clearId = setInterval(()=>{
            getMiliSecond();
        },10)
        setPause(clearId);
        const newstate = { ...activeBtn, start: false, push: true, resume:false }
        setActiveBtn(newstate)
    }
   if(activeBtn.start === false && activeBtn.resume == false){
         puseBtn = <div className="col">
        <button onClick={()=> handlePush()} className="btn btn-info mt-5 mb-2 px-4">Pause </button>
    </div>
   }
    if (activeBtn.start) {
        output = <div className="col">
            <button onClick={() => startHandler()} className="btn btn-success mt-5 mb-2">Start Count</button>
        </div>
    }
   if(activeBtn.puse === false && activeBtn.start === false && activeBtn.resume){
    resumeBtn = <div className="col">
        <button onClick={() => handleResume()} className="btn btn-dark mt-5 mb-2">Resume</button>
    </div>
    }
    if (activeBtn.start === false) {
        output = <div className="col">
            <button onClick={() => resetHandler()} className="btn btn-danger mt-5 mb-2 px-4">Reset</button>
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
            <div className="col-md-5  col-sm-8 mx-auto p-5">
                <div className="shadow p-4 bg-light text-center rounded mt-5">
                    <Title />
                    <Counter time={time}/>
                    <div className="row mt-5 mb-3">
                      {puseBtn}
                      {resumeBtn}
                      {output}
                    </div>
                </div>
         </div>  
     </div>
    );
};

export default AppCard;