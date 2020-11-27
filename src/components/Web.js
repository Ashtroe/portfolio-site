import React, { useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import SideNav from './SideNav'
import Project from './Project'

import Gust from '../img/projects/Gust.png'

let Web = ()=>{
  const [projects, setProjects] = useState([])

  return(
    <div className='portfolio web'>
      <h1>WEB</h1>
      <Project
        url='https://gust.netlify.app/'
        img={Gust}
        projectName= 'Gust'
        projectDesc='A weather app built with react that uses the openweathermap api'
         />

    </div>
  )
}
export default Web
