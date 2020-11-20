import React, {useState} from 'react'
import Photo from './Photo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'


let PhotoHome = (props)=>{

  return(
    <Router>
      <div className='portfolio-photo'>
        <h1 id='photo'>PHOTO</h1>

        <div className='thumb-ctnr'>
          <Link to='Ramiro'>
            <img className = 'photo-thumb' src={thumb1}/>
          </Link>
        </div>
      </div>
    </Router>

  )
}
export default PhotoHome
