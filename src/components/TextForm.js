import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE!!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard!!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!!", "success");
  };

  const clearText = () => {
    setText('');
  }

  // const calculateWords = () => {
  //   let numOfWords = 0;
  //   let words = text.split(" ");
  //   let length = words.length;
  //   numOfWords =
  //     words[length - 1] === "" || words[length - 1] === " "
  //       ? length - 1
  //       : length;
  //   return numOfWords;
  // };

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Enter your text</h2>
        <div className="mb-3">
          <textarea
            className="border border-danger border-3 form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#4c070e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <h5>
          Your text has{" "}
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          Words,  
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length === 0 ? 0 : text.length
            }
          </b>{" "}
          Characters and takes{" "}
          <b>
            {Math.round(
              0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length *
                100
            ) / 100}
          </b>{" "}
          minutes to read!!
        </h5>
        <div>
        <button disabled = {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length === 0} className="btn btn-danger my-2 mx-2" onClick={handleUpClick}>
          UpperCase
        </button>
        <button disabled = {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length === 0} className="btn btn-danger my-2 mx-2" onClick={handleLoClick}>
          LowerCase
        </button>
        <button disabled = {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length === 0} className="btn btn-danger my-2 mx-2" onClick={copyToClipboard}>
          Copy
        </button>
        <button disabled = {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length === 0} className="btn btn-danger my-2 mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled = {text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length === 0} className="btn btn-danger my-2 mx-2" onClick={clearText}>
          Clear Text
        </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="preview">Preview</h2>
        <div className="mb-3">
          <textarea
            className={`border border-${
              props.mode === "dark" ? "white" : "success"
            } form-control`}
            value={text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length > 0 ? text : "Nothing to Preview"}
            style={{
              backgroundColor: props.mode === "dark" ? "#4c070e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            readOnly
            id="myBox"
            rows="8"
          ></textarea>
        </div>
      </div>
    </>
  );
}
