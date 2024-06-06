/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

function Grinder() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Grinder.mp3'));

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

    const svgElement = document.querySelector('#grinder_hover');
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
    <g
      id="Grinder"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <path class="cls-11" style={{ display: isHovered || isPlaying ? 'block' : 'none' }}
        id="grinder_hover" d="M550.36,199.41l-2.01-9.53h23.86v-5.72h-21.85l2.84-11.84h-15.2l2.84,11.84h-21.65c-1.55,0-3.08-.34-4.47-1.01l-13.74-6.52c-.95-.45-1.96-.61-2.94-.53h-42.56l1.74-7.61c1.31-5.71-3.03-11.16-8.89-11.16s-10.2,5.45-8.89,11.16l1.74,7.61h-6.57c-1.58,0-2.86,1.28-2.86,2.86s1.28,2.86,2.86,2.86h61.49c1.55,0,3.08.34,4.47,1.01l13.74,6.52c.95.45,1.96.61,2.94.53h25.95l-2.35,9.53h-47.87v21.27h6.31l18.37,77.84h55.53l18.37-77.84h6.83v-21.27h-48.03Z" />
      <polygon class="cls-5" points="591.57 220.68 573.2 298.52 517.66 298.52 499.3 220.68 591.57 220.68" />
      <polygon class="cls-10" points="543.2 189.91 548.36 189.91 550.36 199.41 540.86 199.41 543.2 189.91" />
      <path class="cls-7" d="M492.99,237.07c7.53,0,7.53,6,15.06,6s7.53-6,15.06-6,7.53,6,15.05,6,7.53-6,15.06-6,7.53,6,15.06,6,7.53-6,15.06-6,7.53,6,15.06,6" />
      <path class="cls-5" d="M572.22,184.16h-53.02c-1.55,0-3.08-.34-4.47-1.01l-13.74-6.52c-.95-.45-1.96-.61-2.94-.53h-63.43c-1.58,0-2.86,1.28-2.86,2.86h0c0,1.58,1.28,2.86,2.86,2.86h61.49c1.55,0,3.08.34,4.47,1.01l13.74,6.52c.95.45,1.96.61,2.94.53h54.95v-5.72Z" />
      <polygon class="cls-5" points="538.01 172.33 553.21 172.33 550.36 184.19 540.86 184.19 538.01 172.33" />
      <path class="cls-5" d="M448.34,157.33h0c5.86,0,10.2,5.45,8.89,11.16l-1.74,7.59h-14.31l-1.74-7.59c-1.31-5.71,3.03-11.16,8.89-11.16Z" />
      <path class="cls-10" d="M519.09,247.74c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M532.3,247.93c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M545.5,247.93c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M558.7,247.93c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M571.71,248.12c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M512.62,254.42c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M525.83,254.61c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M539.03,254.61c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M552.23,254.61c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M565.24,254.8c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M578.13,254.8c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M519.09,261.1c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M532.3,261.29c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M545.5,261.29c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M558.7,261.29c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M571.71,261.48c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M525.83,267.97c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M539.03,267.97c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M552.23,267.97c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M565.24,268.16c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M519.09,273.63c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M532.3,273.82c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M545.5,273.82c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M558.7,273.82c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M571.71,274.01c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M525.83,280.5c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M539.03,280.5c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M552.23,280.5c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M565.24,280.69c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M519.09,287.21c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M532.3,287.4c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M545.5,287.4c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M558.7,287.4c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M571.71,287.58c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M525.83,294.08c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M539.03,294.08c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M552.23,294.08c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <path class="cls-10" d="M565.24,294.27c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
      <rect class="cls-10" x="492.99" y="199.41" width="105.41" height="21.27" />
    </g>

  )
}

export default Grinder;
