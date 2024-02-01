import React from "react";
import ProductList from '/Users/pravinvignesh/react-app/my-app/src/ClassComponent/JSON/ProductList.json';

class ProdList extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return <div>{
            ProductList.map((prod)=>(
                <div>
                    <ul>
                        <li>Product Name :{prod.prodName}</li>
                        <li>Model :{prod.prodModel}</li>
                        <li>Price  :{prod.prodPrice}</li>
                        <li>Color  :{prod.prodColor}</li>
                    </ul>
                    <hr></hr>
                </div>
            )
            )
            }
            
        </div>
    }
}

export default ProdList;