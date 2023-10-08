import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100vw;
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
  }

  label {
    font-weight: 500;
    font-size: 16px;

  }

  span {
    color: red;
    font-size: 14px;
    font-weight: 500;
  }

`

