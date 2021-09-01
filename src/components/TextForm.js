import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick=()=> {
   // console.log("uppercase was clicked"+text); no need
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upperCase!", "Success");
  }
  
  const handleClearClick=()=> {
    
     let newText = "" ;
     setText(newText)
     props.showAlert("Text is Cleared!", "Success");
   }
   const handleExtraSpaces=()=> {
    let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("ExtraSpaces  removed!", "Success");
   }
  const handleLowClick=()=> {
    
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to lowerCase!", "Success");
   }

  const handleOnChange=(event) => {
    //console.log("On Change"); no need
    setText(event.target.value);
    
  }
  
  
  const [text, setText] = useState("");
  //setText("nrew text");
  return (
    <>
    <div className="container" style={{color:props.mode===`dark`?`white`:`#042743`}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{background:props.mode===`dark`?`grey`:`white`,color:props.mode===`dark`?`white`:`#042743`}} id="mybox" rows="12" ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convet To Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convet To Lowercase </button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text </button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Space </button>
     
    </div>
    <div className="container my-3" style={{color:props.mode===`dark`?`white`:`#042743`}}>
      <h2>Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox Above to Preview here "}</p>
    </div>
    </>
  );
  }
