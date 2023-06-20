import React from 'react'
import {useState} from "react";


function Counter() {
  const [counter,setCounter]=useState(1);
  function add(){
    if(counter>=1){
      setCounter(counter+1);
    }
  }
  function subtract(){
    if(counter>1){
      setCounter(counter-1);
    }
  }
  return (
    <>
    <div className='d-flex justify-content-center mt-2'>
    <button className=' btn btn-secondary' onClick={subtract}>-</button>
    <h1>{counter}</h1>
    <button className=' btn btn-secondary'onClick={add}>+</button>
    </div>
    </>
    
   
  )
}

export default Counter