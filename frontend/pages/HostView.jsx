import React, {useState, useEffect} from 'react'
import TimeBlock from '../components/timeblock';
import WorkBlock from '../components/workBlock'

export default function HostView() {

    const blocks = ()=>{
        let  blockArray = [];
        for(let hour = 0; hour < 24; hour++) {
            for(let minute = 0; minute < 60; minute+=15) {
                blockArray.push(hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0'));
            }
        }
        return blockArray;
    }

    
    const [time, setTime] = useState(1);
  

    useEffect(() => {
        const interval = setInterval(() => {
            var now = new Date(),
            then = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                0,0,0),
            diff = now.getTime() - then.getTime(); // difference in milliseconds
            console.log(diff);
            setTime(diff/15311 -3000);
        }, 1000);
        return () => clearInterval(interval);
      }, []);





    const [worklogs, setWorklogs] = useState([
        {title: "Test 1", time: 65406352}, 
        {title: "Another one", time: 66306352},
        {title: "Active one", time: 67206352}
    ])

     
    

    return (
        <div id="scroll-container">
            
            <div id="dayview-container" style={{transform: `rotateX(62deg) rotateZ(330deg) translateX(308px) translateY(${time}px) translateZ(2500px)`}}>
                <div id="time-marker" style={{top: (time+200)+"px"}}></div>
                <div id="worklogs-container">{worklogs.map((worklog, i) => <WorkBlock key={i} time={worklog.time} title={worklog.title} />)}</div>
                {blocks().map((value, i) => <TimeBlock time={value} key={i}/>)}
            </div>
        </div>
    )
}