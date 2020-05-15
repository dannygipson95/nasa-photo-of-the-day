import React from 'react'
import Img from './img'
import Info from './info'
import styled from 'styled-components'

const ImgSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    margin: auto;
    margin-top: 0;
    padding-top: 3%;
    background: rgba(10, 10, 10, 0.7);
`

export default function ImgContainer(props) {
    const {url, explanation} = props;

   return ( 
    <ImgSection>
        <Img url = {url} explanation = {explanation} />
        <Info explanation = {explanation}/>
    </ImgSection>
   )
}