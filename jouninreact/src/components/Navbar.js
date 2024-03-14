import { Link } from 'react-router-dom'
import './Navbar.css'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <div className="left-nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
				  </li>
			<li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>
      </div>
      <div className='right-nav'>
        <ul>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
