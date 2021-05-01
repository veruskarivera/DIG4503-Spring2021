import React, { useState } from "react";
import Axios from "axios";

function PatchStudent() {
  const [patchNID, setPatchNID] = useState("");
  const [patchFirstName, setPatchFirstName] = useState("");
  const [patchLastName, setPatchLastName] = useState("");
  const [patchMajor, setPatchMajor] = useState("");

  const PatchAStudent = async () => {
    const result = await Axios.patch(
      "http://localhost:45031/VeruskaRivera/" + patchNID,
      {
        NID: patchNID,
        firstName: patchFirstName,
        lastName: patchLastName,
        major: patchMajor
      }
    );
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
          setPatchNID(eventNID.target.value);
        }}
      ></input>
      <h5> First Name</h5>
      <input
        type="text"
        onChange={eventTitle => {
          setPatchFirstName(eventTitle.target.value);
        }}
      ></input>
      <h5> Last Name</h5>
      <input
        type="text"
        onChange={eventLastName => {
          setPatchLastName(eventLastName.target.value);
        }}
      ></input>
      <h5> Major</h5>
      <input
        type="text"
        onChange={eventMajor => {
          setPatchMajor(eventMajor.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          PatchAStudent();
        }}
      >
        Update Student
      </button>
    </div>
  );
}

export default PatchStudent;
