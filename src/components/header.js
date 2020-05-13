import React from 'react'
export default function Header(props) {
    const {title, date} = props
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <h3>{date}</h3>
        </header>
    )
}
