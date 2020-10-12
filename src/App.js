import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import Rank from './components/rank/Rank'
import FaceRecognition from './components/faceRecognition/FaceRecognition'
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register'
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
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const detectionPoints = data.output[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(width, height)
    return {
      leftCol: detectionPoints.left_col*width,
      topRow: detectionPoints.top_row*height,
      rightCol: width-(detectionPoints.right_col*width),
      bottomRow: height-(detectionPoints.bottom_row*height),
    }
  }

  displayBox = (box) => {
    this.setState({box:box});
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input});
  //   app.models.predict("a403429f2ddf4b49b307e318f00e528b", "this.state.input")
      // .then(response => this.displayBox(this.calculateFaceLocation(response))
      // .catch(err => console.log(err));

      // console.log(response.output[0].data.regions[0].region_info.bounding_box)
  //   function(err) {
  //     // there was an error
  //   }

  // );
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
  
  render() {
    const {isSignedIn, imageURL, route, box} = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesProps} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === 'home' ?
        <div>
          <Logo />
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
          <Rank />
          <FaceRecognition box={box} imageURL={imageURL} />
        </div>:
          (
            route === 'signin' ?
            <SignIn onRouteChange={this.onRouteChange}/>:
            <Register onRouteChange={this.onRouteChange}/>
          )
          
        }

      </div>
    );
  }
  
}


export default App;
