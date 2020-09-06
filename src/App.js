import React from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import Rank from './components/rank/Rank'
import './App.css';
import Particles from 'react-particles-js';


const particlesProps =
{
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }
  },
  "opacity": { "value": 0.7, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
  "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesProps} />
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <Rank />
      {/*
      
      <FaceRecognition/> */}
    </div>
  );
}

export default App;
