import React from "react";

class MenuComponent extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return <React.Fragment>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Product List</a></li>
            </ul>
        </React.Fragment>

    }
}
export default MenuComponent;