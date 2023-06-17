import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
        <h1>TechYStar</h1>
        <main>
            <a href= {"/#home"}>Home</a>
            <Link to= {"/contact"}>Contact</Link>
            <a href= {"/#about"}>About</a>
            <a href= {"/#brands"}>Brands</a>
            <Link to= {"/services"}>Services</Link>
        </main>
    </nav>
  )
}
