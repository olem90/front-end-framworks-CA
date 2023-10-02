import React from "react";
import { NavWrapper } from "./Nav.styles";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "./Nav.styles";
import { CartIcon } from "../CartIcon/CartIcon";

function Nav() {
    return (
        <div>
            <NavWrapper>
              <Link to='/home'><Logo to='/' className="logo">MegaMerch</Logo></Link>
              <NavLink to= '/home'>Home</NavLink>
              <NavLink to='contact'>Contact</NavLink>
              <NavLink className="cart-icon" to='checkout' >
                <CartIcon />
              </NavLink>
            </NavWrapper>
        </div>
    )
}
export default Nav;

