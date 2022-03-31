import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Edit = () => {
  const history = useHistory();
  const { id } = useParams();
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });

  // show data
  useEffect(() => {
    getStudent();
    async function getStudent() {
      try {
        const showStudent = await axios.get(
          `http://localhost:3000/students/${id}`
        );

        setStudent(showStudent.data);
      } catch (error) {
        console.log("Somethin is wront");
      }
    }
  }, [id]);

  // on change function
  function onChangeInput(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  // update data

  async function studentUpDate(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/students/${id}`, student);
      history.push("/");
    } catch (error) {
      console.log("Somethin is wront");
    }
  }

  // Redirect home page function
  function handleClick() {
    history.push("/");
  }
  return (
    <div>
      <section id="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center bg-success text-white p-3">
              <h1>React CRUD With API Call</h1>
            </div>
          </div>
          <dir className="row">
            <div className="col-md-6 m-auto">
              <div className="bg-info p-3 text-white my-3 text-center">
                <h2>Add Student</h2>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label" for="disabledTextInput">
                    Id
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="disabledTextInput"
                    value={id}
                  />
                  <label className="form-label">Name</label>
                  <input
                    onChange={(e) => onChangeInput(e)}
                    type="text"
                    className="form-control"
                    id="stuname"
                    name="stuname"
                    value={student.stuname}
                  />
                  <label className="form-label">Email address</label>
                  <input
                    onChange={(e) => onChangeInput(e)}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={student.email}
                  />
                </div>

                <div className="d-flex flex-column align-items-center">
                  <button
                    onClick={(e) => studentUpDate(e)}
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    UPDATE
                  </button>
                  <button
                    onClick={handleClick}
                    type="submit"
                    className="btn btn-primary mt-2 w-25"
                  >
                    BACK TO HOME
                  </button>
                </div>
              </form>
            </div>
          </dir>
        </div>
      </section>
    </div>
  );
};

export default Edit;
