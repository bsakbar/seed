import React, { useState, useEffect } from 'react';

function Desk() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Drawer Open & Close.mp3'));

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

    const svgElement = document.querySelector('#desk_hover');
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
    <g id="Desk"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <polygon class="cls-11" style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="desk_hover" points="729.57 466.95 630.36 466.95 630.36 470.77 636.22 470.77 636.22 537.75 723.06 537.75 723.06 470.77 729.57 470.77 729.57 466.95" />
      <rect class="cls-5" x="636.22" y="470.77" width="86.84" height="66.98" />
      <rect class="cls-5" x="630.36" y="466.95" width="99.22" height="3.82" />
      <line class="cls-5" x1="723.06" y1="503.14" x2="660.59" y2="503.14" />
      <line class="cls-5" x1="660.59" y1="470.77" x2="660.59" y2="537.75" />
      <line class="cls-5" x1="660.59" y1="490.3" x2="636.22" y2="490.3" />
      <line class="cls-5" x1="660.59" y1="512.07" x2="636.22" y2="512.07" />
      <line class="cls-7" x1="701.12" y1="487.31" x2="683.35" y2="487.31" />
      <line class="cls-7" x1="701.12" y1="520.85" x2="683.35" y2="520.85" />
      <line class="cls-5" x1="651.79" y1="480.51" x2="644.86" y2="480.51" />
      <line class="cls-5" x1="651.79" y1="524.41" x2="644.86" y2="524.41" />
      <line class="cls-5" x1="651.79" y1="501.18" x2="644.86" y2="501.18" />
    </g>
  )
}

export default Desk;
