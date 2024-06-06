import React, { useState, useEffect } from 'react';


function Clock() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Clock.mp3'));

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

    const svgElement = document.querySelector('#clock_hover');
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
    <g id="Clock"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <circle class="cls-11" style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="clock_hover" cx="673.62" cy="344.4" r="18.61" />
      <circle class="cls-7" cx="673.62" cy="344.4" r="18.61" />
      <path class="cls-5" d="M673.62,358.87c-7.98,0-14.47-6.49-14.47-14.47s6.49-14.47,14.47-14.47,14.47,6.49,14.47,14.47-6.49,14.47-14.47,14.47Z" />
      <polyline class="cls-7" points="673.62 337.83 673.62 344.4 679.02 352.23" />
    </g>
  )
}

export default Clock;
