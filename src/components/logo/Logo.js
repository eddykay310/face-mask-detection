import React from 'react';
import Tilt from 'react-tilt';
import mask from './mask.png';

const Logo = () => {
    return (
    <div className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner pa2" >
                <img style={{ paddingTop: '0.6em' }} alt='logo' src={mask} />
            </div>
        </Tilt>
    </div>);
}

export default Logo;