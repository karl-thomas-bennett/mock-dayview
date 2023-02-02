import React from 'react'
import TimeBlock from '../components/timeblock';

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

    return (
    <div id="dayview-container">
        {blocks().map((value, i) => <TimeBlock time={value} key={i}/>)}
    </div>)
}