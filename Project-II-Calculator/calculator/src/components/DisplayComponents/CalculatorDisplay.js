import React from "react";
import "./Display.scss";

const CalculatorDisplay = ( { number } ) => {
    return (
        <div className="calculator-display">
            <div className="calculator-display__number">
                { number }
            </div>
        </div>
    );
};

export default CalculatorDisplay;