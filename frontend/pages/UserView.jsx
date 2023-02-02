import React, { useEffect, useState } from 'react';
const { DateTime } = require("luxon");
import { getWorklogs } from '../api/worklogs'
export default function UserView() {
    const [worklogs, setWorklogs] = useState(1);
    // useEffect(() => {
    //     getWorklogs().then(data => {
    //         setWorklogs(data)
    //         console.log(data)
    //     })
    // }, [])
    
    const worklogTime = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);
    return (
        <div className="center-objects">
            <div id='form-container'>
                <h1>Log your time.</h1>
                <div id="worklog-card">
                    <input id="worklog-input" type="text" placeholder="My little worklog..." maxLength="20"></input>
                    <span>{worklogTime}</span>
                </div>
                <div id="worklog-submit">Sweet as!</div>
            </div>
            
            
        </div>
    )
}