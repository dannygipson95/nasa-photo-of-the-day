import React from 'react'
import styled from 'styled-components'

const PicOfDay = styled.img`
    margin: 5%;
    height: auto;
    width: 90%;
`
const ContainerDiv = styled.div`
    width: 90%;
    background: black;
    border-radius: 5px;
`
export default function Img(props) {
    const{url, title} = props

    return (
        <ContainerDiv>
            <PicOfDay src = {url} alt = {title}/>
        </ContainerDiv>
    )

}