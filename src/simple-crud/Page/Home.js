import React, { useState } from "react";
import axios from "axios";
import List from "../Student/List";

const Home = () => {
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });

  // post data
  const [status, setStatus] = useState();
  async function addStudent(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/students`, student);
      setStatus(true);
    } catch (error) {
      console.log("Something is rong");
    }
  }

  // on change function
  function onChangeInput(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  if (status) {
    return <Home />;
  }
  return (
    <>
      <section id="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center bg-success text-white p-3">
              <h1>React CRUD With API Call</h1>
            </div>
          </div>
          <dir className="row">
            <div className="col-md-6">
              <div className="bg-info p-3 text-white my-3 text-center">
                <h2>Add Student</h2>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    onChange={(e) => onChangeInput(e)}
                    type="text"
                    name="stuname"
                    className="form-control"
                    id="stuname"
                  />
                  <label className="form-label">Email address</label>
                  <input
                    onChange={(e) => onChangeInput(e)}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>

                <button
                  onClick={(e) => addStudent(e)}
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  ADD
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <List />
            </div>
          </dir>
        </div>
      </section>
    </>
  );
};

export default Home;
