import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const View = () => {
  const {id} = useParams();
  const history = useHistory();
  const [student, setStudent] = useState([]);

  // show data
  useEffect(() => {
    getStudent();
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3000/students/${id}`);

        setStudent(student.data);
      } catch (error) {
        console.log("Somethin is wront");
      }
    }
  }, [id]);

    // Redirect home page function
    function handleClick() {
      history.push("/");
    }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="bg-warning p-3 text-white my-3 text-center">
              <h2>Student Details</h2>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{student.id} </th>
                  <td>{student.stuname}</td>
                  <td>{student.email}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center">
              <button onClick={handleClick} type="submit" className="btn btn-primary">
                BACK TO HOME
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
