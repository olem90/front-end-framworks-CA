import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-inline: 100px;
  gap:30px 0px;
  box-sizing: border-box;
  margin-top: 20px;
`
export const ProductCardStyle = styled.div`
  box-sizing: border-box;  
  display: flex;
  flex-direction: column;
  padding:10px;
  transition: 0.3s ease-in-out;
  width: 80%;
  margin-inline: auto;
  
  &:hover img {
    transform: scale(1.035);
  }

  img {
    width: 96%;  
    max-height: 180px;
    max-width: 320px;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease-in-out;
    margin-inline: auto;
  }
  p {
    padding: 5px;
  }
  span {
    padding-inline: 8px;
  }
`