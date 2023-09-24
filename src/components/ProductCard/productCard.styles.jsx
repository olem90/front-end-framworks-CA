import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-inline: 100px;
  gap: 40px 50px;
  box-sizing: border-box;
`
export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding:10px;
  transition: 0.3s ease-in-out;
  
  
  &:hover img {
    transform: scale(1.045);
  }

  img {
    width: 100%;  
    max-height: 280px;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease-in-out;
}
`