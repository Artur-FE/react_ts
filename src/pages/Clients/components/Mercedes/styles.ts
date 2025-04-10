import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MercedesWrapper = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
`;

export const Content = styled.div`
display: flex;
width: 70%;
flex: 1;
gap: 10px;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 20px;
font-style: italic;

`;

export const Title = styled.div`
display: flex;
font-size: 40px;
font-weight: bold;
font-style: italic;
`;

export const ImageContent = styled.img`
width: 250px;
`;


export const ClientLink = styled(Link)`
`;

export const ButtonContent = styled.div`
width: 400px;
`;
