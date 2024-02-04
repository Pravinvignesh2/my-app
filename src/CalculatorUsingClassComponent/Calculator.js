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
            inputValue : prevState.inputValue + value,
        }));   
    };

    handleClear = () =>{
        this.setState ({
            inputValue : "",
        });
    };

    handleSingleInputClear = () => {
        this.setState((prevState) => ({
          inputValue: prevState.inputValue.slice(0, -1), 
        }));
      };
      

    handleCalculate = () =>{
        try{
            const result = eval(this.state.inputValue);
            this.setState({
                inputValue : result.toString(),
            });
        }
        catch(error) {
            this.setState({
                inputValue : "Error",
            });
        }
        
    };

    handleInputChange = (event) =>{
        this.setState({
            inputValue : event.target.value,
        });
    }


    render(){
        return (<div className="calculator">
            <Display 
                value={this.state.inputValue} 
                onChange={this.handleInputChange} 
            />
            <Keypad 
                onButtonClick = {this.handleButtonClick}
                onClear = {this.handleClear}
                onClearSingleChar={this.handleSingleInputClear}
                onCalculate ={this.handleCalculate}
            />
            
        </div>)
    }
};

export default Calculator;