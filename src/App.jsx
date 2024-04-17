import { split } from "postcss/lib/list";
import React, { useState } from "react";
// import Navbar from "./Components/Navbar";

function App() {
  const [text, setText] = useState("")
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLow = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleCopy = () => {
    var copyText = document.getElementById("fuck")
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
  }
  const handleClear = () => {
    setText("")
  }
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleChange = (event) => {
    setText(event.target.value)
  }
  if (text.length === 0) {
    var displayLength = 0
  } else {
    displayLength = text.split(" ").length;
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex items-center justify-center h-screen ">
        <div id="container" className="flex flex-col w-[700px] ">
          <h1 className="text-2xl text-center">Text Utility Tool</h1>
          <textarea
            name=""
            id="fuck"
            cols="50"
            rows="8"
            value={text} onChange={handleChange}
            className="bg-white p-3 resize-none border-[1px] border-black rounded-lg mt-3"
          ></textarea>
          <div className="flex items-center justify-between w-full mt-2">
            {/* <p>{text.split(" ").length} words</p> */}
            <p>{displayLength} words</p>
            <p>{text.length} characters</p>
          </div>
          <div id="buttons" className="">
            <button type="button" className="btn btn-primary mr-2" onClick={handleUp} >UPPERCASE</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLow} >lowercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleSpaces} >Clear Extra Spaces</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
