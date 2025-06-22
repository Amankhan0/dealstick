import React from "react";
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <div className="flex justify-between text-lg h-[8vh] items-center px-10">
            <div className="flex gap-20">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/work'>Work</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
    )
}

export default Header;