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
   const handleCopy=()=> {
    
    navigator.clipboard.writeText(text);
    props.showAlert("Copy to Clipboard", "Success");
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
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{background:props.mode===`dark`?`#13466e`:`white`,
        color:props.mode===`dark`?`white`:`#042743`}} id="mybox" rows="12" ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convet To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convet To Lowercase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
     
    </div>
    <div className="container my-3" style={{color:props.mode===`dark`?`white`:`#042743`}}>
      <h2>Your Text Summary</h2>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview "}</p>
    </div>
    </>
  );
  }
