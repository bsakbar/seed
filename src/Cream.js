/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function Cream() {
  const[isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Cream.mp3'));

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

    const svgElement = document.querySelector('#cream_hover');
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
    <g id="Cream"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <path class="cls-11" style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="cream_hover" d="M555.75,451.43c-.93,0-1.68-.75-1.68-1.68,0-4.11-3.33-7.43-7.43-7.43-.03,0-.07,0-.1,0-.91-.13-1.71-.31-2.4-.51-9.91-2.99-2.07-9.05-2.07-9.05,0,0-7.83-1.92-7.83,6.07,0,1.94-1.57,3.5-3.5,3.5h-.53c-2.72,0-4.92,2.2-4.92,4.92v1.08c0,1.72-1.4,3.12-3.12,3.12-2.1,0-3.8,1.68-3.86,3.77h0v.09s0,0,0,0h0l.03,4.06,9.6,22.96h21.81l9.6-22.95.11-4.17c0-1.96-1.73-3.77-3.69-3.77Z" />
      <path class="cls-10" d="M563.38,459.35h-4.08l-1.85,4.52h5.49c1.15,0,2.09.94,2.09,2.09s-.94,2.09-2.09,2.09h-7.24l-1.92,4.52h9.59c3.41,0,6.17-2.76,6.17-6.17v-.88c0-3.41-2.76-6.17-6.17-6.17Z" />
      <polygon class="cls-5" points="549.74 482.31 527.93 482.31 518.33 459.35 518.29 455.2 559.44 455.2 559.33 459.37 549.74 482.31" />
      <line class="cls-3" x1="559.3" y1="459.35" x2="518.33" y2="459.35" />
      <line class="cls-3" x1="552.32" y1="476.15" x2="525" y2="476.15" />
    </g>
  )

}

export default Cream;
