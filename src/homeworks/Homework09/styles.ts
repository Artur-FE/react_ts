import styled from "@emotion/styled";

interface UserInfoStyledProps {
    width?: boolean;
    height?: boolean;
    bgColor?: boolean;
}

export const ContainerHW09 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex: 1;
    padding: 20px;
`;

export const UserInfoBox = styled.div<UserInfoStyledProps>`
display: flex;
flex:1;
align-items: center;
justify-content: center;
flex-direction: column;
box-shadow: 7px 7px 6px lightgray;
border: none;
border-radius: 10px;
width: ${({width}) => width? '400px' : '350px'};
height: ${({height}) => height? '350px' : '300px'};
background-color: ${({bgColor}) => bgColor? '#54D0DE' : '#A7BAE0'}
`;

export const UserInfoBoxTitle = styled.h2`
font-size: 27px;
`;

export const UserInfoBoxDescription = styled.div`
font-size: 22px;
padding: 10px;
text-align: center;
`;