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



  @media(max-width: 1200px) {
    gap: 130px;
    font-size: 24px;

      .logo {
        font-size: 36px;
      }
  }

  @media(max-width: 950px) {
    gap: 110px;
    font-size: 22px;
  }

  @media(max-width: 830px) {
    gap: 80px;
    font-size: 20px;
    height: 100px;

      .logo {
        font-size: 32px;
      }
  }

  @media(max-width: 699px) {
    gap: 60px;
    font-size: 18px;
    height: 100px;

      .logo {
        font-size: 28px;
      }
  }

  @media(max-width: 589px) {
    gap: 0px;
    font-size: 18px;
    height: 100px;
    position: relative;
    justify-content: space-between;
    align-items: center;

      .logo {
        font-size: 28px;
        margin-top: -40px;
      }

      a:nth-child(2) {
        margin-left: -55%;
        margin-top: 30px;
      } 

      a:nth-child(3) {
        margin-top: 30px;
      }

      a:nth-child(4) {
        margin-top: 30px;
        margin-right: 20px;
      }
  }

  @media(max-width: 379px) {
    a:nth-child(2), a:nth-child(3), a:nth-child(4) {
      font-size: 16px;
      margin-right: 20px;
    }

  }






`;

export const Logo = styled.h1`
  font-family: 'Playfair Display', sans-serif;
  margin: 0;
  color: #ff9900;
  font-size: 42px;
  text-decoration: none;
`;