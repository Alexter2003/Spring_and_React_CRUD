import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import ListOfPersons from "./person/ListOfPersons";
import AddPerson from "./person/AddPerson";
import EditPerson from "./person/EditPerson";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ListOfPersons />} />
        <Route exact path="/add-person" element={<AddPerson />} />
        <Route exact path="/edit-person/:id" element={<EditPerson />} />
      </Routes>
    </div>
  );
}

export default App;
