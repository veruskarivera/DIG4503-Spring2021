//get
import React, { useState } from "react";
import Axios from "axios";

function GetBook() {
  const [getISBN, setGetISBN] = useState("");

  const GetBookISBN = async () => {
    const result = await Axios.get("http://localhost:45030/books/" + getISBN);
    console.log(result.data);
  };

  return (
    <div>
      <h5> Please enter your book's ISBN.</h5>
      <input
        type="text"
        onChange={event => setGetISBN(event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          GetBookISBN();
        }}
      >
        Find it
      </button>
    </div>
  );
}

export default GetBook;
