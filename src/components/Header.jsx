import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{widt:"100vw",border:"1px solid #000",padding:"10px"}}>
      <ul style={{listStyle:"none", display:"flex"}}>
        <Link to="about">
          <li style={{padding:"5px", textDecoration:"none", fontWeight:"600"}}>About</li>
        </Link>
        <Link to="contact">
          <li style={{padding:"5px", textDecoration:"none", fontWeight:"600"}}>Contact</li>
        </Link>
        <Link to="/123">
          <li style={{padding:"5px", textDecoration:"none", fontWeight:"600"}}>Random</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header