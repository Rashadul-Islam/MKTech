import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar-body'>
            <div className='link-container'>
                <ul>
                    <li>Home</li>
                    <li>What we do</li>
                    <li>Our partners</li>
                    <li>Portfolio</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;