import React,{useState} from 'react';


export default function TextForm(props) {
  const handleUpClick = () =>
  {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () =>
  {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) =>
  {
    setText(event.target.value)
  }
  const [text, setText] = useState("");

  const copyToClipboard = () =>
  {
    navigator.clipboard.writeText(text);
  }

  const handleExtraSpaces = () => 
  {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const calculateWords = () => {
    let numOfWords = 0;
    let words = text.split(" ");
    let length = words.length;
    numOfWords =
      words[length - 1] === "" || words[length - 1] === " "
        ? length - 1
        : length;
    return numOfWords;
  };

  return (
    <>
    <div className="container my-3" style = {{color: props.mode === 'dark'? 'white' :'black'}}>
        <h2>Enter your text</h2>
        <div className="mb-3">
        <textarea className="border border-danger border-3 form-control" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'#4c070e':'white', color: props.mode === 'dark'? 'white' :'black'}} id="myBox" rows="8"></textarea>
        </div>
        <h5>Your text has <b>{calculateWords()}</b> words, <b>{text.length}</b> characters and takes <b>{Math.round(0.008 * calculateWords() *100)/100}</b> minutes read!!</h5>
        <div className="btn btn-danger my-2 mx-2" onClick={handleUpClick}>Convert-to-uppercase</div>
        <div className="btn btn-danger my-2 mx-2" onClick={handleLoClick}>Convert-to-lowercase</div>
        <div className="btn btn-danger my-2 mx-2" onClick={copyToClipboard}>Copy-Text</div>
        <div className="btn btn-danger my-2 mx-2" onClick={handleExtraSpaces}>Remove-Extra-Spaces</div>
    </div>
    <div className="container my-3" style = {{color: props.mode === 'dark'? 'white' :'black'}}>
      <h2 className="preview">Preview</h2>
      <div className="mb-3">
        <textarea className={`border border-${props.mode === 'dark'? 'white':'success'} form-control`} value={text.length>0 ? text : "Enter some Text for the Preview"}  style = {{backgroundColor: props.mode==='dark'?'#4c070e':'white', color: props.mode === 'dark'? 'white' :'black'}} id="myBox" rows="8"></textarea>
      </div>
    </div>
    </>
  )
}


