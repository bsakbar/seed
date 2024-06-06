import React, { useState, useEffect } from 'react';

function Rain() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio('/sounds/Rain.mp3'));

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

    const svgElement = document.querySelector('#rain_hover');
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
    <g id="Rain"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}

    >
      <rect class="cls-11" style={{ display: isHovered || isPlaying ? 'block' : 'none' }} id="rain_hover" x="737.18" y="405.93" width="78.5" height="60.94" />
      <rect class="cls-5" x="737.18" y="405.93" width="78.5" height="60.94" />
      <line class="cls-5" x1="774.65" y1="441.75" x2="815.68" y2="411.25" />
      <g>
        <path class="cls-7" d="M770.66,443.65l3.99-1.89c2.29-1.09,4.96-1.03,7.2.15h0c2.09,1.11,4.57,1.23,6.76.34l2.17-.88c2.12-.86,4.5-.77,6.55.24l.68.34c2.19,1.08,4.76,1.1,6.97.05l.45-.21c2.34-1.1,5.07-1.01,7.34.25l2.9,1.62" />
        <line class="cls-5" x1="794.11" y1="440.79" x2="815.68" y2="415.3" />
        <line class="cls-5" x1="810.16" y1="440.79" x2="815.68" y2="421.41" />
      </g>
      <line class="cls-1" x1="742.66" y1="411.25" x2="742.66" y2="416.07" />
      <line class="cls-1" x1="746.42" y1="421.15" x2="746.42" y2="433.89" />
      <line class="cls-1" x1="742.66" y1="438.02" x2="742.66" y2="443.65" />
      <line class="cls-1" x1="746.42" y1="462" x2="746.42" y2="455.49" />
      <line class="cls-1" x1="752.23" y1="436.4" x2="752.23" y2="442.22" />
      <line class="cls-1" x1="752.23" y1="452.49" x2="752.23" y2="458.74" />
      <line class="cls-1" x1="759.18" y1="411.25" x2="759.18" y2="418.61" />
      <line class="cls-1" x1="759.18" y1="429.36" x2="759.18" y2="431.1" />
      <line class="cls-1" x1="759.18" y1="440.85" x2="759.18" y2="452.49" />
      <line class="cls-1" x1="759.18" y1="458.74" x2="759.18" y2="464.5" />
      <line class="cls-1" x1="752.23" y1="413.66" x2="752.23" y2="428.05" />
      <line class="cls-1" x1="763.5" y1="414.09" x2="763.5" y2="410.4" />
      <line class="cls-1" x1="767.25" y1="421.15" x2="767.25" y2="425.38" />
      <line class="cls-1" x1="763.5" y1="438.02" x2="763.5" y2="443.65" />
      <line class="cls-1" x1="767.25" y1="462" x2="767.25" y2="455.49" />
      <line class="cls-1" x1="773.07" y1="433.56" x2="773.07" y2="439.38" />
      <line class="cls-1" x1="773.07" y1="452.49" x2="773.07" y2="455.91" />
      <line class="cls-1" x1="780.02" y1="411.25" x2="780.02" y2="418.61" />
      <line class="cls-1" x1="780.02" y1="426.53" x2="780.02" y2="428.26" />
      <line class="cls-1" x1="780.02" y1="446.52" x2="780.02" y2="452.49" />
      <line class="cls-1" x1="780.02" y1="458.74" x2="780.02" y2="464.5" />
      <line class="cls-1" x1="773.07" y1="413.66" x2="773.07" y2="428.05" />
      <line class="cls-1" x1="785.36" y1="411.25" x2="785.36" y2="416.07" />
      <line class="cls-1" x1="789.11" y1="417.61" x2="789.11" y2="423.98" />
      <line class="cls-1" x1="785.36" y1="449.67" x2="785.36" y2="455.31" />
      <line class="cls-1" x1="789.11" y1="462" x2="789.11" y2="461.16" />
      <line class="cls-1" x1="794.93" y1="445.98" x2="794.93" y2="448.97" />
      <line class="cls-1" x1="794.93" y1="452.49" x2="794.93" y2="458.74" />
      <line class="cls-1" x1="801.88" y1="414.09" x2="801.88" y2="415.78" />
      <line class="cls-1" x1="801.88" y1="449.36" x2="801.88" y2="446.82" />
      <line class="cls-1" x1="801.88" y1="458.74" x2="801.88" y2="464.5" />
      <line class="cls-1" x1="794.93" y1="411.25" x2="794.93" y2="419.97" />
      <line class="cls-1" x1="806.19" y1="411.25" x2="806.19" y2="413.24" />
      <line class="cls-1" x1="806.19" y1="448.89" x2="806.19" y2="454.52" />
      <line class="cls-1" x1="809.95" y1="462" x2="809.95" y2="455.49" />
    </g>
  )
}


export default Rain;
