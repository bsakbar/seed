/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function Frother() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio('/sounds/Milk Steam.mp3'));

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

        const svgElement = document.querySelector('#frother_hover');
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
        <g id="Frother"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <path class="cls-11" style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="frother_hover" d="M870.58,468.53l-29.9-51.8v-21.31h22.24v-16.31h-55.76v16.31h21.2v20.32l30.47,52.78h-21.48l2.68,4.27c2.26,3.59,3.24,7.84,2.8,12.06l-3.54,34.08c-1.04,10.05,6.84,18.8,16.95,18.8h17.73c9.41,0,17.04-7.63,17.04-17.04v-52.17h-20.45Z" />
            <path class="cls-10" d="M901.04,478.13h-10.03v6.43h9.4s2.84-.22,2.84,2.5c0,5.93-3.78,20.44-4.34,21.61-.67,1.41-2.53,2.98-4.17,2.98h-3.72v6.43h4.34c4.36,0,7.44-1.55,9.37-6.86.38-1.05.65-2.14.87-3.23l3.86-19.34c.62-3.08-.33-6.35-2.72-8.4-1.54-1.32-3.53-2.11-5.71-2.11Z" />
            <rect class="cls-5" x="807.16" y="378.6" width="55.76" height="16.83" />
            <polyline class="cls-5" points="840.25 415.99 870.57 468.51 858.83 468.53 828.35 415.74" />
            <rect class="cls-10" x="839.75" y="431.68" width="17.42" height="17.42" transform="translate(-106.52 483.23) rotate(-30)" />
            <path class="cls-5" d="M856.25,537.75h17.73c9.41,0,17.04-7.63,17.04-17.04v-52.17h-53.68l2.68,4.27c2.26,3.59,3.24,7.84,2.81,12.06l-3.54,34.08c-1.04,10.05,6.84,18.8,16.95,18.8Z" />
            <line class="cls-7" x1="842.83" y1="484.86" x2="891.01" y2="484.86" />
            <rect class="cls-5" x="828.35" y="395.42" width="12.32" height="20.32" />
        </g>
    )
}

export default Frother;
