import React, { useEffect, useState } from 'react'
import { getWorklogs } from '../api/worklogs'
export default function UserView() {
    const [worklogs, setWorklogs] = useState(1)
    useEffect(() => {
        getWorklogs().then(data => {
            setWorklogs(data)
            console.log(data)
        })
    }, [])
    
    return (
        <>
            <div>UserView</div>
            <div style={{color: "white"}}>{worklogs[0]?.name}</div>
        </>
    )
}