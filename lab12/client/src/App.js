import PutBook from "./components/Put";
import GetBook from "./components/Get";
import DeleteBook from "./components/Delete";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Hi :)</h1>
      <h5> *have your ISBN handy! </h5>
      <h2> Add Book </h2>
      <PutBook />
      <h2> Search Book </h2>
      <GetBook />
      <h2> Delete Book</h2>
      <DeleteBook />
    </div>
  );
}

export default App;
