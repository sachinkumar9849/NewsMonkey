import React, { useState } from "react";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import axios from "axios";
// import { pink } from "@material-ui/core/colors";
import List from "../student/List";

const useStyles = makeStyles({
  headingColor: {
    backgroundColor: "#ff4181",
    color: "white",
  },
  editColor: {
    backgroundColor: "#0ea1c2",
    color: "white",
  },
  add_section: {
    background: "rgb(14 161 194 / 68%)",
    marginBottom: "17px",
    padding: '8px',
    
  },
});

const Home = () => {
  const classes = useStyles();

  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });

  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }
  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/students`, student);
      setStatus(true);
    } catch (error) {
      console.log("Somethin is wront");
    }
  }
  if (status) {
    return <Home />;
  }

  return (
    <>
      <Box textAlign="center" className={classes.headingColor} p={2}>
        <Typography variant="h3">React CRUD with API Call</Typography>
      </Box>
      <Grid container >
        <Grid item  md={6}>
          <Box className={classes.add_section} textAlign="center" p={2}>
            <Typography variant="h4" className="text-white">Add Student</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <TextField
                  onChange={(e) => onTextFieldChange(e)}
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
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
                  id="email"
                  label="Email Address"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                onClick={(e) => onFormSubmit(e)}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item md={6}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
