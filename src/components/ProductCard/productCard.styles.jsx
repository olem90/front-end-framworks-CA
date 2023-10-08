import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-inline: 100px;
  gap:30px 10px;
  box-sizing: border-box;
  margin-top: 60px;
  

  @media(max-width: 1500px) {
    margin-inline: 30px;
  }
   
  @media(max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 865px) {
    grid-template-columns: repeat(2, 1fr);
    margin-inline: 0px;
  }

  @media(max-width: 669px) {
    grid-template-columns: repeat(1, 1fr);
    margin-inline: 30px;
  }
`
export const ProductCardStyle = styled.div`
  box-sizing: border-box;  
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: 0.3s ease-in-out;
  min-width: 85%;
  max-width: 280px;
  margin-inline: auto;
  
  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05); 
  }
  
  &:hover img {
    transform: scale(1.035);
  }

  img {
    min-width: 96%;
    max-width: 100px;
    height: 200px;
    max-height: 175px;
    
    object-fit: cover;
    transition: transform 0.6s ease-in-out;
    margin-inline: auto;

    @media(max-width: 669px) {
      max-height: 250px;
         
    }

    @media(max-width: 450px) {
      max-height: 180px;

    }
  }

  p {
    padding: 5px;
    width: 96%;
  }

  span {
    padding-inline: 6px;
    width: 96%;
  }

  h2 {
    white-space: nowrap;
    width: 96%;
  }

@media(max-width: 1500px) {
  margin-inline: 20px;

    h2 {
      font-size: 20px;
    }
} 

@media(max-width: 669px){
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  margin-inline: auto;
  padding-inline: 20px;
    
}

@media(max-width: 450px) {
  padding-inline: 0px;
}


`