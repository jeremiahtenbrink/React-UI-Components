import React from 'react';
import './header.scss';
import picture from './lambdacrest.png';

const ImageThumbnail = ( props ) => {
    return (
        <div className="header__logo-div"><img src={picture} alt="Lambda logo" className="header__logo" /></div>
    );
};

export default ImageThumbnail;

