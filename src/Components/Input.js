import { useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";

export default function Input() {
  const [formState, setFormState] = useState({
    inputText: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "inputField") {
      setFormState({ ...formState, [name]: value });
    }
    console.log(formState);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // requestPoem({ variables: { ...formState } });
      } catch (err) {
        console.error(err);
        alert("an error has occurred, please try again");
      }
      setFormState({ inputText: "" });
    };
  };

  // const requestPoem = (data) => {
  //   fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.local.API_KEY}`,
  //     },
  //     body: JSON.stringify(data),
  //   });
  // };
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
      <Button variant="primary">Primary</Button>{' '}
      </div>
    </div>
  );
}
