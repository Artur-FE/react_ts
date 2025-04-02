import styled from "@emotion/styled";
import CatBG from "../../assets/catBG.png"
import ErrorBG from "../../assets/error.jpg"

interface ErrorMessageStyle{
    errorMessage?: boolean}

export const Homework12Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
gap: 40px;
padding: 60px;
background-color: rgb(242, 242, 242);
`;

export const CatWrapper = styled.div<ErrorMessageStyle>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 700px;
max-width: 700px;
min-height: 400px;
max-height: 400px;
padding: 30px;
background-color: rgb(255, 255, 255);
/* background-image:  url(${CatBG}); */
background-image:${({errorMessage}) => errorMessage? `url(${ErrorBG})` :`url(${CatBG})`};
background-repeat: no-repeat; 
background-position: ${({errorMessage}) => errorMessage? 'top 10px left 300px' : 'bottom 0px right -70px'};
box-shadow: 10px 10px 10px rgb(184, 171, 220);
border-radius: 10px;
font-size: 24px;
color:${({errorMessage}) => errorMessage? 'rgb(214, 37, 37);' : 'rgb(88, 41, 218);'};
font-weight: bold; 
`;

export const Error = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 28px;
color: red;
font-weight: bold;
`;
