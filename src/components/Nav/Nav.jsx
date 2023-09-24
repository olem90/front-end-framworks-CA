import React from "react";
import { NavWrapper } from "./Nav.styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Logo } from "./Nav.styles";


function Nav() {
    return (
        <div>
            <NavWrapper>
              <Link to='home'><Logo to='home' className="logo">MegaMerch</Logo></Link>
              <Link to= 'home'>Home</Link>
              <Link to='checkout'>Checkout</Link>
              <Link to='contact'>Contact</Link>
              <Link to='cart' ><FontAwesomeIcon icon={faShoppingCart} /> Cart</Link>
            </NavWrapper>
        </div>
        
    )
}
export default Nav;

