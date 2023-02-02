import React from 'react'
export default function WorkBlock({time, title}) {
    return (
        <div class="work-block-container" style={{top: (time/15311 - 2785)+"px"}}>
            <div class="work-block" >
                {title}
            </div>
        </div>
    )
}