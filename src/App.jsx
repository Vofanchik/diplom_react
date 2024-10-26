import Films from './components/Films';
import './App.css'
import Calendar from './components/Calendar'; 
import axios from 'axios';
import { useState, useEffect } from 'react';

const baseurl = "http://127.0.0.1:8000/api/";


function App() {
  const [sess, setSess] = useState([])
  useEffect(() => {
      axios.get(baseurl+'sess')
        .then(response => {
          setSess(response.data);
        })        
    }, []);

  const [films, setFilm] = useState([])
  useEffect(() => {
      axios.get(baseurl+'movies')
        .then(response => {
          setFilm(response.data.data);
        })        
    }, []); 


  return (
    <div className="App">
      <header className="page-header">
        <h1 className="page-header__title">Идём<span>в</span>кино</h1>
      </header>
      <Calendar/>
      <Films films={ films } sess={ sess } />
    </div>
  )
}

export default App
