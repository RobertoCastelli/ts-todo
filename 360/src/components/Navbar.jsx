import React from "react"
import { NavLink, Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <Link exact to="/">
        <img src="https://via.placeholder.com/50" alt="logo" />
      </Link>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink activeClassName="active" to="/about">
            about us
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink activeClassName="active" to="/contacts">
            contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
