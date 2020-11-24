import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

let Nav = ()=>{
  return (
    <div className= 'nav'>
      <Link to='/'>Home</Link>
      <Link to='/Photo'>Photo</Link>
      <Link to='/Web'>Web</Link>
    </div>
  )
}
export default Nav
