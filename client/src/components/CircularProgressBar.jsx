import { useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function CircularProgressBar({percentage}) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
  <>
     <div style={{ width: '100px', height: '100px' }}>
     <div className='circular-progress'> 
     <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={2}
      >
        <div
      className={`image-container ${hovered ? 'hovered duration-100 flex gap-0' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        {hovered ? (
        <img src="/logo2.png" className='h-auto w-auto p-2' alt=""/>
        ):(
        <div style={{ fontSize: 12, marginTop: 2 }}>
        <h1 className='text-blue-600 text-2xl'>{`${percentage}%`}</h1>
        <p>Complete</p>
        </div> 
        )}
        </div>
        </CircularProgressbarWithChildren>
        </div>
    </div>
  </>
)
      }


export default CircularProgressBar;
