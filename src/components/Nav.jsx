import React from 'react'
import '../App.css'
import logo from '../images/logo.png';

export default function Nav() {
  return (
    <div>

      <nav className='nav'>
        <img src={logo} className='nav--logo' />
        <h3 className='nav--title'>Urji Tahir - FullStack Developer Portfolio</h3>
      </nav>
      
    </div>
  )
}
