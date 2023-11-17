import React from 'react'

export default function Card(props) {
  return (
          <div className="card">
            <img src={`../images/${props.img}`} className="card--image" alt='img'/>
            
            <div className="card--stats">
                {/* <img src="./images/star.png" className="card--star" /> */}
                <span>{props.stack}</span>
                <h1>{props.title}</h1>
                <span className="gray">{props.date}</span>
                <p className="gray">{props.description}</p>
                <span>{props.github}</span>
            </div>
          
        </div>
     )
}
