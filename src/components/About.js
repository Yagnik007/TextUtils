import React from "react";

export default function About(props) {

  let myStyle = 
  {
    color: props.mode === 'dark'? 'white' : 'black',
    backgroundColor : props.mode === 'dark' ? '#4c070e' : 'white'
  }

  return (
    <div className="container" >
      <h1 className = "my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              // aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5>Analyze Your text</h5>
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or Time to read
              your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h5>Free to use</h5>
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a free character counter tool that provides instant
              character count and word count statistics for a given text.
              Textutils reports the number of characters and words. Thus it is
              suitable for writing text with word/character limits.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5>Browser Compatbile</h5>
            </button>
          </h2>
          <div
            style={myStyle}
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              chrome, Firefox, Safari, Opera. It suits to count characters in
              facebook, blog, books, excel documents, pdf documents, essays,
              etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
