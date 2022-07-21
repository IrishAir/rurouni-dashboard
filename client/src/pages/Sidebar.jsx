import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({isAuthenticated}) {
   return (
    <div className="sidebar  flex cols">
      <div className="menu flex cols">
        <NavLink className="menu__profile" to='/'><div></div></NavLink>
        <NavLink className="menu__exercises" to='/exercises'><div></div></NavLink>
        <NavLink className="menu__calendar" to='/calendar'><div></div></NavLink>
        {isAuthenticated
        ? <NavLink className="menu__add_form" to='/add_form'><div></div></NavLink>
        : <NavLink className="menu__add_form" to='/login'><div></div></NavLink>}
        <NavLink className="menu__settings" to='/settings'><div></div></NavLink>
      </div>
    </div>
  )
}
