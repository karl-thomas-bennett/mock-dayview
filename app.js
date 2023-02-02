import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './frontend/Main';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    ( 
        <Router>
            <Main/>
        </Router>
    )
);