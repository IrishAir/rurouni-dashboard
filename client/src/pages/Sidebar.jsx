import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu flex cols">
        <NavLink className="menu__profile" to='/'><div></div></NavLink>
        <NavLink className="menu__exercises" to='/exercises'><div></div></NavLink>
        <NavLink className="menu__calendar" to='/calendar'><div></div></NavLink>
        <NavLink className="menu__calendar" to='/add_form'><div></div></NavLink>
        <NavLink className="menu__settings" to='/settings'><div></div></NavLink>
      </div>
    </div>
  )
}
