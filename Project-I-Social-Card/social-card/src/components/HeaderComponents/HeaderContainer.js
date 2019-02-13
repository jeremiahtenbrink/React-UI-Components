import React from "react";
import "./header.scss";
import Thumbnail from "./ImageThumbnail";
import Content from "./HeaderContent";
import Title from "./HeaderTitle";

const HeaderContainer = ( props ) => {
    return (
        <div>
            <Thumbnail />
            <div className="header__content-container">
                <Title />
                <Content />
            </div>
        </div>
    );
};

export default HeaderContainer;

