
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {

  const [inputValue, setInputValue] = useState("");

 function onChangeText(event){
    // console.log(event.target.value);
    setInputValue(event.target.value);

}

  return (
    <div>
        <p >Enter Your name:</p>
        <input onChange={onChangeText}/>
        {inputValue && <p>{`Hello ${inputValue}!`}</p>} 
    </div>
  )
}

export default App
