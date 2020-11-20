import React, {useState, useEffect} from "react"
import ImageGallery from 'react-image-gallery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom'

import ramiro1 from '../img/portrait/Ramiro-1.jpg'
import ramiro2 from '../img/portrait/Ramiro-2.jpg'
import ramiro3 from '../img/portrait/Ramiro-3.jpg'
import mariah1 from '../img/portrait/Mariah-1.jpg'
import jules1 from '../img/portrait/Jules-1.jpg'

let Photo= (props)=>{
  let [photos,setPhotos] = useState([
    {
      original:ramiro1,
      thumbnail:ramiro1
    },
    {
      original:ramiro2,
      thumbnail:ramiro2
    },
    {
      original:ramiro3,
      thumbnail:ramiro3
    },
    {
      original:mariah1,
      thumbnail:mariah1
    },
    {
      original:jules1,
      thumbnail:jules1
    },
  ])

  return(
          <div className='portfolio-photo'>
            <h1 id='photo'>PHOTO</h1>
            <ImageGallery items={photos} />
          </div>
  )
}

export default Photo
