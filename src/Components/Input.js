import { useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import EngineSelect from "./EngineSelect";
const { Configuration, OpenAIApi } = require("openai");


export default function Input() {

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);
  
  const [inputState, setInputState] = useState({
    inputField: "",
  });

  const [chooseEngine, setEngine] = useState();

  const handleEngineChange = (e) => {
      setEngine(e.target.value);
      console.log(e.target.value);
    };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
      setInputState({ ...inputState, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    requestPoem(inputState.inputField);
  };
  
  const localSave = (data) => {
    let storedAnswers = [];
    storedAnswers = JSON.parse(localStorage.getItem("prevAnswers")) || [];
    storedAnswers.unshift(data);
    localStorage.setItem("prevAnswers", JSON.stringify(storedAnswers));
    window.dispatchEvent(new Event("storage"));
  }
  
  const requestPoem = (data) => {
    openai.createCompletion("text-curie-001", {
        prompt: "finish a story that starts with " + data,
        temperature: 0.5,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        localSave(response.data.choices[0].text);
      });

    setInputState({ inputField: "" });
  };

  return (
    <div className="text-center">
      <EngineSelect props={chooseEngine} func={handleEngineChange} />
        <textarea
          type="text"
          className="col-9"
          placeholder="Enter a prompt!"
          id="inputField"
          name="inputField"
          value={inputState.inputField}
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
