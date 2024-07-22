import React from 'react';
import '../Background/Background.css';
import video1 from '../Image/library.mp4';
import image1 from '../Image/image1.jpg';
import image2 from '../Image/photo2.jpg';
import image3 from '../Image/image3.jpg';



const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
        );
    } else if (heroCount === 0) {
        return <img src={image1} className='background fade-in' alt="" />;
    } else if (heroCount === 1) {
        return <img src={image2} className='background fade-in' alt="" />;
    } else if (heroCount === 2) {
        return <img src={image3} className='background fade-in' alt="" />;
    }
    return (
        <div>Background</div>
    
    );
};

export default Background;


