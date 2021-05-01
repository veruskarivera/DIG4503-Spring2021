import React, { useState } from "react";
import Axios from "axios";

function DeleteStudent() {
  const [deleteNID, setDeleteNID] = useState("");

  const DeleteStudentNID = async () => {
    const result = await Axios.delete(
      "http://localhost:45031/VeruskaRivera/" + deleteNID
    );
    console.log(result.data);
    alert("✅");
  };

  return (
    <div>
      <h5>Delete Student with NID. </h5>

      <input
        type="text"
        onChange={event => {
          setDeleteNID(event.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          DeleteStudentNID();
        }}
        npm
      >
        Delete Student
      </button>
    </div>
  );
}

export default DeleteStudent;
