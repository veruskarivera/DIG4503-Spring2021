import PutAStudent from "./components/Put";
import GetStudent from "./components/Get";
import PatchStudent from "./components/Patch";
import DeleteStudent from "./components/Delete";
import "./App.css";
import ucf from "./ucf.png";


function App() {
  return (
    <div className="App">
      <img src={ucf} alt="Logo"></img>
      <h1 className="title"> Student Database</h1>
      <div className="Add">
        <h2> Add New Student </h2>
        <PutAStudent />
      </div>
      <div className="Search">
        <h2> Search for Existing Student </h2>
        <GetStudent />
      </div>
      <div className="Search">
        <h2> Update Existing Student </h2>
        <PatchStudent />
      </div>
      <div className="Delete">
        <h2> Delete Student</h2>
        <DeleteStudent />
      </div>
    </div>
  );
}

export default App;

