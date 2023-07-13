 
import './App.css';
import {useState} from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Icon from '@mui/material/Icon';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Welcome } from './Welcome';
import Trailer from './Trailer';
// Route import
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  NavLink,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { ColorBox } from './ColorBox';

// first component


  const movieAdd =
 
      [{
      name: "Vikram",
      poster:
      "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.1,
      summary:
      "Members of a black ops team must track and eliminate a gang of masked murderers.",
      },
      {
      name: "June",
      poster:
      "https://m.media-amazon.com/images/M/MV5BN2MzOTU1ZTEtN2Q1OC00MDZkLTk4YjctZGE0ZjAyMDA5ODI2XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX1000_.jpg",
      rating: 7.4,
      summary:
      "June, a teenager, believes that there is nothing remarkable about her. She experiences adolescent crushes, handles heartbreaks and fights insecurities as she grows into a mature and confident woman.",
      
      },
      {
      name: "Iron man 2",
      poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      
      },
      {
      name: "No Country for Old Men",
      poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      },
      {
      name: "Jai Bhim",
      poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      
      },
      {
      name: "The Avengers",
      rating: 7.7,
      summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      
      },
      {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      
      },
      {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 7,
      summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      
      },
      {
      name: "Ratatouille",
      poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 6.4,
      summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      }];

// adding more films
function App(){
  const Navigate = useNavigate();
  return(

    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button color='inherit' onClick={() => Navigate("/")}>  Home </Button>
        <Button color="inherit" onClick={()=> Navigate("/trailer")}>Trailer</Button>
          <Button color="inherit" onClick={()=> Navigate("/colorbox")}>colorbox</Button>
        </Toolbar>
      </AppBar>
    </Box>
           <Routes>
  <Route path="/" element={<Welcome/>}/>
  <Route path="/colorbox" element={<ColorBox/>} />
  <Route path="/movieAdd" element={<AddMovie/>} />
  <Route path="/trailer" element={<Trailer/>} />
</Routes>



  {/* <li>
  <NavLink to="/">HomePage</NavLink>
  </li>
  <li>
  <NavLink to="movieAdd">movieAdd</NavLink>
  </li>
  <li> 
        <NavLink to="/colorbox"> colorbox app </NavLink>
          </li> */}
          </div>
          )
}

function AddMovie(){

  const[name,setName] = useState("");
  const [poster,setPoster] = useState("");
  const[rating,setRating] = useState("");
  const[summary,setSummary] = useState("");
  const [user,setUser] = useState(movieAdd);
  
  return (
         
  <div className="App">
    
  <div className='new-mv-adding'>
  <TextField id="standard-basic" label="Movie Name" variant="standard" className='new-mv-name' placeholder='Movie name' onChange={(event) => setName(event.target.value)}/>
  {/* <input className='new-mv-name' placeholder='Movie name' onChange={(event) => setName(event.target.value)}/> */}
  <TextField id="standard-basic" label="Movie url" variant="standard" className='new-mv-poster' placeholder='Paste the url' onChange={(event) => setPoster(event.target.value)}/>
  
  <TextField id="standard-basic" label="Rating" variant="standard" className='new-mv-rating' placeholder='give movie rating' onChange={(event) => setRating(event.target.value)}/>
  
  <TextField id="standard-basic" label="Summary" variant="standard" className='new-mv-summary' placeholder='movie summary' onChange={(event) => setSummary(event.target.value)}/>
  
      <Button variant="contained"onClick={()=>
  {
    const newFilm ={
      name: name,
      poster: poster,
      rating: rating,
      summary: summary
    }
    setUser([...user,newFilm]) }}></Button>
    
  <div className="mv-list">
          {/* maping with movie list */}
   {movieAdd.map(item => <Movie movieList={item}/>)}
   </div>
     </div>
     </div>
    );
   }
  
  
// function Welcome(){
//   return(
//     <div>
//       <h1>Welcome,Click any one of the below</h1>
//     </div>
//   )
// }



// like dislike button
function Testing() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>

      <button className="btn"onClick={() => setLike(like + 1)}>{like}</button> 
      <button className="btn" onClick={() => setDisLike(dislike + 1)}>{dislike} </button>
    </div>
  );
}

// second component
function Movie({movieList}){
// let movieList ={
//   name: "Guru",
//   poster:
//   "https://upload.wikimedia.org/wikipedia/en/c/c9/Guruposter.JPG",
//   rating: 7.7 ,
//   summary:
//   "A villager, Gurukant Desai, arrives in Bombay 1958, and rises from its streets to become the GURU, the biggest tycoon in Indian history.",
// }


// summary read more..
let [display,setDisplay] =useState(false);

let sumry={
  display:display? "block" : "none",}
// summary read more..

// rating color change
let styles={color: movieList.rating> 7 ?"green":"red"};
// rating color change
const navigate = useNavigate();
  return(
    <div className="mv-container">
      <img className="mv-poster"src={movieList.poster} alt={movieList.poster}></img>
      <div className="mv-display">
      <h1 className="mv-name" >{movieList.name}</h1> 
     <p className="mv-rating" style={styles}>{movieList.rating}⭐ </p></div>
      <hr></hr>
      <Stack direction="row" spacing={2}>
      <Button onClick={()=>setDisplay(!display)} >Read more.. </Button > <Icon color="primary">add_circle</Icon> </Stack>
      <p className="mv-summary"style={sumry}>{movieList.summary}</p>

      <Testing/>
    </div>
  )
}



export default App;
