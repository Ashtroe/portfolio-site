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
import Nav from './components/Nav'
import Landing from './components/Landing'
import Web from './components/Web'
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
  const [isScrolling,setScrolling]= useState(false)
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
          <Nav />
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
