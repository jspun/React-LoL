import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div style = {HeaderStyle}>
            <h1>Is That Him?</h1>
            <Link style = {linkStyle} to = "/">Home</Link> | <Link style= {linkStyle} to ="/about">About</Link>
        </div>
    )
}

const HeaderStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',

}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
}