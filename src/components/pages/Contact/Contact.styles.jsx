import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-block: 40px;
`
export const FormContainer = styled.div`
  border: 1px solid black;
  width: 600px;
  padding: 25px;
  
`
export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input, textarea {
    padding: 5px;
  }

  label {
    font-weight: 500;
  }
  span {
    color: red;
    font-size: 14px;
    font-weight: 500;
  }

`