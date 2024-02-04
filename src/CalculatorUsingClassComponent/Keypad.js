import React from "react";

class Keypad extends React.Component {
  
  render() {
     const { onClear ,onCalculate } = this.props;
    return (
      <div className="keypad">
        <button onClick={()=> this.OnButtonClick('1')}>1</button>
        <button onClick={()=> this.OnButtonClick('2')}>2</button>
        <button onClick={()=> this.OnButtonClick('3')}>3</button>
        <button onClick={()=> this.OnButtonClick('+')}>+</button>
        <button onClick={()=> this.OnButtonClick('4')}>4</button>
        <button onClick={()=> this.OnButtonClick('5')}>5</button>
        <button onClick={()=> this.OnButtonClick('6')}>6</button>
        <button onClick={()=> this.OnButtonClick('-')}>-</button>
        <button onClick={()=> this.OnButtonClick('7')}>7</button>
        <button onClick={()=> this.OnButtonClick('8')}>8</button>
        <button onClick={()=> this.OnButtonClick('9')}>9</button>
        <button onClick={()=> this.OnButtonClick('*')}>*</button>
        <button onClick={()=> this.OnButtonClick('0')}>0</button>    
        <button onClick={onClear}>C</button>  
        <button onClick={onCalculate}>=</button>  
        <button onClick={()=> this.OnButtonClick('/')}>/</button>
        <br />
      </div>
    );
  }

  OnButtonClick(value){
    this.props.onButtonClick(value);
  }
}

export default Keypad;