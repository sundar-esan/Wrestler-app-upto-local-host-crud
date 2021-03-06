import "./App.css";
import { Counter } from "./Counter";
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Switch, Route } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { EditWrestler } from "./EditWrestler";
import { Welcome } from "./Welcome";
import { AddWrestler } from "./AddWrestler";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

function App() {
  const InitialWstlrList = [
    {
      name: "Dave Bautista",
      image:
        "https://i2-prod.mirror.co.uk/incoming/article11576407.ece/ALTERNATES/n310p/Batista.jpg",
      height: "6 ft 6 in (198 cm)",
      weight: "290 lb (132 kg)",
      age: "53",
      about:
        "David Michael Bautista Jr.born January 18, 1969 is an American actor and former professional wrestler. ... From 2002 to 2010, he gained fame under the ring name Batista and became a six-time world champion by winning the World Heavyweight Championship four times and the WWE Championship twice.",
    },
    {
      name: "THE ROCK",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dwayne-the-rock-johnson-looks-on-during-his-match-against-news-photo-1569879276.jpg",
      height: "6 ft 5 in (196 cm)",
      weight: "260 lb (118 kg)",
      age: "49",
      about:
        "Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American actor, businessman, and former professional wrestler. Widely regarded as one of the greatest professional wrestlers of all time, he wrestled for WWE for eight years prior to pursuing an acting career.",
    },
    {
      name: "John Cena",
      image:
        "https://www.tampabay.com/resizer/xwEGPookcYUmf8HyFXTi3UeqL18=/852x1064/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/DUZK27GJKQI6TMRBPAY4DVT77I.jpg",
      height: "6 ft 1 in (185 cm)",
      weight: "251 lb (114 kg)",
      age: "44",
      about:
        "John Felix Anthony Cena (/??si??n??/ SEE-n??; born April 23, 1977) is an American professional wrestler, actor, and former rapper, currently signed to WWE. ... He gained fame in the WWE after adopting the persona of a trash-talking rapper. He won his first singles title, the United States Championship, in 2004.",
    },
    {
      name: "The Great Khali",
      image:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/01/961235-gyjgj.jpg",
      height: "2.16 m (7 ft 1 in)",
      weight: "157 kg (347 lb)",
      age: "49",
      about:
        "Dalip Singh Rana (born 27 August 1972) is an Indian professional wrestler, wrestling promoter, and actor. He is best known for his time in WWE under the ring name The Great Khali. He made his professional wrestling debut in 2000.",
    },
    {
      name: "Randy Orton",
      image:
        "https://icdn.benchwarmers.ie/wp-content/uploads/2021/03/Randy-Orton.jpeg",
      height: "6 ft 5 in (196 cm)",
      weight: "250 lb (113 kg)",
      age: "41",
      about:
        "Randal Keith Randy Orton (born April 1, 1980) is an American professional wrestler and actor best known to sports entertainment audiences for his career signed with WWE. Orton was born in Knoxville, Tennessee, to Bob Orton, Jr. ... After his brief military tenure, Orton opted for a career in professional wrestling.",
    },
  ];
  const [wstlrList, setWstrlList] = useState(InitialWstlrList);
  const history = useHistory();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => history.push("/wrestler")}>
            Wrestler List
          </Button>
          <Button color="inherit" onClick={() => history.push("/wrestler/add")}>
            Add Wrestler
          </Button>
        </Toolbar>
      </AppBar>
      <div className="route-container">
      <Switch>
        <Route path="/wrestler/add">
          <AddWrestler wstlrList={wstlrList} setWstrlList={setWstrlList} />
        </Route>
        <Route path="/wrestler/edit/:id">
          <EditWrestler wstlrList={wstlrList} setWstrlList={setWstrlList} />
        </Route>
        <Route path="/wrestler">
          <div className="wstlr-list">
            {wstlrList.map((ele, index) => (
              <Wrestler
                key={index}
                image={ele.image}
                name={ele.name}
                height={ele.height}
                weight={ele.weight}
                age={ele.age}
                about={ele.about}
                removeButton={
                  <Button
                    onClick={() => {
                      console.log(index);
                      const copyWstlrList = [...wstlrList];
                      copyWstlrList.splice(index, 1);
                      setWstrlList(copyWstlrList);
                    }}
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                }
                editButton={
                  <Button
                    onClick={() => history.push(`/wrestler/edit/${index}`)}
                    variant="outlined"
                    color="secondary"
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                }
              />
            ))}
          </div>
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;

function Wrestler({
  image,
  name,
  height,
  weight,
  age,
  about,
  removeButton,
  editButton,
}) {
  const [show, setShow] = useState(true);

  return (
    <Card className="wstlr-container">
      <img src={image} alt={name} className="wstlr-img" />
      <CardContent>
        <h2 className="wstlr-name">
          {name}

          <IconButton
            onClick={() => setShow(!show)}
            color="primary"
            aria-label="toogle-summary"
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </h2>
        <p className="wstlr-height">
          <b>Height:</b>
          {height}
        </p>
        <p className="wstlr-weight">
          <b>Weight:</b>
          {weight}
        </p>
        <p className="wstlr-age">
          <b>Age :</b>
          {age}
        </p>
        {show ? <p className="abt-wstlr">{about}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />
        {removeButton} {editButton}
      </CardActions>
    </Card>
  );
}
