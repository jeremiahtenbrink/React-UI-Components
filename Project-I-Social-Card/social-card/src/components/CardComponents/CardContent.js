import React from 'react';
import './Card.scss';

const CardContent = ( props ) => {
    return (
        <div className="banner__content">
            <h3>Get started with React</h3>
            <p>
                React makes it painless to cdreate interactive UIs. Design simple views for each state in your application.
            </p>
            <p>
                reactjs.org
            </p>
        </div>
        
    );
};

CardContent.propTypes = {};
CardContent.defaultProps = {};

export default CardContent;
