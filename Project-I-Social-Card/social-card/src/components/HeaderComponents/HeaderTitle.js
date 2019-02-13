import React from 'react';
import './header.scss';

const HeaderTitle = ( props ) => {
    return (
        <div className="header__title">
            <h1>Lambda School</h1>
            <h2>@LambdaSchool {new Date().toDateString()}</h2>
        </div>
    );
};

export default HeaderTitle;

