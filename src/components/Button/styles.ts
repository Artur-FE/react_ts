import styled from "@emotion/styled";


interface MainButtonStyledProps {
  danger?: boolean
}

export const MainButton = styled.button<MainButtonStyledProps>`
  width: 300px;
  height: fit-content;
  padding: 20px;
  background: ${({danger})=> danger? 'red' : 'rgb(17, 48, 127)'};
  border: none;
  border-radius: 6px;
  font-size: 26px;
  color: white;
  cursor: pointer;
`;


// interface ButtonComponentStyledProps {
//   isDanger?: boolean
// }

// export const MainButton = styled.button<ButtonComponentStyledProps>`
//   width: 300px;
//   height: fit-content;
//   padding: 20px;
//   background: ${({isDanger})=> isDanger? 'red' : 'rgb(17, 48, 127)'};
//   border: none;
//   border-radius: 6px;
//   font-size: 26px;
//   color: white;
//   cursor: pointer;
// `;

  