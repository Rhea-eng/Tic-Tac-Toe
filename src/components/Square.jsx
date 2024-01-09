import 'bootstrap/dist/css/bootstrap.min.css';
import './Square.css';

// import { useState } from "react";

function Square ({ value, onSquareClick }) {

  // const[value, setValue] = useState(null);
  
  // function handleonClick (){
  //   setValue('X')
  // }

  return (
  <button className='square'
  onClick={onSquareClick}>
    <b>{value}</b></button> 
  )
}

export default Square;


