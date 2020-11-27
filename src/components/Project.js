import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

let Project = (props)=>{
  return (
    <div className='project-ctnr'>
      <img className='preview-img web' src = {props.img} />

      <div className='text-ctnr-web'>
        <a href={props.url}><h3>{props.projectName}</h3></a>
        <p>{props.projectDesc}</p>
      </div>
    </div>
  )
}
export default Project
