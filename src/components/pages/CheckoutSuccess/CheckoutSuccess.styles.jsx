import styled from "styled-components"

export const SuccessMessage = styled.div`
  border: 2px solid green;
  max-width: 500px;
  width: 50%;
  padding: 15px 25px;
  border-radius: 10px;
  margin: 150px auto;
  font-size: 18px;
  font-weight: 500;
  
    a{
        text-decoration: 1px underline;     
    }
`

export const SuccessMessageWrapper = styled.div`
  width: calc( 100vw - 16px );
  box-sizing: boder-box;
  justify-content: center;
  align-items: center;
`