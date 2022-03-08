import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export function AddWrestler({ wstlrList, setWstrlList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [about, setAbout] = useState("");

  return (
    <div className="new-wstlr-list">
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="image"
        variant="outlined"
        onChange={(event) => setImage(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="height"
        variant="outlined"
        onChange={(event) => setHeight(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="weight"
        variant="outlined"
        onChange={(event) => setWeight(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="age"
        variant="outlined"
        onChange={(event) => setAge(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="about"
        variant="outlined"
        onChange={(event) => setAbout(event.target.value)}
      />

      <Button
        variant="contained"
        onClick={() => {
          const newWrstlr = {
            name: name,
            image: image,
            height: height,
            weight: weight,
            age: age,
            about: about,
          };
          setWstrlList([...wstlrList, newWrstlr]);
        }}
      >
        Add Wrestler
      </Button>
    </div>
  );
}
