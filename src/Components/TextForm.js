import React, { useState } from "react";
import "./TextForm.css";

const TextForm = (props) => {
  // Copy text
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    text
      ? props.showAlert("Copied to clipboard!", "info")
      : props.showAlert("Please Enter Some Text!", "warning");
  };

  // Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text
      ? props.showAlert("Converted to Uppercase!", "success")
      : props.showAlert("Please Enter Some Text!", "warning");
  };

  // Lowercase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text
      ? props.showAlert("Converted to Lowercase!", "success")
      : props.showAlert("Please Enter Some Text!", "warning");
  };

  // Capitalize each word
  const handleTitleClick = () => {
    const mySentence = text;

    if (!mySentence) {
      // Exit the function if the text is empty
      return;
    }
    const words = mySentence.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    setText(words.join(" "));
    text
      ? props.showAlert("Capitalized each word!", "success")
      : props.showAlert("Please Enter Some Text!", "warning");
  };

  // Togglecase
  const handleToggleClick = () => {
    let sentence = text;

    let toggledSentence = "";

    for (let i = 0; i < sentence.length; i++) {
      let currentChar = sentence.charAt(i);

      if (currentChar === currentChar.toUpperCase()) {
        toggledSentence += currentChar.toLowerCase();
      } else {
        toggledSentence += currentChar.toUpperCase();
      }
    }

    setText(toggledSentence);
    text
      ? props.showAlert("Toggled!", "success")
      : props.showAlert("Please Enter Some Text!", "warning");
  };

  // Clear
  const handleCLearClick = () => {
    setText("");
    text
      ? props.showAlert("Textarea Cleared!", "info")
      : props.showAlert("Please Enter Some Text!", "warning");
  };

  // Speak
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    text
      ? props.showAlert(`Said :- ${msg.text}!`, "info")
      : props.showAlert("Please Enter Some Text!", "warning");
  };

  // Remove extra spaces
  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text
      ? props.showAlert("Extra Spaces Removed!", "success")
      : props.showAlert("Please Enter Some Text!", "warning");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div
      style={{
        color: props.mode === "light" ? "#212529" : "#f8f9fa",
      }}
    >
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            placeholder="Enter your text"
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
              color: props.mode === "light" ? "#212529" : "#f8f9fa",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={handleCopy}
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
              border: props.mode === "light" ? "none" : "1px solid #f8f9fa",
              color: props.mode === "light" ? "#212529" : "#f8f9fa",
            }}
          >
            Copy
          </button>
          <button
            type="button"
            className="button"
            onClick={handleCLearClick}
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
              border: props.mode === "light" ? "none" : "1px solid #f8f9fa",
              color: props.mode === "light" ? "#212529" : "#f8f9fa",
            }}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="button"
            onClick={speak}
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
              border: props.mode === "light" ? "none" : "1px solid #f8f9fa",
              color: props.mode === "light" ? "#212529" : "#f8f9fa",
            }}
          >
            Speak
          </button>
          <button
            type="button"
            className="button"
            onClick={handleUpClick}
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
              border: props.mode === "light" ? "none" : "1px solid #f8f9fa",
              color: props.mode === "light" ? "#212529" : "#f8f9fa",
            }}
          >
            UPPERCASE
          </button>
          <button
            type="button"
            className="button"
            onClick={handleLowClick}
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
              border: props.mode === "light" ? "none" : "1px solid #f8f9fa",
              color: props.mode === "light" ? "#212529" : "#f8f9fa",
            }}
          >
            lowercase
          </button>
          <button
            type="button"
            className="button"
            onClick={handleTitleClick}
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
              border: props.mode === "light" ? "none" : "1px solid #f8f9fa",
              color: props.mode === "light" ? "#212529" : "#f8f9fa",
            }}
          >
            Titlecase
          </button>
          <button
            type="button"
            className="button"
            onClick={handleToggleClick}
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
              border: props.mode === "light" ? "none" : "1px solid #f8f9fa",
              color: props.mode === "light" ? "#212529" : "#f8f9fa",
            }}
          >
            Togglecase
          </button>
          <button
            type="button"
            className="button"
            onClick={handleSpaceClick}
            style={{
              backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529",
              border: props.mode === "light" ? "none" : "1px solid #f8f9fa",
              color: props.mode === "light" ? "#212529" : "#f8f9fa",
            }}
          >
            Remove Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-5
      "
      >
        <h2>Your Text Summary 💬</h2>
        <p>
          Your text contains{" "}
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words & {text.trim().length} characaters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Type something to preview 📝"}</p>
      </div>
    </div>
  );
};

export default TextForm;
