import React from 'react'

let Project = (props)=>{
  return (
    <div className='project-ctnr'>
      <div className='preview-img web' background-img = {props.img}>
      </div>

      <div className='text-ctnr-web'>
        <h3>{props.projectName}</h3>
        <p>{props.projectDesc}</p>
      </div>
    </div>
  )
}
export default Project
