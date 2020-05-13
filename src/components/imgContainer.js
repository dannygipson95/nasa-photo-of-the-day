import React from 'react'
import Img from './img'
import Info from './info'

export default function ImgContainer(props) {
    const {url, explanation} = props;

   return ( 
    <section className = 'imgContainer'>
        <Img url = {url} explanation = {explanation} />
        <Info explanation = {explanation}/>
    </section>
   )
}