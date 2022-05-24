import React from 'react';
import '../Home/Home.css'
import './WhatWeDo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar/Sidebar';
import Progress from '../Progress/Progress';
import logo from '../../images/logo.png'


const WhatWeDo = ({setSlide,slide}) => {
    return (
        <div className='page-body'>
            <h1 className='page-head'>PAGE 2</h1>
            <div className='two-content-div'>
                <div className='two-content-left'>
                    <div className='logo'>
                        <p className='logo-text'>PL</p>
                    </div>
                    <div className='card-container'>
                         <div className='item'>
                            <img src={logo}  />
                             <p>Digital marketing</p>
                         </div>
                         <div className='item'>
                            <img src={logo}  />
                             <p>Digital marketing</p>
                         </div>
                         <div className='item'>
                            <img src={logo}  />
                             <p>Digital marketing</p>
                         </div>
                         <div className='item'>
                            <img src={logo}  />
                             <p>Digital marketing</p>
                         </div>
                         <div className='item'>
                            <img src={logo}  />
                             <p>Digital marketing</p>
                         </div>
                         <div className='item'>
                            <img src={logo}  />
                             <p>Digital marketing</p>
                         </div>
                         <div className='item'>
                            <img src={logo}  />
                             <p>Digital marketing</p>
                         </div>
                         <div className='item'>
                            <img src={logo}  />
                             <p>Digital marketing</p>
                         </div>
                    </div>
                    <button className='learn-button'>Learn more about us <span className='right-arrow'><FontAwesomeIcon icon={faArrowRight} /></span></button>
                    <div className='two-progress-area'>
                       <Progress slide={slide} setSlide={setSlide}/>
                    </div>
                </div>
                <div className='two-content-right'>
                   <Sidebar/>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;