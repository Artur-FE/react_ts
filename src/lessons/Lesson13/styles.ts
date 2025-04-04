import styled from "@emotion/styled";


export const Lesson13Container = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
flex: 1;
align-items: center;
gap: 15px;
padding: 60px;
background-color: rgb(239, 238, 225);
`;

export const ImgContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 750px;
flex: 1;
`;

export const ImgWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 500px;
min-height: 400px;
max-height: 700px;
background-color: white;
font-size: 24px;
color: rgb(241, 9, 9);
font-weight: bold;
overflow-y: auto;
scrollbar-gutter: stable both-edges;
`;

export const DogImg = styled.img`
width: 300px;
padding: 10px;
&:first-child {
  padding-top: 60px;
}
`;

