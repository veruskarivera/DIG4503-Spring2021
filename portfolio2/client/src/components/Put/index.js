import React, { useState } from "react";
import Axios from "axios";

function PutStudent() {
  const [putNID, setPutNID] = useState("");
  const [putFirstName, setPutFirstName] = useState("");
  const [putLastName, setPutLastName] = useState("");
  const [putMajor, setPutMajor] = useState("");

  const PutNewStudent = async () => {
    const result = await Axios.put("http://localhost:45031/VeruskaRivera/" + putNID, {
      NID: putNID,
      firstName: putFirstName,
      lastName: putLastName,
      major: putMajor
    });
    console.log(result.data);
    alert("✅");
  };
  return (
    <div>
      <h5> Please fill student's information.</h5>
      <h5> NID</h5>
      <input
        type="text"
        onChange={eventNID => {
          setPutNID(eventNID.target.value);
        }}
      ></input>
      <h5> First Name</h5>
      <input
        type="text"
        onChange={eventTitle => {
          setPutFirstName(eventTitle.target.value);
        }}
      ></input>
      <h5> Last Name</h5>
      <input
        type="text"
        onChange={eventLastName => {
          setPutLastName(eventLastName.target.value);
        }}
      ></input>
      <h5> Major</h5>
      <input
        type="text"
        onChange={eventMajor => {
          setPutMajor(eventMajor.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          PutNewStudent();
        }}
      >
        Add Student
      </button>
    </div>
  );
}

export default PutStudent;
