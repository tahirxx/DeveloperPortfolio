import React from 'react'

export default function Card(props) {
  return (
          <div className="card">
            <div className='image-container'>
            <img src={`${props.img}`} className="card--image" alt='img'/>
            </div>
            <div className="card--stats">
                <span >{props.stack}</span>
                <h1>{props.title}</h1>
                <span className='bold'>{props.date}</span>
                <p className="gray">{props.description}</p>
                <span>{props.github}</span>
            </div>
          
        </div>
     )
}
