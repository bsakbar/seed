import React, { useState, useEffect } from 'react';

function Beans() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Pouring Coffee Beans.mp3'));

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

    const svgElement = document.querySelector('#beans_hover');
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

    <g id="Beans"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <g id="beans_hover" style={{ display: isHovered || isPlaying ? 'block' : 'none' }}>
        <ellipse class="cls-11" cx="545.52" cy="122.26" rx="7.75" ry="5.45" transform="translate(157.34 524.57) rotate(-58.66)" />
        <ellipse class="cls-11" cx="571.29" cy="80.21" rx="5.45" ry="7.75" transform="translate(41.65 308.88) rotate(-31.34)" />
        <ellipse class="cls-11" cx="571.13" cy="107.31" rx="5.45" ry="7.75" />
        <ellipse class="cls-11" cx="545.52" cy="149.35" rx="5.45" ry="7.75" />
        <ellipse class="cls-11" cx="571.13" cy="131.91" rx="7.75" ry="5.45" />
        <ellipse class="cls-11" cx="571.29" cy="157.01" rx="7.75" ry="5.45" transform="translate(140.02 563.26) rotate(-58.66)" />
        <ellipse class="cls-11" cx="519.57" cy="157.01" rx="5.45" ry="7.75" transform="translate(-5.85 293.18) rotate(-31.34)" />
        <ellipse class="cls-11" cx="519.57" cy="80.21" rx="7.75" ry="5.45" transform="translate(180.8 482.24) rotate(-58.66)" />
        <ellipse class="cls-11" cx="519.73" cy="107.31" rx="5.45" ry="7.75" />
        <ellipse class="cls-11" cx="519.73" cy="131.91" rx="7.75" ry="5.45" />
        <ellipse class="cls-11" cx="545.69" cy="95.81" rx="5.45" ry="7.75" transform="translate(29.8 297.83) rotate(-31.34)" />
        <ellipse class="cls-11" cx="546.29" cy="67.97" rx="5.45" ry="7.75" />
      </g>

      <g id="beans_outline">
        <ellipse class="cls-5" cx="545.52" cy="122.26" rx="7.75" ry="5.45" transform="translate(157.34 524.57) rotate(-58.66)" />
        <ellipse class="cls-5" cx="571.29" cy="80.21" rx="5.45" ry="7.75" transform="translate(41.65 308.88) rotate(-31.34)" />
        <ellipse class="cls-5" cx="571.13" cy="107.31" rx="5.45" ry="7.75" />
        <ellipse class="cls-5" cx="545.52" cy="149.35" rx="5.45" ry="7.75" />
        <ellipse class="cls-5" cx="571.13" cy="131.91" rx="7.75" ry="5.45" />
        <ellipse class="cls-5" cx="571.29" cy="157.01" rx="7.75" ry="5.45" transform="translate(140.02 563.26) rotate(-58.66)" />
        <ellipse class="cls-5" cx="519.57" cy="157.01" rx="5.45" ry="7.75" transform="translate(-5.85 293.18) rotate(-31.34)" />
        <ellipse class="cls-5" cx="519.57" cy="80.21" rx="7.75" ry="5.45" transform="translate(180.8 482.24) rotate(-58.66)" />
        <ellipse class="cls-5" cx="519.73" cy="107.31" rx="5.45" ry="7.75" />
        <ellipse class="cls-5" cx="519.73" cy="131.91" rx="7.75" ry="5.45" />
        <ellipse class="cls-5" cx="545.69" cy="95.81" rx="5.45" ry="7.75" transform="translate(29.8 297.83) rotate(-31.34)" />
        <ellipse class="cls-5" cx="546.29" cy="67.97" rx="5.45" ry="7.75" />
        <path class="cls-5" d="M549.56,115.64l-.32,2.31c-.29,2.06-1.59,3.85-3.48,4.73h0c-1.41.66-2.52,1.84-3.1,3.28l-.84,2.99" />
        <path class="cls-5" d="M567.26,73.6l.32,2.31c.29,2.06,1.59,3.85,3.48,4.73h0c1.41.66,2.52,1.84,3.1,3.28l.84,2.99" />
        <path class="cls-5" d="M571.13,99.56l.93,2.14c.83,1.91.64,4.11-.51,5.85h0c-.86,1.3-1.19,2.88-.94,4.42l.84,2.99" />
        <path class="cls-5" d="M545.52,141.61l.93,2.14c.83,1.91.64,4.11-.51,5.85h0c-.86,1.3-1.19,2.88-.94,4.42l.84,2.99" />
        <path class="cls-5" d="M578.88,131.91l-2.14.93c-1.91.83-4.11.64-5.85-.51h0c-1.3-.86-2.88-1.19-4.42-.94l-2.99.84" />
        <path class="cls-5" d="M575.32,150.39l-.32,2.31c-.29,2.06-1.59,3.85-3.48,4.73h0c-1.41.66-2.52,1.84-3.1,3.28l-.84,2.99" />
        <path class="cls-5" d="M515.54,150.39l.32,2.31c.29,2.06,1.59,3.85,3.48,4.73h0c1.41.66,2.52,1.84,3.1,3.28l.84,2.99" />
        <path class="cls-5" d="M523.6,73.6l-.32,2.31c-.29,2.06-1.59,3.85-3.48,4.73h0c-1.41.66-2.52,1.84-3.1,3.28l-.84,2.99" />
        <path class="cls-5" d="M519.73,99.56l-.93,2.14c-.83,1.91-.64,4.11.51,5.85h0c.86,1.3,1.19,2.88.94,4.42l-.84,2.99" />
        <path class="cls-5" d="M511.99,131.91l2.14.93c1.91.83,4.11.64,5.85-.51h0c1.3-.86,2.88-1.19,4.42-.94l2.99.84" />
        <path class="cls-5" d="M541.65,89.19l.32,2.31c.29,2.06,1.59,3.85,3.48,4.73h0c1.41.66,2.52,1.84,3.1,3.28l.84,2.99" />
        <path class="cls-5" d="M546.29,60.22l.93,2.14c.83,1.91.64,4.11-.51,5.85h0c-.86,1.3-1.19,2.88-.94,4.42l.84,2.99" />
      </g>

    </g>
  )

}


export default Beans;
