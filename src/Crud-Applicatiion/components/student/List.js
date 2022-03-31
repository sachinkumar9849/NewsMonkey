import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  makeStyles,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@material-ui/core";
// import { deepPurple, green, orange } from "@material-ui/core/colors";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  editColor: {
    backgroundColor: "#0ea1c2",
    color: "white",
  },
  editColor: {
    backgroundColor: "#0ea1c2",
    color: "white",
    "&:hover": {
      background: "#048aa9",
    },
  },
  view: {
    backgroundColor: "#0EC26D",

    "&:hover": {
      background: "#0baa5f",
    },
  },
  delete: {
    backgroundColor: "#dd2828db",
    "&:hover": {
      background: "#dd2828",
    },
  },
  list_th: {
    backgroundColor: "#2a3958",
  },
  MuiIconButtonRoot: {
    borderRadius: "2px",
    height: "40px",
    width: "40px",
  },
  MuiTableCell_root: {
    padding: "10px",
  },

  MuiTableCell_root: {
    padding: "10px",
  },
});

const List = () => {
  const classes = useStyles();

  const [student, setStudent] = useState([]);

  useEffect(() => {
    getAllStudent();
    async function getAllStudent() {
      try {
        const student = await axios.get("http://localhost:3000/students");
        setStudent(student.data);
      } catch (error) {
        console.log("Somethin is wront");
      }
    }
  }, []);

  // Delete function
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/students/${id}`);
    var newstudent = student.filter((item) => {
      return item.id !== id;
      console.log(item);
    });
    setStudent(newstudent);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className={classes.list_th}>
            <TableRow>
              <TableCell align="center" className="text-white">
                NO
              </TableCell>
              <TableCell align="center" className="text-white">
                Name
              </TableCell>
              <TableCell align="center" className="text-white">
                Email
              </TableCell>
              <TableCell colspan={3} align="center" className="text-white">
                
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody align="center">
            {student.map((studentT, i) => {
              return (
                <TableRow key={i}>
                  <TableCell
                    className={classes.MuiTableCell_root}
                    align="center"
                  >
                    {i + 1}
                  </TableCell>
                  <TableCell
                    className={classes.MuiTableCell_root}
                    align="center"
                  >
                    {" "}
                    {studentT.stuname}{" "}
                  </TableCell>
                  <TableCell
                    className={classes.MuiTableCell_root}
                    align="center"
                  >
                    {studentT.email}
                  </TableCell>
                  <TableCell
                    className={classes.MuiTableCell_root}
                    align="center"
                  >
                    <Tooltip title="View">
                      <IconButton
                        className={`${classes.view} ${classes.MuiIconButtonRoot}`}
                      >
                        <Link
                          className="text-white"
                          to={`/view/${studentT.id}`}
                        >
                          <VisibilityIcon></VisibilityIcon>
                        </Link>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    className={classes.MuiTableCell_root}
                    align="center"
                  >
                    <Tooltip title="Edit">
                      <IconButton
                        className={`${classes.editColor} ${classes.MuiIconButtonRoot}`}
                      >
                        <Link
                          className="text-white"
                          to={`/edit/${studentT.id}`}
                        >
                          <EditIcon></EditIcon>
                        </Link>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    className={classes.MuiTableCell_root}
                    align="center"
                  >
                    <Tooltip title="Delete">
                      <IconButton
                        className={`${classes.delete} ${classes.MuiIconButtonRoot}`}
                        onClick={() => handleDelete(studentT.id)}
                      >
                        <Link>
                          <DeleteIcon className="text-white"></DeleteIcon>
                        </Link>
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
