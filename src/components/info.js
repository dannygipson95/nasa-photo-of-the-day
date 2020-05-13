import React from 'react'

export default function Info(props) {
    const explanation = props.explanation;

    return (
        <p className = 'infoText'>
            {explanation}
        </p>
    )

}