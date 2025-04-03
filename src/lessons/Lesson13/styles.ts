import styled from "@emotion/styled";


export const Lesson13Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: center;
gap: 15px;
padding: 60px;
background-color: rgb(239, 238, 225);
`;

export const ImgWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 500px;
min-height: 400px;
max-height: 700px;
padding: 30px;
background-color: white;
border-radius: 10px;
font-size: 24px;
color: rgb(241, 9, 9);
font-weight: bold;
overflow-y: auto;
`;

export const DogImg = styled.img`
width: 300px;
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
