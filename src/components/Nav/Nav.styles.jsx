import styled from "styled-components";

export const NavWrapper = styled.nav`
  font-family: 'Playfair Display', sans-serif;
  background-color: #333;
  color: white;
  display: flex;
  font-size: 26px;
  gap: 200px;
  align-items: center;
  padding: 1rem;
  height: 120px;
  box-sizing: border-box;

  a {
    color: white;
    transition: all 0.3s ease-in-out;

    &.active {
      font-weight: bold;
      color: #ff9900;
      border-bottom: 2px solid #ff9900;
    }

    &:hover {
      color: #ff9900;
    }

    &.logo.active {
      text-decoration: none;
      font-weight: bold;
    }
    
    &.cart-icon.active {
      text-decoration: none;
      font-weight: bold; 
    }
  }
`;

export const Logo = styled.h1`
  font-family: 'Playfair Display', sans-serif;
  color: #fff;
  margin: 0;
  color: #ff9900;
  font-size: 42px;
  text-decoration: none;
`;