import React, { useState } from "react";
import Axios from "axios";

function DeleteBook() {
  const [deleteISBN, setDeleteISBN] = useState("");

  const DeleteBookISBN = async () => {
    const result = await Axios.delete(
      "http://localhost:45030/books/" + deleteISBN
    );
    console.log(result.data);
  };

  return (
    <div>
      <h5>Deleting something? Enter the book's ISBN </h5>

      <input
        type="text"
        onChange={event => {
          setDeleteISBN(event.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          DeleteBookISBN();
        }}
      >
        Delete it
      </button>
    </div>
  );
}

export default DeleteBook;
