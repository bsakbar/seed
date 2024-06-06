import React, { useState, useEffect } from 'react';

function PeopleChatting() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Audio('/sounds/Chatter.mp3'));

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

        const svgElement = document.querySelector('#people_hover');
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
        <g id="People_Chatting"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <g id="people_hover" style={{ display: isHovered || isPlaying ? 'block' : 'none' }}>
                <path class="cls-11" d="M755.1,262.42l4.19-.39c3.5-45.59-8.84-56.46-8.84-56.46-4.48-3.58-11.17-4.72-16.64-3.02-8.57,23.45-9.65,62.76-9.65,62.76l4.41-.41c-5.71,35.42-10.93,51.4-10.93,51.4h15.43c4.48-8.99,6.92-17.36,8.24-24.16l.48,2.65,5.57,21.51h15.8s-3.28-18.8-8.07-53.88Z" />
                <path class="cls-11" d="M711.21,263.06c-.83-6.3-2.19-12.51-4.08-18.57-1.9-6.08-1.31-11.98-2.29-18.18-.73-4.66-2.93-9.05-6.08-12.54-2.82-3.11-6.98-6.85-11.41-5.71-2.01.52-3.85,1.56-5.41,2.92-1.41,1.23-3.44,3.18-5.48,5.76-2.71,3.43-5.43,7.97-6.75,13.42-1,4.15,2.16,8.15,6.43,8.15h2.67l-.82,11.49v40.01h1.9l2.74,17.94h7.66l.69-17.94h5.25l2.74,17.98h7.66l.69-17.98h4.65c.02-.2.04-.39.05-.59.71-8.68.32-17.54-.82-26.16Z" />
                <path class="cls-11" d="M656.29,307.79h6.27l-8.59-46.78,7.58.99-5.9-26.86h.93c2.85,0,5.01-2.57,4.52-5.37l-1.38-7.92c-.78-4.49-4.23-8.04-8.69-8.96l-15.54-3.19-10.05,47.59,4.89.64.33,2.65h0l5.95,47.22h6.89l.71-31.29h.27l11.82,31.29ZM635.44,258.59h0,0Z" />
            </g>
            <path class="cls-10" d="M717.1,316.3h9.88c0,2.5-2.03,4.53-4.53,4.53h-7.66v-2.22c0-1.27,1.03-2.31,2.31-2.31Z" transform="translate(1441.78 637.12) rotate(-180)" />
            <path class="cls-10" d="M746.35,316.3h9.88c0,2.5-2.03,4.53-4.53,4.53h-7.66v-2.22c0-1.27,1.03-2.31,2.31-2.31Z" transform="translate(1500.27 637.12) rotate(-180)" />
            <path class="cls-5" d="M728.52,264.9c-5.78,36.29-10.87,51.39-10.87,51.39h15.43c4.48-8.99,6.92-17.36,8.24-24.16l.48,2.65,5.57,21.51h15.8s-3.26-18.02-8.14-53.87l-26.52,2.48Z" />
            <path class="cls-5" d="M750.45,205.57s12.34,10.87,8.84,56.46l-35.13,3.28s1.09-39.31,9.65-62.76c5.47-1.7,12.16-.56,16.64,3.02Z" />
            <path class="cls-5" d="M711.21,263.06c-.83-6.3-2.19-12.51-4.08-18.57-1.9-6.08-1.31-11.98-2.29-18.18-.73-4.66-2.93-9.05-6.08-12.54-2.82-3.11-6.98-6.85-11.41-5.71-2.01.52-3.85,1.56-5.41,2.92-1.41,1.23-3.44,3.18-5.48,5.76-2.71,3.43-5.43,7.97-6.75,13.42-1,4.15,2.16,8.15,6.43,8.15h2.67l-.82,11.49v40.01h33.99c.02-.2.04-.39.05-.59.71-8.68.32-17.54-.82-26.16Z" />
            <path class="cls-5" d="M652.58,184.59l6.99,11.34c.54.88.22,2.03-.7,2.5l-2.16,1.11c-.46.24-.67.77-.5,1.26l1.16,3.23c.56,1.56-.72,3.16-2.36,2.97l-9.1-1.05" />
            <line class="cls-5" x1="650.2" y1="206.44" x2="648.91" y2="212.45" />
            <line class="cls-5" x1="640.48" y1="205.02" x2="639.23" y2="210.88" />
            <path class="cls-10" d="M654.61,187.88l2.95-2.55c2.41-2.08,2.88-5.63,1.11-8.27l-.82-1.22c-4.98-6.29-17.99-2.06-18.29,4.63h0c-.04,2.53-.41,4.41-2.26,5.64l-1.7,1.13c-2.17,1.44-3,4.23-1.97,6.63l1.24,2.86c.49,1.12.11,2.43-.9,3.13l-2.13,1.47s4.75,5.11,10.88,2.88c0,0,3.26-1.38,2.83-4.08-.29-1.77-3.84-3.8-3.37-5.65.39-1.56,3.08-2.24,3.35-3.65.48-2.48-3.35-3.05-.45-6.25,0,0,5.12-3.79,8.07.72l1.47,2.58Z" />
            <polyline class="cls-5" points="637.83 258.9 656.29 307.79 662.56 307.79 653.98 261.01" />
            <polygon class="cls-5" points="630.33 257.92 636.61 307.79 643.5 307.79 644.22 275.83 637.83 258.9 630.33 257.92" />
            <path class="cls-10" d="M656.29,307.79h7.66c2.5,0,4.53,2.03,4.53,4.53h-9.88c-1.27,0-2.31-1.03-2.31-2.31v-2.22h0Z" />
            <path class="cls-10" d="M636.71,307.79h7.66c2.5,0,4.53,2.03,4.53,4.53h-9.88c-1.27,0-2.31-1.03-2.31-2.31v-2.22h0Z" />
            <path class="cls-6" d="M680.28,185.61l-3.49,6c-.76,1.31-.19,2.87,1.32,3.62h0c.95.47,1.4,1.4,1.12,2.27l-.49,1.5c-.69,2.11.42,4.34,2.72,5.47h0c.71.35,1.53.54,2.36.54h5.82" />
            <path class="cls-10" d="M714.24,220.18c-4.73-10.78-20.8-26.05-20.81-26.05-1.87-2.5.53-6.27-3-9.8-3.54-3.54-7.92-4.88-9.8-3-1.88,1.88-.53,6.27,3,9.8,1.42,1.42,2.98,2.48,4.45,3.13.96.42,1.57,1.36,1.56,2.41-.06,7.67.54,21.7,5.09,32.08,6.59,15,13.56,19.02,18.94,16.66,5.38-2.36,7.14-10.22.56-25.22Z" />
            <polygon class="cls-5" points="707.33 289.81 706.64 307.79 698.98 307.79 696.23 289.81 707.33 289.81" />
            <path class="cls-8" d="M733.89,179.33c-.76.79-1.76,2.05-2.23,3.04l-5.4,11.45c-.44.83-.13,1.87.71,2.31h0c1.09.58,1.78,1.72,1.78,2.96h0c0,2.23,2.01,3.93,4.21,3.56l5.39-.62" />
            <path class="cls-10" d="M733.89,179.33c-.79-1.82.05-4.76,1.97-5.29l2.72-.75c2.24-.61,4.63-.11,6.44,1.35l5.45,4.41c1.49,1.21,2.22,3.12,1.91,5.01h0c-.46,2.83.19,5.73,1.81,8.09l.67.97c1.32,1.92,1.69,4.35.99,6.57h0c-.77,2.46-2.52,4.48-4.83,5.6h0c-3.11,1.51-6.8,1.14-9.56-.94l-3.12-2.35-.41-.46c-1.51-1.7-1.97-4.08-1.22-6.23h0s3.06-5.43,3.06-5.43c.4-.71-.1-1.59-.91-1.62h0c-1.13-.04-1.84-1.23-1.34-2.24l2.89-5.78c.13-.25,0-.56-.26-.65l-2.59-.91c-1.42-.5-3.67.62-3.67.62Z" />
            <path class="cls-5" d="M737.62,206.24s13.63,19.31-3.12,42.88" />
            <line class="cls-5" x1="729.38" y1="244.35" x2="746.14" y2="258.3" />
            <path class="cls-5" d="M741.12,292.13l6.25,24.16h15.8s-3.26-18.02-8.14-53.87" />
            <path class="cls-5" d="M742.84,280.08s-.8,18.24-9.77,36.22h-15.43s5.09-15.11,10.87-51.39" />
            <line class="cls-5" x1="685.75" y1="205.02" x2="685.75" y2="208.59" />
            <path class="cls-10" d="M680.39,307.79h9.88c0,2.5-2.03,4.53-4.53,4.53h-7.66v-2.22c0-1.27,1.03-2.31,2.31-2.31Z" transform="translate(1368.36 620.12) rotate(-180)" />
            <path class="cls-10" d="M696.73,307.79h9.88c0,2.5-2.03,4.53-4.53,4.53h-7.66v-2.22c0-1.27,1.03-2.31,2.31-2.31Z" transform="translate(1401.03 620.12) rotate(-180)" />
            <polygon class="cls-5" points="690.98 289.77 690.29 307.75 682.63 307.75 679.88 289.77 690.98 289.77" />
            <path class="cls-5" d="M652.87,235.14h3.71c2.85,0,5.01-2.57,4.52-5.37l-1.38-7.92c-.78-4.49-4.23-8.04-8.69-8.96l-15.54-3.19-10.05,47.59,36.11,4.71-5.9-26.86" />
        </g>
    )
};

export default PeopleChatting;
