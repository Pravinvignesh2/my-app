import React from "react";

class LifeCycleOfCc extends React.Component
{
    constructor()
    {
        super();

        this.state=
        {
            productName : 'iPhone 14',
            productPrice : 79999
        }
    }

    render()
    {
        // return <h3>Life cycle of ClassComponent</h3>

        return (
        <div>
            <h3>Life cycle of Class Component</h3>

            Product Name using state variable

            <h3>{this.state.productName} : {this.state.productPrice}</h3>
            <button onClick={()=>this.changeProductName()}>Change Product</button>

        </div>
        )
    }
    changeProductName()
            {
                this.setState({
                    productName : "iPhone 15",
                    productPrice : 82000
                });
            }
}
export default LifeCycleOfCc;
