import styled from "@emotion/styled";

export const CheckBoxContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const CheckBoxWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const CheckBoxComponent = styled.input`
display: flex;
width: 25px;
height: 25px;
margin-right: 10px;
`
export const Label = styled.label`
font-size: 20px;
`;

export const ErrorMessage = styled.div`
display: flex;
flex-direction: column;
height: 20px;
font-size: 18px;
color: red;
`;
