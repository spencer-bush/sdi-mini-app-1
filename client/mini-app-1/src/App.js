import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [movieData, setMovieData] = useState([])

useEffect(()=>{
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];
  setMovieData(movies)
}, [])
console.log(movieData)
  return (
    
    <div>{movieData.map((movie)=>{
         return(
          <li>{movie.title}</li>
         )
    })}</div>
  )
}

export default App;
