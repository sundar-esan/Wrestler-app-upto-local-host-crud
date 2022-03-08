import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";

export const EditWrestler = ({ wstlrList, setWstrlList }) => {
  const { id } = useParams();
  console.log(id);
  const wrstlr = wstlrList[id];
  console.log(wrstlr);

  const [name, setName] = useState(wrstlr.name);
  const [image, setImage] = useState(wrstlr.image);
  const [height, setHeight] = useState(wrstlr.height);
  const [weight, setWeight] = useState(wrstlr.weight);
  const [age, setAge] = useState(wrstlr.age);
  const [about, setAbout] = useState(wrstlr.about);

  const history = useHistory();

  return (
    <div className="new-wstlr-list">
      <TextField
        value={name}
        id="outlined-basic"
        label="name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        value={image}
        id="outlined-basic"
        label="image"
        variant="outlined"
        onChange={(event) => setImage(event.target.value)}
      />

      <TextField
        value={height}
        id="outlined-basic"
        label="height"
        variant="outlined"
        onChange={(event) => setHeight(event.target.value)}
      />

      <TextField
        value={weight}
        id="outlined-basic"
        label="weight"
        variant="outlined"
        onChange={(event) => setWeight(event.target.value)}
      />

      <TextField
        value={age}
        id="outlined-basic"
        label="age"
        variant="outlined"
        onChange={(event) => setAge(event.target.value)}
      />

      <TextField
        value={about}
        id="outlined-basic"
        label="about"
        variant="outlined"
        onChange={(event) => setAbout(event.target.value)}
      />

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          const updatedWstlr = {
            name: name,
            image: image,
            height: height,
            weight: weight,
            age: age,
            about: about,
          };
          const copyWstlrList = [...wstlrList];
          copyWstlrList[id] = updatedWstlr;
          setWstrlList(copyWstlrList);

          history.push("/wrestler");
        }}
      >
        Save
      </Button>
    </div>
  );
};
