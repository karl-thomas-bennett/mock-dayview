import React, { useEffect, useState } from 'react';
const { DateTime } = require("luxon");
export default function UserView() {
    
    const worklogTime = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE);
    return (
        <div className="center-objects">
            <form id='form-container'>
                <label htmlFor='worklog-input'>Log your time.</label>
                    <div id="worklog-card">
                        <input id="worklog-input" type="text" placeholder="My little worklog..." maxLength="20" />
                        <span>{worklogTime}</span>
                    </div>
                
                <div id="worklog-submit">Sweet as!</div>
            </form>
            
            
        </div>
    )
}