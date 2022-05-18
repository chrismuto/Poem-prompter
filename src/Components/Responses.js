import { useState } from "react";
import React from "react";
import Input from "./Input";

export default function Responses() {

    const [responseState, setResponseState] = useState({
        response: "",
    });

    return (
        <div className="d-flex justify-content-center mt-5">
                  <div name="response" value={responseState.response}></div>
        </div>
    );
}