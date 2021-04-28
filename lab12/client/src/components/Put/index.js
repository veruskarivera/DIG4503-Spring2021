import React, { useState } from "react";
import Axios from "axios";

function PutBook() {
  const [putISBN, setPutISBN] = useState("");
  const [putTitle, setPutTitle] = useState("");
  const [putAuthor, setPutAuthor] = useState("");
  const [putDescription, setPutDescription] = useState("");

  const PutNewBook = async () => {
    const result = await Axios.put("http://localhost:45030/books/" + putISBN, {
      isbn: putISBN,
      title: putTitle,
      author: putAuthor,
      description: putDescription
    });
    console.log(result.data);
  };
  return (
    <div>
      <h5> Please fill book's information.</h5>
      <h5> ISBN</h5>
      <input
        type="text"
        onChange={eventISBN => {
          setPutISBN(eventISBN.target.value);
        }}
      ></input>
      <h5> Title</h5>
      <input
        type="text"
        onChange={eventTitle => {
          setPutTitle(eventTitle.target.value);
        }}
      ></input>
      <h5> Author</h5>
      <input
        type="text"
        onChange={eventAuthor => {
          setPutAuthor(eventAuthor.target.value);
        }}
      ></input>
      <h5> Description</h5>
      <input
        type="text"
        onChange={eventDescription => {
          setPutDescription(eventDescription.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button
        onClick={() => {
          PutNewBook();
        }}
      >
        Add it
      </button>
    </div>
  );
}

export default PutBook;
