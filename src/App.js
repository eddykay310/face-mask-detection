import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import Rank from './components/rank/Rank'
import FaceRecognition from './components/faceRecognition/FaceRecognition'
import './App.css';
import Particles from 'react-particles-js';


const particlesProps =
{
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }
  },
  "opacity": { "value": 0.7, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
  "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
  "interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input});
  //   app.models.predict("a403429f2ddf4b49b307e318f00e528b", "this.state.input").then(
  //   function(response) {
  //     console.log(response.output[0].data.regions[0].region_info.bounding_box)
  //   },
  //   function(err) {
  //     // there was an error
  //   }
  // );
  }
  
  render () {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesProps} />
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <Rank />
        <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
    );
  }
  
}


export default App;
