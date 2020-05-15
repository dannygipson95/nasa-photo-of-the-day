import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/header'
import ImgContainer from './components/imgContainer'

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const [podObj, setPodObj] = useState({})
  useEffect(() => {

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
      setPodObj(response.data)
    })
    .catch(error => {
      debugger
    })
  }, [])
  
  return (
    <>
    <Header startDate = {startDate} setPodObj = {setPodObj} setStartDate={setStartDate}title = {podObj.title} date = {podObj.date} />
    <ImgContainer url = {podObj.url} explanation = {podObj.explanation} title = {podObj.title} />
    </>
  );
}

export default App;

/*

 */
