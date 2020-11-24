import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

let SideNav = ()=>{
  return (
    <div className='side-nav'
      onMouseOver={()=>{
        let container = document.querySelector('.side-nav')
        container.classList.toggle('visible')
      }}
      onMouseOut={()=>{
        let container = document.querySelector('.side-nav')
        container.classList.toggle('visible')
      }}>


      <div className='side-nav-content'
        >
        <div className='line' id='top'></div>
          <div className='links'>
            <Link to="/">
              Home
            </Link>
            <Link to="/web">
              Web
            </Link>
            <Link to='/photo'>
              Photo
            </Link>
          </div>
          <div className='line' id='mid'></div>
          <a href='https://instagram.com/ashtroe'>
            <div className='ext-link' id='instagram'></div>
          </a>
          <a>
            <div className='ext-link' id='linkedin'></div>
          </a>
          <a>
            <div className='ext-link' id='github'></div>
          </a>
          <div className='line' id='bottom'></div>
      </div>

    </div>
  )
}
export default SideNav
