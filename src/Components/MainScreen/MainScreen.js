import React, { useState } from 'react';
import Home from '../Home/Home';
import WhatWeDo from '../WhatWeDo/WhatWeDo';

const MainScreen = () => {
    const [slide, setSlide]=useState(1)

    return (
        <div>
            {
                slide===1 && <Home slide={slide} setSlide={setSlide}/>
            }
            {
                slide===2 && <WhatWeDo slide={slide} setSlide={setSlide}/>
            }
        </div>
    );
};

export default MainScreen;