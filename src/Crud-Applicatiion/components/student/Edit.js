import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import { deepPurple } from "@material-ui/core/colors";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  headingColor: {
    backgroundColor: "#ff4181",
    color: "white",
  },

});

const Edit = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });

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

  // input field onChange function

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  // form submit function
  async function onFormSubmit(e) {
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
    <>
       <Box textAlign="center" className={classes.headingColor} p={2}>
        <Typography variant="h3">React CRUD with API Call</Typography>
      </Box>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item md={8}>
          <Box
            textAlign="center"
            p={2}
            style={{ backgroundColor: "#90EE90", marginBottom: 20 }}
          >
            <Typography variant="h4">Edit Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField
                  onChange={(e) => onTextFieldChange(e)}
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  value={id}
                  id="stuname"
                  label="Name"
                  disabled
                  autoFocus
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  onChange={(e) => onTextFieldChange(e)}
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  value={student.stuname}
                  id="stuname"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  onChange={(e) => onTextFieldChange(e)}
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  value={student.email}
                  id="email"
                  label="Email Address"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Box m={3} textAlign="center">
              <Button
                onClick={(e) => onFormSubmit(e)}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Update
              </Button>
            </Box>
            <Box m={3} textAlign="center">
              <Button
                onClick={handleClick}
                type="submit"
                variant="contained"
                color="primary"
              >
                Back to Home
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
