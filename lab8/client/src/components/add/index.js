import Axios from "axios";

import { useState } from "react";

function Add() {
  const [addName, setAddName] = useState("");

  function putName() {
    Axios.put("http://localhost:45030/people/" + addName)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("The error is " + error);
      });
  }

  return (
    <div>
      <p>Add Names</p>
      <input
        type="text"
        onChange={event => {
          setAddName(event.target.value);
        }}
      />
      <button onClick={() => putName()}>Add</button>
      {<p>Added: {addName}</p>}
    </div>
  );
}

export default Add;
