import { Box, Button, Grid, TextField } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    id: nanoid(),
    name: "dvdvdvd",
    author: "dvdvdvvvv",
    price: "rrrr",
  });
  const formData1 = [
    { id: "1", name: "dvdvdvd", author: "dvdvdvvvv", price: "rrrr" },
  ];
  const changehandler = (e: { target: { name: any; value: any } }) => {
    // console.log(e.target.value);

    const { name, value } = e.target;

    // console.log({ name }, " value", { value });
    // setFormData((prev) => [
    //   ...prev,
    //   { name: value, author: value, price: value },
    // ]);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    console.log({ formData1 });
  };
  const saveHandler = () => {
    formData1.push(formData);
    console.log(formData1);
    const newArr = formData1.findIndex((i) => i.id === "1");
    console.log(newArr);
     //formData1.push(newArr)
   //  formData1.splice(newArr, {})
  };
  return (
    <Box
      component="form"
      sx={{
        m: 5,
        width: "100%",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Book Name"
              variant="outlined"
              name="name"
              onChange={(e) => changehandler(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Author"
              variant="outlined"
              name="author"
              onChange={(e) => changehandler(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Price"
              variant="outlined"
              name="price"
              onChange={(e) => changehandler(e)}
            />
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={2}>
        <Button onClick={saveHandler} variant="contained">
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default App;
