import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  makeStyles,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography
} from "@material-ui/core";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";



const useStyles = makeStyles({
  headingColor: {
    backgroundColor: "#ff4181",
    color: "white",
  },
  list_th: {
    backgroundColor: "#2a3958",
  },

});

const View = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [showStudent, setShowStudent] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getStudent();

    async function getStudent() {
      try {
        const showStudent = await axios.get(
          `http://localhost:3000/students/${id}`
        );

        setShowStudent(showStudent.data);
      } catch (error) {
        console.log("Somethin is wront");
      }
    }
  }, [id]);

  function handleClick() {
    history.push("/");
  }

  console.log(id);
  return (
    <div>
       <Box textAlign="center" className={classes.headingColor} p={2}>
        <Typography variant="h3">React CRUD with API Call</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className={classes.list_th}>
            <TableRow>
              <TableCell className="text-white font-weight-bold" align="center">ID</TableCell>
              <TableCell className="text-white font-weight-bold" align="center">Name</TableCell>
              <TableCell className="text-white font-weight-bold" align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody align="center">
            <TableCell align="center"> {showStudent.id} </TableCell>
            <TableCell align="center"> {showStudent.stuname} </TableCell>
            <TableCell align="center"> {showStudent.email} </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button onClick={handleClick} variant="contained" color="primary">
          Back to Home
        </Button>
      </Box>
    </div>
  );
};

export default View;
