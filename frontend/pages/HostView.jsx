import React, {useState, useEffect, useRef} from 'react'
import TimeBlock from '../components/timeblock';
import WorkBlock from '../components/workBlock'
import QRCode from "react-qr-code";
const { DateTime } = require("luxon");

export default function HostView() {

    const blocks = ()=>{
        let  blockArray = [];
        for(let hour = 0; hour < 24; hour++) {
            for(let minute = 0; minute < 60; minute+=15) {
                blockArray.push({ title: hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0'),
                minutes: hour*60 + minute
             });
            }
        }
        return blockArray;
    }

    
    const [time, setTime] = useState(1); // in minutes (1 em = 1 minute)
    const dateString = DateTime.now().toFormat("EEE dd");
  

    useEffect(() => {
        const interval = setInterval(() => {
            var now = new Date(),
            then = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                0,0,0),
            diff = now.getTime() - then.getTime(); 

            // console.log(diff/60000+' mins');
            setTime(diff/60000); // change to minutes

            let width = window.innerWidth;
            document.getElementById('dayview-container').scrollTop = diff/6000;
        }, 1000);
        return () => clearInterval(interval);
      }, []);





    const [worklogs, setWorklogs] = useState([
        {title: "Test 1", minutes: 1290}, 
        {title: "Another one", minutes: 1305},
        {title: "Active one", minutes: 1320} // 22:00
    ])


    const link = "testhhey";
    
    return (
        <>
            <div id="qr-container">
                <span id="title">Scan me to add a worklog!</span>
                <div id='qr-code'>
                    <QRCode
                    size={256}
                    style={{ maxHeight: "100%", maxWidth: "100%", width: "100%"}}
                    fgColor="#FFFFFF"
                    bgColor="none"
                    value={link}
                    viewBox={`0 0 256 256`}
                    />
                </div>
                
            </div>
            <div id="scroll-container">
                <div id="dayview-container" >
                    <div id="time-marker"  style={{top: time+'rem'}}></div>;
                    <div id="worklogs-container">{worklogs.map((worklog, i) => <WorkBlock key={i} minutes={worklog.minutes} title={worklog.title} />)}</div>
                    {blocks().map((value, i) => <TimeBlock title={value.title} minutes={value.minutes} key={i}/>)}
                </div>
            </div>
            <div id="watch-container">
                <div className="circle"></div>
                <span id="watch-date">{dateString}</span>
            </div>
        </>
    )
}