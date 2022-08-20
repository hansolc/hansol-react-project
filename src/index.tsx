import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from './contact';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
    
} from 'react-router-dom';

const rootElement = document.getElementById('root');
if(!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={
                <Navigate to="/" replace />
            }></Route>
        </Routes>
    </BrowserRouter>
)