import React, { useState } from 'react';


export default function Card(props) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
         <div className={`card ${isZoomed ? 'zoomed' : ''}`}>
            <div className='image-container'>
            <img src={`${props.img}`} className="card--image" alt='img'/>
            </div>
            <div className="card--stats">
                <span className='stack' >{props.stack}</span>
                <h1 className='title'>{props.title}</h1>
                <span className='bold'>{props.date}</span>
                <p className="gray">{props.description}</p>
                <span>{props.github}</span>
            </div>
          
          {isZoomed && (
            <div className='zoomed'>
              <img src={`${props.img}`} alt="img" />
              <button onClick={handleImageClick}>Close</button>
            </div>
          )}
        </div>
     )
}
