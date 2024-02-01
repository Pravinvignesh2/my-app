import React from "react";

class StateFullVariablePropsAndEvents extends React.Component
{
    constructor(){
        super();

        this.state={
            myName : "Pravin", age : 22}
    }
    render(){
        var productName = "iPhone 14 pro max";
        var productPrice = 79999;

        return <>
            Product 1 Using State less variable 
            <h3>{productName} : {productPrice}</h3>

            Created using State full Variable 
            <h3>My Name is {this.state.myName} and I'm {this.state.age} years old</h3>
        </>
    }
}
export default StateFullVariablePropsAndEvents;