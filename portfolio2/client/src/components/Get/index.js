//get
import React, { useState } from "react";
import Axios from "axios";

function GetStudent() {
  const [getNID, setGetNID] = useState("");

  const GetStudentNID = async () => {
    const result = await Axios.get(
      "http://localhost:45031/VeruskaRivera/" + getNID
    );
    console.log(result.data);
  };

  return (
    <div>
      <h5> Please enter the student's NID.</h5>
      <input
        type="text"
        onChange={event => setGetNID(event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          GetStudentNID();
        }}
      >
        Find Student
      </button>
    </div>
  );
}

export default GetStudent;
