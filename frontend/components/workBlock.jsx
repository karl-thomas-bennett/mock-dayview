import React from 'react'
export default function WorkBlock({minutes, title}) {
    return (
        <div className="work-block-container"  style={{top: minutes+'rem'}}>
            <div className="work-block" >
                {title}
            </div>
        </div>
    )
}