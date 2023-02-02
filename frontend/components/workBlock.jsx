import React from 'react'
import { DateTime } from "luxon";

export default function WorkBlock({minutes, title}) {

    const time = DateTime.fromSeconds(minutes*60).minus({hours: 12}).toFormat("HH:mm");
    return (
        <div className="work-block-container"  style={{top: minutes+'rem'}}>
            <div className="work-block" >
                <span class="work-block-title">{title}</span>
                <span class="work-block-time">{time}</span>
                <span class="work-block-duration">15m</span>
            </div>
        </div>
    )
}