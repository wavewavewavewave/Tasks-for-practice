import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink to={PATH.HARD_JUNIOR}>Junior+</NavLink>
            // add NavLinks

        </div>
    )
}

export default Header
