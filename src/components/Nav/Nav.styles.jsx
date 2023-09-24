import styled from "styled-components";

export const NavWrapper = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  font-size: 20px;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  height: 80px;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ff9900;
    }
  }
`;

export const Logo = styled.h1`
  font-family: 'Playfair Display', sans-serif;
  font-size: 2rem;
  color: #fff;
  margin: 0;
  color: #ff9900;
  font-size: 36px;
`;