import React, { useState } from 'react';
import { postWorklog } from '../api/worklogs';
const { DateTime } = require("luxon");
const millisecondsToMinutes = milliseconds => {
    return milliseconds/60000
}
const submit = (title) => {
    const minutes = Math.floor(millisecondsToMinutes(DateTime.now().diff(DateTime.now().startOf('day')).toMillis())/minutesInInterval)*minutesInInterval
    postWorklog({title, minutes})
}
const minutesInInterval = 15;
export default function UserView() {
    
    const worklogTime = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);
    const [title, setTitle] = useState("");
    
    return (
        <div className="center-objects">
            <form id='form-container' onSubmit={() => {submit(title)}}>
                <label htmlFor='worklog-input'>Log your time.</label>
                
                <div id="worklog-card">
                    <input id="worklog-input" type="text" placeholder="My little worklog..." maxLength="20" value={title} onChange={e => {setTitle(e.target.value)}}/>
                    <span>{worklogTime} - 15m</span>
                </div>
                
                <button id="worklog-submit" type='submit'>Sweet as!</button>
            </form>
            
            
        </div>
    )
}