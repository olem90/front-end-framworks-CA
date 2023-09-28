import React from "react";
import { NavWrapper } from "./Nav.styles";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Logo } from "./Nav.styles";


function Nav() {
    return (
        <div>
            <NavWrapper>
              <Link to='/home'><Logo to='/' className="logo">MegaMerch</Logo></Link>
              <NavLink to= '/home'>Home</NavLink>
              <NavLink to='contact'>Contact</NavLink>
              <NavLink className="cart-icon" to='checkout' >
                <FontAwesomeIcon icon={faShoppingCart}/> 
                <span className="cart-text"> Cart</span>
              </NavLink>
            </NavWrapper>
        </div>
    )
}
export default Nav;

