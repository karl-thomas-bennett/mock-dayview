import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HostView from './pages/HostView';
import UserView from './pages/UserView';
export default function Main() {
    return (
        <>
            <div>Main</div>
            <Routes>
                <Route exact path='' element={<HostView/>} />
                <Route path='/user' element={<UserView/>} />
            </Routes>
        </>
    );
}