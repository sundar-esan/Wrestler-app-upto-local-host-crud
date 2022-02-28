import './App.css';
import { Counter } from "./Counter";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {Link,Switch,Route} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const InitialWstlrList=[
    {name:"Dave Bautista",
      image:"https://i2-prod.mirror.co.uk/incoming/article11576407.ece/ALTERNATES/n310p/Batista.jpg",
      height:"6 ft 6 in (198 cm)",
      weight:"290 lb (132 kg)",
      age:"53",
      about:"David Michael Bautista Jr.born January 18, 1969 is an American actor and former professional wrestler. ... From 2002 to 2010, he gained fame under the ring name Batista and became a six-time world champion by winning the World Heavyweight Championship four times and the WWE Championship twice." 
    },
    {name:"THE ROCK",
      image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dwayne-the-rock-johnson-looks-on-during-his-match-against-news-photo-1569879276.jpg",
      height:"6 ft 5 in (196 cm)",
      weight:"260 lb (118 kg)",
      age:"49",
      about:"Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name The Rock, is an American actor, businessman, and former professional wrestler. Widely regarded as one of the greatest professional wrestlers of all time, he wrestled for WWE for eight years prior to pursuing an acting career."
     },
      {name:"John Cena",
      image:"https://www.tampabay.com/resizer/xwEGPookcYUmf8HyFXTi3UeqL18=/852x1064/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/DUZK27GJKQI6TMRBPAY4DVT77I.jpg",
      height:"6 ft 1 in (185 cm)",
      weight:"251 lb (114 kg)",
      age:"44",
      about:"John Felix Anthony Cena (/ˈsiːnə/ SEE-nə; born April 23, 1977) is an American professional wrestler, actor, and former rapper, currently signed to WWE. ... He gained fame in the WWE after adopting the persona of a trash-talking rapper. He won his first singles title, the United States Championship, in 2004."
     },
      {name:"The Great Khali",
      image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/03/01/961235-gyjgj.jpg",
      height:"2.16 m (7 ft 1 in)",
      weight:"157 kg (347 lb)",
      age:"49",
      about:"Dalip Singh Rana (born 27 August 1972) is an Indian professional wrestler, wrestling promoter, and actor. He is best known for his time in WWE under the ring name The Great Khali. He made his professional wrestling debut in 2000."
     },
     {name:"Randy Orton",
     image:"https://icdn.benchwarmers.ie/wp-content/uploads/2021/03/Randy-Orton.jpeg",
     height:"6 ft 5 in (196 cm)",
     weight:"250 lb (113 kg)",
     age:"41",
     about:"Randal Keith Randy Orton (born April 1, 1980) is an American professional wrestler and actor best known to sports entertainment audiences for his career signed with WWE. Orton was born in Knoxville, Tennessee, to Bob Orton, Jr. ... After his brief military tenure, Orton opted for a career in professional wrestling."
    }
      

  ]
  const [wstlrList,setWstrlList]=useState(InitialWstlrList);
  const [name,setName]=useState("");
  const [image,setImage]=useState("");
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [age,setAge]=useState("");
  const [about,setAbout]=useState("");
  return (
    <div className="App">
    
      <ul>
        <li>
          <Link to="/wrestler">Wrestler List</Link>
        </li>
       
      </ul>
      <Switch>
        <Route path="/wrestler">
        <div className="new-wstlr-list">

<TextField id="outlined-basic" label="name" variant="outlined"onChange={(event)=>setName(event.target.value)} />
  
  <TextField id="outlined-basic" label="image" variant="outlined" onChange={(event)=>setImage(event.target.value)}/>
 
  <TextField id="outlined-basic" label="height" variant="outlined" onChange={(event)=>setHeight(event.target.value)}/>
 
  <TextField id="outlined-basic" label="weight" variant="outlined" onChange={(event)=>setWeight(event.target.value)}/>
  
  <TextField id="outlined-basic" label="age" variant="outlined" onChange={(event)=>setAge(event.target.value)} />
 
  <TextField id="outlined-basic" label="about" variant="outlined" onChange={(event)=>setAbout(event.target.value)} />
  
  <Button variant="contained"  onClick={()=>{
    const newWrstlr={
      name:name,
      image:image,
      height:height,
      weight:weight,
      age:age,
      about:about
    };
    setWstrlList([...wstlrList,newWrstlr]);
  }}>Add Wrestler</Button>
</div>
<div className="wstlr-list">
{wstlrList.map((ele,index)=><Wrestler 
key={index}
image={ele.image}
name={ele.name}
height={ele.height}
weight={ele.weight}
age={ele.age}
about={ele.about}
removeButton={
  <Button onClick={()=>{
    console.log(index);
    const copyWstlrList=[...wstlrList];
    copyWstlrList.splice(index,1)
    setWstrlList( copyWstlrList)
  
    }} variant="outlined"  color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>}

/>)}  
</div>  


        </Route>
        
      </Switch>


   
    </div>
  );
}

export default App;
function Wrestler({image,name,height,weight,age,about,removeButton}){
  const [show,setShow] = useState(true);
  
  return(
    <Card className="wstlr-container">
      <img src={image} alt={name} className="wstlr-img"/>
      <CardContent>
      <h2 className="wstlr-name">{name}
      
      <IconButton onClick={()=>setShow(!show)} color="primary" aria-label="toogle-summary">
       {show ? <ExpandLessIcon/> : <ExpandMoreIcon />}
      </IconButton>

      </h2>
      <p className="wstlr-height"><b>Height:</b>{height}</p>
      <p className="wstlr-weight"><b>Weight:</b>{weight}</p>
      <p className="wstlr-age"><b>Age :</b>{age}</p>
     { show ? <p className="abt-wstlr">{about}</p> : ""}
     </CardContent>
     <CardActions>
      <Counter/>{removeButton}
      </CardActions>
    </Card>

  )
}
