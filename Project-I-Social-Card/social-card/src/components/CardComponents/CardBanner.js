import React from 'react';
import './Card.scss';
import img from "./reactbackground.png";

const CardBanner = ( props ) => {
    return (
        <div className="banner__img"><img src={img} alt="React logo." /></div>
    );
};


export default CardBanner;

