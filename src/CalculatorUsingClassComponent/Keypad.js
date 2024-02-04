import React from "react";

class Keypad extends React.Component {
  
  render() {
     const { onClear, onCalculate} = this.props;
    return (
      <div className="keypad">
        <button className="btn btn-danger keypad-button" onClick={onClear}>AC</button>  
        <button className="btn btn-secondary keypad-button" onClick={()=> this.OnButtonClick('CE')}>CE</button>
        {/* <button onClick={()=> this.OnButtonClick('%')}>%</button> */}
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('/')}>/</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('+/-')}>+/-</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('7')}>7</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('8')}>8</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('9')}>9</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('*')}>*</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('4')}>4</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('5')}>5</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('6')}>6</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('-')}>-</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('1')}>1</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('2')}>2</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('3')}>3</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('+')}>+</button>
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('0')}>0</button>  
        <button className="btn btn-outline-primary keypad-button" onClick={()=> this.OnButtonClick('.')}>.</button>    
        <button className="btn btn-success col-12 keypad-button"  
                style={{ gridColumn: "span 2"}} 
                onClick={onCalculate}
        > =
        </button>  
        <br />
      </div>
    );
  }

  OnButtonClick(value){
    if(value === 'CE'){
      this.props.onClearSingleChar();
    }else{
      this.props.onButtonClick(value);
    }
  }
}

export default Keypad;