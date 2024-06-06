/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

function Stairs() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Walking.mp3'));

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

    const svgElement = document.querySelector('#stairs_hover');
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
    <g id="Stairs"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}

    >
      <polygon class="cls-11" style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="stairs_hover" points="600.77 316.31 632.37 316.31 681.71 445.43 649.85 445.43 600.77 316.31" />
      <polygon class="cls-5" points="600.77 316.31 632.37 316.31 681.71 445.43 649.85 445.43 600.77 316.31" />
      <polygon class="cls-10" points="660.83 466.86 598.91 303.96 595.51 305.19 657.5 466.95 660.83 466.86" />
      <polygon class="cls-10" points="691.81 466.86 629.89 303.96 626.49 305.19 688.48 466.95 691.81 466.86" />
      <line class="cls-5" x1="640.64" y1="337.83" x2="611.79" y2="337.83" />
      <line class="cls-5" x1="656.95" y1="380.87" x2="628.05" y2="380.87" />
      <line class="cls-5" x1="619.97" y1="359.35" x2="648.91" y2="359.35" />
      <line class="cls-5" x1="636.33" y1="402.39" x2="665.28" y2="402.39" />
      <line class="cls-5" x1="644.51" y1="423.91" x2="673.63" y2="423.91" />
    </g>

  )
}


export default Stairs;
