import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [student, setStudent] = useState([]);

  // fetches data
  useEffect(() => {
    getAllStudent();
    async function getAllStudent() {
      try {
        const student = await axios.get("http://localhost:3000/students");
        setStudent(student.data);
      } catch (error) {
        console.log("Somethin is wrong");
      }
    }
  }, []);

  // delete item 
  const handleDelete = async (id)=>{
    await axios.delete(`http://localhost:3000/students/${id}`);
    var newStudent = student.filter((item)=>{
      return item.id !== id;
    })
    setStudent(newStudent);

  }
  return (
    <div>
      <div className="bg-warning p-3 text-white my-3 text-center">
        <h2>Student List</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th colspan="3" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {student.map((studentT, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td> {studentT.stuname} </td>
                <td> {studentT.email} </td>
                <td>
                  <Link to={`/view/${studentT.id}`}>View</Link>
                </td>
                <td>
                  <Link to={`/edit/${studentT.id}`}>Edit</Link>
                </td>
                <td>   <Link  onClick={() => handleDelete(studentT.id)}>Delete</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
