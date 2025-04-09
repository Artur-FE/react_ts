import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ClientsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
`;

export const Title = styled.div`
font-size: 40px;
padding: 30px;
font-weight: bold;
font-style: italic;
`;

export const ClientLink = styled(Link)`
padding-bottom: 20px;
`;

export const ClientImg = styled.img`
/* width: 350px; */
height: 200px;
border: 2px solid #eaebe7;
border-radius: 10px;
box-shadow: 5px 5px 5px grey;

&:hover {
    border-radius: 20px;
    border: 1px solid #c2c2c2;
    box-shadow: 5px 5px 5px #4b4b4b;
}
`;
