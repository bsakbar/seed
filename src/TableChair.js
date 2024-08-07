/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

function TableChair() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Pushing pulling chair Table .mp3'));

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

    const svgElement = document.querySelector('#table_hover');
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
    <g id="Table_Chair"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <path class="cls-10" d="M615.68,450.79c-6.1-1.71-12.43,1.85-14.13,7.95l-11.46,40.93h-9.94v6.99h36.59v-6.99h-2.83l9.73-34.75c1.71-6.1-1.85-12.43-7.95-14.13Z" />
      <line class="cls-5" x1="589.45" y1="506.66" x2="574.77" y2="537.75" />
      <line class="cls-5" x1="606.06" y1="506.66" x2="620.74" y2="537.75" />
      <path class="cls-10" d="M505.41,482.31h68.33c3.06,0,5.55,2.49,5.55,5.55h-79.42c0-3.06,2.49-5.55,5.55-5.55Z" />
      <path class="cls-5" d="M525,487.86h27.62c0,4.68-3.8,8.48-8.48,8.48h-10.66c-4.68,0-8.48-3.8-8.48-8.48h0Z" />
      <line class="cls-5" x1="538.81" y1="496.34" x2="538.81" y2="532.34" />
      <path class="cls-5" d="M523.55,535.95c-.07.34-.35,1.43-.35,1.79h0s31.21,0,31.21,0h0c0-2.89-2.35-5.24-5.24-5.24h-16.15s-4.65.23-4.65.23c-2.08.1-3.93,1.34-4.82,3.22h0Z" />
      <g style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="table_hover">
        <path class="cls-11" d="M523.55,535.95c-.07.34-.35,1.43-.35,1.79h0s31.21,0,31.21,0h0c0-2.89-2.35-5.24-5.24-5.24h-16.15s-4.65.23-4.65.23c-2.08.1-3.93,1.34-4.82,3.22h0Z" />
        <path class="cls-11" d="M525,487.86h27.62c0,4.68-3.8,8.48-8.48,8.48h-10.66c-4.68,0-8.48-3.8-8.48-8.48h0Z" />
        <path class="cls-11" d="M615.68,450.79c-6.1-1.71-12.43,1.85-14.13,7.95l-11.46,40.93h-9.94v6.99h36.59v-6.99h-2.83l9.73-34.75c1.71-6.1-1.85-12.43-7.95-14.13Z" />
      </g>
      <rect class="cls-5" x="580.14" y="499.67" width="36.59" height="6.99" transform="translate(1196.87 1006.33) rotate(-180)" />
    </g>


  )
}


export default TableChair;
