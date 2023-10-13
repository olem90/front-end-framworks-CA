import styled from "styled-components";

export const CartProductTemplate = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  
  @media(max-width: 649px) {
    max-height: 200px;
    margin-bottom: 5px;
  }

  @media(max-width: 499px) {
    max-height: 120px;
  }
`

export const CartStyles = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  color: #000;
  
      h2 {
        font-size: 22px;
      }

      img {
        min-width: 100%;
        max-width: 100px;
        min-height: 100%;
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
      }

      @media(max-width: 1200px) {
        h1 {
          font-size: 38px;
        }

        h2 {
          
          font-size: 20px;
        }
      }

      @media(max-width: 999px) {
        h2 {
          white-space: wrap;
        }
      }

      @media(max-width: 749px) {
        width: 70%;

        img {
          min-width: 100%;
          min-height: 150px;
          max-height: 150px;
          object-fit: cover;
          border-radius: 5px;
        }
      }

      @media(max-width: 699px) {
        
        h2 {
          font-size: 18px;
        }

        img {
          min-width: 100%;
          min-height: 130px;
          max-height: 130px;
          object-fit: cover;
          border-radius: 5px;
        }
      }

      @media(max-width: 649px) {
        img {
          min-width: 100px;
        max-width: 100px;
        max-height: 110px;
        min-height: 110px;
        }

        p {
          margin: 3px;
        }
    }

      @media(max-width: 549px) {
        margin-left: auto;
        margin-right: 10px;

        h2 {
          font-size: 18px;
        }

        p {
          font-size: 15px;
        }
      }

      @media(max-width: 449px) {
        h2 {
          white-space: wrap;
        }

        img {
          min-height: 110px;
          max-height: 110px;
          min-width: 80px;
          max-width: 80px;
        }

        p {
         margin: 0;
        }
      }   
      
      @media(max-width: 399px) {
        img {
          min-width: 70px;
          max-width: 70px;
        }

        h2 {
          font-size: 16px;
        }

        p {
          font-size: 14px;
        }
      }
`

export const ProductQuantityButtons = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center; 
  gap: 15px;
  margin-left: auto;
  margin-right: 40px;
  margin-block: auto;

  @media(max-width: 999px) {
    margin-right: 20px;
  }

  @media(max-width: 775px) {
    margin-right: 5px;
    gap: 10px;
  }

  @media(max-width: 699px) {
    margin-left: 0px;
    margin-right: 10px;
  }

  @media(max-width: 649px) {
    margin-left: auto;

  }

  @media(max-width: 549px) {
    margin-left: auto;
    margin-right: 10px;
    gap: 5px;
  }

  @media(max-width: 449px) {
    margin-right: 0px;
    gap: 5px;
  }

  @media(max-width: 399px) {
    gap: 4px;

  }
  
      button {
        box-sizing: border-box;
        display: flex;
        color: #fff;
        font-weight: 700;
        background: #000;
        padding: 8px 8px;
        height: 30px;
        width: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 9px;
        border: none;
        font-size: 22px;
        font-family: 'Oswald',  sans-serif;

        @media(max-width: 749px) {
          font-size: 20px;
          padding: 8px 8px;
          height: 26px;
          width: 26px;
        }
        

        @media(max-width: 549px) {
          font-size: 20px;
          padding: 8px 8px;
          height: 22px;
          width: 22px;
        }

        @media(max-width: 349px) {
          font-size: 18px;
          padding: 8px 8px;
          height: 22px;
          width: 22px;

        }
      }

     
`