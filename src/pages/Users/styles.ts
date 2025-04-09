import styled from "@emotion/styled";
import { Link } from "react-router-dom";


export const UsersWrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 60px;
  gap: 16px;
  background-color: rgb(239, 232, 239);
`;

export const Title = styled.div`
font-size: 40px;
font-weight: bold;
color: #3b2c3b
`;

export const StyledLink = styled(Link)`
font-size: 30px;
font-weight: bold;
color: #161a92
`;