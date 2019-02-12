import React from "react";
import ActionButton from './ActionButton'
import NumberButton from "./NumberButton";

const BigButton = ( props ) => {
    
    if(props.name === "clear"){
        return (
            <div className="big-button">
                <ActionButton {...props}/>
            </div>
        );
    }else {
        return (
            <div className="big-button">
                <NumberButton  {...props}/>
            </div>
        )
    }
    
};
export default BigButton;
