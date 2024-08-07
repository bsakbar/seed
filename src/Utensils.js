/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

function Utensils() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Stirring.mp3'));

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

    const svgElement = document.querySelector('#utensils_hover');
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
    <g id="Utensils"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >

      <path class="cls-10" d="M519.6,325.36c0-4.52-3.73-8.18-8.28-8.05-4.26.12-7.79,3.73-7.82,7.99-.01,1.64.47,3.17,1.31,4.45,2.85,4.36,4.66,9.33,4.66,14.54v18.52c0,1.15.94,2.09,2.09,2.09h0c1.15,0,2.09-.94,2.09-2.09v-18.59c0-5.18,1.8-10.12,4.64-14.45.83-1.26,1.32-2.78,1.32-4.41Z" />
      <path class="cls-5" d="M574.7,325.36c0-4.52-3.73-8.18-8.28-8.05-4.26.12-7.79,3.73-7.82,7.99-.01,1.64.47,3.17,1.31,4.45,2.85,4.36,4.66,9.33,4.66,14.54v18.52c0,1.15.94,2.09,2.09,2.09h0c1.15,0,2.09-.94,2.09-2.09v-18.59c0-5.18,1.8-10.12,4.64-14.45.83-1.26,1.32-2.78,1.32-4.41Z" />
      <path class="cls-5" d="M549.37,323.34c0-5.69-4.72-10.28-10.47-10.06-5.28.2-9.6,4.64-9.68,9.92-.03,2.07.57,4,1.61,5.62,4.41,6.81,6.37,14.92,6.37,23.04v10.97c0,1.15.94,2.09,2.09,2.09h0c1.15,0,2.09-.94,2.09-2.09v-9.8c0-8.56,1.99-17.11,6.48-24.39.95-1.54,1.5-3.35,1.5-5.28Z" />
      <circle class="cls-5" cx="566.65" cy="325.56" r="5.2" />
      <g style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="utensils_hover">
        <path class="cls-11" d="M549.37,323.34c0-5.69-4.72-10.28-10.47-10.06-5.28.2-9.6,4.64-9.68,9.92-.03,2.07.57,4,1.61,5.62,4.41,6.81,6.37,14.92,6.37,23.04v10.97c0,1.15.94,2.09,2.09,2.09h0c1.15,0,2.09-.94,2.09-2.09v-9.8c0-8.56,1.99-17.11,6.48-24.39.95-1.54,1.5-3.35,1.5-5.28Z" />
        <path class="cls-11" d="M519.6,325.36c0-4.52-3.73-8.18-8.28-8.05-4.26.12-7.79,3.73-7.82,7.99-.01,1.64.47,3.17,1.31,4.45,2.85,4.36,4.66,9.33,4.66,14.54v18.52c0,1.15.94,2.09,2.09,2.09h0c1.15,0,2.09-.94,2.09-2.09v-18.59c0-5.18,1.8-10.12,4.64-14.45.83-1.26,1.32-2.78,1.32-4.41Z" />
        <path class="cls-11" d="M574.7,325.36c0-4.52-3.73-8.18-8.28-8.05-4.26.12-7.79,3.73-7.82,7.99-.01,1.64.47,3.17,1.31,4.45,2.85,4.36,4.66,9.33,4.66,14.54v18.52c0,1.15.94,2.09,2.09,2.09h0c1.15,0,2.09-.94,2.09-2.09v-18.59c0-5.18,1.8-10.12,4.64-14.45.83-1.26,1.32-2.78,1.32-4.41Z" />
      </g>
    </g>

  )
}


export default Utensils;
