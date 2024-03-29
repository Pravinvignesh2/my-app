import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HeaderClassComponent from './ClassComponent/HeaderClassComponent';
import MenuComponent from './ClassComponent/Menu';
import SliderComponent from './ClassComponent/Slider';
import ProdList from './ClassComponent/ProductList';
import Footer from './ClassComponent/Footer';
import LifeCycleOfCc from './ClassComponent/LifeCycleOfCC';
import StateFullVariablePropsAndEvents from './ClassComponent/StateFullVariablePropsAndEvents';
import Calculator from './CalculatorUsingClassComponent/Calculator';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  {/* <HeaderClassComponent></HeaderClassComponent> */}
  {/* <LifeCycleOfCc></LifeCycleOfCc> */}
  {/* <MenuComponent></MenuComponent> */}
  {/* <SliderComponent></SliderComponent> */}
  {/* <ProdList></ProdList> */}
  {/* <Footer></Footer> */}
  {/* <StateFullVariablePropsAndEvents></StateFullVariablePropsAndEvents> */}
   
   <Calculator></Calculator>
  
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
