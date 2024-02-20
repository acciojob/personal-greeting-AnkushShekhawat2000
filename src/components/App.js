
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
       <form>
       <label >Enter Your name:</label>
       <input onChange={onChangeText} type="text"/>
       <p>{`Hello ${inputValue}!`}</p>
       </form>
       
    </div>
  )
}

export default App
