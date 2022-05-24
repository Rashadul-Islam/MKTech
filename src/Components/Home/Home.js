import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar/Sidebar';
import Progress from '../Progress/Progress';

const Home = ({setSlide,slide}) => {
    return (
        <div className='page-body'>
            <h1 className='page-head'>PAGE 1</h1>
            <div className='content-div'>
                <div className='content-left'>
                    <div className='logo'>
                        <p className='logo-text'>PL</p>
                    </div>
                    <h1 className='tag-line'>We Take Solution to the <br/><span className='tag-highlight'>NEXT LEVEL</span></h1>
                    <p className='learn-text'>Learn more about us <span className='right-arrow'><FontAwesomeIcon icon={faArrowRight} /></span></p>
                    <div className='progress-area'>
                       <Progress slide={slide} setSlide={setSlide}/>
                    </div>
                </div>
                <div className='content-right'>
                   <Sidebar/>
                </div>
            </div>
        </div>
    );
};

export default Home;