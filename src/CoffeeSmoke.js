/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';


function CoffeeSmoke() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio('/sounds/Pour Coffee Short.mp3'));
    
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
  
      const svgElement = document.querySelector('#smoke_hover');
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
        <g id="Coffee_smoke"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >
            <path class="cls-11" id="smoke_hover" style={{ display: isHovered || isPlaying ? 'block' : 'none' }} d="M874.19,214.89c-.69-1.37-1.65-2.59-2.72-3.68l-.07-.07c-2.87-2.79-4.66-6.7-4.66-11.03,0-5.25,5.89-11.96,5.89-11.96,0,0-9.16-.73-11.71-.08,0,0-11.06,2.92-11.06,13.53,0,1.07.12,2.11.35,3.11l-.02.18c.37,1.61.49,3.32.31,5.08-.72,7.04-6.35,12.79-13.37,13.64-1.01.12-2.01.15-2.98.08l-.49.06c-.27-.01-1.51-.02-1.78-.02-7.25,0-13.33,5.02-14.96,11.78l-.57,3.04c-.53,2.84-.35,5.82.78,8.48.13.31.27.62.42.92.69,1.37,1.65,2.59,2.72,3.68l.07.07c2.87,2.79,4.66,6.7,4.66,11.03,0,8.01-8.11,13.9-8.11,13.9-2.37,1.86-3.88,4.75-3.88,7.99v10.17h-28.97v16.08c0,10.15,2.4,20.16,7.01,29.21l8.5,16.71h35.9l8.5-16.71c4.61-9.05,7.01-19.06,7.01-29.21v-16.08h-27.79v-10.17c0-4.75,3.25-8.73,7.65-9.85h.03c6.29-1.29,11.03-6.86,11.03-13.53,0-1.07-.12-2.11-.35-3.11l.02-.18c-.54-2.33-.54-4.86.11-7.47,1.65-6.52,7.59-10.98,14.3-11.29,8.14-.38,19.87-4.21,19.87-17.31,0-2.51-.6-4.89-1.65-6.99Z" />
            <path class="cls-5" d="M835.45,356.79h-35.9l-8.5-16.71c-4.61-9.05-7.01-19.06-7.01-29.21v-16.08h66.92v16.08c0,10.15-2.4,20.16-7.01,29.21l-8.5,16.71Z" />
            <path class="cls-10" d="M860.99,307.18h-10.03v6.43h9.4c1.64,0,2.97,1.33,2.97,2.97s-1.33,2.98-2.97,2.98h-9.83l-1.37,6.43h11.83c4.85,0,8.78-3.93,8.78-8.78v-1.26c0-4.85-3.93-8.78-8.78-8.78Z" />
            <line class="cls-7" x1="850.96" y1="307.18" x2="784.04" y2="307.18" />
        </g>
    )
}




export default CoffeeSmoke;
