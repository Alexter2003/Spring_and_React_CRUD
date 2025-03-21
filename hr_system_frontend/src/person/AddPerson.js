import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddPerson() {
  const navigate = useNavigate();
  const [person, setPerson] = React.useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    age: "",
  });

  const onInputChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:8080/api/hr/persons";
    try {
      await axios.post(URL, person);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h1>Add Person</h1>
      </div>
      <form onSubmit={onSubmit}>
        <fieldset>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
              placeholder="Name"
              value={person.name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="form-control"
              name="lastname"
              placeholder="Last Name"
              value={person.lastname}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={person.email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="form-control"
              name="phone"
              placeholder="Phone"
              value={person.phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              name="address"
              placeholder="Address"
              value={person.address}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              id="age"
              className="form-control"
              name="age"
              placeholder="Age"
              value={person.age}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning btn-sm me-3">
              Add
            </button>
            <a href="/" className="btn btn-danger btn-sm">
              Back
            </a>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
