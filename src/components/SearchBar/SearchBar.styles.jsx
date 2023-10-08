import styled from "styled-components";

export const SearchBarStyle = styled.div`
  height: 30px;
  width: 36%;
  margin-inline: auto;
  padding-top: 40px;
 
    input {
        width:100%;
        height: 100%;
        border-radius: 15px;
        padding-left: 15px;
        border:3px solid rgb(204, 118, 20);
        font-size: 18px;
        background: #fff;
        color: #000;
    }


  @media(max-width: 700px) {
    width: 60%;
  }

  @media(max-width: 500px) {
    width: 70%;
    margin-inline: auto;
  }

  
`