import React from 'react'
import styled from 'styled-components'

const StyledInfo = styled.p`
    margin-top: 5%;
    background: black;
    color: gainsboro;
    line-height: 1.5;
    padding: 2%;
    width: 90%;
    border-radius: 5px;
`

export default function Info(props) {
    const explanation = props.explanation;

    return (
        <StyledInfo>
            {explanation}
        </StyledInfo>
    )

}