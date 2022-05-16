import { useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";

export default function Input() {
  const [formState, setFormState] = useState({
    inputField: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "inputField") {
      setFormState({ ...formState, [name]: value });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      requestPoem({ variables: { ...formState } });
    } catch (err) {
      console.error(err);
      alert("an error has occurred, please try again");
    }
    setFormState({ inputField: "" });
  };
  
  const requestPoem = (data) => {
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions?prompt=" + formState.inputField + "&instruction=text completion&max_tokens=5&temperature=0.1&echo=true/", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div className="text-center">
      <textarea
        type="text"
        className="col-9"
        placeholder="Enter a prompt!"
        id="inputField"
        name="inputField"
        value={formState.inputField}
        onChange={handleInputChange}
      />
      <div className="d-flex col-9 m-auto my-2 justify-content-end">
      <Button variant="primary" type="submit" onClick={handleSubmit} >Primary</Button>
      </div>
    </div>
  );
}
