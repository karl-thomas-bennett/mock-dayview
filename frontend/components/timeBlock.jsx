import React from 'react'
export default function TimeBlock({title, minutes}) {
    return (
    <div className="time-block" style={{top: minutes+'rem'}}>
        {title}
    </div>)
}