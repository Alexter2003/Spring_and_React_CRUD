import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function ListOfPersons() {
  const url = "http://localhost:8080/api/hr/persons";
  const [persons, setPersons] = React.useState([]);

  React.useEffect(() => {
    takeData();
  }, []);

  const takeData = async () => {
    const rs = await axios.get(url);
    setPersons(rs.data);
    console.log(rs.data);
  };

  const deletePerson = async (id) => {
    await axios.delete(`${url}/${id}`);
    takeData();
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h1>Human Resource System</h1>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {persons &&
            persons.map((person) => (
              <tr>
                <th scope="row">{person.id_person}</th>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>{person.address}</td>
                <td className="text-center">
                  <div>
                    <Link to={`/edit-person/${person.id_person}`}>
                      <button className="btn btn-primary me-3">Edit</button>
                    </Link>
                    <button
                      onClick={() => deletePerson(person.id_person)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
