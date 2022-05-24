import React, { useState } from 'react';
import './Progress.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'

const Progress = ({setSlide, slide}) => {
    const [section, setSection]=useState(slide)
    const handleNext=()=>{
        if(slide<2){
            setSection(section+1);
            setSlide(section+1)
        }
    }
    const handlePrevious=()=>{
        if(slide>=1){
            setSection(section-1);
            setSlide(section-1)
        }
    }
    return (
        <div > 
            {
                section===1 && <div className='bar-body'>
                                    <div className='next-btn' onClick={handleNext}>
                                    <span className='angle'><FontAwesomeIcon icon={faAngleRight} /></span>
                                    </div>
                                    <diV className="bar">
                                        <div className='colored step-1'></div>
                                        <div className='trans'></div>
                                    </diV>
                                </div>
            }
            {
                section===2 && <div className='bar-body'>
                                    <div className='next-area'>
                                        <div className='next-btn'onClick={handlePrevious} >
                                        <span className='angle'><FontAwesomeIcon icon={faAngleLeft} /></span>
                                        </div>
                                        <div className='next-btn' onClick={handleNext}>
                                        <span className='angle'><FontAwesomeIcon icon={faAngleRight} /></span>
                                        </div>
                                    </div>
                                    <diV className="bar">
                                        <div className='colored step-2'></div>
                                        <div className='trans'></div>
                                    </diV>
                                </div>
            }
        </div>
    );
};

export default Progress;