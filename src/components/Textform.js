
import React, { useState } from 'react'


export default function Textform(props) {
  const [text, setText] = useState('')
  const handelckilk = () => {
    console.log("click" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase", "success")

  }
  const handelckilklowe = () => {
    console.log("click" + text);
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert("converted to Lowercase", "success")

  }
  const handelckilkclear = () => {
    console.log("click" + text);
    let newtext = '';
    setText(newtext);
    props.showAlert("clear", "success")

  }
  const handelclokevnt = (event) => {
    //console.log('on click');
    setText(event.target.value);

  }
  const handelckilkcopy = () => {
    var text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}
  return (
    <>
      <div className="mb-3">
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
        <label htmlFor="textbox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handelclokevnt} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#ceb6b6', color: props.mode === 'light' ? 'black' : 'white' }} placeholder="Enter Text" id="textbox" rows="3"></textarea>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handelckilk}>convert to upper</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handelckilklowe}>convert to lower</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handelckilkclear}>clear</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handelckilkcopy}>copy</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2><b>summary</b></h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes for read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to review'}</p>
      </div>
    </>
  )
}
