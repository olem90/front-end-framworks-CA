import styled from 'styled-components';

export const FooterStyle = styled.div`
    display: flex;
    box-sizing: border-box;
    background: #333;
    color: white;
    width: 100%;
    
    padding: 5px;
    height: 170px;
    margin-top: auto;

    @media(max-width:380px) {
        max-width: 370px;
        min-width: 100%;
    }
`