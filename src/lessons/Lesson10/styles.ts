import styled from "@emotion/styled";

import { css } from "@emotion/react";

const boxBasicStyles = css`
display: flex;
flex-direction: column;
`;

export const Lesson10Container = styled.div`
${boxBasicStyles};
/* display: flex;
flex-direction: column; */
gap: 40px;
flex: 1;
padding: 50px;
background-color: rgb(29, 96, 101);
`;

export const SectionWrapper = styled.section`
${boxBasicStyles};
gap: 20px;
padding: 30px;
background-color: #fff;
border: 4px solid rgb(13, 37, 39);
border-radius: 8px;
`;

export const SectionTitle = styled.div`
font-size: 40px;
color: rgb(13, 37, 39);
font-weight: bold;
`;

export const Description = styled.p`
font-size: 20px;
color: rgb(22, 63, 67)
`;

export const NotesContainer = styled.div`
${boxBasicStyles};
flex-direction: row;
justify-content: center;
gap: 30px;
`;

export const NoteBlock = styled.div`
${boxBasicStyles};
align-items: center;
gap: 10px;
min-width: 200px;
flex: 1;
padding: 20px;
background-color: rgb(233, 213, 87);
border-radius: 10px;
`;

export const NoteTitle = styled.h3`
color: rgb(123, 13, 13);
`;

export const NoteDescription = styled.p`
font-size: 18px;
color: rgb(22, 63, 67)
`;

//Расширение компонентов (наследование)

export const MainSection = styled(SectionWrapper)`
box-shadow: 3px 3px 10px rgb(192, 233, 237);
color: rgb(72, 18, 76);

//добавление псевдокласса

&:hover {
    background-color: rgb(192, 219, 217);;
}
`;