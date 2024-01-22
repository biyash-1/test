import React from "react";
import { useState } from "react";
function Practice() {
 
 const [x, setX] = useState(40);
    function handleClick(){
        setX(x-1);
        console.log(x);
    }
  return (
    <div>
      <h1>Learning State {x} </h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Practice;
