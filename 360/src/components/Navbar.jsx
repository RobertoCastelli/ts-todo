import React from "react"
import { NavLink, Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <Link to="/">
        <img src="https://via.placeholder.com/50" alt="logo" />
      </Link>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink activeclassname="active" to="/areariservata">
            Area Riservata
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink activeclassname="active" to="/Shop">
            Shop
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
