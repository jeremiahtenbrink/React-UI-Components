import React from 'react';
import './Button.scss';

const NumberButton = ( {number, fun} ) => {
    return (
        <div className="number-button" onClick={() => fun(number)}>{number}</div>
    );
};

export default NumberButton;
