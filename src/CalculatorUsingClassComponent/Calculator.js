import React from "react";
import Display from './Display';
import Keypad from './Keypad';


class Calculator extends React.Component {

    constructor(props){
        super(props);

        this.state={
            inputValue :" "
        }
    };

    handleButtonClick = (value) =>{
        this.setState((prevState) =>({
            inputVale : prevState.inputVale + value,
        }));   
    };

    handleClear = () =>{
        this.setState ({
            inputVale : "",
        });
    };

    handleCalculate = () =>{
        try{
            const result = eval(this.state.inputVale);
            this.setState({
                inputVale : result.toString(),
            });
        }
        catch(error) {
            this.setState({
                inputVale : "Error",
            });
        }
        
    };

    handleInputChange = (event) =>{
        this.setState({
            inputVale : event.target.value,
        });
    }


    render(){
        return (<div className="calculator">
            <Display 
                value={this.state.inputVale} 
                onChange={this.handleInputChange} 
            />
            <Keypad 
                onButtonClick = {this.handleButtonClick}
                onClear = {this.handleClear}
                onCalculate ={this.handleCalculate}
            />
            
        </div>)
    }
};

export default Calculator;