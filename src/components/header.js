import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const StyledHeader = styled.header`
    text-align: center;
    background: black;
    color: gainsboro;
    width: 90%;
    margin: 0 5%;
    padding-bottom: 1%;
`

export default function Header(props) {
    const {title, date, startDate, setStartDate, setPodObj} = props
    return (
        <StyledHeader>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <DatePicker
            dateFormat='yyy-MM-dd'
            selected={startDate}
            onChange={date => {
                setStartDate(date)
            }}
            // const newPicture = {() => {
            //     const selectedDate = document.querySelector('input.react-datepicker-ignore-onclickoutside').value;
            
            //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectedDate}`)
            //         .then(response => {
            //             setPodObj(response.data)
            //         })
            //         .catch(error => {
            //             debugger
            //         })
            //   }}
        />
        
      <br/>
        {/* <button onClick={newPicture(setPodObj)}>change Date</button> */}
        </StyledHeader>
        )
}

