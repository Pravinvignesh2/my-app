import React from "react";
import img from './wallpaper.jpg';

class SliderComponent extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
       return  (
        <div>
          <img src={img} alt="Anime" width={50}/>
          {/* <h3>Hello</h3> */}
        </div>
      );

        
    }
}
export default SliderComponent;