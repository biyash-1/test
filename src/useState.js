import React, { useState,useEffect } from 'react'

function Practice4() {

const [counter, setCounter] = useState(0);
const [text, setText] = useState("ram");

useEffect(()=>{
  console.log("component mounted");
},[text]);

const handleClick = () =>{
  setCounter(counter+1);
}
const handleText = () =>{
setText(text === "ram" ? "Shyam": "ram");
}
  return (
    <div>
      <h1>Counter is {counter}</h1>
      <h1>Text is {text}</h1>
      <button onClick={handleClick}>
        click
      </button>
      <button onClick={handleText}>
        change text
      </button>
    </div>
  )
}

export default Practice4
