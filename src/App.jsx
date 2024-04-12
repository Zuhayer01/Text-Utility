import React, { useState } from "react";

function App() {
  const [text, setText] = useState("")
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleChange = (event) => {
    setText(event.target.value)
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div id="container" className="flex flex-col">
        <h1 className="text-2xl text-center">This is an App</h1>
        <textarea
          name=""
          id=""
          cols="50"
          rows="8"
          value={text} onChange={handleChange}
          className="bg-red-100 p-3 resize-none"
        ></textarea>
        <button type="button" className="btn btn-primary mt-2" onClick={handleUp} >Uppercase</button>
      </div>
    </div>
  );
}

export default App;
