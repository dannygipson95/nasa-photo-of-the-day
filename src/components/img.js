import React from 'react'

export default function Img(props) {
    const{url, title} = props

    return (
        <img src = {url} alt = {title}/>

    )

}