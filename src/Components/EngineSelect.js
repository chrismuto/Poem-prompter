import React from "react";

export default function EngineSelect(props) {

  return (
    <div className="text-center">
        <select
        className="col-3 my-3"
        name="engines"
        id="engineMenu"
        placeholder="select an engine"
        value={props.chooseEngine}
        defaultValue=""
        onChange={props.func}>
            <option label="text-curie-001" value="text-curie-001">text-curie-001</option>
            <option label="text-davinci-002" value="text-davinci-002">text-davinci-002</option>
            <option label="text-ada-001" value="text-ada-001">text-ada-001</option>
        </select>
    </div>
  );
}
