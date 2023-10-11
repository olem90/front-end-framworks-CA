import styled from "styled-components";

export const ContactWrapper = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  box-sizing: border-box;
`
export const FormContainer = styled.div`
  border: 1px solid gray;
  width: 40%;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px 1px grey;
  background: #ffff;
  margin-bottom: 10%;
  
  @media(max-width: 1000px) {
    width: 50%;
  }

  @media(max-width: 600px) {
    width: 65%;
  }

  @media(max-width: 450px) {
    width: 75%;
  }
  
`
export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;

  input, textarea {
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 14px;
    background: #fff;
    color: #000;
  }

  label {
    font-weight: 500;
    font-size: 16px;
    color: #000;

  }

  span {
    color: red;
    font-size: 14px;
    font-weight: 500;
  }

  @media(max-width: 600px) {
    label {
      font-weight: 600;
      font-size: 15px;
      color: #000;

        

  
      }
  }


`

