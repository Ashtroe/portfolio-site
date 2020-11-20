import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import SideNav from './SideNav'


let Landing = (props)=>{
  return (
    <div className= 'landing'>
      <div className='home'>
        <h1>HELLO</h1>
        <div className= 'profile-pic-ctnr'>
          <h3>My name is</h3>
          <img src={props.img}/>
          <h2>Ashton</h2>
        </div>

      </div>

      <div className='about'>
        <div className='text-ctnr'>
          <p>
            I am a web developer and a hobbyist photographer, with an interest in all things tech.
          </p>
        </div>
        <h1 id='about'>ABOUT</h1>
        <Link to='/web'>View my work</Link>
      </div>
    </div>
  )
}
export default Landing
