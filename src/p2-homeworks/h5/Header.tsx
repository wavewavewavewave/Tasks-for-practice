import React from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"
import {PATH} from "./Routes";


function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>Junior</NavLink>
            <NavLink to={PATH.HARD_JUNIOR} className={s.link} activeClassName={s.active}>Junior+</NavLink>
        </div>
    )
}

export default Header
