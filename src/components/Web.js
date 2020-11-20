import React, { useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import SideNav from './SideNav'
import Project from './Project'

let Web = ()=>{
  const [projects, setProjects] = useState([])

  return(
    <div className='portfolio web'>
      <h1>WEB</h1>
      <Project
        projectName= 'Project 1'
        projectDesc='Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum.'
         />
      <Project
        projectName= 'Project 1'
        projectDesc='Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum.'
         />
      <Project
        projectName= 'Project 1'
        projectDesc='Lorem ipsum dolor sit amet,
         consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At
          vero eos et accusam et justo duo dolores et ea rebum.'
         />
    </div>
  )
}
export default Web
