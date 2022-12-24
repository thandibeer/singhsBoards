import { Carousel } from "react-bootstrap";
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import s3 from '../images/s3.jpg';
import s4 from '../images/s4.jpg';
import s5 from '../images/s5.jpg';
import s6 from '../images/s6.jpg';

import ReactPlayer from 'react-player';
import { useState } from "react";

let images = [s1,s2,s3,s4,s5,s6];

const VideoSlider = () => {

    return (<div className='player-wrapper'>
        <Carousel>
            
            {images.map((img,index)=>{
                return(<Carousel.Item key={index}>
                    <img src={img} alt=""  style={{ width: '100%', height: '85vh', backgroundColor: 'black',objectFit:'cover' }}  />
                </Carousel.Item>)
            })}
        </Carousel>
        
    </div>);
}

export default VideoSlider;