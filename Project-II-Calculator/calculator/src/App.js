import React from "react";
import "./App.scss";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import BigButton from "./components/ButtonComponents/BigButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            number: "0",
            oldNumber: "0",
            action: ""
        };
    }
    
    handleNumberClick = ( newNumber ) => {
        this.setState( ( state ) => {
            if( state.number[ 0 ] === "0" ) {
                return ( {
                    number: newNumber,
                } );
            }
            return ( {
                number: state.number + newNumber,
            } );
        } );
    };
    
    handleAction = ( actionPressed ) => {
        this.processOldState(actionPressed);
    };
    
    processOldState(newAction) {
        
        let oldNumber = this.state.oldNumber;
        let number = this.state.number;
        
        switch( this.state.action ) {
            case "+":
                oldNumber = parseFloat(oldNumber) + parseFloat(number);
                number = 0;
                break;
            case "-":
                oldNumber = parseFloat(oldNumber) - parseFloat(number);
                number = 0;
                break;
            case "/":
                oldNumber = parseFloat(oldNumber) / parseFloat(number);
                number = 0;
                break;
            case "*":
                oldNumber = parseFloat(oldNumber) * parseFloat(number);
                number = 0;
                break;
            case "":
                oldNumber = number;
                number = 0;
                break;
            default:
                oldNumber = 0;
                number = 0;
        }
        
        if(newAction === "="){
            this.setState((state) => {
               return {
                   number: oldNumber.toString(),
                   oldNumber: oldNumber.toString(),
                   action: ""
               }
            });
        }else{
            this.setState((state) => {
                return {
                    number: number.toString(),
                    oldNumber: oldNumber.toString(),
                    action: newAction
                }
            });
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <CalculatorDisplay number={ this.state.number } />
                </div>
                <div className="row">
                    <BigButton name={ "clear" } action={ "clear" } fun={ this.handleAction } />
                    <ActionButton action={ "/" } fun={this.handleAction} />
                </div>
                <div className="row">
                    <NumberButton number={ "7" } fun={ this.handleNumberClick } />
                    <NumberButton number={ "8" } fun={ this.handleNumberClick } />
                    <NumberButton number={ "9" } fun={ this.handleNumberClick } />
                    <ActionButton action={ "*" } fun={ this.handleAction } />
                </div>
                
                <div className="row">
                    <NumberButton number={ "4" } fun={ this.handleNumberClick } />
                    <NumberButton number={ "5" } fun={ this.handleNumberClick } />
                    <NumberButton number={ "6" } fun={ this.handleNumberClick } />
                    <ActionButton action={ "-" } fun={ this.handleAction } />
                </div>
                
                <div className="row">
                    <NumberButton number={ "1" } fun={ this.handleNumberClick } />
                    <NumberButton number={ "2" } fun={ this.handleNumberClick } />
                    <NumberButton number={ "3" } fun={ this.handleNumberClick } />
                    <ActionButton action={ "+" } fun={ this.handleAction } />
                </div>
                <div className="row">
                    <BigButton name={ 0 } number={ 0 } fun={ this.handleNumberClick } />
                    <ActionButton action={ "=" } fun={ this.handleAction }  />
                </div>
            
            </div>
        );
    }
    
};

export default App;
