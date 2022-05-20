import { useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";
const { Configuration, OpenAIApi } = require("openai");


export default function Input() {

  
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);
  
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
    requestPoem(formState.inputField);
  };
  
  const localSave = (data) => {
    let storedAnswers = [];
    storedAnswers = JSON.parse(localStorage.getItem("prevAnswers")) || [];
    storedAnswers.push(data);
    console.log(storedAnswers);
    localStorage.setItem("prevAnswers", JSON.stringify(storedAnswers));
  }
  
  const requestPoem = (data) => {
    openai.createCompletion("text-curie-001", {
        prompt: "finish a story that starts with " + data,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        localSave(response.data.choices[0].text);
      });

    setFormState({ inputField: "" });
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
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Send Prompt
        </Button>
      </div>
    </div>
  );
}
