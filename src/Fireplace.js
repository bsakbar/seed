/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function Fireplace() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Fire.mp3'));

  useEffect(() => {
    const handleClick = () => {
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    };

    const svgElement = document.querySelector('#fireplace_hover');
    if (svgElement) {
      svgElement.addEventListener('click', handleClick);
    }

    return () => {
      if (svgElement) {
        svgElement.removeEventListener('click', handleClick);
      }
    };
  }, [audio, isPlaying]);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <g id="Fireplace"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <path class="cls-10" d="M815.01,511.93v25.27s-29.76.18-29.61.07c3.4-2.57,6.06-6.75,6.53-10.95.56-4.92-1.42-10.06-5.13-13.34.3,1.81.6,3.7.02,5.44s-2.34,3.24-4.13,2.85c-1.87-.41-2.83-2.61-2.67-4.52.16-1.9,1.11-3.63,1.75-5.43,1.52-4.28.41-7.07-1.6-11.14s-5.72-7.27-10.04-8.66c2.27,6.22,2.19,11.42-1.54,16.9-2.44,3.59-5.97,6.38-8.16,10.13-3.24,5.57-2.74,13.33.9,18.66.09.13-24.82.03-24.82.03v-25.31c0-13.93,11.29-25.22,25.22-25.22h28.07c13.93,0,25.21,11.29,25.21,25.22Z" />
      <path class="cls-11" style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="fireplace_hover" d="M815.01,511.93v25.27s-29.76.18-29.61.07c3.4-2.57,6.06-6.75,6.53-10.95.56-4.92-1.42-10.06-5.13-13.34.3,1.81.6,3.7.02,5.44s-2.34,3.24-4.13,2.85c-1.87-.41-2.83-2.61-2.67-4.52.16-1.9,1.11-3.63,1.75-5.43,1.52-4.28.41-7.07-1.6-11.14s-5.72-7.27-10.04-8.66c2.27,6.22,2.19,11.42-1.54,16.9-2.44,3.59-5.97,6.38-8.16,10.13-3.24,5.57-2.74,13.33.9,18.66.09.13-24.82.03-24.82.03v-25.31c0-13.93,11.29-25.22,25.22-25.22h28.07c13.93,0,25.21,11.29,25.21,25.22Z" />
    </g>
  )
}


export default Fireplace;
