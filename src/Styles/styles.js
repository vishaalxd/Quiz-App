import styled from "styled-components";


export const StyleButton = styled.div`
background: ${props => props.theme.colors.black};
color: ${props => props.theme.colors.white};

`;


export const LoginWrapper = styled.div`
width: 60%;
display:flex;
flex-direction:column;
`;


export const StyledInput = styled.input`
width: 250px;
`;
