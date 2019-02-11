import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Footer = ( props ) => {
    return (
        <div className="footer">
            <span className="icon icon-bubble2" />
            <span className="icon icon-loop2" />
            <span className="icon icon-heart-o" />
            <span className="icon icon-envelope-o" />
        </div>
    );
};

export default Footer;
