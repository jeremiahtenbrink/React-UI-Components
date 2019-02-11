import React from 'react';
import './Card.scss';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = ( props ) => {
    return (
        <div className="banner__container">
            <CardBanner/>
            <CardContent/>
        </div>
    );
};

export default CardContainer;
