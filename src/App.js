import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation
} from 'react-router-dom'
import SideNav from './components/SideNav'
import Landing from './components/Landing'
import Web from './components/Web'
import PhotoHome from './components/PhotoHome'
import Photo from './components/Photo'
import face from './img/face.png'

let ScrollToTop = ()=>{
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <SideNav />
          <Switch>
            <Route path="/" exact>
              <Landing img = {face}/>
            </Route>

            <Route  path="/web" exact>
              <Web />
            </Route>

            <Route  path="/photo" exact>
              <Photo />
            </Route>

            <Route path='/Ramiro'>
              <Photo gallery= 'Ramiro'/>
            </Route>

          </Switch>
      </div>
    </Router>
  )
}

export default App;
