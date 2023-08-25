import React, { useState } from "react";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import Header from "./Components/Header";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#f8f9fa";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "#212529";
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      <Header title="MyText Converter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Please enter your text here"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
