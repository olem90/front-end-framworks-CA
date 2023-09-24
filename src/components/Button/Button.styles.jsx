import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  color: #000;
  background: whiite;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.4); 
  transition: 0.6s ease-in-out;

  &:hover {
    color: #ff9900;
    border: none;
    background: rgb(75, 74, 72);
    width: 100%;
  }
`