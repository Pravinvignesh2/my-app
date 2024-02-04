import React from "react";

class Display extends React.Component
{
    render(){
     const {value , onChange} = this.props;
    
        return <input 
                    type="text" 
                    className="display" 
                    value={value} 
                    onChange={onChange} 
                    readOnly 
                /> 
           
    }
};

export default Display;