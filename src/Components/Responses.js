import { useState } from "react";
import React from "react";

export default function Responses() {
  let storedAnswers = JSON.parse(localStorage.getItem("prevAnswers")) || {};

  const [responses, setResponses] = useState({
    prevResponse: storedAnswers,
  });

//   const storageUpdate = () => {
//     setResponses({ ...responses, storedAnswers })
// };

window.addEventListener('storage', () => {
    storedAnswers = JSON.parse(localStorage.getItem("prevAnswers"));
    setResponses({ ...responses, prevResponse: storedAnswers });
})

console.log(responses);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div name="prevResponse" className="d-flex-block justify-content-center col-10">
        {responses.prevResponse.map((item) => (
          <div key={Object.keys(item)} className="mx-5 my-3 p-2 responses">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
