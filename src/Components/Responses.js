import { useEffect, useState } from "react";
import React from "react";

export default function Responses() {
  let storedAnswers = JSON.parse(localStorage.getItem("prevAnswers")) || [];

  const [formState, setFormState] = useState({
    prevResponse: storedAnswers,
  });

  const storageUpdate = () => {
    setFormState({ ...formState, storedAnswers })
};

    useEffect(() => {
        storageUpdate();
    }, [localStorage])

console.log(formState);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div name="prevResponse" value={formState.prevResponse}>
        {formState.prevResponse.map((item) => (
          <div key={item._id}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
