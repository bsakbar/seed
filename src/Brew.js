import React, { useState, useEffect } from 'react';

function Brew() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Brew.mp3'));

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

    const svgElement = document.querySelector('#brew_hover');
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
      id="Brew"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <polygon class="cls-11" style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="brew_hover" points="498.44 379.16 498.44 395.42 505.53 395.42 505.53 397.26 496.73 400.1 431.82 400.1 431.82 406.54 497.08 406.54 505.53 409.26 505.53 410.4 510.92 410.4 510.92 415.48 518.54 415.48 518.54 420.56 561.08 420.56 561.08 415.48 567.74 415.48 567.74 410.4 573.14 410.4 573.14 395.42 580.23 395.42 580.23 379.16 498.44 379.16" />
      <path class="cls-10" d="M411.57,410.81h-31.5v-14.98h31.5c2.08,0,4.15.25,6.17.76l14.08,3.51v6.44l-14.08,3.51c-2.02.5-4.09.76-6.17.76Z" />
      <rect class="cls-10" x="505.53" y="395.42" width="67.61" height="14.98" />
      <rect class="cls-5" x="510.92" y="410.4" width="56.82" height="5.08" />
      <rect class="cls-5" x="518.54" y="415.48" width="42.54" height="5.08" />
      <polygon class="cls-5" points="496.73 406.43 505.53 409.26 505.53 397.26 496.73 400.1 496.73 406.43" />
      <rect class="cls-5" x="431.82" y="400.1" width="64.92" height="6.44" />
      <rect class="cls-5" x="498.44" y="378.6" width="81.79" height="16.83" />
    </g>
  )
}

export default Brew;
