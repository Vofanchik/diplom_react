import Films from './components/Films';
import './App.css'
import Calendar from './components/Calendar';
import axios from 'axios';
import { useState, useEffect } from 'react';


const baseurl = "http://127.0.0.1:8000/api/";


function App() {
  const [films, setFilm] = useState([])
  useEffect(() => {
    axios.get(baseurl + 'movies')
      .then(response => {
        setFilm(response.data.data);
      })
  }, []);

  const [selectedDate, setDate] = useState([new Date().getDate()])

  const onDateChanged = (id) => {
    setDate(id)
  }

  const [sess, setSess] = useState([])
  useEffect(() => {
    axios.get(baseurl + 'sess')
      .then(response => {
        setSess(response.data);

      })
  }, []);



  return (
    <div className="App">
      <header className="page-header">
        <h1 className="page-header__title">Идём<span>в</span>кино</h1>
      </header>
      <Calendar week_now={selectedDate} onDateChanged={onDateChanged} />
      <Films films={films.filter((f) =>
      f.id in sess.filter((s) =>
          new Date(Date.parse(s.start_at)).getDate() == selectedDate)
    )}
        sess={sess.filter((s) =>
          new Date(Date.parse(s.start_at)).getDate() == selectedDate)} week_now={selectedDate} />
    </div>
  )
}

export default App
